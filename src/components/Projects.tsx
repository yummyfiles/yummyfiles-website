import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '@/data/projects'
import ScrollReveal from './ScrollReveal'
import Modal from './Modal'
import type { Project } from '@/data/projects'

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <>
      <motion.button
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        onClick={() => setSelected(project)}
        className="group relative text-left w-full bg-neutral-900 border border-white/5 rounded-2xl p-6 sm:p-8 hover:border-white/20 hover:shadow-[0_0_32px_rgba(255,255,255,0.04)] transition-all duration-300"
      >
        <div className="flex items-start justify-between mb-4">
          <span
            className={`text-xs font-medium px-2 py-0.5 rounded-full ${
              project.status === 'completed'
                ? 'bg-white/10 text-white/70'
                : project.status === 'in-progress'
                  ? 'bg-white/10 text-white/70'
                  : 'bg-white/5 text-white/40'
            }`}
          >
            {project.status === 'completed' ? 'Live' : project.status === 'in-progress' ? 'In Progress' : 'Planned'}
          </span>
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

        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-sm text-white/50 leading-relaxed mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-white/30 bg-white/5 px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.button>

      <Modal project={selected} onClose={() => setSelected(null)} />
    </>
  )
}

export default function Projects() {
  const completed = projects.filter((p) => p.status === 'completed')
  const upcoming = projects.filter((p) => p.status !== 'completed')

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-2">
            <span className="w-6 h-px bg-white/20" />
            <h2 className="text-sm text-white/40 uppercase tracking-[0.2em]">Projects</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-2xl sm:text-3xl font-medium leading-snug mt-8 mb-12">
            Things I've built and am building.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {completed.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <ScrollReveal>
          <div className="border-t border-white/5 pt-12">
            <h3 className="text-lg font-medium mb-6 text-white/40">Coming Up</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {upcoming.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i + completed.length} />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
