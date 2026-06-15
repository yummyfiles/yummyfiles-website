import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { techStack, categories } from '@/data/techStack'
import ScrollReveal from './ScrollReveal'

import { SiTypescript, SiJavascript, SiPython, SiRust, SiReact, SiTailwindcss, SiVite, SiNodedotjs, SiNextdotjs, SiGit, SiDocker, SiAndroidstudio } from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'

function TechIcon({ name, icon }: { name: string; icon: string }) {
  const icons: Record<string, React.ReactNode> = {
    typescript: <SiTypescript />,
    javascript: <SiJavascript />,
    python: <SiPython />,
    rust: <SiRust />,
    react: <SiReact />,
    tailwind: <SiTailwindcss />,
    vite: <SiVite />,
    nodejs: <SiNodedotjs />,
    nextjs: <SiNextdotjs />,
    git: <SiGit />,
    docker: <SiDocker />,
    vscode: <VscVscode />,
    android: <SiAndroidstudio />,
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="group flex flex-col items-center gap-2 p-4 rounded-xl bg-neutral-900 border border-white/5 hover:border-white/20 hover:shadow-[0_0_24px_rgba(255,255,255,0.04)] transition-all duration-200 cursor-default"
    >
      <div className="w-12 h-12 rounded-lg bg-white/5 group-hover:bg-white/10 flex items-center justify-center text-xl text-white/70 transition-colors">
        {icons[icon] || name.slice(0, 2)}
      </div>
      <span className="text-xs text-white/50">{name}</span>
    </motion.div>
  )
}

export default function TechStack() {
  const [active, setActive] = useState<string>('All')

  const filtered = active === 'All' ? techStack : techStack.filter((t) => t.category === active)

  return (
    <section id="stack" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-2">
            <span className="w-6 h-px bg-white/20" />
            <h2 className="text-sm text-white/40 uppercase tracking-[0.2em]">Tech Stack</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-2xl sm:text-3xl font-medium leading-snug mt-8 mb-12">
            Tools and technologies I work with.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap gap-2 mb-10">
            {['All', ...categories].map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 text-sm rounded-full transition-all duration-200 ${
                  active === cat
                    ? 'bg-white text-black font-medium'
                    : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white/70'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3"
          >
            {filtered.map((item) => (
              <TechIcon key={item.name} name={item.name} icon={item.icon} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
