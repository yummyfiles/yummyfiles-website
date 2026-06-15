import ScrollReveal from './ScrollReveal'

export default function GitHubActivity() {
  return (
    <section id="github" className="py-24 md:py-32 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-2">
            <span className="w-6 h-px bg-white/20" />
            <h2 className="text-sm text-white/40 uppercase tracking-[0.2em]">GitHub</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-2xl sm:text-3xl font-medium leading-snug mt-8 mb-10">
            Open source activity
          </p>
        </ScrollReveal>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <ScrollReveal delay={0.2}>
            <a
              href="https://github.com/yummyfiles"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-5 py-3 bg-black border border-white/5 rounded-xl hover:border-white/20 transition-all duration-200"
            >
              <svg className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="text-sm text-white/60 group-hover:text-white transition-colors">yummyfiles</span>
            </a>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <a
              href="https://github.com/yummyfiles?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/40 hover:text-white/70 transition-colors underline underline-offset-4 decoration-white/10"
            >
              View repositories &rarr;
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
