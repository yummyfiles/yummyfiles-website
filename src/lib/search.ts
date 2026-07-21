import type { ProjectMeta } from '@/data/types'

export function searchProjects(
  projects: ProjectMeta[],
  query: string,
): ProjectMeta[] {
  if (!query.trim()) return projects

  const terms = query.toLowerCase().split(/\s+/).filter(Boolean)

  return projects.filter((project) => {
    const searchable = [
      project.title,
      project.tagline,
      project.description,
      project.category,
      project.version ?? '',
      project.license ?? '',
      ...project.platforms,
      ...project.techStack,
      ...project.tags,
      ...(project.features ?? []),
    ]
      .join(' ')
      .toLowerCase()

    return terms.every((term) => searchable.includes(term))
  })
}

export function sortProjects(
  projects: ProjectMeta[],
  sortBy: 'newest' | 'updated' | 'alphabetical',
): ProjectMeta[] {
  const sorted = [...projects]
  switch (sortBy) {
    case 'newest':
      return sorted.sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      )
    case 'updated':
      return sorted.sort(
        (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
      )
    case 'alphabetical':
      return sorted.sort((a, b) => a.title.localeCompare(b.title))
    default:
      return sorted
  }
}

export function filterProjects(
  projects: ProjectMeta[],
  filters: {
    category?: string
    platform?: string
    status?: string
    tech?: string
  },
): ProjectMeta[] {
  return projects.filter((project) => {
    if (filters.category && project.category !== filters.category) return false
    if (filters.platform && !project.platforms.includes(filters.platform))
      return false
    if (filters.status && project.status !== filters.status) return false
    if (filters.tech && !project.techStack.includes(filters.tech)) return false
    return true
  })
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export function timeAgo(dateStr: string): string {
  const now = new Date()
  const date = new Date(dateStr)
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000)

  if (seconds < 60) return 'just now'
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`
  if (seconds < 2592000) return `${Math.floor(seconds / 86400)}d ago`
  if (seconds < 31536000) return `${Math.floor(seconds / 2592000)}mo ago`
  return `${Math.floor(seconds / 31536000)}y ago`
}

export function statusLabel(status: string): string {
  switch (status) {
    case 'completed':
      return 'Released'
    case 'in-progress':
      return 'In Progress'
    case 'planned':
      return 'Planned'
    case 'archived':
      return 'Archived'
    default:
      return status
  }
}

export function statusColor(status: string): string {
  switch (status) {
    case 'completed':
      return 'bg-white/10 text-white/70'
    case 'in-progress':
      return 'bg-white/10 text-white/70'
    case 'planned':
      return 'bg-white/5 text-white/40'
    case 'archived':
      return 'bg-white/5 text-white/30'
    default:
      return 'bg-white/5 text-white/40'
  }
}
