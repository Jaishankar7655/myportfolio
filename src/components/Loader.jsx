import { motion } from 'framer-motion'

const Loader = () => (
  <div className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-yellow">
    <motion.div
      initial={{ scale: 0, rotate: -20 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ duration: 0.5, type: 'spring' }}
      className="flex flex-col items-center gap-6"
    >
      <div className="w-24 h-24 bg-brutal-black border-[4px] border-brutal-black flex items-center justify-center shadow-brutal-lg">
        <span className="text-4xl font-black text-brand-yellow font-mono">J</span>
      </div>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 200 }}
        transition={{ duration: 1.2, delay: 0.3, ease: 'easeInOut' }}
        className="h-3 bg-brutal-black border-2 border-brutal-black"
      />
      <p className="text-brutal-black font-black text-sm uppercase tracking-[0.3em]">Loading...</p>
    </motion.div>
  </div>
)

export default Loader
