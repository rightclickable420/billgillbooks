"use client"

import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ghostly-entrance ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg shadow-accent/5 border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-2xl font-serif font-bold tracking-tight hover:text-accent transition-colors"
          >
            Bill Gill
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("books")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Books
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Reviews
            </button>
            <Button onClick={() => scrollToSection("contact")} size="sm">
              Contact
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("books")}
                className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Books
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("reviews")}
                className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Reviews
              </button>
              <Button onClick={() => scrollToSection("contact")} size="sm" className="w-full">
                Contact
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
