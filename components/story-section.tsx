"use client"

import { useEffect, useRef, useState } from "react"

const storyBlocks = [
  {
    id: "origin",
    title: "It started with pixels, not code.",
    content: `My journey began in the creative world — exploring design, video editing, and motion graphics. I was obsessed with making things look beautiful and move smoothly. But then something happened.`,
  },
  {
    id: "linux",
    title: "Then I discovered Linux.",
    content: `And I was hooked. Not just on the operating system, but on the world of programming. Those cool terminal visuals? Yeah, that's what got me. Sometimes the rabbit hole starts with aesthetics.`,
  },
  {
    id: "security",
    title: "I dove deep into reverse engineering.",
    content: `Mobile security became my playground. I wanted to understand how things worked under the hood — and more importantly, how they could be broken.`,
  },
  {
    id: "scam",
    title: "One of my proudest moments?",
    content: `I identified a data-entry job scam that was exploiting people. I reverse-engineered their application, exposed the fraud, and released a tool to help victims. That video? 50k+ views on YouTube before it was taken down. Sometimes doing the right thing ruffles feathers.`,
    highlight: true,
  },
  {
    id: "hustle",
    title: "I started selling solutions.",
    content: `Through Telegram and Discord, I began offering coding solutions and mentorship. This network led to my first real developer role at DogSwag — where I finally tasted professional success.`,
  },
  {
    id: "startup",
    title: "Then came the startup chapter.",
    content: `I co-founded UnifillAI — an AI-powered browser automation tool. We spent a year building it. But here's the thing about startups: sometimes the edge-cases are too complex to scale. I made the tough call to pivot.`,
  },
  {
    id: "lessons",
    title: "What did I learn?",
    content: `Product management. Resilience. And the wisdom to know when to let go. These lessons are worth more than any successful exit.`,
  },
  {
    id: "now",
    title: "Now?",
    content: `I'm building cool side projects like Excalimotion (an animated version of Excalidraw), helping startups with AI automation, and collaborating with product teams to prototype ideas before writing a single line of code.`,
  },
]

export function StorySection() {
  return (
    <section id="story" className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm font-mono text-muted-foreground mb-16 tracking-wide">THE JOURNEY</h2>

        <div className="space-y-24">
          {storyBlocks.map((block, index) => (
            <StoryBlock key={block.id} block={block} index={index} />
          ))}
        </div>

        <div className="mt-32 pt-16 border-t border-border">
          <p className="text-2xl md:text-3xl leading-relaxed text-muted-foreground">
            <span className="text-foreground font-medium">My motto:</span> Build fast, deploy smart, learn faster. I
            believe in rapid iteration, continuous feedback, and learning through execution.
          </p>
          <p className="mt-8 text-lg text-muted-foreground/70">
            Super quick at picking up new languages, tools, or frameworks — just throw it at me.
          </p>
        </div>
      </div>
    </section>
  )
}

function StoryBlock({ block, index }: { block: (typeof storyBlocks)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <h3
        className={`text-2xl md:text-3xl font-semibold mb-4 leading-tight ${block.highlight ? "text-foreground" : ""}`}
      >
        {block.title}
      </h3>
      <p className="text-lg text-muted-foreground leading-relaxed">{block.content}</p>
    </div>
  )
}
