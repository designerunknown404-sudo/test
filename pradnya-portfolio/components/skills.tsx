import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Wrench, Smartphone, Globe, GitBranch } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "bg-blue-500",
      skills: ["Java", "Python", "JavaScript (ES6+)", "PHP", "C", "C++"],
    },
    {
      title: "Databases",
      icon: Database,
      color: "bg-green-500",
      skills: ["MySQL", "Apache Derby", "SQLite", "MongoDB (Basics)"],
    },
    {
      title: "Frameworks & Libraries",
      icon: Globe,
      color: "bg-purple-500",
      skills: ["Flutter", "Bootstrap", "jQuery", "Express.js"],
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      color: "bg-orange-500",
      skills: ["Figma", "GitHub", "VS Code", "Eclipse IDE", "IntelliJ IDEA", "Postman"],
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      color: "bg-pink-500",
      skills: ["Flutter", "Cross-platform UI", "REST API Integration", "Performance Optimization"],
    },
    {
      title: "Development Practices",
      icon: GitBranch,
      color: "bg-teal-500",
      skills: ["OOP", "RESTful APIs", "Agile/Scrum", "Version Control (Git)", "Code Reviews"],
    },
  ]

  return (
    <section id="skills" className="py-20 gradient-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#1e2a4a] mb-4">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-[#14b8a6] mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable, and user-friendly applications
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <Card
                  key={category.title}
                  className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 rounded-lg ${category.color} group-hover:scale-110 transition-transform`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-display font-semibold text-[#1e2a4a] text-lg">{category.title}</h3>
                    </div>

                    {/* Skills List */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-gray-100 text-gray-700 hover:bg-[#14b8a6] hover:text-white transition-colors cursor-default text-sm py-1 px-3"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Additional Skills Note */}
          <div className="text-center mt-12">
            <p className="text-gray-600 italic">
              Continuously learning and exploring new technologies to stay current with industry trends
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
