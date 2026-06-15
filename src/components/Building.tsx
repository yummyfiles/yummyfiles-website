import { motion } from 'framer-motion'
import { timeline } from '@/data/timeline'
import ScrollReveal from './ScrollReveal'

export default function Building() {
  return (
    <section id="building" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-2">
            <span className="w-6 h-px bg-white/20" />
            <h2 className="text-sm text-white/40 uppercase tracking-[0.2em]">What I'm Building</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-2xl sm:text-3xl font-medium leading-snug mt-8 mb-16">
            What I'm working on right now and what's next.
          </p>
        </ScrollReveal>

        <div className="relative">
          <div className="absolute left-[15px] top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/5 to-transparent" />

          <div className="space-y-12">
            {timeline.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative pl-12"
              >
                <div
                  className={`absolute left-[7px] top-1.5 w-[17px] h-[17px] rounded-full border-2 ${
                    item.status === 'current'
                      ? 'border-white bg-black'
                      : item.status === 'completed'
                        ? 'border-white/30 bg-black'
                        : 'border-white/10 bg-black'
                  }`}
                >
                  {item.status === 'current' && (
                    <motion.div
                      animate={{ scale: [1, 1.8, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                      className="w-full h-full rounded-full bg-white/30"
                    />
                  )}
                </div>

                <span className="text-xs text-white/30 font-mono">{item.year}</span>
                <h3 className="text-lg font-semibold mt-1 mb-2">{item.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed max-w-lg">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
