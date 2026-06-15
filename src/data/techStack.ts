export interface TechItem {
  name: string
  category: string
  icon: string
}

export const techStack: TechItem[] = [
  { name: 'TypeScript', category: 'Languages', icon: 'typescript' },
  { name: 'JavaScript', category: 'Languages', icon: 'javascript' },
  { name: 'Python', category: 'Languages', icon: 'python' },
  { name: 'React', category: 'Frontend', icon: 'react' },
  { name: 'Tailwind CSS', category: 'Frontend', icon: 'tailwind' },
  { name: 'Vite', category: 'Frontend', icon: 'vite' },
  { name: 'Node.js', category: 'Backend', icon: 'nodejs' },
  { name: 'Next.js', category: 'Backend', icon: 'nextjs' },
  { name: 'Git', category: 'Tools', icon: 'git' },
  { name: 'Docker', category: 'Tools', icon: 'docker' },
  { name: 'VS Code', category: 'Tools', icon: 'vscode' },
  { name: 'Android Studio', category: 'Tools', icon: 'android' },
  { name: 'Electron', category: 'Frontend', icon: 'electron' },
]

export const categories = ['Languages', 'Frontend', 'Backend', 'Tools'] as const
