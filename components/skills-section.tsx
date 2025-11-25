"use client"

import { useEffect, useRef, useState } from "react"

const skillCategories = [
  {
    title: "Languages & Frameworks",
    skills: ["JavaScript", "TypeScript", "React.js", "Next.js", "Node.js", "Python", "Go"],
  },
  {
    title: "Databases & Backend",
    skills: ["MongoDB", "PostgreSQL", "Firebase", "Supabase", "Socket.IO"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["Docker", "AWS", "Azure", "Git"],
  },
  {
    title: "AI & Computer Vision",
    skills: ["OpenCV", "YOLO", "LangChain", "Generative AI"],
  },
  {
    title: "Design & UI",
    skills: ["Tailwind CSS", "Motion Graphics", "Video Editing"],
  },
]

export function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <h2 className="text-sm font-mono text-muted-foreground mb-4 tracking-wide">TOOLS OF THE TRADE</h2>
        <p className="text-2xl md:text-3xl font-medium mb-16 max-w-2xl">
          I pick up new tools fast. Here&apos;s what I&apos;m currently dangerous with.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${categoryIndex * 100}ms` }}
            >
              <h3 className="text-sm font-mono text-muted-foreground mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 border border-border rounded-full text-sm hover:bg-accent transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
