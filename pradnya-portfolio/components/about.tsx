import { Card, CardContent } from "@/components/ui/card"
import { Award, Code, Palette, Target } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#1e2a4a] mb-4">About Me</h2>
            <div className="w-20 h-1 bg-[#14b8a6] mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-teal-400 to-blue-600 p-2 shadow-2xl">
                  <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    <img
                      src="/confident-indian-woman-developer.png"
                      alt="Pradnya Patil - Professional portrait"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#14b8a6] rounded-full flex items-center justify-center shadow-lg animate-float">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <div
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#1e3a8a] rounded-full flex items-center justify-center shadow-lg animate-float"
                  style={{ animationDelay: "1s" }}
                >
                  <Palette className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  I'm a passionate <strong className="text-[#1e2a4a]">MCA student</strong> and{" "}
                  <strong className="text-[#1e2a4a]">B.Sc IT graduate</strong> with a strong foundation in software
                  development and design. My journey in technology has been driven by curiosity and a desire to create
                  meaningful digital experiences.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  With expertise spanning{" "}
                  <strong className="text-[#14b8a6]">Java, Python, JavaScript, and Flutter</strong>, I enjoy building
                  full-stack applications that solve real-world problems. My experience as a{" "}
                  <strong className="text-[#1e2a4a]">Flutter Developer Intern</strong> and winning the{" "}
                  <strong className="text-[#14b8a6]">Smart India Hackathon 2023</strong> has shaped my approach to
                  collaborative development and innovative problem-solving.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  I believe in the power of clean code, intuitive design, and continuous learning. Whether it's crafting
                  responsive web applications or designing user-friendly interfaces, I'm committed to delivering
                  high-quality solutions that make a difference.
                </p>
              </div>

              {/* Key Highlights */}
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                <Card className="border-l-4 border-l-[#14b8a6] hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <Award className="h-6 w-6 text-[#14b8a6]" />
                      <div>
                        <h4 className="font-semibold text-[#1e2a4a]">Academic Excellence</h4>
                        <p className="text-sm text-gray-600">CGPA: 9.00 (B.Sc IT), 8.79 (MCA)</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-[#1e3a8a] hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <Target className="h-6 w-6 text-[#1e3a8a]" />
                      <div>
                        <h4 className="font-semibold text-[#1e2a4a]">Hackathon Winner</h4>
                        <p className="text-sm text-gray-600">Smart India Hackathon 2023</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
