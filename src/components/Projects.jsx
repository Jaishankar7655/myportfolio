import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiExternalLink, FiGithub, FiFolder, FiStar } from 'react-icons/fi'

const projects = [
  {
    title: 'Cynctech IT Solutions',
    subtitle: 'Company Website',
    description: 'Official website for Cynctech IT Solutions — a modern, responsive corporate website showcasing IT services and company portfolio.',
    tags: ['React', 'Tailwind CSS', 'JavaScript'],
    category: 'fullstack',
    live: 'https://cynctech.in/',
    featured: true,
    color: 'from-blue-600 to-cyan-500',
  },
  {
    title: 'Vehicle Solution',
    subtitle: 'Service Management Platform',
    description: 'A comprehensive vehicle service management platform for booking, tracking, and managing vehicle maintenance services.',
    tags: ['React', 'Django', 'PostgreSQL', 'AWS'],
    category: 'fullstack',
    live: 'https://vehiclesolution.in/',
    featured: true,
    color: 'from-emerald-600 to-teal-500',
  },
  {
    title: 'Homecare Technician',
    subtitle: 'DevOps Pipeline Project',
    description: 'Full-stack homecare technician booking platform with complete DevOps pipeline, Docker containerization, and CI/CD automation.',
    tags: ['Docker', 'Jenkins', 'AWS', 'Kubernetes'],
    category: 'devops',
    github: 'https://github.com/Jaishankar7655/homecare-technician',
    featured: true,
    color: 'from-purple-600 to-pink-500',
  },
  {
    title: 'Chat App DevOps',
    subtitle: 'Real-time Chat Application',
    description: 'Real-time chat app with DevOps pipeline, featuring messaging, authentication, and automated CI/CD deployment.',
    tags: ['JavaScript', 'Node.js', 'Docker'],
    category: 'devops',
    github: 'https://github.com/Jaishankar7655/chat-app-devops',
    color: 'from-orange-600 to-amber-500',
  },
  {
    title: 'E-Commerce Platform',
    subtitle: 'Online Shopping Website',
    description: 'Fully functional e-commerce website with product catalog, shopping cart, and modern UI/UX design.',
    tags: ['React', 'CSS3', 'JavaScript'],
    category: 'fullstack',
    github: 'https://github.com/Jaishankar7655/E-commerce',
    color: 'from-rose-600 to-red-500',
  },
  {
    title: 'Task Manager',
    subtitle: 'Productivity Tool',
    description: 'Dynamic task management app — add, complete, and remove tasks with local storage persistence.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    category: 'fullstack',
    github: 'https://github.com/Jaishankar7655/task-manager',
    color: 'from-indigo-600 to-violet-500',
  },
  {
    title: 'Quiz Application',
    subtitle: 'Interactive Quiz Platform',
    description: 'Interactive quiz app with categories, timed questions, score tracking, and responsive design.',
    tags: ['JavaScript', 'HTML5', 'CSS3'],
    category: 'fullstack',
    github: 'https://github.com/Jaishankar7655/Quiz_App',
    color: 'from-sky-600 to-blue-500',
  },
  {
    title: 'Infrastructure Automation',
    subtitle: 'IaC Solution',
    description: 'IaC solution using Terraform and Ansible for automated AWS provisioning and GitOps with ArgoCD.',
    tags: ['Terraform', 'Ansible', 'AWS'],
    category: 'devops',
    color: 'from-fuchsia-600 to-purple-500',
  },
]

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Full Stack', value: 'fullstack' },
  { label: 'DevOps', value: 'devops' },
]

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true })
  const filtered = activeFilter === 'all' ? projects : projects.filter(p => p.category === activeFilter)

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
          <span className="text-sm font-mono text-primary-400 tracking-wider uppercase mb-3 block">// Portfolio</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Featured <span className="text-gradient-static">Projects</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">Production applications and DevOps implementations</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }} className="flex justify-center gap-2 mb-12">
          {filters.map(f => (
            <button key={f.value} onClick={() => setActiveFilter(f.value)} className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${activeFilter === f.value ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg shadow-primary-500/20' : 'glass-card text-slate-400 hover:text-white'}`}>{f.label}</button>
          ))}
        </motion.div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div key={p.title} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.4, delay: i * 0.05 }} whileHover={{ y: -6 }} className="group glass-card rounded-2xl overflow-hidden hover:border-primary-500/20 transition-all">
                <div className={`relative h-36 bg-gradient-to-br ${p.color} p-5 flex flex-col justify-between`}>
                  <div className="relative flex items-start justify-between">
                    <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur flex items-center justify-center"><FiFolder size={20} className="text-white" /></div>
                    {p.featured && <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur text-xs text-white font-medium"><FiStar size={12} /> Featured</div>}
                  </div>
                  <div className="relative"><h3 className="text-lg font-bold text-white">{p.title}</h3><p className="text-white/80 text-sm">{p.subtitle}</p></div>
                </div>
                <div className="p-5">
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">{p.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tags.map(t => <span key={t} className="px-2.5 py-1 rounded-md text-xs font-mono text-slate-300 bg-white/[0.04] border border-white/[0.06]">{t}</span>)}
                  </div>
                  <div className="flex gap-3">
                    {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] transition-all"><FiGithub size={16} />Code</a>}
                    {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-white bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 transition-all shadow-lg shadow-primary-500/10"><FiExternalLink size={16} />Live</a>}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.8 }} className="text-center mt-12">
          <a href="https://github.com/Jaishankar7655?tab=repositories" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-xl text-slate-300 hover:text-white transition-all glow-border"><FiGithub size={18} />View All on GitHub</a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
