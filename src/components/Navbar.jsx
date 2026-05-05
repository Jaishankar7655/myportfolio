import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiGithub } from 'react-icons/fi'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Work', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-brutal-cream border-b-[3px] border-brutal-black shadow-[0_4px_0_0_#1a1a2e]' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-brand-yellow border-[3px] border-brutal-black shadow-brutal-sm flex items-center justify-center group-hover:bg-brand-pink transition-colors">
              <span className="text-xl font-black text-brutal-black font-mono">J</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-brutal-black font-black text-base block leading-tight tracking-tight">JAISHANKAR</span>
              <span className="text-brutal-black/50 text-[10px] font-bold uppercase tracking-[0.2em]">Developer</span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-bold uppercase tracking-wider text-brutal-black hover:bg-brand-yellow border-2 border-transparent hover:border-brutal-black transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="https://github.com/Jaishankar7655" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border-[3px] border-brutal-black bg-brutal-white flex items-center justify-center shadow-brutal-sm hover:bg-brand-lime transition-colors">
              <FiGithub size={18} />
            </a>
            <a href="#contact" className="brutal-btn bg-brand-yellow text-brutal-black hover:bg-brand-pink">
              Hire Me →
            </a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden w-10 h-10 border-[3px] border-brutal-black bg-brand-yellow flex items-center justify-center shadow-brutal-sm" id="mobile-menu-toggle" aria-label="Menu">
            {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 lg:hidden">
            <div className="absolute inset-0 bg-brutal-black/40" onClick={() => setMobileOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
              className="absolute right-0 top-0 bottom-0 w-72 bg-brand-yellow border-l-[4px] border-brutal-black p-6 pt-24"
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="block px-4 py-3 text-lg font-black uppercase text-brutal-black hover:bg-brutal-black hover:text-brand-yellow border-b-2 border-brutal-black/20 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <a href="#contact" onClick={() => setMobileOpen(false)} className="block mt-6 text-center brutal-btn bg-brutal-black text-brand-yellow w-full">
                Hire Me →
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
