"use client"

import { useEffect, useState } from "react"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="min-h-screen flex flex-col justify-center relative px-6 pt-20">
      <div className="max-w-6xl mx-auto w-full">
        <div
          className={cn(
            "transition-all duration-1000 delay-100",
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <p className="text-muted-foreground font-mono text-sm mb-6 tracking-wide">Hey, I&apos;m</p>
        </div>

        <h1
          className={cn(
            "text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-8 transition-all duration-1000 delay-200",
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <span className="block">Bapun</span>
          <span className="block text-muted-foreground">Hansdah</span>
        </h1>

        <div
          className={cn(
            "max-w-2xl transition-all duration-1000 delay-300",
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-4">
            Developer. Designer. Builder.
          </p>
          <p className="text-lg text-muted-foreground/80 leading-relaxed">
            I don&apos;t just write code — I craft experiences. From reverse engineering to building AI startups,
            I&apos;ve taken the unconventional path. And honestly? That&apos;s what makes this interesting.
          </p>
        </div>

        <div
          className={cn(
            "mt-12 transition-all duration-1000 delay-500",
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <p className="text-sm text-muted-foreground font-mono">
            3 years of building • currently open to opportunities
          </p>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#story" className="text-muted-foreground hover:text-foreground transition-colors">
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  )
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ")
}
