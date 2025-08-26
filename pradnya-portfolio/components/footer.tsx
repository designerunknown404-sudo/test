"use client"

import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ]

  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:pradnya.patil@example.com",
      label: "Email",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/pradnya-patil",
      label: "LinkedIn",
    },
    {
      icon: Github,
      href: "https://github.com/pradnya-patil",
      label: "GitHub",
    },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace("#", ""))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="navy-gradient text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-display font-bold text-white">Pradnya Patil</h3>
              <p className="text-gray-300 leading-relaxed">
                Software Developer | UI/UX Designer | Full Stack Developer
              </p>
              <p className="text-gray-400 text-sm">
                Crafting clean code, intuitive designs, and impactful digital solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <nav className="grid grid-cols-2 gap-2">
                {quickLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-teal-300 transition-colors text-left text-sm"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Connect With Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon
                  return (
                    <Button
                      key={social.label}
                      variant="outline"
                      size="sm"
                      className="border-gray-400 text-gray-300 hover:border-teal-300 hover:text-teal-300 hover:bg-teal-300/10 bg-transparent"
                      asChild
                    >
                      <a
                        href={social.href}
                        target={social.href.startsWith("http") ? "_blank" : undefined}
                        rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        aria-label={social.label}
                      >
                        <IconComponent className="h-4 w-4" />
                      </a>
                    </Button>
                  )
                })}
              </div>
              <p className="text-gray-400 text-sm">Open to new opportunities and collaborations</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © {currentYear} Pradnya Patil. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Made with <Heart className="h-4 w-4 text-red-400" /> using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
