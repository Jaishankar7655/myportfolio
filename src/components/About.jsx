import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCode, FiServer, FiCloud, FiTerminal } from 'react-icons/fi'

const competencies = [
  { icon: FiCode, title: 'Full Stack Development', desc: 'End-to-end web applications with React, Django & Node.js', bg: 'bg-brand-blue' },
  { icon: FiServer, title: 'DevOps Engineering', desc: 'CI/CD pipelines with Jenkins, GitHub Actions & ArgoCD', bg: 'bg-brand-pink' },
  { icon: FiCloud, title: 'Cloud Architecture', desc: 'Scalable infrastructure on AWS with Docker & Kubernetes', bg: 'bg-brand-lime' },
  { icon: FiTerminal, title: 'Infrastructure as Code', desc: 'Automated provisioning with Terraform & Ansible', bg: 'bg-brand-yellow' },
]

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="mb-12">
          <div className="flex items-center gap-4 mb-2">
            <span className="section-num">01</span>
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-brutal-black tracking-tight">ABOUT</h2>
              <div className="w-16 h-2 bg-brand-yellow border-2 border-brutal-black mt-2" />
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Bio */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="lg:col-span-2 brutal-card p-8">
            <p className="text-lg text-brutal-black leading-relaxed mb-4">
              I'm <span className="bg-brand-yellow px-1 font-black">Jaishankar Prasad Jaiswal</span> — a software engineer
              with a passion for building robust, production-ready applications. Based in Bhopal, India, I specialize in
              bridging the gap between development and operations.
            </p>
            <p className="text-brutal-black/70 leading-relaxed mb-4">
              At <span className="font-bold">Cynctech IT Solutions</span>, I architect and deliver enterprise web platforms,
              design cloud-native infrastructure, and implement automated deployment workflows. My work includes building
              <a href="https://cynctech.in" target="_blank" rel="noopener noreferrer" className="font-bold underline decoration-2 decoration-brand-blue hover:bg-brand-blue/20 transition-colors mx-1">cynctech.in</a>
              and
              <a href="https://vehiclesolution.in" target="_blank" rel="noopener noreferrer" className="font-bold underline decoration-2 decoration-brand-lime hover:bg-brand-lime/20 transition-colors mx-1">vehiclesolution.in</a>.
            </p>
            <p className="text-brutal-black/70 leading-relaxed">
              I believe in writing clean, maintainable code and automating everything that can be automated.
              My approach combines strong engineering fundamentals with modern DevOps practices to deliver
              solutions that scale.
            </p>
          </motion.div>

          {/* Quick info */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }} className="brutal-card p-6 bg-brand-yellow">
            <h3 className="font-black text-xs uppercase tracking-[0.15em] text-brutal-black mb-5 border-b-2 border-brutal-black/15 pb-3">At a Glance</h3>
            <div className="space-y-3 font-mono text-sm font-bold">
              {[
                ['Based in', 'Bhopal, MP'],
                ['Company', 'Cynctech IT Solutions'],
                ['Role', 'Full Stack Developer'],
                ['Experience', '12+ Months'],
                ['Contributions', '491+ on GitHub'],
                ['Education', 'Computer Science'],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between items-center py-1.5 border-b-2 border-brutal-black/8 last:border-0">
                  <span className="text-brutal-black/50 text-xs">{k}</span>
                  <span className="text-brutal-black text-xs">{v}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Core competencies */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {competencies.map((c, i) => (
            <motion.div key={c.title} whileHover={{ y: -4 }} className="brutal-card overflow-hidden">
              <div className={`${c.bg} border-b-[3px] border-brutal-black px-4 py-3 flex items-center gap-2`}>
                <c.icon size={18} className="text-brutal-black" />
                <h3 className="font-black text-xs uppercase tracking-wider text-brutal-black">{c.title}</h3>
              </div>
              <div className="p-4">
                <p className="text-sm text-brutal-black/60 font-medium leading-relaxed">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
