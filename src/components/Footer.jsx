import { FiGithub, FiLinkedin, FiMail, FiHeart, FiArrowUp } from 'react-icons/fi'
import { FaInstagram } from 'react-icons/fa'

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brutal-black border-t-[4px] border-brutal-black">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <div className="w-10 h-10 bg-brand-yellow border-[3px] border-brand-yellow flex items-center justify-center">
                <span className="text-lg font-black text-brutal-black font-mono">J</span>
              </div>
              <span className="text-brand-yellow font-black text-sm uppercase tracking-wider">Jaishankar Jaiswal</span>
            </div>
            <p className="text-white/40 text-xs font-bold italic">"One commit at a time" 🚀</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {['About', 'Skills', 'Projects', 'Contact'].map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-xs font-bold uppercase tracking-wider text-white/50 hover:text-brand-yellow transition-colors">{link}</a>
            ))}
          </div>

          {/* Social + scroll */}
          <div className="flex items-center justify-center md:justify-end gap-2 mt-4 md:mt-0">
            {[
              { icon: FiGithub, href: 'https://github.com/Jaishankar7655' },
              { icon: FiLinkedin, href: 'https://www.linkedin.com/in/jaishankar-jaiswal-14253926b' },
              { icon: FaInstagram, href: 'https://www.instagram.com/mr._jaishankar_jaiswal' },
              { icon: FiMail, href: 'mailto:Jaishankar7655@gmail.com' },
            ].map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="w-9 h-9 border-2 border-white/20 flex items-center justify-center text-white/40 hover:text-brand-yellow hover:border-brand-yellow transition-all">
                <s.icon size={14} />
              </a>
            ))}
            <button onClick={scrollToTop} className="ml-2 w-9 h-9 bg-brand-yellow border-2 border-brand-yellow flex items-center justify-center text-brutal-black hover:scale-110 transition-transform" aria-label="Top">
              <FiArrowUp size={14} />
            </button>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-[10px] text-white/30 font-bold uppercase tracking-wider">© {year} Jaishankar Prasad Jaiswal</p>
          <p className="text-[10px] text-white/30 font-bold flex items-center gap-1 uppercase tracking-wider">
            Made with <FiHeart size={10} className="text-brand-pink" /> Jaishankar Prasad Jaiswal 
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
