import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiGitCommit, FiStar, FiGitPullRequest } from 'react-icons/fi'

const achievements = [
  { name: 'Pair Extraordinaire', icon: '🤝', desc: 'Collaborated on pull requests' },
  { name: 'Quickdraw', icon: '⚡', desc: 'Lightning fast responses' },
  { name: 'Pull Shark', icon: '🦈', desc: 'Merged pull requests' },
  { name: 'YOLO', icon: '🚀', desc: 'Merged without review' },
]

const Github = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="github" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-sm font-mono text-primary-400 tracking-wider uppercase mb-3 block">// Open Source</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">GitHub <span className="text-gradient-static">Activity</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">My open source contributions and coding activity</p>
        </motion.div>

        {/* Stats cards */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { icon: FiGitCommit, label: 'Contributions', value: '491+', color: 'text-emerald-400' },
            { icon: FiGithub, label: 'Repositories', value: '10+', color: 'text-blue-400' },
            { icon: FiStar, label: 'Achievements', value: '4', color: 'text-amber-400' },
            { icon: FiGitPullRequest, label: 'Pull Requests', value: '15+', color: 'text-purple-400' },
          ].map((stat, i) => (
            <motion.div key={stat.label} whileHover={{ y: -4 }} className="glass-card rounded-2xl p-5 text-center group">
              <stat.icon size={24} className={`mx-auto mb-3 ${stat.color} group-hover:scale-110 transition-transform`} />
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub Stats Images */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 }} className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="glass-card rounded-2xl p-6 flex items-center justify-center">
            <img src="https://github-readme-stats.vercel.app/api?username=Jaishankar7655&show_icons=true&theme=tokyonight&bg_color=00000000&hide_border=true&title_color=818cf8&icon_color=38bdf8&text_color=94a3b8" alt="GitHub Stats" className="w-full max-w-md" loading="lazy" />
          </div>
          <div className="glass-card rounded-2xl p-6 flex items-center justify-center">
            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Jaishankar7655&layout=compact&theme=tokyonight&bg_color=00000000&hide_border=true&title_color=818cf8&text_color=94a3b8" alt="Top Languages" className="w-full max-w-md" loading="lazy" />
          </div>
        </motion.div>

        {/* Streak */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4 }} className="glass-card rounded-2xl p-6 flex justify-center mb-12">
          <img src="https://github-readme-streak-stats.herokuapp.com/?user=Jaishankar7655&theme=tokyonight&background=00000000&hide_border=true&ring=818cf8&fire=38bdf8&currStreakLabel=818cf8" alt="GitHub Streak" className="w-full max-w-2xl" loading="lazy" />
        </motion.div>

        {/* Achievements */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 }}>
          <h3 className="text-xl font-bold text-white text-center mb-6">🏆 Achievements</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {achievements.map((a, i) => (
              <motion.div key={a.name} whileHover={{ y: -4, scale: 1.02 }} className="glass-card rounded-2xl p-5 text-center group cursor-default">
                <div className="text-3xl mb-3">{a.icon}</div>
                <div className="text-sm font-semibold text-white mb-1">{a.name}</div>
                <div className="text-xs text-slate-400">{a.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contribution graph */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.6 }} className="mt-12 glass-card rounded-2xl p-6 flex justify-center">
          <img src="https://github-readme-activity-graph.vercel.app/graph?username=Jaishankar7655&theme=tokyo-night&bg_color=00000000&hide_border=true&line=818cf8&point=38bdf8&area_color=6366f1&area=true" alt="Activity Graph" className="w-full" loading="lazy" />
        </motion.div>
      </div>
    </section>
  )
}

export default Github
