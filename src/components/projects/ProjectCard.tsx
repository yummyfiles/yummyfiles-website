import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { ProjectMeta } from '@/data/types'
import { statusLabel, statusColor, timeAgo } from '@/lib/search'
import TechBadge from './TechBadge'

interface ProjectCardProps {
  project: ProjectMeta
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <Link
        to={`/projects/${project.slug}`}
        className="group relative block text-left w-full bg-black border border-white/5 rounded-2xl p-6 sm:p-8 hover:border-white/20 hover:-translate-y-1 transition-all duration-300"
      >
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            {project.logo && (
              <span className="text-2xl">{project.logo}</span>
            )}
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${statusColor(project.status)}`}>
              {statusLabel(project.status)}
            </span>
          </div>
          <svg
            className="w-5 h-5 text-white/20 group-hover:text-white/60 transition-colors duration-200"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M7 17l9.2-9.2M17 17V7H7" />
          </svg>
        </div>

        <h3 className="text-xl font-bold mb-1">{project.title}</h3>
        {project.version && (
          <span className="text-[10px] text-white/20 mb-2 block">v{project.version}</span>
        )}
        <p className="text-sm text-white/50 leading-relaxed mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.slice(0, 4).map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
          {project.techStack.length > 4 && (
            <span className="text-[10px] text-white/20 px-2 py-0.5">+{project.techStack.length - 4}</span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            <span className="text-[10px] text-white/20 bg-white/5 px-2 py-0.5 rounded-full">{project.category}</span>
            {project.platforms.slice(0, 2).map((p) => (
              <span key={p} className="text-[10px] text-white/20 bg-white/5 px-2 py-0.5 rounded-full">{p}</span>
            ))}
          </div>
          <span className="text-[10px] text-white/20">{timeAgo(project.updatedAt)}</span>
        </div>

        {project.github && (
          <div className="absolute top-6 right-14 opacity-0 group-hover:opacity-100 transition-opacity">
            <svg className="w-4 h-4 text-white/30" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </div>
        )}
      </Link>
    </motion.div>
  )
}
