import { motion, AnimatePresence } from 'framer-motion'
import type { ProjectMeta } from '@/data/types'
import ProjectCard from './ProjectCard'

interface ProjectGridProps {
  projects: ProjectMeta[]
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <AnimatePresence mode="wait">
      {projects.length === 0 ? (
        <motion.div
          key="empty"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="text-center py-20"
        >
          <p className="text-white/30 text-sm">No projects found.</p>
        </motion.div>
      ) : (
        <motion.div
          key="grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
