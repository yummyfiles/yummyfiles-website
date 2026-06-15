import { motion } from 'framer-motion'
import TypingText from './TypingText'
import ScrollReveal from './ScrollReveal'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen pt-16 flex items-center justify-center overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />
        <ScrollReveal>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm text-white/40 uppercase tracking-[0.2em] mb-6"
          >
            personal projects & experiments
          </motion.p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-none mb-6 text-white">
            YUMMYFILES // DEV
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-xl sm:text-2xl text-white/60 mb-4 h-8">
            <TypingText />
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="text-base text-white/40 max-w-lg mx-auto mb-12 leading-relaxed">
            Making free software, building cool stuff, and learning as I go.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-white text-black text-sm font-medium rounded-full hover:bg-white/90 hover:shadow-[0_0_24px_rgba(255,255,255,0.15)] transition-all duration-300"
            >
              View Projects
            </a>

          </div>
        </ScrollReveal>


      </div>
    </section>
  )
}
