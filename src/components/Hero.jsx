import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiGithub, FiLinkedin, FiMail, FiArrowRight, FiMapPin, FiExternalLink } from 'react-icons/fi'
import { FaInstagram } from 'react-icons/fa'

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-28 right-16 w-28 h-28 bg-brand-pink border-[3px] border-brutal-black shadow-brutal rotate-12 hidden lg:block opacity-60" />
      <div className="absolute bottom-28 left-12 w-20 h-20 bg-brand-blue border-[3px] border-brutal-black shadow-brutal -rotate-6 hidden lg:block opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="text-center lg:text-left">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block mb-8">
              <div className="brutal-tag bg-brand-lime">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-2 animate-pulse" />
                Available for Opportunities
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-5xl sm:text-6xl md:text-7xl font-black leading-[0.95] tracking-tighter mb-5"
            >
              <span className="text-brutal-black">Jaishankar</span>
              <br />
              <span className="relative inline-block">
                <span className="relative z-10 text-brutal-black">Prasad Jaiswal</span>
                <span className="absolute bottom-1 left-0 right-0 h-4 md:h-5 bg-brand-yellow -z-0 -skew-x-2" />
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-6"
            >
              <div className="inline-block bg-brutal-black text-brand-yellow px-5 py-2.5 border-[3px] border-brutal-black shadow-brutal-sm font-mono text-base md:text-lg font-bold">
                <span className="text-white/50 mr-2">$</span>
                <TypeAnimation
                  sequence={['Full Stack Developer', 2500, 'DevOps Engineer', 2500, 'Cloud Solutions Architect', 2500, 'Software Engineer', 2500]}
                  wrapper="span"
                  speed={40}
                  repeat={Infinity}
                />
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-brutal-black/70 max-w-lg mx-auto lg:mx-0 mb-3 leading-relaxed"
            >
              Software engineer specializing in{' '}
              <span className="bg-brand-blue/60 px-1 font-bold border-b-2 border-brutal-black">scalable web applications</span> and{' '}
              <span className="bg-brand-pink/50 px-1 font-bold border-b-2 border-brutal-black">production-grade CI/CD pipelines</span>.
              Currently building enterprise solutions at Cynctech IT Solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="flex items-center gap-4 justify-center lg:justify-start text-brutal-black/50 mb-8 text-sm font-bold"
            >
              <span className="flex items-center gap-1.5"><FiMapPin size={14} /> Bhopal, India</span>
              <span className="w-1 h-1 bg-brutal-black/30 rounded-full" />
              <a href="https://cynctech.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-brutal-black transition-colors">
                <FiExternalLink size={12} /> cynctech.in
              </a>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
            >
              <a href="#projects" className="brutal-btn bg-brand-yellow text-brutal-black group flex items-center gap-2">
                View My Work <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="brutal-btn bg-brutal-black text-brand-yellow">
                Get In Touch
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-3 justify-center lg:justify-start"
            >
              {[
                { icon: FiGithub, href: 'https://github.com/Jaishankar7655', bg: 'hover:bg-brand-lime' },
                { icon: FiLinkedin, href: 'https://www.linkedin.com/in/jaishankar-jaiswal-14253926b', bg: 'hover:bg-brand-blue' },
                { icon: FaInstagram, href: 'https://www.instagram.com/mr._jaishankar_jaiswal', bg: 'hover:bg-brand-pink' },
                { icon: FiMail, href: 'mailto:Jaishankar7655@gmail.com', bg: 'hover:bg-brand-yellow' },
              ].map((s) => (
                <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className={`w-11 h-11 border-[3px] border-brutal-black bg-brutal-white shadow-brutal-sm flex items-center justify-center text-brutal-black transition-all ${s.bg}`}>
                  <s.icon size={18} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right — Professional card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative"
          >
            <div className="max-w-md mx-auto">
              <div className="bg-brutal-card border-[4px] border-brutal-black shadow-brutal-xl p-8 relative">
                <div className="absolute -top-4 -right-4 bg-brand-pink border-[3px] border-brutal-black shadow-brutal-sm px-3 py-1 font-black text-[10px] uppercase tracking-widest rotate-3 text-white">
                  Open to Work
                </div>

                <div className="text-center mb-6">
                  <div className="w-28 h-28 mx-auto mb-4 bg-brand-yellow border-[4px] border-brutal-black shadow-brutal flex items-center justify-center">
                    <span className="text-4xl font-black text-brutal-black font-mono">JP</span>
                  </div>
                  <h2 className="text-xl font-black text-brutal-black tracking-tight">Jaishankar P. Jaiswal</h2>
                  <p className="text-xs font-bold text-brutal-black/40 uppercase tracking-[0.2em] mt-1">Software Engineer</p>
                </div>

                <div className="border-t-[3px] border-dashed border-brutal-black/15 pt-5 space-y-3 font-mono text-sm">
                  {[
                    ['Company', 'Cynctech IT Solutions'],
                    ['Role', 'Full Stack + DevOps'],
                    ['Experience', '12+ Months'],
                    ['Location', 'Bhopal, MP'],
                    ['Stack', 'React · Django · AWS'],
                    ['DevOps', 'Docker · K8s · Jenkins'],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between items-center">
                      <span className="font-bold text-brutal-black/40 text-xs uppercase">{k}</span>
                      <span className="font-bold text-brutal-black text-xs">{v}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t-[3px] border-dashed border-brutal-black/15">
                  <div className="flex justify-between text-center">
                    {[
                      { val: '491+', label: 'Commits' },
                      { val: '10+', label: 'Projects' },
                      { val: '15+', label: 'Tools' },
                    ].map(s => (
                      <div key={s.label}>
                        <div className="text-lg font-black text-brutal-black">{s.val}</div>
                        <div className="text-[9px] font-bold text-brutal-black/40 uppercase tracking-wider">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {[
                { text: 'Docker', top: '-12px', left: '-20px', bg: 'bg-brand-blue', r: '-rotate-6' },
                { text: 'Kubernetes', bottom: '60px', right: '-30px', bg: 'bg-brand-lime', r: 'rotate-3' },
                { text: 'React', bottom: '-10px', left: '30px', bg: 'bg-brand-lavender', r: '-rotate-2' },
              ].map((b) => (
                <div key={b.text} className={`sticker absolute ${b.bg} border-[3px] border-brutal-black shadow-brutal-sm px-3 py-1 font-bold text-xs text-brutal-black ${b.r} hidden md:block`}
                  style={{ top: b.top, bottom: b.bottom, left: b.left, right: b.right }}>
                  {b.text}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
