import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { InteractiveTimeline } from "@/components/interactive-timeline"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  BookOpen,
  Users,
  Award,
  Phone,
  Mail,
  MapPin,
  GraduationCap,
  Star,
  ArrowRight,
  Building2,
  UserCheck,
  Trophy,
  Microscope,
  Monitor,
  Library,
  Dumbbell,
  Theater,
} from "lucide-react"

export default function KendrivaVidyalayaWebsite() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 relative overflow-hidden transition-colors duration-300">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Modern Header */}
      <header className="relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-black to-neutral-800 dark:from-gray-900 dark:via-gray-950 dark:to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)]"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-white dark:bg-gray-800 rounded-full mb-6 sm:mb-8 shadow-2xl dark:shadow-blue-500/20 p-3 sm:p-4 hover:scale-110 transition-transform duration-500 cursor-pointer group border-4 border-transparent dark:border-blue-500/30">
              <Image
                src="/kvs-logo-clean.png"
                alt="Kendriya Vidyalaya Sangathan Logo"
                width={100}
                height={100}
                className="object-contain group-hover:rotate-12 transition-transform duration-500 dark:brightness-0 dark:invert"
                priority
                unoptimized
              />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4 tracking-tight hover:text-gray-200 dark:hover:text-blue-200 transition-colors duration-300 leading-tight">
              Kendriya Vidyalaya
            </h1>
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-neutral-300 dark:text-blue-300 font-light mb-6 sm:mb-8 tracking-wide hover:text-white dark:hover:text-blue-200 transition-colors duration-300">
              Sangathan
            </div>
            <div className="max-w-xl sm:max-w-2xl mx-auto px-4">
              <p className="text-base sm:text-lg lg:text-xl text-neutral-400 dark:text-gray-400 leading-relaxed hover:text-neutral-300 dark:hover:text-gray-300 transition-colors duration-300">
                Shaping minds, building futures, and nurturing excellence across India since 1963
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white dark:via-blue-400 to-transparent opacity-30"></div>
      </header>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-neutral-100 dark:from-gray-900 to-neutral-50 dark:to-gray-800 relative z-10 transition-colors duration-300">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              { number: "1200+", label: "Schools Nationwide", icon: Building2 },
              { number: "13L+", label: "Students Enrolled", icon: GraduationCap },
              { number: "50K+", label: "Dedicated Teachers", icon: UserCheck },
              { number: "60+", label: "Years of Excellence", icon: Trophy },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-neutral-50/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl dark:shadow-blue-500/10 dark:hover:shadow-blue-500/20 transition-all duration-500 border border-neutral-200 dark:border-gray-700 group-hover:border-neutral-300 dark:group-hover:border-blue-500/50 group-hover:-translate-y-2 cursor-pointer">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-black dark:bg-gradient-to-br dark:from-blue-600 dark:to-blue-700 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg dark:shadow-blue-500/30">
                    <stat.icon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-white" />
                  </div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black dark:text-white mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm lg:text-base text-neutral-600 dark:text-gray-400 font-medium group-hover:text-black dark:group-hover:text-white transition-colors duration-300 leading-tight">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <InteractiveTimeline />

      {/* About Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-gray-900 relative z-10 transition-colors duration-300">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-black dark:bg-gradient-to-br dark:from-blue-600 dark:to-blue-700 rounded-full mb-4 sm:mb-6 hover:scale-110 hover:rotate-180 transition-all duration-700 cursor-pointer shadow-lg dark:shadow-blue-500/30">
              <Star className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-4 sm:mb-6 tracking-tight hover:text-gray-800 dark:hover:text-blue-200 transition-colors duration-300">
              Excellence Redefined
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-neutral-600 dark:text-gray-400 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed hover:text-neutral-800 dark:hover:text-gray-300 transition-colors duration-300 px-4">
              From humble beginnings to becoming India's premier educational network, we continue to set benchmarks in
              quality education and holistic development.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              <div className="space-y-4 sm:space-y-6">
                {[
                  "CBSE-affiliated curriculum with national standards",
                  "Holistic development through academics and co-curricular activities",
                  "Promoting unity in diversity across all regions",
                  "Scientific temper and innovative thinking development",
                ].map((item, index) => (
                  <div key={index} className="flex items-start group cursor-pointer">
                    <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-black dark:bg-gradient-to-br dark:from-blue-600 dark:to-blue-700 rounded-full flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-125 group-hover:rotate-90 transition-all duration-500 mt-1 shadow-lg dark:shadow-blue-500/30">
                      <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 lg:h-4 lg:w-4 text-white" />
                    </div>
                    <p className="text-sm sm:text-base lg:text-lg text-neutral-700 dark:text-gray-300 leading-relaxed group-hover:text-black dark:group-hover:text-white group-hover:translate-x-2 transition-all duration-300">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 order-1 lg:order-2">
              {[
                { icon: GraduationCap, title: "CBSE Affiliated", desc: "National curriculum standards" },
                { icon: Award, title: "Excellence Awards", desc: "Recognized achievements" },
                { icon: Users, title: "Expert Faculty", desc: "Qualified educators" },
                { icon: BookOpen, title: "Modern Learning", desc: "Contemporary methods" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-neutral-50/90 dark:bg-gray-800/90 backdrop-blur-sm p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl border border-neutral-200 dark:border-gray-700 hover:shadow-xl dark:hover:shadow-blue-500/20 hover:-translate-y-2 transition-all duration-500 group cursor-pointer"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-black dark:bg-gradient-to-br dark:from-blue-600 dark:to-blue-700 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg dark:shadow-blue-500/30">
                    <item.icon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-white" />
                  </div>
                  <h4 className="font-bold text-black dark:text-white mb-1 sm:mb-2 group-hover:text-gray-800 dark:group-hover:text-blue-200 transition-colors duration-300 text-sm sm:text-base">
                    {item.title}
                  </h4>
                  <p className="text-neutral-600 dark:text-gray-400 text-xs sm:text-sm group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors duration-300 leading-tight">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Levels */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-neutral-100 dark:from-gray-800 to-neutral-50 dark:to-gray-900 px-4 sm:px-6 lg:px-8 relative z-10 transition-colors duration-300">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-4 sm:mb-6 tracking-tight hover:text-gray-800 dark:hover:text-blue-200 transition-colors duration-300">
              Educational Journey
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-neutral-600 dark:text-gray-400 max-w-2xl sm:max-w-3xl mx-auto hover:text-neutral-800 dark:hover:text-gray-300 transition-colors duration-300 px-4">
              Comprehensive education pathway designed to nurture young minds from foundation to excellence
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                level: "Primary",
                classes: "Classes I - V",
                icon: BookOpen,
                description: "Building strong foundations through interactive learning and creative exploration",
                subjects: ["English", "Hindi", "Mathematics", "EVS"],
                color: "bg-black dark:bg-gradient-to-br dark:from-blue-600 dark:to-blue-700",
              },
              {
                level: "Middle School",
                classes: "Classes VI - VIII",
                icon: GraduationCap,
                description: "Expanding horizons with specialized subjects and skill development programs",
                subjects: ["Science", "Social Studies", "Sanskrit", "Computer Science"],
                color: "bg-black dark:bg-gradient-to-br dark:from-blue-600 dark:to-blue-700",
              },
              {
                level: "Senior Secondary",
                classes: "Classes IX - XII",
                icon: Award,
                description: "Preparing for future success with specialized streams and career guidance",
                subjects: ["Science", "Commerce", "Humanities", "Vocational"],
                color: "bg-black dark:bg-gradient-to-br dark:from-blue-600 dark:to-blue-700",
              },
            ].map((edu, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl dark:hover:shadow-blue-500/20 hover:-translate-y-4 transition-all duration-700 border-0 overflow-hidden bg-neutral-50/90 dark:bg-gray-800/90 backdrop-blur-sm cursor-pointer sm:col-span-1 lg:col-span-1"
              >
                <div className={`h-2 ${edu.color} group-hover:h-4 transition-all duration-500`}></div>
                <CardHeader className="pb-3 sm:pb-4 p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 ${edu.color} rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg dark:shadow-blue-500/30`}
                    >
                      <edu.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <Badge
                      variant="outline"
                      className="border-neutral-300 dark:border-gray-600 text-neutral-600 dark:text-gray-400 group-hover:border-black dark:group-hover:border-blue-400 group-hover:text-black dark:group-hover:text-blue-300 transition-all duration-300 text-xs sm:text-sm"
                    >
                      {edu.classes}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg sm:text-xl lg:text-2xl text-black dark:text-white group-hover:text-gray-800 dark:group-hover:text-blue-200 transition-colors duration-300">
                    {edu.level} Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6 pt-0">
                  <p className="text-sm sm:text-base text-neutral-600 dark:text-gray-400 leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors duration-300">
                    {edu.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {edu.subjects.map((subject, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="bg-neutral-200 dark:bg-gray-700 text-neutral-700 dark:text-gray-300 hover:bg-neutral-200 dark:hover:bg-gray-600 group-hover:scale-105 transition-all duration-300 text-xs sm:text-sm"
                      >
                        {subject}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-gray-900 relative z-10 transition-colors duration-300">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-4 sm:mb-6 tracking-tight hover:text-gray-800 dark:hover:text-blue-200 transition-colors duration-300">
              World-Class Facilities
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-neutral-600 dark:text-gray-400 max-w-2xl sm:max-w-3xl mx-auto hover:text-neutral-800 dark:hover:text-gray-300 transition-colors duration-300 px-4">
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
              <Card
                key={index}
                className={`group hover:shadow-2xl dark:hover:shadow-blue-500/20 hover:-translate-y-3 transition-all duration-500 border border-neutral-300 dark:border-gray-700 overflow-hidden bg-gradient-to-br ${facility.gradient} backdrop-blur-sm cursor-pointer`}
              >
                <CardHeader className="text-center pb-3 sm:pb-4 p-4 sm:p-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-black dark:bg-gradient-to-br dark:from-blue-600 dark:to-blue-700 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg dark:shadow-blue-500/30">
                    <facility.icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white" />
                  </div>
                  <CardTitle className="text-base sm:text-lg lg:text-xl text-black dark:text-white group-hover:text-gray-800 dark:group-hover:text-blue-200 transition-colors duration-300">
                    {facility.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <p className="text-sm sm:text-base text-neutral-600 dark:text-gray-400 text-center leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors duration-300">
                    {facility.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-neutral-100 dark:from-gray-800 to-neutral-50 dark:to-gray-900 relative z-10 transition-colors duration-300">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-4 sm:mb-6 tracking-tight hover:text-gray-800 dark:hover:text-blue-200 transition-colors duration-300">
              Connect With Us
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-neutral-600 dark:text-gray-400 max-w-2xl sm:max-w-3xl mx-auto hover:text-neutral-800 dark:hover:text-gray-300 transition-colors duration-300 px-4">
              Ready to be part of India's premier educational network? Get in touch with us today.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Phone,
                title: "Phone",
                details: ["+91-11-2652-6969", "+91-11-2652-7900"],
                color: "bg-black dark:bg-gradient-to-br dark:from-blue-600 dark:to-blue-700",
              },
              {
                icon: Mail,
                title: "Email",
                details: ["info@kvsangathan.nic.in", "kvs.headquarters@gov.in"],
                color: "bg-black dark:bg-gradient-to-br dark:from-blue-600 dark:to-blue-700",
              },
              {
                icon: MapPin,
                title: "Headquarters",
                details: ["18, Institutional Area", "Shaheed Jeet Singh Marg", "New Delhi - 110016"],
                color: "bg-black dark:bg-gradient-to-br dark:from-blue-600 dark:to-blue-700",
              },
            ].map((contact, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl dark:hover:shadow-blue-500/20 hover:-translate-y-4 transition-all duration-700 border-0 overflow-hidden bg-neutral-50 dark:bg-gray-800 backdrop-blur-sm cursor-pointer sm:col-span-1 lg:col-span-1"
              >
                <div className={`h-1 ${contact.color} group-hover:h-3 transition-all duration-500`}></div>
                <CardContent className="text-center p-6 sm:p-8">
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 ${contact.color} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg dark:shadow-blue-500/30`}
                  >
                    <contact.icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white" />
                  </div>
                  <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-black dark:text-white mb-3 sm:mb-4 group-hover:text-gray-800 dark:group-hover:text-blue-200 transition-colors duration-300">
                    {contact.title}
                  </h4>
                  <div className="space-y-1 sm:space-y-2">
                    {contact.details.map((detail, idx) => (
                      <p
                        key={idx}
                        className="text-sm sm:text-base text-neutral-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors duration-300 break-words"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-neutral-800 dark:from-gray-950 dark:via-gray-900 dark:to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.15),transparent_50%)]"></div>
        <div className="relative z-10 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white dark:bg-gray-800 rounded-full mb-6 sm:mb-8 shadow-2xl dark:shadow-blue-500/20 p-2 sm:p-3 hover:scale-110 hover:rotate-12 transition-all duration-500 cursor-pointer group border-4 border-transparent dark:border-blue-500/30">
              <Image
                src="/kvs-logo-clean.png"
                alt="KV Logo"
                width={70}
                height={70}
                className="object-contain group-hover:rotate-180 transition-transform duration-700 dark:brightness-0 dark:invert"
                unoptimized
              />
            </div>
            <h5 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 hover:text-gray-200 dark:hover:text-blue-200 transition-colors duration-300">
              Kendriya Vidyalaya Sangathan
            </h5>
            <p className="text-sm sm:text-base lg:text-lg text-neutral-400 dark:text-gray-400 mb-6 sm:mb-8 hover:text-neutral-300 dark:hover:text-gray-300 transition-colors duration-300">
              Ministry of Education, Government of India
            </p>
            <div className="w-16 sm:w-20 lg:w-24 h-px bg-gradient-to-r from-transparent via-white dark:via-blue-400 to-transparent mx-auto mb-6 sm:mb-8"></div>
            <p className="text-sm sm:text-base lg:text-lg text-neutral-400 dark:text-gray-400 hover:text-neutral-300 dark:hover:text-gray-300 transition-colors duration-300">
              © 2024 Kendriya Vidyalaya Sangathan. All rights reserved.
            </p>
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-gray-500 mt-2 hover:text-neutral-400 dark:hover:text-gray-400 transition-colors duration-300">
              Committed to Excellence in Education Since 1963
            </p>
          </div>
        </div>
        {/* Simple Text Disclaimer */}
        <div className="relative z-10 py-8 sm:py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-neutral-400 dark:text-gray-400 text-xs sm:text-sm leading-relaxed max-w-4xl mx-auto">
              <strong className="text-neutral-300 dark:text-gray-300">DISCLAIMER:</strong> This website is{" "}
              <strong className="text-white dark:text-blue-200">NOT officially affiliated</strong> with Kendriya
              Vidyalaya Sangathan (KVS) or the Government of India. Created for{" "}
              <strong className="text-white dark:text-blue-200">educational purposes only</strong>. For official
              information, visit{" "}
              <span className="text-neutral-200 dark:text-blue-300 font-medium">kvsangathan.nic.in</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
