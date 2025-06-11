
page.tsx

-----

'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import ChatBot from '@/components/ChatBot'
import ScrollToTop from '@/components/ScrollToTop'
import LoadingScreen from '@/components/LoadingScreen'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [showChatBot, setShowChatBot] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-light-gradient dark:bg-dark-mode-gradient transition-all duration-500">
      <Header />
      
      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>

      {/* Chat Bot Toggle Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShowChatBot(!showChatBot)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-beige-gradient dark:bg-dark-gradient rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
      >
        <motion.div
          animate={{ rotate: showChatBot ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg
            className="w-6 h-6 text-dark-grey dark:text-light-grey group-hover:text-beige dark:group-hover:text-beige transition-colors duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {showChatBot ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            )}
          </svg>
        </motion.div>
      </motion.button>

      {/* Chat Bot */}
      <AnimatePresence>
        {showChatBot && (
          <ChatBot onClose={() => setShowChatBot(false)} />
        )}
      </AnimatePresence>

      <ScrollToTop />
    </div>
  )
}