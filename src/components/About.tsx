import ScrollReveal from './ScrollReveal'

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-2">
            <span className="w-6 h-px bg-white/20" />
            <h2 className="text-sm text-white/40 uppercase tracking-[0.2em]">About</h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 mt-8">
          <ScrollReveal>
            <p className="text-2xl sm:text-3xl font-medium leading-snug">
              Hey, I'm YUMMYFILES.
            </p>
          </ScrollReveal>

          <div className="space-y-5">
            <ScrollReveal delay={0.1}>
              <p className="text-base text-white/60 leading-relaxed">
                I build apps, websites, tools, and whatever random idea I decide to work on next.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-base text-white/60 leading-relaxed">
                Most of my projects start because I thought something sounded cool, needed something myself, or just wanted to see if I could make it.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-base text-white/60 leading-relaxed">
                I'm always learning new things, trying new ideas, and working on something. Sometimes it turns into a real project. Sometimes it doesn't.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <p className="text-base text-white/60 leading-relaxed">
                Either way, I enjoy building stuff and seeing where it goes.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
