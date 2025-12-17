"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title:"Cmdrix",
    description: "A simple, open-source AI CLI tool for Windows.",
    link: "https://bapunhansdah.github.io/cmdrix/",
    tags: ["Open Source", "AI", "C#", "Windows", "CLI"],
  },
  {
    title: "Hard Mode",
    description: "A website blocker that prevents users from accessing certain websites.",
    link: "https://bapunhansdah.github.io/hardmode/",
    tags: ["Open Source", "C#", "Windows", "Desktop App"],
    featured: true,
  },
  {
    title: "Excalimotion",
    description: "Turn Excalidraw into a motion graphics app. Because static diagrams are boring.",
    link: "https://excalimotion.com",
    tags: ["React", "Canvas API", "Animation"],
    featured: true,
  },
  {
    title: "pptxgenjs Animation",
    description: "Open source contribution: added dynamic animation features to the pptxgenjs library.",
    link: "https://pptxgenjs-animation.vercel.app/",
    tags: ["Open Source", "Animation", "JavaScript"],
  },
  {
    title: "Hashtag Scraper",
    description: "Scrape Instagram user details from a list of hashtags. Simple, effective.",
    link: "https://chromewebstore.google.com/detail/hashtag-scraper/lkjglfpchhgefmooomhbdipbppabdpii",
    tags: ["Automation", "Data Scraping", "Instagram"],
  },
    {
    title: "Handy AI",
    description: "Chrome extension that lets you ask AI from anywhere — text, screenshots, or input fields.",
    link: "https://chromewebstore.google.com/detail/handy-ai/jefikdjmlhjnbkihdaiajpncmmjcjjbo",
    tags: ["React", "Gemini AI", "Chrome Extension"],
  },
]

const webDesigns = [
  { name: "Shotzspot.com", url: "https://shotzspot.com", type: "Influencer Marketing" },
  { name: "Stravion Capital", url: "https://stravioncapital.com", type: "Real Estate Startup" },
  { name: "Veeraj.in", url: "https://veeraj.in", type: "Personal Brand" },
  { name: "Veeraj Shah", url: "https://veerajshah.in", type: "Portfolio" },
  { name: "Veeraj Group", url: "https://veerajgroup.com", type: "Business" },
  { name: "Aarinston Creatives", url: "https://aarinstoncreatives.com", type: "Construction" },
  { name: "Aarinston", url: "https://www.aarinston.com/", type: "Chemical Company" },
  { name: "Interview Insider", url: "https://interviewinsider.com", type: "Startup" },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-32 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm font-mono text-muted-foreground mb-4 tracking-wide">THINGS I&apos;VE BUILT</h2>
        <p className="text-2xl md:text-3xl font-medium mb-16 max-w-2xl">
          Every project starts with a problem that annoyed me enough to solve it.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-24">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <div className="pt-16 border-t border-border">
          <h3 className="text-sm font-mono text-muted-foreground mb-8 tracking-wide">WEB DESIGNS & CLIENT WORK</h3>
          <p className="text-lg text-muted-foreground mb-8">
            I also design and build websites for startups and entrepreneurs who want to stand out.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {webDesigns.map((site) => (
              <a
                key={site.name}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 border border-border rounded-lg hover:bg-accent transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{site.name}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="text-sm text-muted-foreground">{site.type}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
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
    <div
      ref={ref}
      className={`group transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`block h-full p-8 border border-border rounded-xl hover:bg-accent transition-all ${
          project.featured ? "md:col-span-2 bg-card" : ""
        }`}
      >
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <p className="text-muted-foreground mb-6">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs font-mono px-2 py-1 bg-secondary rounded-md text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>
      </a>
    </div>
  )
}
