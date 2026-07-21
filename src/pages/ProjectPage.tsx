import { useParams, Link, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

import { getProjectBySlug } from '@/data/projects'
import { statusLabel, statusColor, formatDate } from '@/lib/search'
import ScrollReveal from '@/components/ScrollReveal'
import TechBadge from '@/components/projects/TechBadge'

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  return (
    <>
      <Helmet>
        <title>{project.title} — Yummyfiles</title>
        <meta name="description" content={project.description} />
      </Helmet>

      <section className="pt-24 pb-24 md:pt-32 md:pb-32">
        <div className="max-w-6xl mx-auto px-6">

          <ScrollReveal>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-xs text-white/40 hover:text-white/60 transition-colors mb-8"
            >
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              All Projects
            </Link>
          </ScrollReveal>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-12">
            <ScrollReveal>
              <div className="flex items-center gap-4">
                {project.logo && (
                  <span className="text-5xl">{project.logo}</span>
                )}
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">{project.title}</h1>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${statusColor(project.status)}`}>
                      {statusLabel(project.status)}
                    </span>
                  </div>
                  {project.version && (
                    <span className="text-xs text-white/30">v{project.version}</span>
                  )}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="flex flex-wrap gap-2">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 bg-white text-black text-sm font-medium rounded-full hover:bg-white/90 hover:shadow-[0_0_24px_rgba(255,255,255,0.15)] transition-all duration-300"
                  >
                    {link.label}
                  </a>
                ))}
                {project.links.length === 0 && (
                  <span className="px-5 py-2 text-xs text-white/30 bg-white/5 rounded-full">
                    Coming soon
                  </span>
                )}
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.15}>
            <p className="text-lg sm:text-xl text-white/60 leading-relaxed mb-12 max-w-3xl">
              {project.longDescription}
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-12 mb-16">

            <div className="md:col-span-2 space-y-12">

              {project.features && project.features.length > 0 && (
                <ScrollReveal delay={0.2}>
                  <div>
                    <h2 className="text-sm text-white/40 uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
                      <span className="w-6 h-px bg-white/20" />
                      Features
                    </h2>
                    <ul className="space-y-3">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm text-white/60">
                          <svg className="w-4 h-4 text-white/20 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              )}

              <ScrollReveal delay={0.25}>
                <div>
                  <h2 className="text-sm text-white/40 uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
                    <span className="w-6 h-px bg-white/20" />
                    Tech Stack
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <TechBadge key={tech} name={tech} size="md" />
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div>
                  <h2 className="text-sm text-white/40 uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
                    <span className="w-6 h-px bg-white/20" />
                    Quick Links
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    <Link
                      to={`/projects/${project.slug}/docs`}
                      className="flex items-center gap-2 px-4 py-3 bg-black border border-white/5 rounded-xl hover:border-white/20 transition-all duration-200 text-sm text-white/60 hover:text-white"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      Documentation
                    </Link>
                    <Link
                      to={`/projects/${project.slug}/wiki`}
                      className="flex items-center gap-2 px-4 py-3 bg-black border border-white/5 rounded-xl hover:border-white/20 transition-all duration-200 text-sm text-white/60 hover:text-white"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      Wiki
                    </Link>
                    <Link
                      to={`/projects/${project.slug}/screenshots`}
                      className="flex items-center gap-2 px-4 py-3 bg-black border border-white/5 rounded-xl hover:border-white/20 transition-all duration-200 text-sm text-white/60 hover:text-white"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Screenshots
                    </Link>
                    <Link
                      to={`/projects/${project.slug}/releases`}
                      className="flex items-center gap-2 px-4 py-3 bg-black border border-white/5 rounded-xl hover:border-white/20 transition-all duration-200 text-sm text-white/60 hover:text-white"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Releases
                    </Link>
                    <Link
                      to={`/projects/${project.slug}/changelog`}
                      className="flex items-center gap-2 px-4 py-3 bg-black border border-white/5 rounded-xl hover:border-white/20 transition-all duration-200 text-sm text-white/60 hover:text-white"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      Changelog
                    </Link>
                    {project.github && (
                      <a
                        href={project.github.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-3 bg-black border border-white/5 rounded-xl hover:border-white/20 transition-all duration-200 text-sm text-white/60 hover:text-white"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.3}>
              <div className="space-y-6">
                <h2 className="text-sm text-white/40 uppercase tracking-[0.2em] flex items-center gap-3">
                  <span className="w-6 h-px bg-white/20" />
                  Info
                </h2>
                <div className="space-y-4">
                  <InfoRow label="Category" value={project.category} />
                  <InfoRow label="Platforms" value={project.platforms.join(', ')} />
                  {project.license && <InfoRow label="License" value={project.license} />}
                  {project.version && <InfoRow label="Version" value={`v${project.version}`} />}
                  <InfoRow label="Created" value={formatDate(project.createdAt)} />
                  <InfoRow label="Updated" value={formatDate(project.updatedAt)} />
                  <InfoRow label="Status" value={statusLabel(project.status)} />
                </div>

                {project.platforms.length > 0 && (
                  <div className="pt-4 border-t border-white/5">
                    <p className="text-xs text-white/30 mb-2">Platforms</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.platforms.map((p) => (
                        <span key={p} className="text-[10px] text-white/40 bg-white/5 px-2 py-0.5 rounded-full">{p}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>
    </>
  )
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-xs text-white/30">{label}</span>
      <span className="text-xs text-white/60">{value}</span>
    </div>
  )
}
