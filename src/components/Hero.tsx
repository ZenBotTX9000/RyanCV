
Hero.tsx

---------


'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Download, MapPin, Calendar, Globe } from 'lucide-react'

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const handleDownload = (type: 'cv' | 'clearance') => {
    // Placeholder for download functionality
    console.log(`Downloading ${type}`)
    alert(`${type === 'cv' ? 'CV' : 'Criminal Clearance'} download will be implemented`)
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto text-center max-w-4xl"
      >
        {/* Profile Image Placeholder */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          className="w-32 h-32 mx-auto mb-8 bg-beige-gradient rounded-full flex items-center justify-center shadow-lg floating"
        >
          <div className="w-28 h-28 bg-dark-gradient rounded-full flex items-center justify-center">
            <span className="text-4xl font-bold text-light-grey">RS</span>
          </div>
        </motion.div>

        {/* Name and Title */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold gradient-text mb-4"
        >
          Ryan St Dare
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-dark-grey dark:text-light-grey mb-6 font-light"
        >
          English Educator • Web Developer • Creative Professional
        </motion.p>

        {/* Quick Info */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-8 text-sm md:text-base"
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-light-gradient dark:bg-dark-mode-surface-gradient rounded-full">
            <Calendar className="w-4 h-4 text-beige" />
            <span className="text-dark-grey dark:text-light-grey">Age 36</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-light-gradient dark:bg-dark-mode-surface-gradient rounded-full">
            <MapPin className="w-4 h-4 text-beige" />
            <span className="text-dark-grey dark:text-light-grey">South Africa</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-light-gradient dark:bg-dark-mode-surface-gradient rounded-full">
            <Globe className="w-4 h-4 text-beige" />
            <span className="text-dark-grey dark:text-light-grey">TEFL+TESOL Certified</span>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-dark-grey dark:text-light-grey mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          A diligent professional with a confident demeanor, contributing to positive and ethical work environments. 
          Fast learner, well-versed in modern trends and technologies, capable of completing tasks independently and collaboratively.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleDownload('cv')}
            className="btn-hover bg-beige-gradient hover:bg-dark-gradient text-dark-grey hover:text-light-grey px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg group"
          >
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            Download CV
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleDownload('clearance')}
            className="btn-hover bg-dark-gradient hover:bg-beige-gradient text-light-grey hover:text-dark-grey px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg group"
          >
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            Criminal Clearance
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-dark-grey dark:border-light-grey rounded-full mx-auto flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-beige-gradient rounded-full mt-2"
            />
          </motion.div>
          <p className="text-sm text-dark-grey dark:text-light-grey mt-2">Scroll to explore</p>
        </motion.div>
      </motion.div>
    </section>
  )
}