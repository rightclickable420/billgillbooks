"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setStatus("success")
    setEmail("")

    setTimeout(() => setStatus("idle"), 3000)
  }

  return (
    <section className="py-24 sm:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4 text-balance">Stay in the Shadows</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Subscribe to receive exclusive updates, behind-the-scenes content, and early access to new releases. Join
            the community of readers who dare to explore the darkness.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
              disabled={status === "loading" || status === "success"}
            />
            <Button type="submit" disabled={status === "loading" || status === "success"} className="sm:w-auto">
              {status === "loading" ? "Subscribing..." : status === "success" ? "Subscribed!" : "Subscribe"}
            </Button>
          </form>

          {status === "success" && (
            <p className="text-sm text-accent mt-4">
              Welcome to the shadows. Check your email to confirm your subscription.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
