'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Brain, Code, Mic, Users, Calendar, Layers } from 'lucide-react'

export default function Skills() {
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

  const skills = [
    { icon: Brain, label: "Vocabulary", description: "Strong command of language" },
    { icon: Mic, label: "Pronunciation", description: "Clear and effective speech" },
    { icon: Users, label: "Presentation", description: "Engaging public speaking" },
    { icon: Calendar, label: "Planning", description: "Organized and strategic" },
    { icon: Layers, label: "Management", description: "Efficient task coordination" },
    { icon: Code, label: "Tech Savvy", description: "Proficient in modern tools" },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-light-gradient dark:bg-dark-mode-surface-gradient">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Skills
            </h2>
            <div className="w-24 h-1 bg-beige-gradient mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-dark-grey dark:text-light-grey max-w-2xl mx-auto">
              Core competencies driving my professional success
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="card-hover bg-white/80 dark:bg-dark-mode-bg/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-beige/20"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-beige-gradient rounded-full flex items-center justify-center">
                    <skill.icon className="w-6 h-6 text-dark-grey" />
                  </div>
                  <h3 className="text-xl font-bold gradient-text">{skill.label}</h3>
                </div>
                <p className="text-dark-grey dark:text-light-grey">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}