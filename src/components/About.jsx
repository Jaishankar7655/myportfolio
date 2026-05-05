import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCode, FiServer, FiCloud, FiTerminal } from 'react-icons/fi'

const highlights = [
  {
    icon: FiCode,
    title: 'Full Stack Development',
    description: 'Building end-to-end web applications with React, Django, and Node.js',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: FiServer,
    title: 'DevOps Engineering',
    description: 'Implementing CI/CD pipelines with Jenkins, GitHub Actions, and ArgoCD',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: FiCloud,
    title: 'Cloud Architecture',
    description: 'Designing scalable solutions on AWS with infrastructure as code',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: FiTerminal,
    title: 'Container Orchestration',
    description: 'Managing containerized apps with Docker and Kubernetes',
    color: 'from-orange-500 to-amber-500',
  },
]

const stats = [
  { value: '491+', label: 'GitHub Contributions' },
  { value: '12+', label: 'Months Experience' },
  { value: '10+', label: 'Projects Delivered' },
  { value: '15+', label: 'Technologies' },
]

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-primary-400 tracking-wider uppercase mb-3 block">
            // About Me
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Crafting Digital{' '}
            <span className="text-gradient-static">Experiences</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A passionate software engineer who loves turning complex problems into elegant solutions
          </p>
        </motion.div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left — Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-xs font-mono text-slate-500">about.js</span>
              </div>

              <div className="font-mono text-sm leading-relaxed space-y-3">
                <p className="text-slate-500">
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-blue-400">developer</span>{' '}
                  <span className="text-slate-500">=</span>{' '}
                  <span className="text-yellow-400">{'{'}</span>
                </p>
                <p className="pl-6 text-slate-300">
                  <span className="text-emerald-400">name</span>:{' '}
                  <span className="text-amber-300">"Jaishankar Prasad Jaiswal"</span>,
                </p>
                <p className="pl-6 text-slate-300">
                  <span className="text-emerald-400">location</span>:{' '}
                  <span className="text-amber-300">"Bhopal, MP, India"</span>,
                </p>
                <p className="pl-6 text-slate-300">
                  <span className="text-emerald-400">roles</span>:{' '}
                  <span className="text-blue-300">[</span>
                  <span className="text-amber-300">"Full Stack Dev"</span>,{' '}
                  <span className="text-amber-300">"DevOps"</span>
                  <span className="text-blue-300">]</span>,
                </p>
                <p className="pl-6 text-slate-300">
                  <span className="text-emerald-400">currentCompany</span>:{' '}
                  <span className="text-amber-300">"Cynctech IT Solutions"</span>,
                </p>
                <p className="pl-6 text-slate-300">
                  <span className="text-emerald-400">passion</span>:{' '}
                  <span className="text-amber-300">"Building scalable solutions"</span>,
                </p>
                <p className="pl-6 text-slate-300">
                  <span className="text-emerald-400">motto</span>:{' '}
                  <span className="text-amber-300">"One commit at a time"</span>
                </p>
                <p className="text-yellow-400">{'}'}</p>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed">
              I specialize in creating production-ready solutions that bridge the gap between 
              technology and innovation. With hands-on experience in enterprise web applications, 
              automated deployment workflows, and cloud infrastructure, I bring a holistic approach 
              to software development.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Currently working at <span className="text-primary-400 font-medium">Cynctech IT Solutions</span> in 
              Bhopal, where I build and deploy enterprise web applications using modern tech stacks 
              including React, Django, AWS, and Kubernetes.
            </p>
          </motion.div>

          {/* Right — Highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-card rounded-2xl p-6 group cursor-default"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <item.icon size={22} className="text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2 text-sm">{item.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="glass-card rounded-2xl p-6 text-center group"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient-static mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
