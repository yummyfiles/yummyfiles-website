import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

interface NavLink {
  label: string
  to?: string
  href?: string
}

const links: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Stack', href: '#stack' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      if (!isHome) return
      const scrollPos = window.scrollY + 120
      for (let i = links.length - 1; i >= 0; i--) {
        const link = links[i]
        if (link.href) {
          const sec = document.getElementById(link.href.slice(1))
          if (sec && sec.offsetTop <= scrollPos) {
            setActive(link.href)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome])

  return (
    <nav
      className={`fixed top-10 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-lg font-semibold tracking-tight">
          YUMMYFILES<span className="text-white/40"> // DEV</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            if (link.to) {
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm transition-colors duration-200 ${
                    location.pathname.startsWith(link.to)
                      ? 'text-white'
                      : 'text-white/50 hover:text-white/80'
                  }`}
                >
                  {link.label}
                </Link>
              )
            }
            return (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors duration-200 ${
                  active === link.href
                    ? 'text-white'
                    : 'text-white/50 hover:text-white/80'
                }`}
              >
                {link.label}
              </a>
            )
          })}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block w-5 h-[2px] bg-white"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="block w-5 h-[2px] bg-white"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block w-5 h-[2px] bg-white"
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 border-b border-white/5 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((link) => {
                if (link.to) {
                  return (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => setOpen(false)}
                      className={`text-sm transition-colors duration-200 ${
                        location.pathname.startsWith(link.to)
                          ? 'text-white'
                          : 'text-white/50 hover:text-white/80'
                      }`}
                    >
                      {link.label}
                    </Link>
                  )
                }
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`text-sm transition-colors duration-200 ${
                      active === link.href
                        ? 'text-white'
                        : 'text-white/50 hover:text-white/80'
                    }`}
                  >
                    {link.label}
                  </a>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
