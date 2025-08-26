"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen gradient-bg flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-200/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-teal-400 to-blue-600 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                <img
                  src="/indian-woman-software-developer-headshot.png"
                  alt="Pradnya Patil - Professional headshot"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-[#1e2a4a]">Pradnya Patil</span>
            <br />
            <span className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-700">
              Software Developer | UI/UX Designer | Full Stack Developer
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Crafting clean code, intuitive designs, and impactful digital solutions.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-[#14b8a6] hover:bg-[#0d9488] text-white px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Let's Connect
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>

            {/* Social Links */}
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="sm"
                className="border-gray-300 hover:border-[#14b8a6] hover:text-[#14b8a6] bg-transparent"
                asChild
              >
                <a href="mailto:pradnya.patil@example.com" aria-label="Email Pradnya Patil">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-gray-300 hover:border-[#14b8a6] hover:text-[#14b8a6] bg-transparent"
                asChild
              >
                <a
                  href="https://linkedin.com/in/pradnya-patil"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Pradnya Patil's LinkedIn profile"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-gray-300 hover:border-[#14b8a6] hover:text-[#14b8a6] bg-transparent"
                asChild
              >
                <a
                  href="https://github.com/pradnya-patil"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Pradnya Patil's GitHub profile"
                >
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 text-gray-400 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}
