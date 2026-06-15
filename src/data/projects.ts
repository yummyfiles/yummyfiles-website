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
    description: 'A modern music streaming experience with intelligent playlists and seamless discovery.',
    longDescription:
      'MusicX reimagines how you interact with your music library. It combines intelligent playlist generation with a clean, distraction-free interface. Built with performance in mind, it handles libraries of any size without breaking a sweat. Features include cross-platform sync, offline playback, and social listening rooms.',
    tags: ['React', 'TypeScript', 'Node.js', 'Audio'],
    links: [
      { label: 'GitHub', url: 'https://github.com/yummyfiles/musix' },
    ],
    status: 'completed',
  },
  {
    id: 'imagex',
    title: 'ImageX',
    description: 'Lightning-fast image processing and optimization for the modern web.',
    longDescription:
      'ImageX is a powerful image processing toolkit designed for developers who need speed without sacrificing quality. It supports batch processing, format conversion, intelligent compression, and real-time transformations. The API-first design makes it easy to integrate into any workflow, whether you are building a CMS, a gallery, or a full-featured media platform.',
    tags: ['Python', 'Rust', 'WASM', 'WebGL'],
    links: [
      { label: 'GitHub', url: 'https://github.com/yummyfiles/imagex' },
    ],
    status: 'completed',
  },
  {
    id: 'localcodeai',
    title: 'LocalCodeAI',
    description: 'A local-first AI coding assistant that runs entirely on your machine.',
    longDescription:
      'LocalCodeAI brings AI-powered code assistance to your local environment without sending data to the cloud. It uses local LLMs to provide intelligent code completion, refactoring suggestions, and natural language queries about your codebase. Privacy-first, offline-capable, and customizable to your workflow.',
    tags: ['Rust', 'Ollama', 'TypeScript', 'Local LLM'],
    links: [],
    status: 'in-progress',
  },
  {
    id: 'void',
    title: 'VOID - Local AI Chat',
    description: 'A minimal, private, local AI chat interface for your desktop.',
    longDescription:
      'VOID is a lightweight desktop application that gives you a clean, distraction-free chat interface to interact with local AI models. No accounts, no telemetry, no cloud dependency. Just you and the model, running entirely offline with support for multiple backends like Ollama and llama.cpp.',
    tags: ['Electron', 'React', 'Ollama', 'TypeScript'],
    links: [],
    status: 'in-progress',
  },
]
