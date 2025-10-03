"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Card } from "./ui/card"
import { Mail, MessageSquare, User } from "lucide-react"
import emailjs from "@emailjs/browser"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      // EmailJS configuration - replace with your actual credentials
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "your_service_id"
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "your_template_id"
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "your_public_key"

      // Prepare email data
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        reply_to: formData.email,
      }

      // Send email using EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      )

      setStatus("success")
      setFormData({ name: "", email: "", message: "" })

      setTimeout(() => setStatus("idle"), 3000)
    } catch (error) {
      console.error("Email sending failed:", error)
      setStatus("error")

      setTimeout(() => setStatus("idle"), 3000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-6 text-balance">Get in Touch</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you&apos;re a reader, journalist, or fellow writer, I&apos;d love to hear from you. For speaking
              engagements, media inquiries, or just to say hello, drop me a message.
            </p>
          </div>

          <Card className="p-8 bg-card border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
                  <User size={16} />
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status === "loading" || status === "success"}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                  <Mail size={16} />
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status === "loading" || status === "success"}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium flex items-center gap-2">
                  <MessageSquare size={16} />
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  disabled={status === "loading" || status === "success"}
                />
              </div>

              <Button type="submit" className="w-full" disabled={status === "loading" || status === "success"}>
                {status === "loading" ? "Sending..." : status === "success" ? "Message Sent!" : "Send Message"}
              </Button>

              {status === "success" && (
                <p className="text-sm text-accent text-center">
                  Thank you for reaching out. I&apos;ll get back to you soon.
                </p>
              )}

              {status === "error" && (
                <p className="text-sm text-destructive text-center">
                  Failed to send message. Please try again or email directly.
                </p>
              )}
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
