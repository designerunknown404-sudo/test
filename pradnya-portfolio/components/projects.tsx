import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Monitor, Smartphone } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "iDusk – Authorized Apple Retailer Website",
      description:
        "A comprehensive e-commerce platform for Apple products featuring responsive design, advanced product search and filtering, shopping cart functionality, and seamless user experience. Built with modern web technologies and optimized for performance.",
      image: "/apple-ecommerce-showcase.png",
      technologies: ["HTML5", "CSS3", "JavaScript", "JSP", "Apache Derby", "Figma"],
      features: [
        "Responsive e-commerce design",
        "Product search & filtering",
        "Shopping cart functionality",
        "User authentication system",
        "Admin panel for inventory management",
      ],
      githubUrl: "https://github.com/pradnya-patil/idusk-apple-retailer",
      icon: Monitor,
    },
    {
      title: "Shadow – Anime Streaming Platform",
      description:
        "A modern anime streaming platform with intuitive interface, content categorization, and optimized streaming performance. Features user profiles, watchlists, and responsive design for seamless viewing across all devices.",
      image: "/placeholder-56mmb.png",
      technologies: ["HTML5", "CSS3", "JavaScript", "JSP", "Apache Derby", "Figma"],
      features: [
        "Streaming video interface",
        "Content categorization system",
        "User profiles & watchlists",
        "Responsive design",
        "Performance optimized streaming",
      ],
      githubUrl: "https://github.com/pradnya-patil/shadow-anime-streaming",
      icon: Smartphone,
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#1e2a4a] mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-[#14b8a6] mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Showcasing my passion for creating impactful digital solutions through innovative web applications
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => {
              const IconComponent = project.icon
              return (
                <Card
                  key={project.title}
                  className="group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-0"
                >
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                    {/* Project Image */}
                    <div className={`relative overflow-hidden ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={`${project.title} screenshot`}
                        className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Project Content */}
                    <div className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                      <CardHeader className="p-0 mb-4">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 bg-[#14b8a6] rounded-lg">
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <CardTitle className="text-xl font-display font-bold text-[#1e2a4a] leading-tight">
                            {project.title}
                          </CardTitle>
                        </div>
                      </CardHeader>

                      <CardContent className="p-0 space-y-6">
                        <p className="text-gray-600 leading-relaxed">{project.description}</p>

                        {/* Technologies */}
                        <div>
                          <h4 className="font-semibold text-[#1e2a4a] mb-2">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <Badge
                                key={tech}
                                variant="outline"
                                className="border-[#14b8a6] text-[#14b8a6] hover:bg-[#14b8a6] hover:text-white transition-colors"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Key Features */}
                        <div>
                          <h4 className="font-semibold text-[#1e2a4a] mb-2">Key Features:</h4>
                          <ul className="space-y-1">
                            {project.features.map((feature) => (
                              <li key={feature} className="text-gray-600 text-sm flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-[#14b8a6] rounded-full"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4 pt-4">
                          <Button asChild className="bg-[#14b8a6] hover:bg-[#0d9488] text-white">
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              <Github className="h-4 w-4" />
                              View on GitHub
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-gray-600 mb-6">Interested in seeing more of my work or collaborating on a project?</p>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[#14b8a6] text-[#14b8a6] hover:bg-[#14b8a6] hover:text-white bg-transparent"
            >
              <a href="https://github.com/pradnya-patil" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 mr-2" />
                View All Projects
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
