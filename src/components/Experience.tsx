
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react'

export default function Experience() {
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
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const experiences = [
    {
      year: "2025",
      title: "High School English Educator",
      company: "Benchamaratrungsarit 2 High School",
      location: "Chachoengsao, Thailand",
      description: "Conducted Core English, Public Speaking, English for Careers, and Independent Studies for first-year, 5th-year, and graduation-year learners.",
      type: "education"
    },
    {
      year: "2024",
      title: "Part-Time Adult English Educator",
      company: "ISE Adult Centers",
      location: "Ho Chi Minh, Vietnam",
      description: "Instructed adults in Pronunciation, Phonetics, Communication, Social Dialogue, Public Speaking, and Reading across Elementary, Intermediate, and Upper levels.",
      type: "education"
    },
    {
      year: "2024",
      title: "Full-Time English Educator",
      company: "Sovannapumi",
      location: "Phnom Penh, Cambodia",
      description: "Taught primary and secondary English classes using the MacMillan syllabus.",
      type: "education"
    },
    {
      year: "2024",
      title: "Multiple Teaching Positions",
      company: "Various Schools (Thailand)",
      location: "Chiang Rai & MaeSai, Thailand",
      description: "Supplementary English Teacher at Chiang Rai Municipality 7, CVK School, and Anuban MaeSai. Taught Vocabulary, Sentence Construction, Grammar, and integrated subjects.",
      type: "education"
    },
    {
      year: "2023-2024",
      title: "English Homeroom Teacher",
      company: "CR PAO",
      location: "Chiang Rai, Thailand",
      description: "Paired with a Thai teacher, taught Integrated Studies (English, Mathematics, History, Geography, Science, etc.) to lower levels.",
      type: "education"
    },
    {
      year: "2023",
      title: "English Educator (Multiple Positions)",
      company: "Super Youth, CAE, Outeref",
      location: "Ho Chi Minh, Vietnam",
      description: "Taught Starters, Movers, Flyers, IELTS to primary and secondary levels. American-based communication-centric instruction with improvisation skills.",
      type: "education"
    },
    {
      year: "2022",
      title: "Full-Time English Educator",
      company: "VMG",
      location: "Bien Hoa, Vietnam",
      description: "Constructed own lessons, taught lower levels in large and small classes at centers and public schools.",
      type: "education"
    },
    {
      year: "2021",
      title: "Game Artist",
      company: "Tiny Forge Studios",
      location: "Remote",
      description: "Worked on 3D modeling and texturing for the game Tiny Tactics on Steam.",
      type: "creative"
    },
    {
      year: "2020",
      title: "Freelance Graphic Designer",
      company: "Independent",
      location: "Remote",
      description: "Created 2D and 3D logos and typefaces for startups using Affinity Designer and Blender.",
      type: "creative"
    },
    {
      year: "2018-2019",
      title: "Full-Time English Teacher",
      company: "Guang Zhao School",
      location: "Phnom Penh, Cambodia",
      description: "Taught Levels 1, 2, 3, focusing on Vocabulary, Phonetics, Sentence Construction, Grammar, and Reading.",
      type: "education"
    },
    {
      year: "2016-2017",
      title: "Freelance Web Developer",
      company: "Arietis Online",
      location: "South Africa",
      description: "Created websites including ArietisOnline.co.za and SimplyRedTea.com.",
      type: "tech"
    },
    {
      year: "2015-2016",
      title: "Web Developer & Designer Intern",
      company: "Optic Blaze",
      location: "South Africa",
      description: "Learned HTML, CSS, JS, jQuery, PHP, SQL, SEO, and content management systems like Silverstripe and WordPress.",
      type: "tech"
    },
    {
      year: "2013-2014",
      title: "Film Production Apprentice",
      company: "Missing Piece Films",
      location: "South Africa",
      description: "Assisted an expert wedding film cinematographer in producing quality films.",
      type: "creative"
    },
    {
      year: "2011-2012",
      title: "Samsung Brand Ambassador",
      company: "Samsung",
      location: "South Africa",
      description: "Stationed in upmarket stores like Dion Wired, promoted, marketed, and sold premium Samsung products, managed stock, tallied sales.",
      type: "sales"
    },
    {
      year: "2010",
      title: "Audio and Visual Specialist",
      company: "Hi-Fi Corporation",
      location: "South Africa",
      description: "Provided expert service and advice on Television, Home Theatre, computers, appliances, cameras, and cellphones.",
      type: "tech"
    },
    {
      year: "2008-2009",
      title: "Film Studies & Camera Operator",
      company: "AFDA & Rat Race Media",
      location: "South Africa",
      description: "BA in Motion Picture Medium, Majoring in Cinematography, Directing, Editing, and Script Writing. Camera Operator for Downhill Car Racing.",
      type: "creative"
    }
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'education':
        return 'bg-green-100 text-green-800'
      case 'tech':
        return 'bg-blue-100 text-blue-800'
      case 'creative':
        return 'bg-purple-100 text-purple-800'
      case 'sales':
        return 'bg-orange-100 text-orange-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <section id="experience" className="py-20 px-4 bg-light-gradient dark:bg-dark-mode-surface-gradient">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Work Experience
            </h2>
            <div className="w-24 h-1 bg-beige-gradient mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-dark-grey dark:text-light-grey max-w-2xl mx-auto">
              A comprehensive journey through education, technology, and creative industries
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-beige-gradient"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-beige-gradient rounded-full border-4 border-light-grey dark:border-dark-mode-bg z-10"
                  ></motion.div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`card-hover w-full md:w-5/12 ml-16 md:ml-0 ${
                      index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    }`}
                  >
                    <div className="bg-white/80 dark:bg-dark-mode-bg/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-beige/20">
                      {/* Year Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="inline-flex items-center px-3 py-1 bg-beige-gradient text-dark-grey text-sm font-semibold rounded-full">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.year}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(exp.type)}`}>
                          {exp.type}
                        </span>
                      </div>

                      {/* Job Title */}
                      <h3 className="text-xl font-bold gradient-text mb-2">
                        {exp.title}
                      </h3>

                      {/* Company & Location */}
                      <div className="flex items-center text-dark-grey dark:text-light-grey mb-3">
                        <Briefcase className="w-4 h-4 mr-2" />
                        <span className="font-medium mr-4">{exp.company}</span>
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">{exp.location}</span>
                      </div>

                      {/* Description */}
                      <p className="text-dark-grey dark:text-light-grey leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}