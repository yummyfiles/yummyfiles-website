import { useParams, Link, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { getProjectBySlug } from '@/data/projects'
import ScrollReveal from '@/components/ScrollReveal'

export default function ProjectScreenshotsPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) return <Navigate to="/projects" replace />

  return (
    <>
      <Helmet>
        <title>Screenshots — {project.title} — Yummyfiles</title>
      </Helmet>
      <section className="pt-24 pb-24 md:pt-32 md:pb-32">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <Link
              to={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2 text-xs text-white/40 hover:text-white/60 transition-colors mb-8"
            >
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              {project.title}
            </Link>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Screenshots</h1>
            <p className="text-white/50 mb-8 max-w-xl">
              Screenshots of {project.title} will be available here. Check back soon.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
