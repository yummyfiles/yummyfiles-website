import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getFeaturedProjects } from '@/data/projects'
import { statusLabel, statusColor, timeAgo } from '@/lib/search'
import ScrollReveal from './ScrollReveal'

export default function Projects() {
  const featured = getFeaturedProjects()

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
            Things I made and stuff I'm working on
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          {featured.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Link
                to={`/projects/${project.slug}`}
                className="group relative block text-left w-full bg-black border border-white/5 rounded-2xl p-6 sm:p-8 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {project.logo && <span className="text-2xl">{project.logo}</span>}
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

                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-white/30 bg-white/5 px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-[10px] text-white/20">{project.category}</span>
                  <span className="text-[10px] text-white/20">{timeAgo(project.updatedAt)}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <ScrollReveal>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors underline underline-offset-4 decoration-white/10"
          >
            View all projects &rarr;
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
