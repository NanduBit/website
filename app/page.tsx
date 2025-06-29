import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"
import { InteractiveTimeline } from "@/components/interactive-timeline"
import {
  GraduationCap,
  Users,
  Award,
  BookOpen,
  MapPin,
  Phone,
  Mail,
  Globe,
  School,
  Trophy,
  Target,
  Heart,
  Lightbulb,
  Shield,
  Star,
  ArrowRight,
  Microscope,
  Monitor,
  Library,
  Dumbbell,
  Theater,
} from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-neutral-200 dark:border-gray-800 bg-white/95 dark:bg-gray-950/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-950/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 hover:scale-110 hover:rotate-12 transition-all duration-500 transform-gpu select-none">
              <Image
                src="/kvs-logo-clean.png"
                alt="KVS Logo"
                fill
                className="object-contain dark:brightness-0 dark:invert select-none pointer-events-none"
                priority
                unoptimized
                draggable={false}
              />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-black dark:text-white group-hover:text-gray-800 dark:group-hover:text-blue-200 transition-colors duration-300 select-none">
                Kendriya Vidyalaya Sangathan
              </h1>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-gray-400 group-hover:text-neutral-800 dark:group-hover:text-gray-300 transition-colors duration-300 select-none">
                Excellence in Education
              </p>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950 transition-colors duration-300">
        <div className="container mx-auto text-center">
          <div className="mb-8 sm:mb-12">
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 mx-auto mb-6 sm:mb-8 select-none pointer-events-none">
              <Image
                src="/kvs-logo-clean.png"
                alt="Kendriya Vidyalaya Sangathan Logo"
                fill
                className="object-contain dark:brightness-0 dark:invert select-none pointer-events-none"
                priority
                unoptimized
                draggable={false}
              />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-4 sm:mb-6 tracking-tight hover:text-gray-800 dark:hover:text-blue-200 transition-colors duration-300">
              Kendriya Vidyalaya Sangathan
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-neutral-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed hover:text-neutral-800 dark:hover:text-gray-300 transition-colors duration-300">
              Nurturing Excellence in Education Since 1963
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <div className="text-center p-4 sm:p-6 rounded-lg bg-neutral-50 dark:bg-gray-900 border border-neutral-200 dark:border-gray-800 hover:shadow-xl dark:hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 transform-gpu cursor-pointer group">
              <School className="h-8 w-8 sm:h-10 sm:w-10 text-black dark:text-white mx-auto mb-3 sm:mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 transform-gpu" />
              <h3 className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                1200+
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
                Schools Nationwide
              </p>
            </div>
            <div className="text-center p-4 sm:p-6 rounded-lg bg-neutral-50 dark:bg-gray-900 border border-neutral-200 dark:border-gray-800 hover:shadow-xl dark:hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 transform-gpu cursor-pointer group">
              <Users className="h-8 w-8 sm:h-10 sm:w-10 text-black dark:text-white mx-auto mb-3 sm:mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 transform-gpu" />
              <h3 className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                13+ Lakh
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
                Students Enrolled
              </p>
            </div>
            <div className="text-center p-4 sm:p-6 rounded-lg bg-neutral-50 dark:bg-gray-900 border border-neutral-200 dark:border-gray-800 hover:shadow-xl dark:hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 transform-gpu cursor-pointer group">
              <GraduationCap className="h-8 w-8 sm:h-10 sm:w-10 text-black dark:text-white mx-auto mb-3 sm:mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 transform-gpu" />
              <h3 className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                60+
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
                Years of Excellence
              </p>
            </div>
            <div className="text-center p-4 sm:p-6 rounded-lg bg-neutral-50 dark:bg-gray-900 border border-neutral-200 dark:border-gray-800 hover:shadow-xl dark:hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 transform-gpu cursor-pointer group">
              <Award className="h-8 w-8 sm:h-10 sm:w-10 text-black dark:text-white mx-auto mb-3 sm:mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 transform-gpu" />
              <h3 className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                CBSE
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
                Affiliated Schools
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-black dark:bg-gradient-to-br dark:from-blue-600 dark:to-blue-700 rounded-full mb-4 sm:mb-6 hover:scale-110 hover:rotate-180 transition-all duration-700 cursor-pointer shadow-lg dark:shadow-blue-500/30 transform-gpu">
              <Star className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white" />
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-4 sm:mb-6 hover:text-gray-800 dark:hover:text-blue-200 transition-colors duration-300">
              About Kendriya Vidyalaya Sangathan
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-neutral-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed hover:text-neutral-800 dark:hover:text-gray-300 transition-colors duration-300">
              A premier educational organization under the Ministry of Education, Government of India
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8">
              {[
                {
                  icon: Target,
                  title: "Our Mission",
                  description:
                    "To provide quality education to children of transferable central government employees by maintaining common standards and introducing innovations in education.",
                },
                {
                  icon: Lightbulb,
                  title: "Our Vision",
                  description:
                    "To be a global leader in school education, fostering excellence and innovation while preserving Indian values and culture.",
                },
                {
                  icon: Heart,
                  title: "Our Values",
                  description:
                    "Commitment to excellence, integrity, inclusivity, innovation, and holistic development of every child.",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 group cursor-pointer">
                  <div className="flex-shrink-0 w-12 h-12 bg-black dark:bg-gradient-to-br dark:from-blue-600 dark:to-blue-700 rounded-lg flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg dark:shadow-blue-500/30 transform-gpu">
                    <item.icon className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-2 group-hover:text-gray-800 dark:group-hover:text-blue-200 transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-sm sm:text-base text-neutral-600 dark:text-gray-400 leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg border border-neutral-200 dark:border-gray-700 hover:shadow-xl dark:hover:shadow-blue-500/20 hover:scale-105 hover:-translate-y-2 transition-all duration-500 transform-gpu">
                <h4 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-4 sm:mb-6">
                  Key Highlights
                </h4>
                <div className="space-y-4">
                  {[
                    { icon: Shield, text: "Established in 1963 by Government of India" },
                    { icon: BookOpen, text: "CBSE affiliated with NCERT curriculum" },
                    { icon: Globe, text: "Present in all states and union territories" },
                    { icon: Trophy, text: "Recognized for educational excellence" },
                  ].map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-3 group cursor-pointer">
                      <highlight.icon className="h-5 w-5 text-black dark:text-white flex-shrink-0 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 transform-gpu" />
                      <span className="text-sm sm:text-base text-neutral-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                        {highlight.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Levels */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950 transition-colors duration-300">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-black dark:bg-gradient-to-br dark:from-blue-600 dark:to-blue-700 rounded-full mb-4 sm:mb-6 hover:scale-110 hover:rotate-180 transition-all duration-700 cursor-pointer shadow-lg dark:shadow-blue-500/30 transform-gpu">
              <School className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white" />
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-4 sm:mb-6 hover:text-gray-800 dark:hover:text-blue-200 transition-colors duration-300">
              Education Levels
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-neutral-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed hover:text-neutral-800 dark:hover:text-gray-300 transition-colors duration-300">
              Comprehensive education from primary to senior secondary level
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: BookOpen,
                title: "Primary Education",
                subtitle: "Classes I - V",
                description: "Building strong foundations through interactive learning and creative exploration",
                subjects: ["English", "Hindi", "Mathematics", "EVS"],
              },
              {
                icon: GraduationCap,
                title: "Secondary Education",
                subtitle: "Classes VI - X",
                description: "Comprehensive curriculum with focus on conceptual understanding and skill development",
                subjects: ["English", "Hindi", "Mathematics", "Science", "Social Science"],
              },
              {
                icon: Award,
                title: "Senior Secondary",
                subtitle: "Classes XI - XII",
                description: "Specialized streams for career preparation with advanced learning opportunities",
                subjects: ["Science", "Commerce", "Humanities", "Vocational"],
              },
            ].map((level, index) => (
              <div
                key={index}
                className="bg-neutral-50 dark:bg-gray-900 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-gray-800 hover:shadow-xl dark:hover:shadow-blue-500/20 hover:scale-105 hover:-translate-y-3 transition-all duration-500 transform-gpu cursor-pointer group relative overflow-hidden"
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-black/5 dark:from-white/5 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                
                {/* Icon */}
                <div className="w-12 h-12 bg-black dark:bg-gradient-to-br dark:from-blue-600 dark:to-blue-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 transform-gpu relative z-10 shadow-lg dark:shadow-blue-500/30">
                  <level.icon className="h-6 w-6 text-white" />
                </div>

                {/* Class badge */}
                <div className="inline-block bg-neutral-200 dark:bg-gray-700 text-neutral-700 dark:text-gray-300 text-xs font-medium px-3 py-1 rounded-full mb-4 relative z-10">
                  {level.subtitle}
                </div>

                {/* Title */}
                <h4 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-4 group-hover:text-gray-800 dark:group-hover:text-blue-200 transition-colors duration-300 relative z-10">
                  {level.title}
                </h4>

                {/* Description */}
                <p className="text-sm sm:text-base text-neutral-600 dark:text-gray-400 mb-6 leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors duration-300 relative z-10">
                  {level.description}
                </p>

                {/* Subject tags */}
                <div className="flex flex-wrap gap-2 relative z-10">
                  {level.subjects.map((subject, idx) => (
                    <span
                      key={idx}
                      className="bg-neutral-200 dark:bg-gray-700 text-neutral-700 dark:text-gray-300 text-xs font-medium px-3 py-1 rounded-full hover:bg-neutral-300 dark:hover:bg-gray-600 hover:text-black dark:hover:text-white transition-all duration-300"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <InteractiveTimeline />

      {/* Features */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-black dark:bg-gradient-to-br dark:from-blue-600 dark:to-blue-700 rounded-full mb-4 sm:mb-6 hover:scale-110 hover:rotate-180 transition-all duration-700 cursor-pointer shadow-lg dark:shadow-blue-500/30 transform-gpu">
              <Award className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white" />
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-4 sm:mb-6 hover:text-gray-800 dark:hover:text-blue-200 transition-colors duration-300">
              World-Class Facilities
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-neutral-600 dark:text-gray-400 max-w-3xl mx-auto hover:text-neutral-800 dark:hover:text-gray-300 transition-colors duration-300">
              State-of-the-art infrastructure designed to provide the perfect environment for learning and growth
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Smart Classrooms",
                description:
                  "Interactive digital boards with modern teaching technology for enhanced learning experience",
                icon: Monitor,
                gradient: "from-gray-100 dark:from-gray-800 to-gray-50 dark:to-gray-900",
              },
              {
                title: "Science Laboratories",
                description: "Fully equipped Physics, Chemistry, and Biology labs with cutting-edge equipment",
                icon: Microscope,
                gradient: "from-gray-50 dark:from-gray-900 to-white dark:to-gray-800",
              },
              {
                title: "Computer Laboratory",
                description: "Latest computers with high-speed internet and educational software suites",
                icon: Monitor,
                gradient: "from-white dark:from-gray-800 to-gray-50 dark:to-gray-900",
              },
              {
                title: "Library & Resources",
                description: "Extensive collection of books, journals, and digital learning resources",
                icon: Library,
                gradient: "from-gray-50 dark:from-gray-900 to-gray-100 dark:to-gray-800",
              },
              {
                title: "Sports Complex",
                description: "Comprehensive indoor and outdoor sports facilities for physical development",
                icon: Dumbbell,
                gradient: "from-gray-100 dark:from-gray-800 to-white dark:to-gray-900",
              },
              {
                title: "Cultural Center",
                description: "Modern auditorium and dedicated spaces for arts and cultural activities",
                icon: Theater,
                gradient: "from-white dark:from-gray-900 to-gray-100 dark:to-gray-800",
              },
            ].map((facility, index) => (
              <div
                key={index}
                className={`group hover:shadow-2xl dark:hover:shadow-blue-500/20 hover:-translate-y-3 transition-all duration-500 border border-neutral-300 dark:border-gray-700 overflow-hidden bg-gradient-to-br ${facility.gradient} backdrop-blur-sm cursor-pointer rounded-2xl hover:scale-105 transform-gpu`}
              >
                <div className="text-center pb-3 sm:pb-4 p-4 sm:p-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-black dark:bg-gradient-to-br dark:from-blue-600 dark:to-blue-700 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg dark:shadow-blue-500/30 transform-gpu">
                    <facility.icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h4 className="text-base sm:text-lg lg:text-xl text-black dark:text-white group-hover:text-gray-800 dark:group-hover:text-blue-200 transition-colors duration-300 mb-3">
                    {facility.title}
                  </h4>
                </div>
                <div className="p-4 sm:p-6 pt-0">
                  <p className="text-sm sm:text-base text-neutral-600 dark:text-gray-400 text-center leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors duration-300">
                    {facility.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950 transition-colors duration-300">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-black dark:bg-gradient-to-br dark:from-blue-600 dark:to-blue-700 rounded-full mb-4 sm:mb-6 hover:scale-110 hover:rotate-180 transition-all duration-700 cursor-pointer shadow-lg dark:shadow-blue-500/30 transform-gpu">
              <Phone className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white" />
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-4 sm:mb-6 hover:text-gray-800 dark:hover:text-blue-200 transition-colors duration-300">
              Get in Touch
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-neutral-600 dark:text-gray-400 max-w-3xl mx-auto hover:text-neutral-800 dark:hover:text-gray-300 transition-colors duration-300">
              Connect with us for admissions, queries, or more information about our educational programs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: MapPin,
                title: "Address",
                details: ["18, Institutional Area", "Shaheed Jeet Singh Marg", "New Delhi - 110016"],
              },
              {
                icon: Phone,
                title: "Phone",
                details: ["+91-11-26858570", "+91-11-26858571", "Toll Free: 1800-11-8002"],
              },
              {
                icon: Mail,
                title: "Email",
                details: ["commissioner.kvs@gov.in", "info@kvsangathan.nic.in", "admissions@kvs.gov.in"],
              },
            ].map((contact, index) => (
              <div
                key={index}
                className="border-2 border-neutral-200 dark:border-gray-700 hover:border-neutral-400 dark:hover:border-blue-500/50 transition-all duration-300 bg-white dark:bg-gray-800 hover:shadow-xl dark:hover:shadow-blue-500/20 rounded-2xl hover:scale-105 hover:-translate-y-3 transform-gpu cursor-pointer group"
              >
                <div className="text-center p-6 sm:p-8">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-black dark:bg-gradient-to-br dark:from-blue-600 dark:to-blue-700 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg dark:shadow-blue-500/30 transform-gpu">
                    <contact.icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-black dark:text-white mb-2 sm:mb-3 group-hover:text-gray-800 dark:group-hover:text-blue-200 transition-colors duration-300">
                    {contact.title}
                  </h4>
                  <div className="space-y-1">
                    {contact.details.map((detail, idx) => (
                      <p
                        key={idx}
                        className="text-sm sm:text-base text-neutral-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors duration-300"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-gray-900 border-t border-neutral-200 dark:border-gray-800 transition-colors duration-300">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 transform-gpu select-none">
                <Image
                  src="/kvs-logo-clean.png"
                  alt="KVS Logo"
                  fill
                  className="object-contain dark:brightness-0 dark:invert select-none pointer-events-none"
                  unoptimized
                  draggable={false}
                />
              </div>
              <div>
                <p className="text-sm sm:text-base font-semibold text-black dark:text-white group-hover:text-gray-800 dark:group-hover:text-blue-200 transition-colors duration-300 select-none">
                  Kendriya Vidyalaya Sangathan
                </p>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-gray-400 group-hover:text-neutral-800 dark:group-hover:text-gray-300 transition-colors duration-300 select-none">
                  Ministry of Education, Government of India
                </p>
              </div>
            </div>
            <div className="text-center sm:text-right">
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-gray-400 hover:text-neutral-800 dark:hover:text-gray-300 transition-colors duration-300 select-none">
                © 2024 Kendriya Vidyalaya Sangathan. All rights reserved.
              </p>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-neutral-200 dark:border-gray-800 text-center">
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-gray-500 leading-relaxed max-w-4xl mx-auto hover:text-neutral-700 dark:hover:text-gray-400 transition-colors duration-300 select-none">
              <strong className="text-neutral-600 dark:text-gray-400">DISCLAIMER:</strong> This website is{" "}
              <strong className="text-black dark:text-white">NOT officially affiliated</strong> with Kendriya Vidyalaya
              Sangathan (KVS) or the Government of India. Created for{" "}
              <strong className="text-black dark:text-white">educational purposes only</strong>. For official
              information, visit{" "}
              <span className="text-neutral-700 dark:text-gray-300 font-medium">kvsangathan.nic.in</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}