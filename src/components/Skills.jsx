import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FaJs, FaPython, FaReact, FaHtml5, FaCss3Alt, FaBootstrap,
  FaNodeJs, FaDocker, FaJenkins, FaAws, FaLinux, FaRedhat, FaUbuntu,
  FaGitAlt, FaGithub, FaGitlab,
} from 'react-icons/fa'
import {
  FiDatabase, FiBox, FiCode, FiTerminal, FiMonitor, FiTool,
  FiCpu, FiLayers, FiServer, FiCloud, FiSend,
} from 'react-icons/fi'

const categories = [
  {
    title: 'Languages', bg: 'bg-brand-yellow',
    skills: [
      { name: 'JavaScript', icon: FaJs }, { name: 'Python', icon: FaPython },
      { name: 'C++', icon: FiCpu }, { name: 'Bash', icon: FiTerminal },
    ],
  },
  {
    title: 'Frontend', bg: 'bg-brand-blue',
    skills: [
      { name: 'React', icon: FaReact }, { name: 'HTML5', icon: FaHtml5 },
      { name: 'CSS3', icon: FaCss3Alt }, { name: 'Tailwind', icon: FiLayers },
      { name: 'Bootstrap', icon: FaBootstrap }, { name: 'GSAP', icon: FiCode },
    ],
  },
  {
    title: 'Backend', bg: 'bg-brand-lime',
    skills: [
      { name: 'Django', icon: FiServer }, { name: 'Node.js', icon: FaNodeJs },
    ],
  },
  {
    title: 'Database', bg: 'bg-brand-lavender',
    skills: [
      { name: 'MySQL', icon: FiDatabase }, { name: 'PostgreSQL', icon: FiDatabase },
    ],
  },
  {
    title: 'Cloud', bg: 'bg-brand-coral',
    skills: [
      { name: 'AWS', icon: FaAws }, { name: 'Linux', icon: FaLinux },
      { name: 'Red Hat', icon: FaRedhat }, { name: 'Ubuntu', icon: FaUbuntu },
    ],
  },
  {
    title: 'DevOps', bg: 'bg-brand-pink',
    skills: [
      { name: 'Docker', icon: FaDocker }, { name: 'Kubernetes', icon: FiCloud },
      { name: 'Jenkins', icon: FaJenkins }, { name: 'GitHub Actions', icon: FaGithub },
      { name: 'ArgoCD', icon: FiBox }, { name: 'Terraform', icon: FiLayers },
      { name: 'Ansible', icon: FiTool },
    ],
  },
  {
    title: 'Tools', bg: 'bg-brand-peach',
    skills: [
      { name: 'Git', icon: FaGitAlt }, { name: 'GitHub', icon: FaGithub },
      { name: 'GitLab', icon: FaGitlab }, { name: 'VS Code', icon: FiMonitor },
      { name: 'Vim', icon: FiTerminal }, { name: 'Postman', icon: FiSend },
    ],
  },
]

const Skills = () => {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true })

  return (
    <section id="skills" className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="section-num">02</span>
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-brutal-black tracking-tight">TECH STACK</h2>
              <div className="w-20 h-2 bg-brand-pink border-2 border-brutal-black mt-2" />
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.05 * ci }}
              className="brutal-card overflow-hidden"
            >
              {/* Header */}
              <div className={`${cat.bg} border-b-[3px] border-brutal-black px-5 py-3 flex justify-between items-center`}>
                <h3 className="font-black text-sm uppercase tracking-wider text-brutal-black">{cat.title}</h3>
                <span className="text-xs font-bold text-brutal-black/50">{cat.skills.length}</span>
              </div>
              {/* Skills */}
              <div className="p-4 flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05, rotate: Math.random() > 0.5 ? 2 : -2 }}
                    className="flex items-center gap-2 px-3 py-2 bg-brutal-white border-2 border-brutal-black shadow-brutal-sm text-sm font-bold text-brutal-black cursor-default"
                  >
                    <skill.icon size={16} />
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-10 overflow-hidden border-y-[3px] border-brutal-black bg-brutal-black py-3"
        >
          <div className="animate-marquee flex gap-10 whitespace-nowrap">
            {[...Array(2)].map((_, si) => (
              <div key={si} className="flex gap-10 items-center">
                {['React ⚛️', 'Django 🐍', 'Docker 🐳', 'K8s ☸️', 'AWS ☁️', 'Jenkins 🔧', 'Terraform 🏗️', 'GitHub Actions 🤖', 'PostgreSQL 🐘', 'Node.js 💚', 'Linux 🐧'].map((t) => (
                  <span key={`${si}-${t}`} className="text-sm font-black text-brand-yellow uppercase tracking-wider">{t}</span>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
