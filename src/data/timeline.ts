export interface TimelineItem {
  year: string
  title: string
  description: string
  status?: 'completed' | 'current' | 'upcoming'
}

export const timeline: TimelineItem[] = [
  {
    year: '2026 Q3',
    title: 'MusicX v2',
    description: 'Rewriting MusicX with a new architecture, adding collaborative playlists and real-time sync.',
    status: 'current',
  },
  {
    year: '2026 Q4',
    title: 'ImageX Cloud',
    description: 'Launching ImageX as a cloud service with a generous free tier for indie developers.',
    status: 'upcoming',
  },
  {
    year: '2027',
    title: 'Project Nebula',
    description: 'Open-source the distributed computing framework and build the initial developer community.',
    status: 'upcoming',
  },
  {
    year: 'Ongoing',
    title: 'Open Source',
    description: 'Contributing to projects I use daily and releasing tools that make development more enjoyable.',
    status: 'current',
  },
]
