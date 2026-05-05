import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  SiJavascript, SiPython, SiCplusplus, SiGnubash,
  SiReact, SiHtml5, SiCss3, SiTailwindcss, SiBootstrap,
  SiDjango, SiNodedotjs,
  SiMysql, SiPostgresql,
  SiAmazonwebservices, SiLinux, SiRedhat, SiUbuntu,
  SiDocker, SiKubernetes, SiJenkins, SiGithubactions, SiArgocd, SiTerraform, SiAnsible,
  SiGit, SiGithub, SiGitlab,
  SiVisualstudiocode, SiVim, SiPostman, SiGreensock,
} from 'react-icons/si'

const skillCategories = [
  {
    title: 'Languages',
    color: 'from-yellow-500 to-orange-500',
    skills: [
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'C++', icon: SiCplusplus, color: '#00599C' },
      { name: 'Bash', icon: SiGnubash, color: '#4EAA25' },
    ],
  },
  {
    title: 'Frontend',
    color: 'from-cyan-500 to-blue-500',
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
      { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
      { name: 'GSAP', icon: SiGreensock, color: '#88CE02' },
    ],
  },
  {
    title: 'Backend',
    color: 'from-emerald-500 to-green-500',
    skills: [
      { name: 'Django', icon: SiDjango, color: '#092E20' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    ],
  },
  {
    title: 'Database',
    color: 'from-blue-500 to-indigo-500',
    skills: [
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    ],
  },
  {
    title: 'Cloud & Infra',
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'AWS', icon: SiAmazonwebservices, color: '#FF9900' },
      { name: 'Linux', icon: SiLinux, color: '#FCC624' },
      { name: 'Red Hat', icon: SiRedhat, color: '#EE0000' },
      { name: 'Ubuntu', icon: SiUbuntu, color: '#E95420' },
    ],
  },
  {
    title: 'DevOps & CI/CD',
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
      { name: 'Jenkins', icon: SiJenkins, color: '#D24939' },
      { name: 'GitHub Actions', icon: SiGithubactions, color: '#2088FF' },
      { name: 'ArgoCD', icon: SiArgocd, color: '#EF7B4D' },
      { name: 'Terraform', icon: SiTerraform, color: '#844FBA' },
      { name: 'Ansible', icon: SiAnsible, color: '#EE0000' },
    ],
  },
  {
    title: 'Tools',
    color: 'from-slate-400 to-slate-600',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#ffffff' },
      { name: 'GitLab', icon: SiGitlab, color: '#FC6D26' },
      { name: 'VS Code', icon: SiVisualstudiocode, color: '#007ACC' },
      { name: 'Vim', icon: SiVim, color: '#019733' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
    ],
  },
]

const Skills = () => {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true })

  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-primary-400 tracking-wider uppercase mb-3 block">
            // Tech Stack
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Skills &{' '}
            <span className="text-gradient-static">Technologies</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A comprehensive toolkit spanning frontend, backend, cloud, and DevOps
          </p>
        </motion.div>

        {/* Skill categories */}
        <div className="space-y-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * catIdx, duration: 0.5 }}
              className="glass-card rounded-2xl p-6 md:p-8"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-1 h-6 rounded-full bg-gradient-to-b ${category.color}`} />
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-white/5 to-transparent" />
                <span className="text-xs font-mono text-slate-500">
                  {category.skills.length} skills
                </span>
              </div>

              {/* Skills grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-3">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.1 * catIdx + 0.05 * i }}
                    whileHover={{ y: -4, scale: 1.05 }}
                    className="tech-icon group flex flex-col items-center gap-2.5 p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.04] hover:border-white/[0.1] cursor-default"
                  >
                    <skill.icon
                      size={28}
                      style={{ color: skill.color }}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                    <span className="text-xs font-medium text-slate-400 group-hover:text-white transition-colors text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
