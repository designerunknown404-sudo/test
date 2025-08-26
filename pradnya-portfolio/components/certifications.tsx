import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BadgeIcon as Certificate, Cloud, Code, Shield, TrendingUp, Users } from "lucide-react"

export default function Certifications() {
  const certifications = [
    {
      title: "Cloud Computing",
      provider: "NPTEL",
      icon: Cloud,
      color: "bg-blue-500",
      description: "Comprehensive understanding of cloud computing concepts, services, and deployment models.",
      skills: ["AWS Basics", "Cloud Architecture", "Virtualization", "Distributed Systems"],
    },
    {
      title: "Web Development with Node.js",
      provider: "Professional Certification",
      icon: Code,
      color: "bg-green-500",
      description: "Full-stack web development using Node.js, Express.js, and modern JavaScript frameworks.",
      skills: ["Node.js", "Express.js", "REST APIs", "Database Integration"],
    },
    {
      title: "Digital Marketing",
      provider: "Industry Certification",
      icon: TrendingUp,
      color: "bg-purple-500",
      description: "Strategic digital marketing concepts including SEO, social media, and analytics.",
      skills: ["SEO Optimization", "Social Media Marketing", "Analytics", "Content Strategy"],
    },
    {
      title: "Market Research and Analysis",
      provider: "Professional Development",
      icon: Users,
      color: "bg-orange-500",
      description: "Data-driven market research methodologies and consumer behavior analysis.",
      skills: ["Data Analysis", "Consumer Insights", "Research Methods", "Statistical Analysis"],
    },
    {
      title: "Cyber Security and Digital Forensics",
      provider: "Security Certification",
      icon: Shield,
      color: "bg-red-500",
      description: "Fundamentals of cybersecurity, threat analysis, and digital forensics techniques.",
      skills: ["Security Protocols", "Threat Analysis", "Digital Forensics", "Risk Assessment"],
    },
  ]

  return (
    <section id="certifications" className="py-20 gradient-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#1e2a4a] mb-4">Certifications</h2>
            <div className="w-20 h-1 bg-[#14b8a6] mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Continuous learning through professional certifications and specialized training programs
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon
              return (
                <Card
                  key={cert.title}
                  className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`h-2 ${cert.color.replace("bg-", "bg-gradient-to-r from-")} to-transparent`}></div>

                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-3 rounded-lg ${cert.color} group-hover:scale-110 transition-transform`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <Certificate className="h-5 w-5 text-[#14b8a6]" />
                    </div>
                    <CardTitle className="text-lg font-display font-bold text-[#1e2a4a] leading-tight">
                      {cert.title}
                    </CardTitle>
                    <p className="text-[#14b8a6] font-semibold">{cert.provider}</p>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-gray-600 text-sm leading-relaxed">{cert.description}</p>

                    {/* Skills Gained */}
                    <div>
                      <h4 className="font-semibold text-[#1e2a4a] mb-2 text-sm">Key Skills:</h4>
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="bg-gray-100 text-gray-700 hover:bg-[#14b8a6] hover:text-white transition-colors text-xs py-1 px-2"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Continuous Learning Note */}
          <div className="mt-12 text-center">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-[#14b8a6]/20 shadow-lg">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Certificate className="h-6 w-6 text-[#14b8a6]" />
                <h3 className="font-display font-semibold text-[#1e2a4a] text-lg">Commitment to Learning</h3>
              </div>
              <p className="text-gray-700 max-w-2xl mx-auto">
                These certifications represent my dedication to staying current with industry trends and continuously
                expanding my skill set. I believe in lifelong learning and regularly pursue new certifications to
                enhance my expertise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
