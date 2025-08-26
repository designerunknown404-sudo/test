import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, MapPin } from "lucide-react"

export default function Experience() {
  return (
    <section id="experience" className="py-20 gradient-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#1e2a4a] mb-4">Professional Experience</h2>
            <div className="w-20 h-1 bg-[#14b8a6] mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hands-on experience in mobile app development and collaborative software engineering
            </p>
          </div>

          {/* Experience Card */}
          <Card className="shadow-xl border-0 overflow-hidden group hover:shadow-2xl transition-all duration-300">
            <div className="bg-gradient-to-r from-[#14b8a6] to-[#0d9488] p-1">
              <div className="bg-white rounded-lg">
                <CardHeader className="pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-[#14b8a6] rounded-lg group-hover:scale-110 transition-transform">
                        <Building className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-display font-bold text-[#1e2a4a]">
                          Flutter Developer Intern
                        </CardTitle>
                        <p className="text-[#14b8a6] font-semibold text-lg">Programming Hub Company</p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-end gap-2">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="h-4 w-4" />
                        <span className="font-medium">March 2023 – June 2023</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span>Remote</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Role Description */}
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Contributed to cross-platform mobile application development using Flutter, focusing on creating
                    responsive user interfaces and integrating backend services through RESTful APIs.
                  </p>

                  {/* Key Responsibilities */}
                  <div>
                    <h4 className="font-semibold text-[#1e2a4a] mb-3 text-lg">Key Responsibilities & Achievements:</h4>
                    <ul className="space-y-3">
                      {[
                        "Developed cross-platform mobile UI components using Flutter framework",
                        "Integrated REST APIs for seamless data communication between frontend and backend",
                        "Optimized application performance through efficient state management and code optimization",
                        "Collaborated in agile development sprints with cross-functional teams",
                        "Participated in code reviews and maintained high code quality standards",
                        "Enhanced UI/UX components based on user feedback and design specifications",
                      ].map((responsibility, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-700">
                          <div className="w-2 h-2 bg-[#14b8a6] rounded-full mt-2 flex-shrink-0"></div>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Used */}
                  <div>
                    <h4 className="font-semibold text-[#1e2a4a] mb-3 text-lg">Technologies & Tools:</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Flutter",
                        "Dart",
                        "REST APIs",
                        "Git",
                        "Agile/Scrum",
                        "UI/UX Design",
                        "Performance Optimization",
                      ].map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-gray-100 text-gray-700 hover:bg-[#14b8a6] hover:text-white transition-colors px-3 py-1"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Impact */}
                  <div className="bg-gradient-to-r from-[#14b8a6]/10 to-[#0d9488]/10 p-4 rounded-lg border-l-4 border-[#14b8a6]">
                    <h4 className="font-semibold text-[#1e2a4a] mb-2">Impact & Learning:</h4>
                    <p className="text-gray-700">
                      This internship provided valuable hands-on experience in mobile app development and collaborative
                      software engineering practices. I gained expertise in Flutter development, API integration, and
                      agile methodologies while contributing to real-world projects that enhanced my technical and
                      professional skills.
                    </p>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>

          {/* Additional Note */}
          <div className="text-center mt-12">
            <p className="text-gray-600 italic">
              Open to new opportunities and excited to contribute to innovative projects
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
