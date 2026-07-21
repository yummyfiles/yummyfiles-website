import type { ProjectMeta } from '@/data/types'

const projectModules = import.meta.glob<{
  default: ProjectMeta
}>('/src/content/projects/*/meta.json', { eager: true })

export const projects: ProjectMeta[] = Object.values(projectModules).map(
  (mod) => mod.default,
)

export function getProjectBySlug(slug: string): ProjectMeta | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getFeaturedProjects(): ProjectMeta[] {
  return projects.filter((p) => p.featured)
}

export function getRecentProjects(count = 6): ProjectMeta[] {
  return [...projects]
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
    .slice(0, count)
}

export function getRelatedProjects(slug: string): ProjectMeta[] {
  const project = getProjectBySlug(slug)
  if (!project?.relatedProjects) return []
  return project.relatedProjects
    .map((s) => getProjectBySlug(s))
    .filter((p): p is ProjectMeta => p !== undefined)
}

export function getAllCategories(): string[] {
  return [...new Set(projects.map((p) => p.category))].sort()
}

export function getAllPlatforms(): string[] {
  return [...new Set(projects.flatMap((p) => p.platforms))].sort()
}

export function getAllTechStack(): string[] {
  return [...new Set(projects.flatMap((p) => p.techStack))].sort()
}

export function getAllTags(): string[] {
  return [...new Set(projects.flatMap((p) => p.tags))].sort()
}
