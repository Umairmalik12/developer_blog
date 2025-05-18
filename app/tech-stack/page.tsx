"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen } from "lucide-react"
import Image from "next/image"

export default function TechStackPage() {
  // Mock data for tech stack
  const techCategories = [
    {
      id: "frontend",
      name: "Frontend",
      technologies: [
        { name: "HTML5", experience: 95, icon: "/placeholder.svg?height=24&width=24" },
        { name: "CSS3", experience: 90, icon: "/placeholder.svg?height=24&width=24" },
        { name: "JavaScript", experience: 92, icon: "/placeholder.svg?height=24&width=24" },
        { name: "TypeScript", experience: 85, icon: "/placeholder.svg?height=24&width=24" },
        { name: "React", experience: 88, icon: "/placeholder.svg?height=24&width=24" },
        { name: "Next.js", experience: 82, icon: "/placeholder.svg?height=24&width=24" },
        { name: "Vue.js", experience: 70, icon: "/placeholder.svg?height=24&width=24" },
        { name: "Tailwind CSS", experience: 85, icon: "/placeholder.svg?height=24&width=24" },
        { name: "Framer Motion", experience: 75, icon: "/placeholder.svg?height=24&width=24" },
      ],
    },
    {
      id: "ui",
      name: "UI/UX",
      technologies: [
        { name: "Figma", experience: 85, icon: "/placeholder.svg?height=24&width=24" },
        { name: "Adobe XD", experience: 80, icon: "/placeholder.svg?height=24&width=24" },
        { name: "Sketch", experience: 75, icon: "/placeholder.svg?height=24&width=24" },
        { name: "Photoshop", experience: 70, icon: "/placeholder.svg?height=24&width=24" },
        { name: "Illustrator", experience: 65, icon: "/placeholder.svg?height=24&width=24" },
        { name: "Accessibility", experience: 85, icon: "/placeholder.svg?height=24&width=24" },
        { name: "Responsive Design", experience: 90, icon: "/placeholder.svg?height=24&width=24" },
        { name: "UI Animation", experience: 80, icon: "/placeholder.svg?height=24&width=24" },
        { name: "Design Systems", experience: 78, icon: "/placeholder.svg?height=24&width=24" },
      ],
    },
    {
      id: "performance",
      name: "Performance",
      technologies: [
        { name: "Webpack", experience: 78, icon: "/placeholder.svg?height=24&width=24" },
        { name: "Vite", experience: 80, icon: "/placeholder.svg?height=24&width=24" },
        { name: "Lighthouse", experience: 85, icon: "/placeholder.svg?height=24&width=24" },
        { name: "Web Vitals", experience: 82, icon: "/placeholder.svg?height=24&width=24" },
        { name: "Performance Metrics", experience: 80, icon: "/placeholder.svg?height=24&width=24" },
        { name: "Image Optimization", experience: 85, icon: "/placeholder.svg?height=24&width=24" },
        { name: "Code Splitting", experience: 75, icon: "/placeholder.svg?height=24&width=24" },
      ],
    },
    {
      id: "tools",
      name: "Tools",
      technologies: [
        { name: "Git", experience: 90, icon: "/placeholder.svg?height=24&width=24" },
        { name: "GitHub", experience: 92, icon: "/placeholder.svg?height=24&width=24" },
        { name: "VS Code", experience: 95, icon: "/placeholder.svg?height=24&width=24" },
        { name: "Jest", experience: 75, icon: "/placeholder.svg?height=24&width=24" },
        { name: "Cypress", experience: 70, icon: "/placeholder.svg?height=24&width=24" },
        { name: "ESLint", experience: 85, icon: "/placeholder.svg?height=24&width=24" },
        { name: "Prettier", experience: 90, icon: "/placeholder.svg?height=24&width=24" },
        { name: "npm/yarn", experience: 88, icon: "/placeholder.svg?height=24&width=24" },
      ],
    },
  ]

  // Currently learning technologies
  const currentlyLearning = [
    { name: "Astro", progress: 60, icon: "/placeholder.svg?height=24&width=24" },
    { name: "Svelte", progress: 45, icon: "/placeholder.svg?height=24&width=24" },
    { name: "Web Components", progress: 35, icon: "/placeholder.svg?height=24&width=24" },
    { name: "WebGL", progress: 30, icon: "/placeholder.svg?height=24&width=24" },
  ]

  // Helper function to determine experience level
  const getExperienceLevel = (experience: number) => {
    if (experience >= 90) return { label: "Expert", color: "text-green-500" }
    if (experience >= 80) return { label: "Advanced", color: "text-blue-500" }
    if (experience >= 70) return { label: "Intermediate", color: "text-yellow-500" }
    return { label: "Beginner", color: "text-red-500" }
  }

  return (
    <main className="flex-1 bg-gray-950">
      <section className="py-12 md:py-16 bg-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">
              My Tech <span className="text-gold-500">Stack</span>
            </h1>
            <p className="max-w-[700px] text-gray-400 md:text-lg">
              An overview of the technologies, frameworks, and tools I work with.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="w-full justify-start mb-8 bg-gray-900 p-1 overflow-x-auto flex-nowrap">
              {techCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-gray-800 data-[state=active]:text-gold-500 px-4 py-2"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {techCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                  {category.technologies.map((tech) => (
                    <Card
                      key={tech.name}
                      className="bg-gray-900 border-gray-800 hover:border-gold-500/50 transition-all"
                    >
                      <CardHeader className="pb-2">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                            <Image
                              src={tech.icon || "/placeholder.svg"}
                              alt={tech.name}
                              width={24}
                              height={24}
                              onError={(e) => {
                                const target = e.target as HTMLImageElement
                                target.src = "/placeholder.svg?height=24&width=24"
                              }}
                            />
                          </div>
                          <div>
                            <CardTitle className="text-white">{tech.name}</CardTitle>
                            <CardDescription className={getExperienceLevel(tech.experience).color}>
                              {getExperienceLevel(tech.experience).label}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-400">Experience</span>
                            <span className="text-sm text-gold-500">{tech.experience}%</span>
                          </div>
                          <Progress
                            value={tech.experience}
                            className="h-2 bg-gray-800"
                            indicatorClassName="bg-gold-500"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section className="py-12 bg-black">
        <div className="container px-4 md:px-6">
          <div className="flex items-center space-x-2 mb-8">
            <BookOpen className="h-6 w-6 text-gold-500" />
            <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-white">
              Currently <span className="text-gold-500">Learning</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {currentlyLearning.map((tech) => (
              <Card key={tech.name} className="bg-gray-900 border-gray-800 hover:border-gold-500/50 transition-all">
                <CardHeader className="pb-2">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                      <Image
                        src={tech.icon || "/placeholder.svg"}
                        alt={tech.name}
                        width={24}
                        height={24}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = "/placeholder.svg?height=24&width=24"
                        }}
                      />
                    </div>
                    <CardTitle className="text-white">{tech.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-400">Progress</span>
                      <span className="text-sm text-gold-500">{tech.progress}%</span>
                    </div>
                    <Progress value={tech.progress} className="h-2 bg-gray-800" indicatorClassName="bg-gold-500" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
