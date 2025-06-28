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
  founding: "bg-black text-white border-black",
  expansion: "bg-neutral-800 text-white border-neutral-800",
  achievement: "bg-neutral-600 text-white border-neutral-600",
  modernization: "bg-neutral-700 text-white border-neutral-700",
}

const categoryLabels = {
  founding: "Foundation",
  expansion: "Expansion",
  achievement: "Achievement",
  modernization: "Modernization",
}

export function InteractiveTimeline() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white relative z-10">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-black rounded-full mb-4 sm:mb-6 hover:scale-110 hover:rotate-180 transition-all duration-700 cursor-pointer">
            <Calendar className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white" />
          </div>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6 tracking-tight hover:text-gray-800 transition-colors duration-300">
            Our Journey Through Time
          </h3>
          <p className="text-base sm:text-lg lg:text-xl text-neutral-600 max-w-2xl sm:max-w-3xl mx-auto hover:text-neutral-800 transition-colors duration-300 px-4">
            Six decades of educational excellence, innovation, and growth across India
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 sm:left-8 lg:left-1/2 lg:transform lg:-translate-x-0.5 top-0 bottom-0 w-1 bg-gradient-to-b from-black via-neutral-600 to-neutral-400 rounded-full"></div>

          {/* Timeline Events */}
          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {timelineEvents.map((event, index) => (
              <div
                key={event.year}
                className={`relative flex items-start ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} group`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 sm:left-8 lg:left-1/2 lg:transform lg:-translate-x-1/2 z-10">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full border-4 border-white shadow-2xl bg-black group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 cursor-pointer flex items-center justify-center">
                    <event.icon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-white" />
                  </div>
                </div>

                {/* Content Card */}
                <div
                  className={`ml-12 sm:ml-16 lg:ml-0 lg:w-5/12 ${index % 2 === 0 ? "lg:mr-auto lg:pr-8" : "lg:ml-auto lg:pl-8"}`}
                >
                  <Card className="group-hover:shadow-2xl group-hover:-translate-y-3 transition-all duration-700 border-2 border-neutral-200 overflow-hidden bg-white backdrop-blur-sm hover:border-neutral-400">
                    <CardContent className="p-6 sm:p-8">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-4 sm:mb-6">
                        <div className="flex items-center space-x-3 sm:space-x-4">
                          <Badge className={`${categoryColors[event.category]} text-sm font-medium px-3 py-1`}>
                            {categoryLabels[event.category]}
                          </Badge>
                          <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">{event.year}</span>
                        </div>
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                          <event.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                        </div>
                      </div>

                      {/* Title */}
                      <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-3 sm:mb-4 group-hover:text-gray-800 transition-colors duration-300 leading-tight">
                        {event.title}
                      </h4>

                      {/* Description */}
                      <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-4 sm:mb-6 group-hover:text-gray-800 transition-colors duration-300">
                        {event.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2 sm:space-y-3">
                        {event.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center space-x-3 group/item">
                            <div className="w-2 h-2 bg-black rounded-full group-hover/item:scale-150 transition-transform duration-300"></div>
                            <span className="text-sm sm:text-base text-neutral-700 group-hover/item:text-black group-hover/item:translate-x-1 transition-all duration-300">
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
        <div className="mt-16 sm:mt-20 lg:mt-24 text-center">
          <div className="bg-gradient-to-r from-neutral-50 via-white to-neutral-50 border-2 border-neutral-200 rounded-2xl p-6 sm:p-8 lg:p-10 max-w-4xl mx-auto hover:shadow-xl transition-all duration-500">
            <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4 sm:mb-6">
              60+ Years of Excellence
            </h4>
            <p className="text-base sm:text-lg lg:text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto">
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
