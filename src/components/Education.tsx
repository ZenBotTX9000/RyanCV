'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Book, GraduationCap } from 'lucide-react'

export default function Education() {
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

  const educationItems = [
    {
      year: "2008-2009",
      institution: "AFDA",
      degree: "BA in Motion Picture Medium",
      description: "Majoring in Cinematography, Directing, Editing, and Script Writing. Studies not concluded due to economic constraints.",
    },
    {
      year: "Graduated 2007",
      institution: "Abbotts College",
      degree: "Cambridge Syllabus",
      description: "Passed with Merit, aggregate score 1260-1439.",
    },
    {
      year: "Attended",
      institution: "Stellenberg High",
      degree: "",
      description: "Completed secondary education.",
    },
    {
      year: "Commenced",
      institution: "Kenridge Primary",
      degree: "",
      description: "Primary education foundation.",
    },
  ]

  return (
    <section id="education" className="py-20 px-4 bg-light-gradient dark:bg-dark-mode-surface-gradient">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Education
            </h2>
            <div className="w-24 h-1 bg-beige-gradient mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-dark-grey dark:text-light-grey max-w-2xl mx-auto">
              Academic background shaping my professional journey
            </p>
          </motion.div>
          <div className="grid gap-8">
            {educationItems.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="card-hover bg-white/80 dark:bg-dark-mode-bg/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-beige/20"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-beige-gradient rounded-full flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-dark-grey" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold gradient-text">{edu.institution}</h3>
                    <p className="text-sm text-dark-grey dark:text-light-grey">{edu.year}</p>
                  </div>
                </div>
                <p className="text-dark-grey dark:text-light-grey">{edu.degree}</p>
                <p className="text-dark-grey dark:text-light-grey mt-2">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}