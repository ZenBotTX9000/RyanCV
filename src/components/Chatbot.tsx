'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, X } from 'lucide-react'
import styled from 'styled-components'

// Interface for messages
interface Message {
  role: 'user' | 'assistant'
  content: string
}

// Interface for LLM Training Info
interface LLMTrainingInfo {
  skills: string
  teachingExperience: string
  travel: string
  transportExperience: string
  languages: string
  lifestyle: string
  farmExperience: string
  interests: string
  technology: string
  aiExposure: string
  cryptocurrency: string
  sports: string
  partTimeWork: string
  livingArrangements: string
  financialBackground: string
  chatbotPreferences: string
}

// Styled components for the training info section
const TrainingInfoSection = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: #f8f9;
  border-radius: 8px;
  border: 1px solid #ccc;
`

const TrainingInfoTitle = styled.h4`
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
`

const TrainingInfoText = styled.p`
  margin: 8px 0;
  line-height:1.5;
  color: #555;
`

export default function Chatbot({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const chatEndRef = useRef<HTMLDivElement>(null)

  // API configuration
  const API_KEY = 'sk-or-v1-cc339c4bc6eec646b7cd596e089f24c8a2742c365e55eb1f0e15b69f3592a9c'
  const API_URL = 'https://openrouter.ai/api/v1/chat/completions'
  // LLM Training Information (extensively detailed)
  const llmTrainingInfo: LLMTrainingInfo = {
    skills:
      'Ryan St. Dare possesses a robust skill set including exceptional proficiency in vocabulary and pronunciation, delivering engaging presentations, fostering audience engagement, strategic planning, and effective management. These competencies enable him to excel in educational, professional environments requiring dynamic communication and leadership.',
    teachingExperience:
      'Ryan has extensive teaching experience across diverse settings, including large and small group classes, one-on-one tutoring, public schools, private centers, and online platforms. He has utilized various teaching tools such as chalkboards, whiteboards, and interactive displays, with or without microphones and teaching assistants. His expertise spans communicative and academic syllabi, covering both British and American English standards, ensuring comprehensive language instruction tailored to learner needs.',
    travel:
      'Ryan’s global experiences include living in suburban areas and on a Wine and olive Farm (now an Equestrian Center). He has traveled extensively to South Africa, Namibia, Ethiopia, the United States (twice), Dubai, Doha, Cambodia, Vietnam, Thailand, and the Myanmar border. His ability to adapt and thrive independently in foreign countries underscores his resilience and cultural adaptability.',
    transportExperience:
      'Ryan has navigated diverse modes of transportation, including airplanes, trains, buses, motorbikes, rickshaws, taxis, boats, and cruise ships, reflecting his versatility and comfort in varied travel contexts.',
    languages:
      'Ryan understands Afrikaans and has been exposed to languages such as Khmer, Thai, Korean, Japanese, Chinese, and Ethiopian scripts, many of which use non-Latin alphabets. This linguistic exposure enhances his ability to connect with diverse cultures and learners.',
    lifestyle:
      'Ryan leads a minimalist, balanced lifestyle, prioritizing cleanliness, personal grooming, and presentability. He maintains a holistic approach to health, well-being, socializing, research, and exploration, embodying a well-rounded and disciplined persona.',
    farmExperience:
      'Ryan has hands-on experience pruning and picking on a Wine and Olive Farm, demonstrating his practical skills and connection to agricultural environments.',
    interests:
      'Ryan’s interests are diverse, spanning modern design (UI/UX, industrial design, construction, and architecture), literature (particularly fantasy genres such as Lord of the Rings, Wheel of Time, and Harry Potter), gaming (RPGs, MOBAs, and first-person games), nature and environmental consciousness, and animal welfare, where he demonstrates a delicate and caring approach.',
    technology:
      'Ryan is highly tech-savvy and computer literate, with experience across Symbian, Android, and iOS platforms, including custom ROMs. He has built computers, used Linux (proficient with Sudo commands) and Windows (from version 3.2 to 11), and developed applications such as Speedmaths.free.nf, Swiftread.free.nf, and Equied.free.nf. His technical expertise extends to Next.js, Vercel, v0.dev, Cursor, and a strong affinity for animation and UI/UX customization.',
    aiExposure:
      'Ryan has worked extensively with AI tools, including ChatGPT, Claude, Command R and A, Gemini, and Google AI Studio, achieving success in generating text, images, videos, websites, apps, scripts, and games. His proficiency in leveraging AI enhances his productivity and creative output.',
    cryptocurrency:
      'Ryan has significant experience in the cryptocurrency space, engaging with over 20 blockchain networks, decentralized applications (dApps), exchanges, and trading platforms. He has developed his own digital currency and smart contracts using Solidity and Go, and has been compensated in USDC via Ethereum, showcasing his expertise in blockchain technology.',
    sports:
      'Ryan has a strong athletic background, having represented his province in hockey (first-team for four of five high school years) and participated in cricket, skateboarding, BMX, and snowboarding, reflecting his physical versatility and competitive spirit.',
    partTimeWork:
      'Ryan’s part-time work includes roles in video stores, film and photography production, set work, advertising, and as an extra, demonstrating his adaptability and experience in creative industries.',
    livingArrangements:
      'Ryan has lived in various arrangements, including with family, independently, and communally, showcasing his flexibility and ability to thrive in diverse living environments.',
    financialBackground:
      'Having experienced financial challenges, Ryan is determined to achieve financial stability and independence, reflecting his resilience and goal-oriented mindset.',
    chatbotPreferences:
      'The chatbot is designed to prioritize questions such as: "What would you like to know about Ryan (career-wise)?" and "For what job/career/post/vacancy are you considering Ryan for?" Responses are crafted to highlight Ryan’s qualifications and suitability for specific opportunities, ensuring direct and relevant engagement with users.',
  }

  // Scroll to the bottom of the chat
  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Handle sending messages
  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage: Message = { role: 'user', content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'deepseek/deepseek-chat-v3-0324:free',
          messages: [
            {
              role: 'system',
              content: `You are a professional assistant for Ryan St. Dare. Use the following knowledge to respond: ${JSON.stringify(llmTrainingInfo)}`,
            },
            ...messages,
            userMessage,
          ],
        }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: data.choices[0].message.content },
      ])
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Sorry, there was an error processing your request. Please try again later.' },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-20 right-6 w-full max-w-md bg-white/80 dark:bg-dark-mode-bg/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-beige/20 z-50"
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold gradient-text">Chat with Ryan</h3>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
          className="p-2 bg-beige-gradient rounded-full"
        >
          <X className="w-5 h-5 text-dark-grey" />
        </motion.button>
      </div>
      <div className="h-64 overflow-y-auto mb-4 space-y-4">
        <AnimatePresence>
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`p-3 rounded-lg ${
                message.role === 'user' ? 'bg-beige-gradient text-dark-grey ml-auto' : 'bg-dark-gradient text-light-grey'
              } max-w-[80%]`}
            >
              {message.content}
            </motion.div>
          ))}
        </AnimatePresence>
        <div ref={chatEndRef} />
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          className="flex-1 p-2 rounded-full bg-white/80 dark:bg-dark-mode-bg/80 border border-beige/20 focus:outline-none focus:ring-2 focus:ring-beige-gradient"
          placeholder="Type your message..."
          disabled={isLoading}
        />
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleSend}
          className="p-2 bg-beige-gradient rounded-full"
          disabled={isLoading}
        >
          <Send className="w-5 h-5 text-dark-grey" />
        </motion.button>
      </div>
      <TrainingInfoSection>
        <TrainingInfoTitle>About Ryan St. Dare</TrainingInfoTitle>
        <TrainingInfoText><strong>Skills:</strong> {llmTrainingInfo.skills}</TrainingInfoText>
        <TrainingInfoText><strong>Teaching Experience:</strong> {llmTrainingInfo.teachingExperience}</TrainingInfoText>
        <TrainingInfoText><strong>Travel:</strong> {llmTrainingInfo.travel}</TrainingInfoText>
        <TrainingInfoText><strong>Transport Experience:</strong> {llmTrainingInfo.transportExperience}</TrainingInfoText>
        <TrainingInfoText><strong>Languages:</strong> {llmTrainingInfo.languages}</TrainingInfoText>
        <TrainingInfoText><strong>Lifestyle:</strong> {llmTrainingInfo.lifestyle}</TrainingInfoText>
        <TrainingInfoText><strong>Farm Experience:</strong> {llmTrainingInfo.farmExperience}</TrainingInfoText>
        <TrainingInfoText><strong>Interests:</strong> {llmTrainingInfo.interests}</TrainingInfoText>
        <TrainingInfoText><strong>Technology:</strong> {llmTrainingInfo.technology}</TrainingInfoText>
        <TrainingInfoText><strong>AI Exposure:</strong> {llmTrainingInfo.aiExposure}</TrainingInfoText>
        <TrainingInfoText><strong>Cryptocurrency:</strong> {llmTrainingInfo.cryptocurrency}</TrainingInfoText>
        <TrainingInfoText><strong>Sports:</strong> {llmTrainingInfo.sports}</TrainingInfoText>
        <TrainingInfoText><strong>Part-Time Work:</strong> {llmTrainingInfo.partTimeWork}</TrainingInfoText>
        <TrainingInfoText><strong>Living Arrangements:</strong> {llmTrainingInfo.livingArrangements}</TrainingInfoText>
        <TrainingInfoText><strong>Financial Background:</strong> {llmTrainingInfo.financialBackground}</TrainingInfoText>
        <TrainingInfoText><strong>Chatbot Preferences:</strong> {llmTrainingInfo.chatbotPreferences}</TrainingInfoText>
      </TrainingInfoSection>
    </motion.div>
  )
} 