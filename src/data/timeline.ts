export interface TimelineItem {
  year: string
  title: string
  description: string
  status?: 'completed' | 'current' | 'upcoming'
}

export const timeline: TimelineItem[] = [
  {
    year: 'Now',
    title: 'MusicX',
    description: 'Rebuilding MusicX and adding new features as I go.',
    status: 'current',
  },
  {
    year: 'Now',
    title: 'ImageX',
    description: 'Working on a free image editor with more tools and features.',
    status: 'current',
  },
  {
    year: 'Later',
    title: 'Future Projects',
    description: 'I have a bunch of ideas written down. Some of them will probably become real projects eventually.',
    status: 'upcoming',
  },
  {
    year: 'Ongoing',
    title: 'Open Source',
    description: 'Releasing projects when I think other people might find them useful.',
    status: 'current',
  },
]
