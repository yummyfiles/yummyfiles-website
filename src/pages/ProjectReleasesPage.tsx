import { useParams, Link, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { getProjectBySlug } from '@/data/projects'
import { formatDate } from '@/lib/search'
import ScrollReveal from '@/components/ScrollReveal'

export default function ProjectReleasesPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) return <Navigate to="/projects" replace />

  const releases = project.releases || []

  return (
    <>
      <Helmet>
        <title>Releases — {project.title} — Yummyfiles</title>
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
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8">Releases</h1>
          </ScrollReveal>

          {releases.length > 0 ? (
            <div className="space-y-8">
              {releases.map((release, i) => (
                <ScrollReveal key={release.tag} delay={0.1 + i * 0.05}>
                  <div className="bg-black border border-white/5 rounded-2xl p-6 sm:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h2 className="text-xl font-bold">{release.name}</h2>
                          {release.prerelease && (
                            <span className="text-[10px] text-white/40 bg-white/5 px-2 py-0.5 rounded-full">Pre-release</span>
                          )}
                        </div>
                        <span className="text-xs text-white/30">{release.tag} &middot; {formatDate(release.date)}</span>
                      </div>
                      <a
                        href={release.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-white/40 hover:text-white/60 transition-colors underline underline-offset-2 decoration-white/10"
                      >
                        View on GitHub
                      </a>
                    </div>

                    {release.body && (
                      <div
                        className="prose-custom text-sm mb-4"
                        dangerouslySetInnerHTML={{ __html: simpleMarkdown(release.body) }}
                      />
                    )}

                    {release.assets.length > 0 && (
                      <div className="border-t border-white/5 pt-4">
                        <p className="text-xs text-white/30 mb-3">Assets</p>
                        <div className="flex flex-wrap gap-2">
                          {release.assets.map((asset) => (
                            <a
                              key={asset.name}
                              href={asset.download}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-3 py-1.5 text-xs text-white/50 bg-white/5 rounded-lg hover:bg-white/10 hover:text-white/70 transition-all"
                            >
                              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                              </svg>
                              {asset.name}
                              <span className="text-white/20">({formatBytes(asset.size)})</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <ScrollReveal delay={0.15}>
              <p className="text-white/50 mb-8 max-w-xl">
                No releases yet for {project.title}.
              </p>
              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={`${project.github.url}/releases`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 bg-white text-black text-sm font-medium rounded-full hover:bg-white/90 transition-all duration-200"
                  >
                    View Releases on GitHub
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

function simpleMarkdown(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/^[-*] (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>')
    .replace(/<\/ul>\s*<ul>/g, '')
    .replace(/\n{2,}/g, '</p><p>')
    .replace(/\n/g, '<br>')
    .replace(/^/, '<p>')
    .replace(/$/, '</p>')
}

function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 B'
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i]
}
