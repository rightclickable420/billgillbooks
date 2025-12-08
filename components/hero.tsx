"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "./ui/button"
import { ArrowDown } from "lucide-react"

const videos = [
  { mov: "/hero_video.mov", mp4: "/hero_video.mp4" },
  { mov: "/hero_video_2.mov", mp4: "/hero_video_2.mp4" },
]

export function Hero() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [nextVideoIndex, setNextVideoIndex] = useState(1)
  const [showCurrent, setShowCurrent] = useState(true)
  const video1Ref = useRef<HTMLVideoElement>(null)
  const video2Ref = useRef<HTMLVideoElement>(null)

  const scrollToBooks = () => {
    const element = document.getElementById("books")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    const currentVideo = showCurrent ? video1Ref.current : video2Ref.current
    if (!currentVideo) return

    const handleVideoEnd = () => {
      // Start fading to next video
      setShowCurrent(!showCurrent)

      // After fade completes, update indices and prepare next video
      setTimeout(() => {
        setCurrentVideoIndex((prev) => (prev + 1) % videos.length)
        setNextVideoIndex((prev) => (prev + 1) % videos.length)
      }, 2000)
    }

    currentVideo.addEventListener("ended", handleVideoEnd)
    return () => currentVideo.removeEventListener("ended", handleVideoEnd)
  }, [showCurrent])

  // Start playing the next video when it becomes visible
  useEffect(() => {
    const videoToPlay = showCurrent ? video1Ref.current : video2Ref.current
    if (videoToPlay) {
      videoToPlay.play().catch(() => {
        // Ignore autoplay errors
      })
    }
  }, [showCurrent])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Videos */}
      <div className="absolute inset-0 z-0">
        {/* Video 1 */}
        <video
          ref={video1Ref}
          autoPlay
          muted
          playsInline
          className={`absolute inset-0 w-full h-full object-cover md:object-center object-[75%_center] transition-opacity duration-[2000ms] ease-in-out ${
            showCurrent ? "opacity-95" : "opacity-0"
          }`}
        >
          <source src={videos[currentVideoIndex].mov} type="video/quicktime" />
          <source src={videos[currentVideoIndex].mp4} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Video 2 */}
        <video
          ref={video2Ref}
          muted
          playsInline
          className={`absolute inset-0 w-full h-full object-cover md:object-center object-[75%_center] transition-opacity duration-[2000ms] ease-in-out ${
            !showCurrent ? "opacity-95" : "opacity-0"
          }`}
        >
          <source src={videos[nextVideoIndex].mov} type="video/quicktime" />
          <source src={videos[nextVideoIndex].mp4} type="video/mp4" />
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
