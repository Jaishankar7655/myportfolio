import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiGitCommit, FiStar, FiGitPullRequest } from 'react-icons/fi'

const Github = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="github" className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="mb-12">
          <div className="flex items-center gap-4 mb-2">
            <span className="section-num">05</span>
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-brutal-black tracking-tight">GITHUB</h2>
              <div className="w-16 h-2 bg-brand-lime border-2 border-brutal-black mt-2" />
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { icon: FiGitCommit, label: 'Contributions', val: '491+', bg: 'bg-brand-lime' },
            { icon: FiGithub, label: 'Repositories', val: '10+', bg: 'bg-brand-blue' },
            { icon: FiStar, label: 'Achievements', val: '4', bg: 'bg-brand-yellow' },
            { icon: FiGitPullRequest, label: 'Pull Requests', val: '15+', bg: 'bg-brand-pink' },
          ].map((s) => (
            <motion.div key={s.label} whileHover={{ y: -3 }} className={`brutal-card ${s.bg} p-5 text-center`}>
              <s.icon size={22} className="mx-auto mb-2 text-brutal-black" />
              <div className="text-2xl font-black text-brutal-black">{s.val}</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-brutal-black/50">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats images */}
        <div className="grid md:grid-cols-2 gap-5 mb-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }} className="brutal-card p-5 bg-brutal-black">
            <img src="https://github-readme-stats.vercel.app/api?username=Jaishankar7655&show_icons=true&theme=dark&bg_color=1a1a2e&hide_border=true&title_color=FFE600&icon_color=4DEEEA&text_color=fff&ring_color=FFE600" alt="GitHub Stats" className="w-full max-w-md mx-auto" loading="lazy" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 }} className="brutal-card p-5 bg-brutal-black">
            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Jaishankar7655&layout=compact&theme=dark&bg_color=1a1a2e&hide_border=true&title_color=FFE600&text_color=fff" alt="Top Languages" className="w-full max-w-md mx-auto" loading="lazy" />
          </motion.div>
        </div>

        {/* Streak */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4 }} className="brutal-card p-5 bg-brutal-black flex justify-center mb-8">
          <img src="https://github-readme-streak-stats.herokuapp.com/?user=Jaishankar7655&theme=dark&background=1a1a2e&hide_border=true&ring=FFE600&fire=FF6B9D&currStreakLabel=FFE600&sideLabels=fff&dates=666" alt="GitHub Streak" className="w-full max-w-2xl" loading="lazy" />
        </motion.div>

        {/* Achievements */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 }}>
          <h3 className="font-black text-xs uppercase tracking-[0.15em] text-brutal-black/50 mb-4">GitHub Achievements</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Pair Extraordinaire', desc: 'Collaborative PR contributions', bg: 'bg-brand-blue' },
              { name: 'Quickdraw', desc: 'Fast response and reviews', bg: 'bg-brand-yellow' },
              { name: 'Pull Shark', desc: 'Multiple merged pull requests', bg: 'bg-brand-lime' },
              { name: 'YOLO', desc: 'Confident direct merges', bg: 'bg-brand-pink' },
            ].map((a) => (
              <motion.div key={a.name} whileHover={{ y: -3 }} className={`brutal-card ${a.bg} p-4 cursor-default`}>
                <div className="text-sm font-black text-brutal-black mb-1">{a.name}</div>
                <div className="text-[10px] text-brutal-black/50 font-bold">{a.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Github
