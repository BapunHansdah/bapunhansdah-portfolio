"use client"

import { useEffect, useRef, useState } from "react"

const experiences = [
  {
    company: "Unifill AI",
    role: "Co-Founder & Developer",
    period: "Sep 2023 — Present",
    description:
      "Building tailored AI solutions including AI chatbots, Slack integrations, and browser automation tools. Learned the hard way that some problems are harder to scale than others.",
  },
  {
    company: "DogSwag Club",
    role: "Full Stack Developer",
    period: "Feb 2023 — Aug 2023",
    description:
      "Built a pet services platform with responsive frontend, appointment scheduling, and secure checkout. My first taste of professional development life.",
  },
]

export function ExperienceSection() {
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
    <section className="py-32 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <h2 className="text-sm font-mono text-muted-foreground mb-4 tracking-wide">WHERE I&apos;VE WORKED</h2>
        <p className="text-2xl md:text-3xl font-medium mb-16">The companies that trusted me to build things.</p>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className={`grid md:grid-cols-[200px_1fr] gap-4 md:gap-8 pb-12 border-b border-border last:border-0 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-sm font-mono text-muted-foreground">{exp.period}</div>
              <div>
                <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
                <p className="text-muted-foreground mb-4">{exp.company}</p>
                <p className="text-muted-foreground/80 leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
