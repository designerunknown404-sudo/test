import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Users, Award, Heart, Lightbulb, Target } from "lucide-react"

export default function Achievements() {
  const achievements = [
    {
      title: "Smart India Hackathon 2023 Winner",
      organization: "Team AIRAVATA",
      icon: Trophy,
      color: "bg-yellow-500",
      type: "Competition",
      description:
        "Led a winning team in India's premier hackathon, developing an innovative solution that addressed real-world challenges. Demonstrated exceptional problem-solving skills, teamwork, and technical expertise.",
      impact: "National Recognition",
      details: [
        "Collaborated with cross-functional team members",
        "Developed innovative technology solution",
        "Presented to industry experts and judges",
        "Received national recognition for innovation",
      ],
    },
    {
      title: "Volunteer at Seva Sahayog Foundation",
      organization: "Seva Sahayog Foundation",
      icon: Heart,
      color: "bg-pink-500",
      type: "Community Service",
      description:
        "Actively contributed to community service initiatives, demonstrating commitment to social responsibility and making a positive impact in the community.",
      impact: "Community Impact",
      details: [
        "Participated in community outreach programs",
        "Organized educational workshops",
        "Supported underprivileged communities",
        "Developed leadership and communication skills",
      ],
    },
    {
      title: "Workplace Ready Certification",
      organization: "Reliance Foundation Skilling Academy",
      icon: Target,
      color: "bg-blue-500",
      type: "Professional Development",
      description:
        "Completed comprehensive workplace readiness program focusing on professional skills, industry knowledge, and career development.",
      impact: "Career Readiness",
      details: [
        "Enhanced professional communication skills",
        "Learned industry best practices",
        "Developed workplace etiquette",
        "Gained insights into corporate culture",
      ],
    },
  ]

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#1e2a4a] mb-4">
              Achievements & Activities
            </h2>
            <div className="w-20 h-1 bg-[#14b8a6] mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Recognition for excellence in innovation, community service, and professional development
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="space-y-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <Card
                  key={achievement.title}
                  className="group shadow-lg hover:shadow-xl transition-all duration-300 border-0 overflow-hidden"
                >
                  <div
                    className={`h-2 bg-gradient-to-r ${achievement.color.replace("bg-", "from-")} to-transparent`}
                  ></div>

                  <CardHeader className="pb-4">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div
                          className={`p-4 rounded-lg ${achievement.color} group-hover:scale-110 transition-transform flex-shrink-0`}
                        >
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <CardTitle className="text-xl font-display font-bold text-[#1e2a4a] leading-tight">
                              {achievement.title}
                            </CardTitle>
                            <Badge variant="secondary" className="bg-[#14b8a6]/10 text-[#14b8a6] border-[#14b8a6]/20">
                              {achievement.type}
                            </Badge>
                          </div>
                          <p className="text-[#14b8a6] font-semibold text-lg mb-3">{achievement.organization}</p>
                          <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                        </div>
                      </div>

                      <div className="flex flex-col lg:items-end gap-2">
                        <div className="flex items-center gap-2">
                          <Award className="h-5 w-5 text-[#14b8a6]" />
                          <span className="font-semibold text-[#1e2a4a]">{achievement.impact}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div>
                      <h4 className="font-semibold text-[#1e2a4a] mb-3 flex items-center gap-2">
                        <Lightbulb className="h-4 w-4 text-[#14b8a6]" />
                        Key Highlights:
                      </h4>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {achievement.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start gap-3 text-gray-700">
                            <div className="w-2 h-2 bg-[#14b8a6] rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Leadership & Impact Summary */}
          <div className="mt-12">
            <div className="bg-gradient-to-r from-[#14b8a6]/10 to-[#0d9488]/10 p-8 rounded-lg border border-[#14b8a6]/20">
              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Users className="h-6 w-6 text-[#14b8a6]" />
                  <h3 className="font-display font-semibold text-[#1e2a4a] text-xl">Leadership & Impact</h3>
                </div>
                <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  These achievements reflect my commitment to excellence, innovation, and community service. Through
                  competitive programming, volunteer work, and professional development, I've developed strong
                  leadership skills, technical expertise, and a passion for making a positive impact. I believe in using
                  technology and collaboration to solve real-world problems and contribute to society.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
