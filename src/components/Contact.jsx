import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiSend, FiPhone } from 'react-icons/fi'
import { FaInstagram } from 'react-icons/fa'

const contactInfo = [
  { icon: FiMail, label: 'Email', value: 'Jaishankar7655@gmail.com', href: 'mailto:Jaishankar7655@gmail.com' },
  { icon: FiMapPin, label: 'Location', value: 'Bhopal, MP, India', href: null },
  { icon: FiGithub, label: 'GitHub', value: 'Jaishankar7655', href: 'https://github.com/Jaishankar7655' },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'Jaishankar Jaiswal', href: 'https://www.linkedin.com/in/jaishankar-jaiswal-14253926b' },
]

const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSending(true)
    // Simulate sending
    setTimeout(() => {
      setSending(false)
      setSent(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSent(false), 4000)
    }, 1500)
  }

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="gradient-orb gradient-orb-2 animate-blob" />
      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-sm font-mono text-primary-400 tracking-wider uppercase mb-3 block">// Get In Touch</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Let's <span className="text-gradient-static">Connect</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">Interested in collaborating or have a project in mind? Let's talk!</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 }} className="lg:col-span-2 space-y-6">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-5">
                {contactInfo.map(info => (
                  <div key={info.label} className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                      <info.icon size={20} className="text-primary-400" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wider">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-300 hover:text-primary-400 transition-colors">{info.value}</a>
                      ) : (
                        <p className="text-sm text-slate-300">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div className="glass-card rounded-2xl p-6">
              <h4 className="text-sm font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex gap-3">
                {[
                  { icon: FiGithub, href: 'https://github.com/Jaishankar7655', label: 'GitHub' },
                  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/jaishankar-jaiswal-14253926b', label: 'LinkedIn' },
                  { icon: FaInstagram, href: 'https://www.instagram.com/mr._jaishankar_jaiswal', label: 'Instagram' },
                  { icon: FiMail, href: 'mailto:Jaishankar7655@gmail.com', label: 'Email' },
                ].map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="w-11 h-11 rounded-xl bg-white/[0.04] hover:bg-primary-500/10 border border-white/[0.06] hover:border-primary-500/20 flex items-center justify-center text-slate-400 hover:text-primary-400 transition-all hover:scale-110">
                    <s.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Portfolio link */}
            <div className="glass-card rounded-2xl p-6">
              <h4 className="text-sm font-semibold text-white mb-2">Other Projects</h4>
              <a href="https://codeformme.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-sm text-primary-400 hover:text-primary-300 transition-colors link-hover">codeformme.netlify.app →</a>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3 }} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-sm text-slate-400 mb-2">Your Name</label>
                  <input id="contact-name" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-slate-500 focus:outline-none focus:border-primary-500/50 focus:bg-white/[0.06] transition-all text-sm" />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm text-slate-400 mb-2">Your Email</label>
                  <input id="contact-email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-slate-500 focus:outline-none focus:border-primary-500/50 focus:bg-white/[0.06] transition-all text-sm" />
                </div>
              </div>
              <div>
                <label htmlFor="contact-subject" className="block text-sm text-slate-400 mb-2">Subject</label>
                <input id="contact-subject" name="subject" value={formData.subject} onChange={handleChange} required placeholder="Project Inquiry" className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-slate-500 focus:outline-none focus:border-primary-500/50 focus:bg-white/[0.06] transition-all text-sm" />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm text-slate-400 mb-2">Message</label>
                <textarea id="contact-message" name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder="Tell me about your project..." className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-slate-500 focus:outline-none focus:border-primary-500/50 focus:bg-white/[0.06] transition-all text-sm resize-none" />
              </div>
              <button type="submit" disabled={sending} className="w-full py-3.5 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-medium rounded-xl hover:from-primary-500 hover:to-accent-500 transition-all shadow-xl shadow-primary-500/20 hover:shadow-primary-500/40 flex items-center justify-center gap-2 disabled:opacity-50">
                {sending ? (
                  <><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending...</>
                ) : sent ? (
                  <>✓ Message Sent!</>
                ) : (
                  <><FiSend size={18} />Send Message</>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
