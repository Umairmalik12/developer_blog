"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"
import { Loader2 } from "lucide-react"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Mailchimp integration - 3rd party newsletter service
      // In a real implementation, you would use their API or a form action
      const mailchimpUrl = "https://your-mailchimp-list-url.com" // Replace with your Mailchimp form action URL

      // Simulate API call for demo
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Store email in localStorage for demo purposes
      const subscribers = JSON.parse(localStorage.getItem("newsletter_subscribers") || "[]")
      subscribers.push({
        email,
        date: new Date().toISOString(),
        source: "website",
        status: "subscribed",
      })
      localStorage.setItem("newsletter_subscribers", JSON.stringify(subscribers))

      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      })

      setEmail("")
    } catch (error) {
      console.error("Newsletter subscription error:", error)
      toast({
        title: "Error",
        description: "There was a problem with your subscription. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="bg-gray-800 border-gray-700 focus-visible:ring-gold-500"
      />
      <Button type="submit" className="bg-gold-500 hover:bg-gold-600 text-black" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Subscribing...
          </>
        ) : (
          "Subscribe"
        )}
      </Button>
    </form>
  )
}
