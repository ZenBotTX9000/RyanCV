'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
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

  return (
    <section id="contact" className="py-20 px-4 bg-light-gradient dark:bg-dark-mode-surface-gradient">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Contact
            </h2>
            <div className="w-24 h-1 bg-beige-gradient mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-dark-grey dark:text-light-grey max-w-2xl mx-auto">
              Get in touch for opportunities or inquiries
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="card-hover bg-white/80 dark:bg-dark-mode-bg/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-beige/20 text-center"
          >
            <div className="space-y-6">
              <motion.div whileHover={{ scale: 1.05 }} className="flex justify-center">
                <Mail className="w-6 h-6 text-dark-grey dark:text-light-grey mr-2" />
                <a href="mailto:rstdare@gmail.com" className="text-dark-grey dark:text-light-grey hover:text-beige transition-colors">
                  rstdare@gmail.com
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="flex justify-center">
                <Phone className="w-6 h-6 text-dark-grey dark:text-light-grey mr-2" />
                <span className="text-dark-grey dark:text-light-grey">+27 123 456 7890</span> {/* Placeholder, update with actual number */}
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="flex justify-center">
                <MapPin className="w-6 h-6 text-dark-grey dark:text-light-grey mr-2" />
                <span className="text-dark-grey dark:text-light-grey">South Africa</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}