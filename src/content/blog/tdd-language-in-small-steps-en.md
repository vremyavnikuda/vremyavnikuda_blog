---
title: "TDD: Developing a Language in Small Steps"
description: "How test-driven development works in practice when building an interpreter lexer and compiler pipeline step by step."
pubDate: 2026-10-29
draft: false
lang: en
---

A programming language needs rules for two things: how a program is written and what it means. The expression `2 + 3 * 4` could follow the usual multiplication precedence, or it could evaluate strictly left to right. Until someone picks one, there is nothing to check the result against. Once the rule is chosen, it can go into a test, and the test can guide the implementation.

Test-driven development (TDD) works this way. For the next behavior, you write an automated check, confirm that it fails for the reason you expect, and then write code until it passes. With the tests green, you can restructure the code without changing what it does.

Below, we follow that process on a small piece of an interpreter. The examples use pseudocode, so they show the algorithm and the checks without tying either to a particular language or test framework.

## Starting with the lexer

Take this line of source code:

```text
12 + 3
```

Before an interpreter can do anything with it, it has to split the string into separate elements: the number `12`, the `+` sign, and the number `3`. These elements are called tokens, and the part of the program that extracts them is the lexer (or scanner). We will write its output like this:

```text
[NUMBER(12), PLUS, NUMBER(3)]
```

The lexer does not add anything. The next stage, the parser, works out the structure of the expression, and evaluation happens after parsing. So checking the tokens and checking that the result is `15` are separate jobs. Robert Nystrom covers token extraction in the [Scanning chapter of Crafting Interpreters](https://craftinginterpreters.com/scanning.html).

We will only handle numbers, plus signs, and spaces. That is enough to go through several full TDD cycles, including invalid input and a refactoring. A real language would also need variable names, strings, and other constructs, each with its own rules.

## What changes when the test comes first

Before the lexer exists, we can already decide how to call it:

```text
tokenize("12 + 3")
```

The function takes source text and either returns a list of tokens or reports an error. Testing it needs no running program, no machine code generation, and no filesystem. Writing the test first fixes the component's boundary before any of its internals exist.

Unit tests check a small part of a program, and you can write them after the implementation. TDD sets the order of the work: pick the next behavior, write a test for it, make it pass, and then see whether the structure needs improving.

Writing the test before the code is often called test-first. TDD adds short steps and refactoring on top of that.

Modern TDD practice goes back to Kent Beck, Extreme Programming, and Beck's 2002 book *Test Driven Development: By Example* ([publisher's page](https://www.informit.com/store/test-driven-development-by-example-9780321146533)).

## The TDD cycle

1. **Red.** Write a test for the next behavior and confirm that it fails for the expected reason.
2. **Green.** Add an implementation that makes the new test and all earlier tests pass.
3. **Refactor.** Look for anything in the code or the tests that can be simplified, simplify it without changing behavior, and rerun the tests.

A red result on its own tells you little. A check can fail because a function is missing, because it returned the wrong value, or because the test setup is broken. Read the cause before you touch the implementation.

![TDD Cycle](/img/tdd/en/tdd-cycle-en.svg)

*Figure 1. The TDD cycle and stage transitions.*

If a new test passes right away, don't break the code to make it fail. Check whether it tests the behavior you meant, and whether that behavior already exists. A test like that still guards against regressions, but it doesn't call for new code.

Refactor only once everything is green, so that changes to behavior and changes to structure never land in the same step. If there is nothing to simplify, move on to the next example.

## The first test: integers

A few conventions for the example. A number is one or more digits from `0` to `9`. Minus signs and fractional parts are not supported yet. Positions count from zero. Arithmetic is integer arithmetic with no size limit; an implementation that uses a fixed-width type has to decide separately what happens on overflow.

`ASSERT` compares the actual result with the expected one. Two token lists are equal when they have the same order, the same token types, and the same values.

The first check:

```text
TEST "multiple digits form a single number"
    ASSERT tokenize("12") == [NUMBER(12)]
```

Before `tokenize` exists, running the test fails because the function is undefined. That is the expected first failure. If your environment won't run a test without a declared signature, declare it, then confirm that the behavior is still missing.

For the first green state, returning a constant is enough:

```text
FUNCTION tokenize(source)
    RETURN [NUMBER(12)]
```

This stand-in passes exactly one check. The test for `"12"` cannot tell real parsing from a hardcoded constant.

Add a second test and run it against this version first:

```text
TEST "number value depends on input text"
    ASSERT tokenize("3") == [NUMBER(3)]
```

It gets `NUMBER(12)` instead of `NUMBER(3)`. Now we read digits:

```text
FUNCTION tokenize(source)
    IF source is empty
        RETURN []

    value ← 0
    FOR each index i in source
        IF source[i] is not a digit from "0" to "9"
            ERROR UnexpectedCharacter(position = i)
        value ← value * 10 + digit_value(source[i])

    RETURN [NUMBER(value)]
```

`digit_value` turns a digit character that has already been validated into an integer from 0 to 9. Both tests pass. An empty input returns `[]`, so a check for `tokenize("") == []` passes immediately: the behavior is already there.

You don't have to start every function with a constant. Here it shows which ambiguity the second test removes. If the algorithm is obvious, write it directly and check it with suitable examples.

## Next test: the plus operator

So far the whole input had to be one number. Now we add an operator:

```text
TEST "plus separates two numbers"
    ASSERT tokenize("12+3") ==
        [NUMBER(12), PLUS, NUMBER(3)]
```

The current code reaches `+` and throws `UnexpectedCharacter(position = 2)`. That is the failure we expect from the new test.

Instead of reading a single number, the lexer now collects tokens as it advances through the input:

```text
FUNCTION tokenize(source)
    tokens ← []
    i ← 0

    WHILE i < length(source)
        IF source[i] is a digit from "0" to "9"
            value ← 0
            WHILE i < length(source) AND source[i] is a digit
                value ← value * 10 + digit_value(source[i])
                i ← i + 1
            tokens.append(NUMBER(value))
        ELSE IF source[i] == "+"
            tokens.append(PLUS)
            i ← i + 1
        ELSE
            ERROR UnexpectedCharacter(position = i)

    RETURN tokens
```

The inner loop reads consecutive digits and stops at `+`, which the outer loop handles on its next pass. `AND` is evaluated left to right, so once the string ends, `source[i]` is never read.

Run the whole suite. The single-number and empty-input checks should still pass alongside the new one. Whether operators sit in valid places is the parser's concern, and computing the sum belongs to evaluation.

## Whitespace and invalid input

The next rule: a plain space between tokens produces no token. Tabs and newlines are left for later.

```text
TEST "spaces between tokens are skipped"
    ASSERT tokenize("12 + 3") ==
        [NUMBER(12), PLUS, NUMBER(3)]
```

The test fails on the space at position 2. Before the error branch, add:

```text
ELSE IF source[i] == " "
    i ← i + 1
```

Now every test passes. Each space is skipped where it is found, so the other characters keep their original positions. Stripping all spaces before lexing would cause a different bug, turning `"1 2"` into `"12"`.

A check that the two numbers stay separate:

```text
TEST "space does not merge numbers"
    ASSERT tokenize("1 2") == [NUMBER(1), NUMBER(2)]
```

It passes immediately. The lexer produces both numbers; whether two numbers in a row are a valid expression is for the parser to decide.

The error case needs a test too:

```text
TEST "unknown character rejected with its position"
    EXPECT ERROR UnexpectedCharacter(position = 2)
        tokenize("12@3")
```

This one is already green, because the error branch was there before. The test checks the error kind and position, not the exact wording of the message, so the user-facing text can improve later without breaking it.

![How Examples Shape the Lexer](/img/tdd/en/tdd-example-en.svg)

*Figure 2. How new examples evolve the lexer.*

## Refactoring: extracting number parsing

The outer loop now does two jobs: it picks the token type, and it also contains the digit-accumulation algorithm. Moving number reading into its own function lets the main loop read as a choice between a number, a plus, a space, or an error.

The helper takes the position of the first digit and returns `(value, new_index)`:

```text
FUNCTION read_number(source, i)
    value ← 0
    WHILE i < length(source) AND source[i] is a digit
        value ← value * 10 + digit_value(source[i])
        i ← i + 1
    RETURN (value, i)
```

The lexer after refactoring:

```text
FUNCTION tokenize(source)
    tokens ← []
    i ← 0

    WHILE i < length(source)
        IF source[i] is a digit from "0" to "9"
            (value, i) ← read_number(source, i)
            tokens.append(NUMBER(value))
        ELSE IF source[i] == "+"
            tokens.append(PLUS)
            i ← i + 1
        ELSE IF source[i] == " "
            i ← i + 1
        ELSE
            ERROR UnexpectedCharacter(position = i)

    RETURN tokens
```

Run the same tests with the same expectations. The returned `i` must not be dropped, or the outer loop will read the same number again.

![What Tests Protect During Refactoring](/img/tdd/en/tdd-contract-en.svg)

*Figure 3. Public behavior vs. internal implementation.*

This step added no language rule: the code is organized differently, and the tests are unchanged. If pulling out a helper doesn't make a particular implementation clearer, leave the loop inline; a refactoring doesn't have to end with a new function.

## What tests come next

A lexer that knows numbers and plus signs is a long way from a language. The same method still applies to every later compiler stage: state a minimal example, watch it fail for a clear reason, and extend the implementation.

### Extending the lexer: identifiers and keywords

After numbers and operators, a language needs variable names and keywords (`IF`, `RETURN`, `TYPE`). The next test asks the lexer to read a run of letters as an identifier and to recognize reserved words:

```text
TEST "keyword is distinguished from identifier"
    ASSERT tokenize("return total") ==
        [RETURN, IDENTIFIER("total")]
```

The current lexer rejects letters as unexpected characters. The new code reads letter sequences and looks them up in a keyword table. The contract stays the same: a string goes in, a list of tokens comes out.

### The parser

The lexer doesn't check grammar. It turns `"12++3"` into tokens, two `PLUS` in a row, because it knows every character. The parser decides whether that sequence is allowed by the grammar.

If the grammar allows only binary addition of two numbers, the parser tests can start like this:

```text
TEST "addition of two numbers constructs AST node"
    ASSERT parse([NUMBER(12), PLUS, NUMBER(3)]) ==
        Add(Number(12), Number(3))

TEST "incomplete expression rejected with syntax error"
    EXPECT ERROR SyntaxError(expected = "expression", position = 2)
        parse([NUMBER(12), PLUS])
```

`Add(Number(12), Number(3))` denotes a syntax tree (AST): an operation and its operands. The input is a token list; the output is an AST node, or a syntax error with the position of the incomplete fragment. If multiplication is added later, a precedence rule and an example such as `2 + 3 * 4` come with it. With the usual precedence, the tree puts the multiplication below the addition, and evaluation gives `14`. That example exercises several parts of the interpreter together; the lexer's own test should still check only tokens.

### Semantic analysis and type checking

A syntactically valid tree can still be meaningless, for example when it adds a number to a string or calls a function that was never declared. Type and scope checks run on the finished AST:

```text
TEST "operand type mismatch causes semantic error"
    tree ← Add(Number(12), Text("abc"))
    EXPECT ERROR TypeError(expected = "Number", found = "Text", position = 1)
        check_types(tree)

TEST "call to undeclared function is rejected"
    tree ← Call(name = "helper")
    EXPECT ERROR UndeclaredSymbol(name = "helper", position = 0)
        check_scopes(tree)
```

The test passes in a tree and checks either the resulting type or an error with its source position. It doesn't care whether the symbol table is a flat list, a map, or a chain of scopes.

### Static analysis and linting

Lint rules warn about suspicious or redundant code without stopping compilation: unused types, struct fields that are never read, unreachable code.

```text
TEST "unused type declaration produces warning"
    program ← DeclareType(name = "Point", fields = ["x", "y"])
    ASSERT collect_warnings(program) ==
        [Warning(code = "W1003", position = 0)]
```

The test passes in the program (or a set of facts collected about it) and checks the list of warnings.

At every stage, the tests see only the input data and the expected output or diagnostic code. That leaves you free to change internal algorithms, table layouts, and intermediate formats during refactoring without rewriting the tests.

## How tests support implementation changes

The lexer tests know its argument, its result, and how it fails. They don't know how many loops it has or which function accumulates the number. That is why extracting `read_number` required no changes to the tests.

If a test demanded exactly one call to some internal method, moving or merging that method could break the test while the lexer still produced the right tokens. Before adding an expectation like that, decide whether the call itself is part of the requirement. Sometimes it is: when talking to an external system, for instance, a request must not be sent twice after a failure. For cases like that, controlled substitutes for dependencies help, and a mock is one kind of substitute that lets a test set expectations about the interaction. Our lexer needs nothing more than a string and the expected result.

Time, randomness, the network, and the filesystem can make tests flaky. If a language rule depends on one of them, pass it in explicitly so that a test can supply known values, and test the real dependency separately.

## What green tests do not guarantee

A test checks the rule the developer wrote down. If the developer picks the wrong precedence and writes the same rule into both the test and the code, the test passes. Whether the rule matches what the language's author intended still has to be discussed.

One example doesn't cover every input. The `"12@3"` test shows that this character is rejected at this position. It doesn't show that every invalid program is handled correctly. Empty input, an invalid character at the start or end, and long numbers all need their own checks as the suite grows.

Code coverage shows which code ran during the tests. It says nothing about whether the results were checked: you can call the lexer and run through all its branches without comparing the tokens it returned.

Mutation testing makes small deliberate changes to the program and checks whether the tests notice. If number reading multiplies by `1` instead of `10`, `"12"` becomes `3`. A test with a multi-digit number catches that change; a single-digit test misses it. A surviving mutation needs review, because it may be equivalent to the original for every valid input. Chasing the score without that review is pointless. Mutation analysis also costs more than a normal test run, since it tests many modified versions of the program. The [PIT mutation testing documentation](https://pitest.org/quickstart/basic_concepts/) explains the difference between killed, surviving, and equivalent mutations.

## Where the cycle adds friction

TDD needs a next result you can describe precisely enough to test. Parsers, calculations, access rules, and data transformations often meet that bar. So does a reproducible bug: the input on which the program misbehaves is the starting point.

When you are exploring an unfamiliar library or still working out what interface would be convenient, the expected behavior may not exist yet. A throwaway prototype helps here. Afterwards, delete it, or pin down the behavior you settled on with tests before going further.

The look of a UI, the feel of an animation, and hardware behavior need other ways of checking. The deterministic rules inside those systems can still be built test-first.

Even on a suitable task, the cycle slows down when every test waits on the network or boots the whole application. Test the calculation or rule on its own and leave the infrastructure to integration tests in CI. A flaky test has to be fixed first, because its result can't be tied to your last change.

If you rework neighboring code while trying to pass one test and several checks fail, the cause is hard to find. Small steps keep the list of suspects short.

## Results from published studies

The percentages in TDD studies belong to specific tasks, participants, and comparison methods. Some studies measure quality by defects found, others by the share of external tests passed. Initial implementation time is also not the same as the cost of a product over its lifetime.

Nagappan et al. compared projects from three Microsoft teams and one IBM team with similar projects that didn't use TDD. They reported a drop in defect density of roughly 40–90%. The 15–35% increase in initial development time was estimated by the teams' managers, not measured in a controlled experiment, and the results come from four specific projects; they don't carry over to an arbitrary team. [Nagappan et al., Empirical Software Engineering](https://doi.org/10.1007/s10664-008-9062-z) ([Microsoft Research report](https://www.microsoft.com/en-us/research/wp-content/uploads/2009/10/Realizing-Quality-Improvement-Through-Test-Driven-Development-Results-and-Experiences-of-Four-Industrial-Teams-nagappan_tdd.pdf)).

George and Williams ran an experiment with 24 professional developers working in pairs. The TDD group's solutions passed 18% more external test cases and took 16% longer. The task was small, and many developers in the control group didn't write the automated tests they were asked to write after implementation, so this is not a clean comparison of two orderings with equally complete tests. [George and Williams, Information and Software Technology (Elsevier)](https://doi.org/10.1016/S0950-5849(03)00204-0).

Rafique and Mišić's meta-analysis of 27 studies found a small positive effect on external quality and little to no discernible effect on productivity. Industrial studies showed both a larger quality improvement and a larger drop in initial productivity than academic ones. [Rafique and Mišić, IEEE Transactions on Software Engineering](https://doi.org/10.1109/TSE.2012.28).

Fucci et al. looked at the process itself: 82 observations of 39 professional developers. External quality and productivity were associated mainly with small, steady steps; writing the test before or after the code made little difference. That is an observed association, not proof of what causes the improvement. [Fucci et al., IEEE Transactions on Software Engineering](https://doi.org/10.1109/TSE.2016.2616877).

Ghafari et al. examined why studies reach conflicting results. [Ghafari et al., arXiv](https://arxiv.org/abs/2007.09863).

TDD is worth considering where defects are expensive. None of these studies lets you promise a team a specific drop in bugs or a speedup; you have to measure the effect on your own work, counting initial development and later fixes separately.

## Starting in an existing project

Start with a small, deterministic piece: a calculation, a validation check, or a bug you can reproduce. Make sure its tests run locally and that you can trust their results.

For a bug fix, first add a test that reproduces it. Run it against the old code and read why it fails. Then fix the bug, rerun the test along with its neighbors, and only after that clean up the code you touched. The test stays as a guard against the same bug returning.

For new behavior, write a short list of cases and pick the first. When pairing, discuss which ambiguity the next test removes and what change it forces in the implementation.

If the team runs a pilot, record a baseline before it starts, using metrics you can measure the same way before and after:

| Metric | Purpose |
| --- | --- |
| Post-release defects and recurring regressions | See whether output quality changes |
| Local test run time and flaky test rate | Check that feedback after small changes stays fast |
| Task completion time vs. regression triage time | Separate implementation cost from debugging cost |
| Code coverage and mutation test scores | Find code that runs but is weakly checked |

After four to eight weeks, hold a first review. That interval is an organizational convention, and by itself it doesn't guarantee enough data for a conclusion. Account for differences between tasks, and ask developers where the tests helped and where setting them up or running them got in the way. Use the numbers to adjust the process, not to rate developers.

Run fast tests on every small change and put the heavier integration and end-to-end tests in a separate CI stage, while still requiring the checks a release depends on. Mutation analysis is best started on a critical module.

In code review, trace the path from requirement to code: what result the implementation promises, how the test confirms it, and what violation the test can catch. If that link is hard to explain, clarify the requirement and the test's expected result.

## Further reading

* [Kent Beck, *Test Driven Development: By Example*](https://www.informit.com/store/test-driven-development-by-example-9780321146533)
* [Steve Freeman & Nat Pryce, *Growing Object-Oriented Software, Guided by Tests*](https://www.informit.com/store/growing-object-oriented-software-guided-by-tests-9780321770356)

For a first attempt, pick one case from your current work whose expected result you can state before writing the code. Write it as a test and run it.
