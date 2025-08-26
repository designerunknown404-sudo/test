import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, Award, TrendingUp } from "lucide-react"

export default function Education() {
  const educationData = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "NCRD's Sterling Institutes",
      duration: "2024 – Present",
      cgpa: "8.79",
      status: "In Progress",
      description:
        "Advanced studies in computer applications with focus on software development, system design, and emerging technologies.",
      highlights: [
        "Advanced Software Engineering",
        "Database Management Systems",
        "Web Technologies",
        "Mobile Application Development",
        "System Analysis & Design",
      ],
    },
    {
      degree: "Bachelor of Science in Information Technology (B.Sc IT)",
      institution: "Pillai College of Arts, Commerce & Science",
      duration: "2021 – 2024",
      cgpa: "9.00",
      status: "Completed",
      description:
        "Comprehensive undergraduate program covering fundamental and advanced concepts in information technology.",
      highlights: [
        "Programming Fundamentals",
        "Data Structures & Algorithms",
        "Database Systems",
        "Web Development",
        "Software Engineering Principles",
      ],
    },
  ]

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#1e2a4a] mb-4">Education</h2>
            <div className="w-20 h-1 bg-[#14b8a6] mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Strong academic foundation in computer science and information technology
            </p>
          </div>

          {/* Education Timeline */}
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <Card
                key={edu.degree}
                className="group shadow-lg hover:shadow-xl transition-all duration-300 border-0 overflow-hidden"
              >
                <div className="bg-gradient-to-r from-[#14b8a6] to-[#0d9488] p-1">
                  <div className="bg-white rounded-lg">
                    <CardHeader className="pb-4">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-[#14b8a6] rounded-lg group-hover:scale-110 transition-transform flex-shrink-0">
                            <GraduationCap className="h-8 w-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-xl font-display font-bold text-[#1e2a4a] mb-2 leading-tight">
                              {edu.degree}
                            </CardTitle>
                            <p className="text-[#14b8a6] font-semibold text-lg mb-1">{edu.institution}</p>
                            <p className="text-gray-600">{edu.description}</p>
                          </div>
                        </div>

                        <div className="flex flex-col lg:items-end gap-3 lg:text-right">
                          <div className="flex items-center gap-2 text-gray-600">
                            <Calendar className="h-4 w-4" />
                            <span className="font-medium">{edu.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Award className="h-5 w-5 text-[#14b8a6]" />
                            <span className="font-bold text-[#1e2a4a] text-lg">CGPA: {edu.cgpa}</span>
                          </div>
                          <Badge
                            variant={edu.status === "Completed" ? "default" : "secondary"}
                            className={
                              edu.status === "Completed"
                                ? "bg-green-500 hover:bg-green-600"
                                : "bg-blue-500 hover:bg-blue-600 text-white"
                            }
                          >
                            {edu.status === "In Progress" && <TrendingUp className="h-3 w-3 mr-1" />}
                            {edu.status}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <div>
                        <h4 className="font-semibold text-[#1e2a4a] mb-3">Key Subjects & Areas of Study:</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.highlights.map((subject) => (
                            <Badge
                              key={subject}
                              variant="outline"
                              className="border-gray-300 text-gray-700 hover:border-[#14b8a6] hover:text-[#14b8a6] transition-colors px-3 py-1"
                            >
                              {subject}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Academic Excellence Note */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-[#14b8a6]/10 to-[#0d9488]/10 p-6 rounded-lg border border-[#14b8a6]/20">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Award className="h-6 w-6 text-[#14b8a6]" />
                <h3 className="font-display font-semibold text-[#1e2a4a] text-lg">Academic Excellence</h3>
              </div>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Consistently maintained high academic performance with a strong focus on practical application of
                theoretical concepts. Actively engaged in projects and coursework that bridge the gap between academic
                learning and industry requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
