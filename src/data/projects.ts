export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  tags: string[]
  image?: string
  links: { label: string; url: string }[]
  status: 'completed' | 'in-progress' | 'planned'
}

export const projects: Project[] = [
  {
    id: 'musix',
    title: 'MusicX',
    description: 'Offline music player focused on speed and simplicity.',
    longDescription:
      'MusicX is an offline music player I built because I was tired of ads and bloated apps. It plays your local files, makes playlists, and just works. No accounts, no internet needed. Working on a v2 with some new ideas.',
    tags: ['React', 'TypeScript', 'Node.js', 'Audio'],
    links: [
      { label: 'GitHub', url: 'https://github.com/yummyfiles/MusicX' },
    ],
    status: 'completed',
  },
  {
    id: 'localcodeai',
    title: 'LocalCodeAI',
    description: 'AI coding assistant that runs on your own machine.',
    longDescription:
      'LocalCodeAI is an experimental project where I\'m building a coding assistant that runs locally using Ollama. No data leaves your computer. It can do code completion, answer questions about your code, and suggest refactors. Still a work in progress.',
    tags: ['Rust', 'Ollama', 'TypeScript', 'Local LLM'],
    links: [],
    status: 'in-progress',
  },
  {
    id: 'imagex',
    title: 'ImageX',
    description: 'Free image editor with the tools you actually need.',
    longDescription:
      'ImageX started because I wanted a simple image editor that didn\'t cost money or have a million features I\'d never use. It does the basics really well — resize, crop, filters, batch edits. Building it with Electron so it runs as a desktop app.',
    tags: ['Python', 'Electron', 'TypeScript'],
    links: [
      { label: 'GitHub', url: 'https://github.com/yummyfiles/imagex' },
    ],
    status: 'in-progress',
  },
  {
    id: 'void',
    title: 'VOID - Local AI Chat',
    description: 'Minimal desktop chat app for local AI models.',
    longDescription:
      'VOID is a simple chat interface for local AI models. No sign-up, no cloud, and no telemetry. You open it and start chatting right away.\n\nIt supports Ollama models, so you can connect it to any local model running through Ollama.',
    tags: ['Electron', 'React', 'Ollama', 'TypeScript'],
    links: [],
    status: 'in-progress',
  },
]
