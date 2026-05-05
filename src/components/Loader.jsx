import { motion } from 'framer-motion'

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-surface-950">
      {/* Background gradient orbs */}
      <div className="gradient-orb gradient-orb-1 animate-blob" />
      <div className="gradient-orb gradient-orb-2 animate-blob" style={{ animationDelay: '2s' }} />
      
      <div className="flex flex-col items-center gap-8">
        {/* Animated logo */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
          className="relative"
        >
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-2xl shadow-primary-500/30">
            <span className="text-4xl font-bold text-white font-mono">J</span>
          </div>
          
          {/* Orbiting ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            className="absolute -inset-4 rounded-3xl border border-primary-500/20"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
            className="absolute -inset-8 rounded-[2rem] border border-accent-500/10"
          />
        </motion.div>

        {/* Loading text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col items-center gap-3"
        >
          <p className="text-lg font-mono text-primary-400 tracking-wider">
            Initializing...
          </p>
          
          {/* Progress bar */}
          <div className="w-48 h-1 bg-surface-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.8, delay: 0.3, ease: 'easeInOut' }}
              className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Loader
