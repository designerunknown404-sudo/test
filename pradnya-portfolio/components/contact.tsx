"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Linkedin, Github, Send, MapPin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "1847b826-69ed-41ba-b7b4-ba087121d9a0", // Using the provided access key
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact from ${formData.name}`,
        }),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "pradnya.patil@example.com",
      href: "mailto:pradnya.patil@example.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/pradnya-patil",
      href: "https://linkedin.com/in/pradnya-patil",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/pradnya-patil",
      href: "https://github.com/pradnya-patil",
    },
  ]

  return (
    <section id="contact" className="py-20 gradient-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#1e2a4a] mb-4">Let's Connect</h2>
            <div className="w-20 h-1 bg-[#14b8a6] mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              I'm always interested in new opportunities, collaborations, and meaningful conversations. Let's discuss
              how we can work together!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-display font-bold text-[#1e2a4a] mb-6">Get in Touch</h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Whether you have a project in mind, want to discuss opportunities, or just want to say hello, I'd love
                  to hear from you. I'm currently open to new opportunities and always excited to connect with fellow
                  developers and innovators.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactInfo.map((contact) => {
                  const IconComponent = contact.icon
                  return (
                    <Card key={contact.label} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                      <CardContent className="p-4">
                        <a
                          href={contact.href}
                          className="flex items-center gap-4 group"
                          target={contact.href.startsWith("http") ? "_blank" : undefined}
                          rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          <div className="p-3 bg-[#14b8a6] rounded-lg group-hover:scale-110 transition-transform">
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-[#1e2a4a] group-hover:text-[#14b8a6] transition-colors">
                              {contact.label}
                            </h4>
                            <p className="text-gray-600 group-hover:text-gray-800 transition-colors">{contact.value}</p>
                          </div>
                        </a>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              {/* Additional Info */}
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-[#14b8a6]/20">
                <h4 className="font-semibold text-[#1e2a4a] mb-3 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-[#14b8a6]" />
                  Current Status
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  🎓 Currently pursuing MCA at NCRD's Sterling Institutes
                  <br />💼 Open to internship and full-time opportunities
                  <br />🌟 Available for freelance projects and collaborations
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-xl font-display font-bold text-[#1e2a4a] flex items-center gap-2">
                  <Send className="h-6 w-6 text-[#14b8a6]" />
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#1e2a4a] mb-2">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="border-gray-300 focus:border-[#14b8a6] focus:ring-[#14b8a6]"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#1e2a4a] mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      className="border-gray-300 focus:border-[#14b8a6] focus:ring-[#14b8a6]"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#1e2a4a] mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, opportunity, or just say hello!"
                      rows={5}
                      className="border-gray-300 focus:border-[#14b8a6] focus:ring-[#14b8a6] resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#14b8a6] hover:bg-[#0d9488] text-white py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>

                  {/* Status Messages */}
                  {submitStatus === "success" && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-800 text-sm">
                        ✅ Thank you for your message! I'll get back to you soon.
                      </p>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-800 text-sm">
                        ❌ Sorry, there was an error sending your message. Please try again or contact me directly.
                      </p>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
