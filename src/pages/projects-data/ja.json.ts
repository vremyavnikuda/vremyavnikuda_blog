import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { buildProjectInspectorProjects, sortProjectsForRoadmap } from '../../lib/projectsData';

export const GET: APIRoute = async () => {
  const entries = await getCollection('projects');
  const projects = buildProjectInspectorProjects(sortProjectsForRoadmap(entries));

  return new Response(JSON.stringify({ projects }), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  });
};
