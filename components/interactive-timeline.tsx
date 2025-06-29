"use client"

import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, Award, BookOpen, Building2, Globe, Trophy, GraduationCap } from "lucide-react"

interface TimelineEvent {
  year: string
  title: string
  description: string
  icon: React.ElementType
  category: "founding" | "expansion" | "achievement" | "modernization"
  highlights: string[]
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "1963",
    title: "Foundation of KVS",
    description:
      "Kendriya Vidyalaya Sangathan was established to provide quality education to children of transferable central government employees.",
    icon: Building2,
    category: "founding",
    highlights: [
      "First school in Delhi Cantonment",
      "Ministry of Education initiative",
      "Uniform quality education vision",
    ],
  },
  {
    year: "1965",
    title: "Rapid Expansion",
    description: "KVS started expanding across India with schools in major cities and cantonment areas.",
    icon: Globe,
    category: "expansion",
    highlights: ["25 schools established", "Metropolitan city presence", "Cantonment area focus"],
  },
  {
    year: "1975",
    title: "CBSE Affiliation",
    description: "All Kendriya Vidyalayas became affiliated with the Central Board of Secondary Education.",
    icon: BookOpen,
    category: "achievement",
    highlights: ["Uniform curriculum", "NCERT textbooks", "Standardized examinations"],
  },
  {
    year: "1986",
    title: "National Education Policy",
    description: "KVS aligned with the National Education Policy, emphasizing holistic development.",
    icon: GraduationCap,
    category: "modernization",
    highlights: ["Three-language formula", "Value-based education", "Co-curricular emphasis"],
  },
  {
    year: "1995",
    title: "500 Schools Milestone",
    description: "KVS reached the milestone of 500 schools across India, serving over 3 lakh students.",
    icon: Trophy,
    category: "expansion",
    highlights: ["500+ schools operational", "3+ lakh students", "All states coverage"],
  },
  {
    year: "2000",
    title: "ICT Integration",
    description: "Introduction of Information and Communication Technology in teaching-learning process.",
    icon: Users,
    category: "modernization",
    highlights: ["Computer labs", "Digital resources", "E-learning initiatives"],
  },
  {
    year: "2010",
    title: "Excellence Recognition",
    description: "KVS received national recognition for educational excellence and innovative practices.",
    icon: Award,
    category: "achievement",
    highlights: ["National awards", "Best practices", "International collaborations"],
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description: "Complete digital transformation with online learning platforms and smart classrooms.",
    icon: Calendar,
    category: "modernization",
    highlights: ["Online platforms", "Smart classrooms", "Virtual laboratories"],
  },
  {
    year: "2024",
    title: "1200+ Schools Network",
    description: "KVS now operates 1200+ schools serving 13+ lakh students with world-class facilities.",
    icon: Building2,
    category: "expansion",
    highlights: ["1200+ schools", "13+ lakh students", "Modern infrastructure"],
  },
]

const categoryColors = {
  founding:
    "bg-black dark:bg-gradient-to-r dark:from-blue-600 dark:to-blue-700 text-white border-black dark:border-blue-500",
  expansion:
    "bg-neutral-800 dark:bg-gradient-to-r dark:from-blue-500 dark:to-blue-600 text-white border-neutral-800 dark:border-blue-400",
  achievement:
    "bg-neutral-600 dark:bg-gradient-to-r dark:from-blue-700 dark:to-blue-800 text-white border-neutral-600 dark:border-blue-600",
  modernization:
    "bg-neutral-700 dark:bg-gradient-to-r dark:from-blue-600 dark:to-blue-700 text-white border-neutral-700 dark:border-blue-500",
}

const categoryLabels = {
  founding: "Foundation",
  expansion: "Expansion",
  achievement: "Achievement",
  modernization: "Modernization",
}

export function InteractiveTimeline() {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-3 sm:px-4 md:px-6 lg:px-8 bg-white dark:bg-gray-950 relative z-10 transition-colors duration-300">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-black dark:bg-gradient-to-br dark:from-blue-600 dark:to-blue-700 rounded-full mb-3 sm:mb-4 md:mb-6 hover:scale-110 hover:rotate-180 transition-all duration-700 cursor-pointer shadow-lg dark:shadow-blue-500/30 transform-gpu hover:shadow-2xl dark:hover:shadow-blue-500/50">
            <Calendar className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 text-white transition-transform duration-300 hover:scale-110" />
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-3 sm:mb-4 md:mb-6 tracking-tight hover:text-gray-800 dark:hover:text-blue-200 transition-colors duration-300 px-2 transform-gpu">
            Our Journey Through Time
          </h3>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-600 dark:text-gray-400 max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto hover:text-neutral-800 dark:hover:text-gray-300 transition-colors duration-300 px-4 leading-relaxed transform-gpu">
            Six decades of educational excellence, innovation, and growth across India
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline Line - Mobile: Left aligned, Desktop: Center aligned */}
          <div className="absolute left-3 sm:left-4 md:left-6 lg:left-1/2 lg:transform lg:-translate-x-0.5 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-black dark:from-blue-500 via-neutral-600 dark:via-blue-400 to-neutral-400 dark:to-blue-600 rounded-full"></div>

          {/* Timeline Events */}
          <div className="space-y-6 sm:space-y-8 md:space-y-12 lg:space-y-16">
            {timelineEvents.map((event, index) => (
              <div
                key={event.year}
                className={`relative flex items-start ${
                  // Mobile: Always left-aligned, Desktop: Alternating
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } group`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-3 sm:left-4 md:left-6 lg:left-1/2 lg:transform lg:-translate-x-1/2 z-10">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full border-2 sm:border-4 border-white dark:border-gray-950 shadow-xl sm:shadow-2xl dark:shadow-blue-500/30 bg-black dark:bg-gradient-to-br dark:from-blue-600 dark:to-blue-700 group-hover:scale-110 sm:group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 cursor-pointer flex items-center justify-center transform-gpu hover:shadow-2xl dark:hover:shadow-blue-500/50">
                    <event.icon className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-white transition-transform duration-300 group-hover:scale-110" />
                  </div>
                </div>

                {/* Content Card */}
                <div
                  className={`ml-8 sm:ml-12 md:ml-16 lg:ml-0 lg:w-5/12 w-full ${
                    index % 2 === 0 ? "lg:mr-auto lg:pr-6 xl:pr-8" : "lg:ml-auto lg:pl-6 xl:pl-8"
                  }`}
                >
                  <Card className="group-hover:shadow-xl sm:group-hover:shadow-2xl dark:group-hover:shadow-blue-500/20 group-hover:-translate-y-1 sm:group-hover:-translate-y-3 transition-all duration-700 border border-neutral-200 sm:border-2 dark:border-gray-700 overflow-hidden bg-white dark:bg-gray-800 backdrop-blur-sm hover:border-neutral-400 dark:hover:border-blue-500/50 transform-gpu group-hover:scale-[1.02] hover:bg-neutral-50 dark:hover:bg-gray-750">
                    <CardContent className="p-4 sm:p-6 md:p-8">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4 md:mb-6 gap-2 sm:gap-4">
                        <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
                          <Badge
                            className={`${categoryColors[event.category]} text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 shadow-md sm:shadow-lg dark:shadow-blue-500/20 whitespace-nowrap transition-all duration-300 hover:scale-105 transform-gpu`}
                          >
                            {categoryLabels[event.category]}
                          </Badge>
                          <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black dark:text-white transition-all duration-300 group-hover:scale-105 transform-gpu">
                            {event.year}
                          </span>
                        </div>
                        <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-black dark:bg-gradient-to-br dark:from-blue-600 dark:to-blue-700 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-105 sm:group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-md sm:shadow-lg dark:shadow-blue-500/30 flex-shrink-0 transform-gpu hover:shadow-xl dark:hover:shadow-blue-500/50">
                          <event.icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white transition-transform duration-300 group-hover:scale-110" />
                        </div>
                      </div>

                      {/* Title */}
                      <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black dark:text-white mb-2 sm:mb-3 md:mb-4 group-hover:text-gray-800 dark:group-hover:text-blue-200 transition-all duration-300 leading-tight transform-gpu group-hover:translate-x-1">
                        {event.title}
                      </h4>

                      {/* Description */}
                      <p className="text-sm sm:text-base md:text-lg text-neutral-600 dark:text-gray-400 leading-relaxed mb-3 sm:mb-4 md:mb-6 group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-all duration-300 transform-gpu group-hover:translate-x-0.5">
                        {event.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-1.5 sm:space-y-2 md:space-y-3">
                        {event.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start space-x-2 sm:space-x-3 group/item">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-black dark:bg-blue-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0 group-hover/item:scale-125 sm:group-hover/item:scale-150 transition-all duration-300 transform-gpu group-hover/item:bg-gray-800 dark:group-hover/item:bg-blue-400"></div>
                            <span className="text-xs sm:text-sm md:text-base text-neutral-700 dark:text-gray-300 group-hover/item:text-black dark:group-hover/item:text-white group-hover/item:translate-x-0.5 sm:group-hover/item:translate-x-1 transition-all duration-300 leading-relaxed transform-gpu group-hover/item:font-medium">
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Summary */}
        <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 text-center px-2">
          <div className="bg-gradient-to-r from-neutral-50 dark:from-gray-900 via-white dark:via-gray-800 to-neutral-50 dark:to-gray-900 border border-neutral-200 sm:border-2 dark:border-gray-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 max-w-4xl mx-auto hover:shadow-lg sm:hover:shadow-xl dark:hover:shadow-blue-500/20 transition-all duration-500 transform-gpu hover:scale-[1.01] hover:-translate-y-1">
            <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black dark:text-white mb-3 sm:mb-4 md:mb-6 transition-colors duration-300 hover:text-gray-800 dark:hover:text-blue-200">
              60+ Years of Excellence
            </h4>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto transition-colors duration-300 hover:text-gray-800 dark:hover:text-gray-300">
              From a single school in 1963 to a network of 1200+ institutions serving 13+ lakh students, KVS continues
              to be India's premier educational organization, committed to excellence, innovation, and holistic
              development.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
