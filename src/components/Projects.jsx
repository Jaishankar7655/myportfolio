import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiExternalLink, FiGithub, FiStar } from 'react-icons/fi'

const projects = [
  { title: 'Cynctech IT Solutions', sub: 'Corporate Website', desc: 'Modern, responsive corporate website showcasing IT services, company portfolio, and client solutions.', tags: ['React', 'Tailwind CSS', 'JavaScript'], cat: 'fullstack', live: 'https://cynctech.in/', featured: true, bg: 'bg-brand-blue' },
  { title: 'Vehicle Solution', sub: 'Service Management Platform', desc: 'Comprehensive vehicle service management platform enabling booking, tracking, and maintenance scheduling.', tags: ['React', 'Django', 'PostgreSQL', 'AWS'], cat: 'fullstack', live: 'https://vehiclesolution.in/', featured: true, bg: 'bg-brand-lime' },
  { title: 'Homecare Technician', sub: 'DevOps Pipeline Project', desc: 'Full-stack booking platform with containerized deployment, CI/CD automation, and infrastructure as code.', tags: ['Docker', 'Jenkins', 'AWS', 'K8s'], cat: 'devops', github: 'https://github.com/Jaishankar7655/homecare-technician', featured: true, bg: 'bg-brand-pink' },
  { title: 'Chat App DevOps', sub: 'Real-time Communication', desc: 'Real-time messaging application with automated CI/CD pipeline and containerized deployment.', tags: ['JavaScript', 'Node.js', 'Docker'], cat: 'devops', github: 'https://github.com/Jaishankar7655/chat-app-devops', bg: 'bg-brand-yellow' },
  { title: 'E-Commerce Platform', sub: 'Online Marketplace', desc: 'Full e-commerce website with product catalog, shopping cart, and responsive storefront.', tags: ['React', 'CSS3', 'JavaScript'], cat: 'fullstack', github: 'https://github.com/Jaishankar7655/E-commerce', bg: 'bg-brand-coral' },
  { title: 'Task Manager', sub: 'Productivity Application', desc: 'Dynamic task management app with persistent storage, priority sorting, and clean UI.', tags: ['HTML5', 'CSS3', 'JavaScript'], cat: 'fullstack', github: 'https://github.com/Jaishankar7655/task-manager', bg: 'bg-brand-lavender' },
  { title: 'Quiz Application', sub: 'Interactive Learning', desc: 'Interactive quiz platform with timed questions, scoring system, and multiple categories.', tags: ['JavaScript', 'HTML5', 'CSS3'], cat: 'fullstack', github: 'https://github.com/Jaishankar7655/Quiz_App', bg: 'bg-brand-sky' },
  { title: 'Infrastructure Automation', sub: 'IaC Solution', desc: 'Infrastructure as Code solution for automated AWS resource provisioning and configuration management.', tags: ['Terraform', 'Ansible', 'AWS'], cat: 'devops', bg: 'bg-brand-peach' },
]

const Projects = () => {
  const [filter, setFilter] = useState('all')
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true })
  const filtered = filter === 'all' ? projects : projects.filter(p => p.cat === filter)

  return (
    <section id="projects" className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="mb-12">
          <div className="flex items-center gap-4 mb-2">
            <span className="section-num">04</span>
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-brutal-black tracking-tight">PROJECTS</h2>
              <div className="w-16 h-2 bg-brand-coral border-2 border-brutal-black mt-2" />
            </div>
          </div>
        </motion.div>

        <div className="flex gap-3 mb-10">
          {[{ l: 'All Projects', v: 'all' }, { l: 'Full Stack', v: 'fullstack' }, { l: 'DevOps', v: 'devops' }].map(f => (
            <button key={f.v} onClick={() => setFilter(f.v)} className={`brutal-btn text-xs ${filter === f.v ? 'bg-brand-yellow text-brutal-black' : 'bg-brutal-white text-brutal-black'}`}>
              {f.l}
            </button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div key={p.title} layout initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.25 }}
                className="brutal-card overflow-hidden group">
                <div className={`${p.bg} border-b-[3px] border-brutal-black px-5 py-4 flex items-center justify-between`}>
                  <div>
                    <h3 className="font-black text-brutal-black text-base">{p.title}</h3>
                    <p className="text-[10px] font-bold text-brutal-black/50 uppercase tracking-widest">{p.sub}</p>
                  </div>
                  {p.featured && (
                    <span className="flex items-center gap-1 px-2 py-0.5 bg-brutal-black text-white text-[9px] font-black uppercase tracking-widest">
                      <FiStar size={9} /> Featured
                    </span>
                  )}
                </div>

                <div className="p-5">
                  <p className="text-sm text-brutal-black/60 mb-4 leading-relaxed">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.tags.map(t => <span key={t} className="brutal-tag text-[9px]">{t}</span>)}
                  </div>
                  <div className="flex gap-4 pt-2 border-t-2 border-brutal-black/8">
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-bold text-brutal-black/50 hover:text-brutal-black transition-colors">
                        <FiGithub size={14} /> Source Code
                      </a>
                    )}
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-black text-brutal-black hover:underline">
                        <FiExternalLink size={14} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="text-center mt-10">
          <a href="https://github.com/Jaishankar7655?tab=repositories" target="_blank" rel="noopener noreferrer" className="brutal-btn bg-brutal-black text-brand-yellow inline-flex items-center gap-2">
            <FiGithub size={16} /> View All Repositories
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
