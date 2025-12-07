"use client"

import { Button } from "./ui/button"
import { ArrowDown } from "lucide-react"

export function Hero() {
  const scrollToBooks = () => {
    const element = document.getElementById("books")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-95 md:object-center object-[75%_center]"
        >
          <source src="/hero_video.mov" type="video/quicktime" />
          <source src="/hero_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-balance ghostly-entrance">
            Bill Gill
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground font-serif italic ghostly-entrance" style={{ animationDelay: "0.2s" }}>
            Crime Fiction Author
          </p>
          <p className="text-lg sm:text-xl text-foreground/90 max-w-2xl mx-auto leading-relaxed text-pretty ghostly-entrance" style={{ animationDelay: "0.4s" }}>
            Dark secrets. Twisted legacies. Characters you can&apos;t forget. Bill Gill delivers mysteries that linger long after the story ends.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 ghostly-entrance" style={{ animationDelay: "0.6s" }}>
            <Button size="lg" onClick={scrollToBooks} className="text-base">
              Explore Books
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.getElementById("contact")
                if (element) element.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Get in Touch
            </Button>
          </div>
        </div>

        <button
          onClick={scrollToBooks}
          className="hidden sm:block absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce"
          aria-label="Scroll to books"
        >
          <ArrowDown size={32} className="text-muted-foreground" />
        </button>
      </div>
    </section>
  )
}
