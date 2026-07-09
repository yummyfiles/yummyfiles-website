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
    tags: ['Gradle', 'Kotlin', 'Jetpack Compose', 'Java'],
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
    description: 'A free Photoshop clone that\'s easy to use but has every feature Photoshop does.',
    longDescription:
      'ImageX started because I wanted a Photoshop clone that didn\'t cost money. Something easy to use but with every feature Photoshop has. Building it with Electron so it runs as a desktop app.',
    tags: ['Python', 'Electron', 'TypeScript'],
    links: [],
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
  {
    id: 'static',
    title: 'Static',
    description: 'A Discord clone built from scratch.',
    longDescription:
      'Static is a full-featured Discord clone I\'m planning to build from the ground up. Real-time messaging, voice channels, server management, and more — all built with modern web technologies.',
    tags: ['Electron', 'Vite', 'TypeScript', 'React', 'JavaScript'],
    links: [],
    status: 'in-progress',
  },
  {
    id: 'stylerx',
    title: 'StylerX',
    description: 'Make OBS Studio look how you want — theme it in real time.',
    longDescription:
      'OBS Studio plugin that lets you change the whole look of it while it\'s running. Every color, panel, button — tweak it all instantly. Comes with a live color picker, raw CSS editor, widget inspector, theme save/export, and a Python CLI. Written in C++17 with Qt6.',
    tags: ['C++', 'Qt6', 'OBS Studio', 'CMake', 'Python'],
    links: [
      { label: 'GitHub', url: 'https://github.com/yummyfiles/StylerX-Styler_for_OBS_Studio' },
    ],
    status: 'completed',
  },
]
