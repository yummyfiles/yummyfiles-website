export type ProjectStatus = 'completed' | 'in-progress' | 'planned' | 'archived'

export type ProjectCategory =
  | 'Apps'
  | 'Software'
  | 'Operating Systems'
  | 'Websites'
  | 'Developer Tools'
  | 'Libraries'
  | 'Games'
  | 'Experiments'
  | 'Archived'
  | 'Open Source'

export interface ProjectLink {
  label: string
  url: string
}

export interface ProjectMeta {
  slug: string
  title: string
  tagline: string
  description: string
  longDescription: string
  logo?: string
  banner?: string
  version?: string
  status: ProjectStatus
  license?: string
  category: ProjectCategory
  platforms: string[]
  techStack: string[]
  tags: string[]
  features?: string[]
  links: ProjectLink[]
  github?: {
    url: string
    stars?: number
  }
  screenshots?: {
    url: string
    alt: string
    type: 'desktop' | 'mobile' | 'gif'
  }[]
  createdAt: string
  updatedAt: string
  featured?: boolean
  relatedProjects?: string[]
  wiki?: {
    sidebar?: string
    content: string
  }
  docs?: string
}
