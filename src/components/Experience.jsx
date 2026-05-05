import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCalendar, FiMapPin, FiArrowRight } from 'react-icons/fi'

const experiences = [
  {
    title: 'Full Stack Developer',
    company: 'Cynctech IT Solutions',
    location: 'Bhopal, MP',
    period: 'Present',
    duration: '8 months',
    type: 'Full-time',
    description: [
      'Architecting and deploying enterprise web applications using React and Django REST framework',
      'Designing and managing cloud infrastructure on AWS for production environments',
      'Implementing CI/CD pipelines with Jenkins for automated testing and zero-downtime deployments',
      'Built and launched cynctech.in and vehiclesolution.in from concept to production',
    ],
    tech: ['React', 'Django', 'AWS', 'Docker', 'Jenkins', 'PostgreSQL'],
    bg: 'bg-brand-yellow',
  },
  {
    title: 'Full Stack Developer Intern',
    company: 'Netligent Technologies Pvt. Ltd.',
    location: 'Remote',
    period: '2024',
    duration: '3 months',
    type: 'Internship',
    description: [
      'Developed full-stack solutions using modern web frameworks for enterprise clients',
      'Automated deployment workflows using Docker containers and CI/CD tooling',
      'Built and documented RESTful APIs serving multiple frontend applications',
    ],
    tech: ['React', 'Node.js', 'Docker', 'Git', 'REST API'],
    bg: 'bg-brand-blue',
  },
  {
    title: 'Full Stack Developer Trainee',
    company: 'Netligent Technologies Pvt. Ltd.',
    location: 'Remote',
    period: '2024',
    duration: '1 month',
    type: 'Training',
    description: [
      'Completed intensive training program covering the modern web development stack',
      'Built hands-on projects spanning frontend, backend, and deployment technologies',
    ],
    tech: ['JavaScript', 'React', 'Python', 'Git', 'Linux'],
    bg: 'bg-brand-lime',
  },
]

const Experience = () => {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true })

  return (
    <section id="experience" className="relative py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="mb-12">
          <div className="flex items-center gap-4 mb-2">
            <span className="section-num">03</span>
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-brutal-black tracking-tight">EXPERIENCE</h2>
              <div className="w-16 h-2 bg-brand-blue border-2 border-brutal-black mt-2" />
            </div>
          </div>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title + exp.company}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.12 * i }}
              className="brutal-card overflow-hidden"
            >
              <div className={`${exp.bg} border-b-[3px] border-brutal-black px-6 py-4 flex flex-wrap items-center justify-between gap-3`}>
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 bg-brutal-black text-white text-[10px] font-black uppercase tracking-widest">{exp.type}</span>
                  <h3 className="font-black text-brutal-black text-lg">{exp.title}</h3>
                </div>
                <div className="flex items-center gap-3 text-xs font-bold text-brutal-black/60">
                  <span className="flex items-center gap-1"><FiCalendar size={12} /> {exp.period} · {exp.duration}</span>
                  <span className="flex items-center gap-1"><FiMapPin size={12} /> {exp.location}</span>
                </div>
              </div>

              <div className="p-6">
                <p className="font-bold text-brutal-black mb-4">{exp.company}</p>

                <ul className="space-y-2 mb-5">
                  {exp.description.map((d, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-brutal-black/65 leading-relaxed">
                      <FiArrowRight size={14} className="text-brutal-black/40 mt-0.5 flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map(t => <span key={t} className="brutal-tag text-[10px]">{t}</span>)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
