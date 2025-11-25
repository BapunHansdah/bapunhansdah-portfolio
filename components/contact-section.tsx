"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight, Github, Linkedin, Mail, Twitter } from "lucide-react"

const socialLinks = [
  { name: "Email", href: "mailto:bapunhansdah777@gmail.com", icon: Mail },
  { name: "GitHub", href: "https://github.com/bapunhansdah", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com/in/bapun-hansdah", icon: Linkedin },
  { name: "Twitter", href: "https://twitter.com/bapunhansdah7", icon: Twitter },
]

export function ContactSection() {
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
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center" ref={ref}>
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-sm font-mono text-muted-foreground mb-8 tracking-wide">LET&apos;S TALK</h2>
          <p className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            Building something cool?
            <br />
            <span className="text-muted-foreground">Need help turning an idea into reality?</span>
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
            I&apos;m always interested in hearing about new projects, creative ideas, or opportunities to be part of
            something amazing.
          </p>
        </div>

        <div
          className={`flex flex-wrap justify-center gap-4 mb-16 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              aria-label={link.name}
              title={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-5 py-3 border border-border rounded-full hover:bg-accent transition-colors"
            >
              <link.icon className="w-4 h-4" />
              <span className="font-medium">{link.name}</span>
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>

        <div
          className={`pt-16 border-t border-border transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-muted-foreground font-mono text-sm">
            Designed & built by Bapun Hansdah © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </section>
  )
}
