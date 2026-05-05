import { FiGithub, FiLinkedin, FiMail, FiHeart, FiArrowUp } from 'react-icons/fi'
import { FaInstagram } from 'react-icons/fa'

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & tagline */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                <span className="text-sm font-bold text-white font-mono">J</span>
              </div>
              <span className="text-white font-semibold">Jaishankar Jaiswal</span>
            </div>
            <p className="text-sm text-slate-500 italic">"Building scalable solutions, one commit at a time"</p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-sm text-slate-400 hover:text-primary-400 transition-colors">{link}</a>
            ))}
          </div>

          {/* Social + scroll top */}
          <div className="flex items-center justify-end gap-3">
            {[
              { icon: FiGithub, href: 'https://github.com/Jaishankar7655' },
              { icon: FiLinkedin, href: 'https://www.linkedin.com/in/jaishankar-jaiswal-14253926b' },
              { icon: FaInstagram, href: 'https://www.instagram.com/mr._jaishankar_jaiswal' },
              { icon: FiMail, href: 'mailto:Jaishankar7655@gmail.com' },
            ].map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/[0.03] hover:bg-primary-500/10 border border-white/[0.05] flex items-center justify-center text-slate-400 hover:text-primary-400 transition-all">
                <s.icon size={16} />
              </a>
            ))}
            <button onClick={scrollToTop} className="ml-2 w-9 h-9 rounded-lg bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg shadow-primary-500/20" aria-label="Scroll to top">
              <FiArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">© {year} Jaishankar Prasad Jaiswal. All rights reserved.</p>
          <p className="text-xs text-slate-500 flex items-center gap-1">
            Made with <FiHeart size={12} className="text-red-400" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
