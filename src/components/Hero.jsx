import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight, FiMapPin } from 'react-icons/fi'
import { FaInstagram } from 'react-icons/fa'

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background effects */}
      <div className="gradient-orb gradient-orb-1 animate-blob" />
      <div className="gradient-orb gradient-orb-2 animate-blob" style={{ animationDelay: '2s' }} />
      <div className="gradient-orb gradient-orb-3 animate-blob" style={{ animationDelay: '4s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm text-slate-300">Available for opportunities</span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-lg md:text-xl text-slate-400 mb-3 font-mono"
            >
              Hello World! I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
            >
              <span className="text-white">Jaishankar</span>
              <br />
              <span className="text-gradient">Prasad Jaiswal</span>
            </motion.h1>

            {/* Typing animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl md:text-2xl text-slate-300 mb-6 h-10"
            >
              <span className="text-slate-500 font-mono mr-2">&gt;</span>
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'DevOps Engineer',
                  2000,
                  'Cloud Enthusiast',
                  2000,
                  'Problem Solver',
                  2000,
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
                className="text-gradient-static font-semibold"
              />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-base md:text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 mb-4 leading-relaxed"
            >
              Passionate software engineer specializing in building scalable web applications 
              and implementing robust CI/CD pipelines. Bridging the gap between development 
              and operations for production-ready solutions.
            </motion.p>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="flex items-center gap-2 justify-center lg:justify-start text-slate-500 mb-8"
            >
              <FiMapPin size={16} />
              <span className="text-sm">Bhopal, Madhya Pradesh, India</span>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
            >
              <a
                href="#projects"
                className="group px-7 py-3.5 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-medium rounded-xl hover:from-primary-500 hover:to-accent-500 transition-all shadow-xl shadow-primary-500/20 hover:shadow-primary-500/40 flex items-center gap-2"
              >
                View My Work
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="px-7 py-3.5 glass-card text-white font-medium rounded-xl hover:bg-white/10 transition-all flex items-center gap-2 glow-border"
              >
                <FiDownload size={18} />
                Get In Touch
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex gap-3 justify-center lg:justify-start"
            >
              {[
                { icon: FiGithub, href: 'https://github.com/Jaishankar7655', label: 'GitHub' },
                { icon: FiLinkedin, href: 'https://www.linkedin.com/in/jaishankar-jaiswal-14253926b', label: 'LinkedIn' },
                { icon: FaInstagram, href: 'https://www.instagram.com/mr._jaishankar_jaiswal', label: 'Instagram' },
                { icon: FiMail, href: 'mailto:Jaishankar7655@gmail.com', label: 'Email' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-11 h-11 rounded-xl glass-card flex items-center justify-center text-slate-400 hover:text-primary-400 hover:border-primary-500/30 transition-all hover:scale-110"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right — Avatar / Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, type: 'spring' }}
            className="relative flex-shrink-0"
          >
            {/* Animated rings */}
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border border-primary-500/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-4 rounded-full border border-accent-500/15"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-8 rounded-full border border-primary-500/10"
              />

              {/* Center avatar area */}
              <div className="absolute inset-12 rounded-full bg-gradient-to-br from-primary-600/20 to-accent-600/20 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary-900/50 to-surface-900/80 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl md:text-7xl font-bold text-gradient-static mb-2">
                      JP
                    </div>
                    <div className="text-xs font-mono text-slate-500 tracking-widest uppercase">
                      Developer
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating tech badges */}
              {[
                { text: 'React', top: '5%', left: '-5%', delay: 0 },
                { text: 'AWS', top: '15%', right: '-8%', delay: 1 },
                { text: 'Docker', bottom: '15%', right: '-5%', delay: 2 },
                { text: 'K8s', bottom: '5%', left: '-3%', delay: 3 },
                { text: 'Django', top: '45%', left: '-12%', delay: 1.5 },
                { text: 'CI/CD', top: '45%', right: '-10%', delay: 2.5 },
              ].map((badge, i) => (
                <motion.div
                  key={badge.text}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: badge.delay }}
                  className="absolute px-3 py-1.5 rounded-lg glass-card text-xs font-mono text-primary-300 shadow-lg"
                  style={{
                    top: badge.top,
                    bottom: badge.bottom,
                    left: badge.left,
                    right: badge.right,
                  }}
                >
                  {badge.text}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-slate-500 font-mono tracking-wider">SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 rounded-full border border-slate-600 flex items-start justify-center p-1"
          >
            <div className="w-1 h-2 rounded-full bg-primary-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
