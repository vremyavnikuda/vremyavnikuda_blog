export const PROJECT_STATUS_VALUES = ['active', 'maintenance', 'completed', 'archived'] as const;
export type ProjectStatusValue = (typeof PROJECT_STATUS_VALUES)[number];

const parseNumericVersion = (version: string): number[] | null => {
  const cleaned = version.trim().replace(/^v/i, '');
  if (!/^\d+(?:\.\d+)*$/.test(cleaned)) return null;
  return cleaned.split('.').map((part) => Number(part));
};

export const compareVersionsDesc = (left: string, right: string): number => {
  const leftParts = parseNumericVersion(left);
  const rightParts = parseNumericVersion(right);

  if (leftParts && rightParts) {
    const maxLen = Math.max(leftParts.length, rightParts.length);
    for (let index = 0; index < maxLen; index += 1) {
      const leftValue = leftParts[index] ?? 0;
      const rightValue = rightParts[index] ?? 0;
      if (leftValue !== rightValue) return rightValue - leftValue;
    }
    return 0;
  }

  if (leftParts && !rightParts) return -1;
  if (!leftParts && rightParts) return 1;

  return right.localeCompare(left, 'en', { sensitivity: 'base', numeric: true });
};

export const sortRoadmapByVersionDesc = <T extends { version: string }>(roadmap: T[]): T[] => {
  return [...roadmap].sort((a, b) => compareVersionsDesc(a.version, b.version));
};
