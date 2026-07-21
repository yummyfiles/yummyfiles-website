import { useParams, Link, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useMemo } from 'react'
import { marked } from 'marked'
import { Renderer } from 'marked'
import { getProjectBySlug } from '@/data/projects'
import ScrollReveal from '@/components/ScrollReveal'

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

const renderer = new Renderer()
renderer.heading = function ({ text, depth }: { text: string; depth: number }) {
  const id = slugify(text.replace(/<[^>]+>/g, ''))
  return `<h${depth} id="${id}">${text}</h${depth}>`
}

marked.setOptions({ gfm: true, breaks: false, renderer })

export default function ProjectDocsPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  const html = useMemo(() => {
    if (!project?.docs) return ''
    return marked.parse(project.docs) as string
  }, [project?.docs])

  if (!project) return <Navigate to="/projects" replace />

  return (
    <>
      <Helmet>
        <title>Documentation — {project.title} — Yummyfiles</title>
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
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8">Documentation</h1>
          </ScrollReveal>

          {project.docs ? (
            <ScrollReveal delay={0.15}>
              <div
                className="prose-custom max-w-4xl"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </ScrollReveal>
          ) : (
            <ScrollReveal delay={0.15}>
              <p className="text-white/50 mb-8 max-w-xl">
                Documentation for {project.title} will be available here. Check back soon.
              </p>
              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 bg-white text-black text-sm font-medium rounded-full hover:bg-white/90 transition-all duration-200"
                  >
                    View on GitHub
                  </a>
                )}
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>
    </>
  )
}
