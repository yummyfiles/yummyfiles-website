import { motion, AnimatePresence } from 'framer-motion'
import type { ProjectMeta } from '@/data/types'
import { statusLabel, statusColor } from '@/lib/search'

interface ModalProps {
  project: ProjectMeta | null
  onClose: () => void
}

export default function Modal({ project, onClose }: ModalProps) {
  if (!project) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-lg bg-black border border-white/10 rounded-2xl p-8"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-white/40 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M1 1l16 16m0-16L1 17" />
            </svg>
          </button>

          <div className="flex items-center gap-2 mb-1">
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${statusColor(project.status)}`}>
              {statusLabel(project.status)}
            </span>
          </div>

          <h3 className="text-2xl font-bold mt-3 mb-4">{project.title}</h3>
          <p className="text-white/60 leading-relaxed mb-6">{project.longDescription}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tag) => (
              <span
                key={tag}
                className="text-xs text-white/40 bg-white/5 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {project.links.length > 0 && (
            <div className="flex gap-3">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 bg-white text-black text-sm font-medium rounded-full hover:bg-white/90 transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
