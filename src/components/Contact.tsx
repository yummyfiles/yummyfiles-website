import type { FormEvent } from 'react'
import ScrollReveal from './ScrollReveal'
import { socialLinks } from '@/data/social'

export default function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const message = `Hi YUMMYFILES // DEV,%0A%0A${data.get('message')}%0A%0A— ${data.get('name')} (${data.get('email')})`
    window.open(`mailto:justin@yummyfiles.dev?subject=${data.get('subject') || 'Hello'}&body=${message}`, '_blank')
  }

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-2">
            <span className="w-6 h-px bg-white/20" />
            <h2 className="text-sm text-white/40 uppercase tracking-[0.2em]">Contact</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-2xl sm:text-3xl font-medium leading-snug mt-8 mb-12">
            Get in touch.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <ScrollReveal delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-xs text-white/40 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/40 focus:shadow-[0_0_16px_rgba(255,255,255,0.04)] transition-all duration-200"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs text-white/40 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/40 focus:shadow-[0_0_16px_rgba(255,255,255,0.04)] transition-all duration-200"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-xs text-white/40 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/40 focus:shadow-[0_0_16px_rgba(255,255,255,0.04)] transition-all duration-200"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs text-white/40 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/40 focus:shadow-[0_0_16px_rgba(255,255,255,0.04)] transition-all duration-200 resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-white text-black text-sm font-medium rounded-full hover:bg-white/90 transition-all duration-200"
              >
                Send Message
              </button>
            </form>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-medium mb-3">Find me online</h3>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 px-4 py-2 bg-neutral-900 border border-white/5 rounded-xl hover:border-white/20 hover:shadow-[0_0_24px_rgba(255,255,255,0.04)] transition-all duration-200"
                    >
                      {link.icon === 'github' && (
                        <svg className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      )}
                      <span className="text-sm text-white/50 group-hover:text-white transition-colors">{link.name}</span>
                    </a>
                  ))}
                </div>
              </div>


            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
