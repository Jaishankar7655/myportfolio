import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'

const experiences = [
  {
    title: 'Full Stack Developer',
    company: 'Cynctech IT Solutions',
    location: 'Bhopal, MP',
    period: 'Present',
    duration: '8 months',
    type: 'Full-time',
    description: [
      'Building and deploying enterprise web applications using React and Django',
      'Implementing CI/CD pipelines for automated testing and deployment',
      'Managing cloud infrastructure on AWS for production environments',
      'Developed cynctech.in — the company\'s official website',
      'Built vehiclesolution.in — a vehicle service management platform',
    ],
    technologies: ['React', 'Django', 'AWS', 'Docker', 'Jenkins', 'PostgreSQL'],
    color: 'from-primary-500 to-accent-500',
  },
  {
    title: 'Full Stack Developer Intern',
    company: 'Netligent Technologies Pvt. Ltd.',
    location: 'Remote',
    period: '2024',
    duration: '3 months',
    type: 'Internship',
    description: [
      'Developed full-stack solutions using modern web frameworks',
      'Automated deployment workflows using Docker and CI/CD tools',
      'Collaborated with cross-functional teams on enterprise projects',
      'Implemented RESTful APIs with comprehensive documentation',
    ],
    technologies: ['React', 'Node.js', 'Docker', 'Git', 'REST API'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Full Stack Developer Trainee',
    company: 'Netligent Technologies Pvt. Ltd.',
    location: 'Remote',
    period: '2024',
    duration: '1 month',
    type: 'Training',
    description: [
      'Intensive training in modern web development stack',
      'Hands-on projects covering frontend and backend technologies',
      'Learned best practices for version control and team collaboration',
    ],
    technologies: ['JavaScript', 'React', 'Python', 'Git', 'Linux'],
    color: 'from-emerald-500 to-teal-500',
  },
]

const Experience = () => {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true })

  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-primary-400 tracking-wider uppercase mb-3 block">
            // Career Journey
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Professional{' '}
            <span className="text-gradient-static">Experience</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            My journey building production-ready solutions across industries
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-accent-500 to-transparent md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title + exp.company}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 * i, duration: 0.6 }}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-12 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 border-4 border-surface-950 z-10 shadow-lg shadow-primary-500/30" />

                {/* Content card */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="glass-card rounded-2xl p-6 md:p-8 group hover:border-primary-500/20 transition-all"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`px-2.5 py-0.5 rounded-md text-xs font-medium bg-gradient-to-r ${exp.color} text-white`}>
                            {exp.type}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-primary-400 font-medium">{exp.company}</p>
                      </div>
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg opacity-20 group-hover:opacity-100 transition-opacity`}>
                        <FiBriefcase size={20} className="text-white" />
                      </div>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-4">
                      <span className="flex items-center gap-1.5">
                        <FiCalendar size={14} />
                        {exp.period} · {exp.duration}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FiMapPin size={14} />
                        {exp.location}
                      </span>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2 mb-5">
                      {exp.description.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-slate-400">
                          <span className="text-primary-500 mt-1.5 flex-shrink-0">▸</span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-xs font-mono text-slate-300 bg-white/[0.04] border border-white/[0.06]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
