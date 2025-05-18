"use client"

import type React from "react"

import { useRef, useState } from "react"
import { Mail, Phone, MapPin, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { NewsletterForm } from "@/components/newsletter-form"
import { toast } from "@/hooks/use-toast"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // EmailJS integration - 3rd party email service
      const emailJsServiceId = "service_id" // Replace with your EmailJS service ID
      const emailJsTemplateId = "template_id" // Replace with your EmailJS template ID
      const emailJsUserId = "user_id" // Replace with your EmailJS user ID

      const emailJsData = {
        service_id: emailJsServiceId,
        template_id: emailJsTemplateId,
        user_id: emailJsUserId,
        template_params: {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
      }

      // In a real implementation, you would make this API call
      // const emailResponse = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(emailJsData),
      // })

      // Simulate API call for demo
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Store message in localStorage for demo purposes
      const messages = JSON.parse(localStorage.getItem("contact_messages") || "[]")
      messages.push({
        ...formData,
        date: new Date().toISOString(),
        sentToEmail: true,
        sentToWhatsapp: true,
      })
      localStorage.setItem("contact_messages", JSON.stringify(messages))

      toast({
        title: "Message sent!",
        description: "Your message has been sent to our email and WhatsApp.",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      console.error("Contact form submission error:", error)
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const sendToWhatsApp = () => {
    if (formData.name && formData.email && formData.subject && formData.message) {
      const whatsappNumber = "03077099421" // Your WhatsApp number
      const whatsappMessage = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`,
      )
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
      window.open(whatsappUrl, "_blank")
    } else {
      toast({
        title: "Form incomplete",
        description: "Please fill out all fields before sending to WhatsApp.",
        variant: "destructive",
      })
    }
  }

  return (
    <main className="flex-1 bg-gray-950">
      <section className="py-12 md:py-16 bg-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">
              Get in <span className="text-gold-500">Touch</span>
            </h1>
            <p className="max-w-[700px] text-gray-400 md:text-lg">
              Have a question or want to work together? Feel free to reach out!
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Contact Form</CardTitle>
                <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-200">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-gray-800 border-gray-700 focus-visible:ring-gold-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-200">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        placeholder="Your email"
                        required
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-gray-800 border-gray-700 focus-visible:ring-gold-500"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-200">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-gray-800 border-gray-700 focus-visible:ring-gold-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-200">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="min-h-[150px] bg-gray-800 border-gray-700 focus-visible:ring-gold-500"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      type="submit"
                      className="flex-1 bg-gold-500 hover:bg-gold-600 text-black"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Mail className="mr-2 h-4 w-4" />
                          Send via Email
                        </>
                      )}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className="flex-1 border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10"
                      onClick={sendToWhatsApp}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 175.216 175.552"
                        className="mr-2 h-4 w-4 fill-current"
                        aria-hidden="true"
                      >
                        <path d="M87.4 0C39.195 0 0 39.304 0 87.6c0 19.291 6.28 37.182 16.957 51.65L5.868 175.552l37.345-11.93c13.936 9.868 30.955 15.64 49.187 15.64 48.205 0 87.4-39.304 87.4-87.6C179.8 39.304 135.605 0 87.4 0zm0 160.167c-16.642 0-32.057-5.263-44.677-14.215l-31.188 9.962 10.282-30.045c-9.541-13.215-15.167-29.458-15.167-46.97 0-40.37 32.138-73.017 71.59-73.017 39.452 0 71.59 32.647 71.59 73.017 0 40.37-32.138 73.017-71.59 73.017zm42.01-54.54c-2.21-1.14-13.095-6.544-15.138-7.3-2.043-.757-3.528-1.14-5.014 1.14-1.486 2.28-5.75 7.3-7.057 8.82-1.307 1.52-2.614 1.71-4.825.57-2.21-1.14-9.324-3.49-17.76-11.115-6.565-5.93-11-13.26-12.307-15.54-1.307-2.28-.143-3.51 1-4.65 1.028-1.02 2.21-2.66 3.348-3.99 1.14-1.33 1.486-2.28 2.23-3.8.744-1.52.372-2.85-.186-3.99-.558-1.14-5.014-12.255-6.873-16.775-1.858-4.52-3.716-3.8-5.014-3.8-1.307 0-2.792-.19-4.278-.19s-3.9.57-5.942 2.85c-2.043 2.28-7.8 7.68-7.8 18.795s7.985 21.84 9.092 23.36c1.107 1.52 15.138 24.31 37.436 33.14 22.298 8.82 22.298 5.93 26.34 5.55 4.043-.38 13.095-5.36 14.952-10.64 1.858-5.26 1.858-9.78 1.3-10.73-.558-.95-2.043-1.52-4.255-2.66z" />
                      </svg>
                      Send via WhatsApp
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white">Contact Information</CardTitle>
                  <CardDescription>Feel free to reach out through any of these channels.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-5 w-5 text-gold-500 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-medium text-gray-200">Email</h3>
                      <a href="mailto:hello@developerslog.com" className="text-sm text-gray-400 hover:text-gold-500">
                        hello@developerslog.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="h-5 w-5 text-gold-500 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-medium text-gray-200">Phone/WhatsApp</h3>
                      <a href="tel:+03077099421" className="text-sm text-gray-400 hover:text-gold-500">
                        +03077099421
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-5 w-5 text-gold-500 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-medium text-gray-200">Location</h3>
                      <p className="text-sm text-gray-400">San Francisco, CA</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white">Chat with Us</CardTitle>
                  <CardDescription>Get instant responses through WhatsApp.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center space-y-4">
                    <div className="flex h-32 w-32 items-center justify-center rounded-lg bg-white p-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 175.216 175.552"
                        className="h-16 w-16"
                        style={{ fill: "#25D366" }}
                        aria-hidden="true"
                      >
                        <path d="M87.4 0C39.195 0 0 39.304 0 87.6c0 19.291 6.28 37.182 16.957 51.65L5.868 175.552l37.345-11.93c13.936 9.868 30.955 15.64 49.187 15.64 48.205 0 87.4-39.304 87.4-87.6C179.8 39.304 135.605 0 87.4 0zm0 160.167c-16.642 0-32.057-5.263-44.677-14.215l-31.188 9.962 10.282-30.045c-9.541-13.215-15.167-29.458-15.167-46.97 0-40.37 32.138-73.017 71.59-73.017 39.452 0 71.59 32.647 71.59 73.017 0 40.37-32.138 73.017-71.59 73.017zm42.01-54.54c-2.21-1.14-13.095-6.544-15.138-7.3-2.043-.757-3.528-1.14-5.014 1.14-1.486 2.28-5.75 7.3-7.057 8.82-1.307 1.52-2.614 1.71-4.825.57-2.21-1.14-9.324-3.49-17.76-11.115-6.565-5.93-11-13.26-12.307-15.54-1.307-2.28-.143-3.51 1-4.65 1.028-1.02 2.21-2.66 3.348-3.99 1.14-1.33 1.486-2.28 2.23-3.8.744-1.52.372-2.85-.186-3.99-.558-1.14-5.014-12.255-6.873-16.775-1.858-4.52-3.716-3.8-5.014-3.8-1.307 0-2.792-.19-4.278-.19s-3.9.57-5.942 2.85c-2.043 2.28-7.8 7.68-7.8 18.795s7.985 21.84 9.092 23.36c1.107 1.52 15.138 24.31 37.436 33.14 22.298 8.82 22.298 5.93 26.34 5.55 4.043-.38 13.095-5.36 14.952-10.64 1.858-5.26 1.858-9.78 1.3-10.73-.558-.95-2.043-1.52-4.255-2.66z" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-400 text-center">
                      Scan this QR code with your phone camera to start a WhatsApp conversation with us instantly.
                    </p>
                    <Button
                      className="w-full bg-[#25D366] hover:bg-[#20c35c] text-white"
                      onClick={() => window.open(`https://wa.me/03077099421`, "_blank")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 175.216 175.552"
                        className="mr-2 h-5 w-5 fill-current"
                        aria-hidden="true"
                      >
                        <path d="M87.4 0C39.195 0 0 39.304 0 87.6c0 19.291 6.28 37.182 16.957 51.65L5.868 175.552l37.345-11.93c13.936 9.868 30.955 15.64 49.187 15.64 48.205 0 87.4-39.304 87.4-87.6C179.8 39.304 135.605 0 87.4 0zm0 160.167c-16.642 0-32.057-5.263-44.677-14.215l-31.188 9.962 10.282-30.045c-9.541-13.215-15.167-29.458-15.167-46.97 0-40.37 32.138-73.017 71.59-73.017 39.452 0 71.59 32.647 71.59 73.017 0 40.37-32.138 73.017-71.59 73.017zm42.01-54.54c-2.21-1.14-13.095-6.544-15.138-7.3-2.043-.757-3.528-1.14-5.014 1.14-1.486 2.28-5.75 7.3-7.057 8.82-1.307 1.52-2.614 1.71-4.825.57-2.21-1.14-9.324-3.49-17.76-11.115-6.565-5.93-11-13.26-12.307-15.54-1.307-2.28-.143-3.51 1-4.65 1.028-1.02 2.21-2.66 3.348-3.99 1.14-1.33 1.486-2.28 2.23-3.8.744-1.52.372-2.85-.186-3.99-.558-1.14-5.014-12.255-6.873-16.775-1.858-4.52-3.716-3.8-5.014-3.8-1.307 0-2.792-.19-4.278-.19s-3.9.57-5.942 2.85c-2.043 2.28-7.8 7.68-7.8 18.795s7.985 21.84 9.092 23.36c1.107 1.52 15.138 24.31 37.436 33.14 22.298 8.82 22.298 5.93 26.34 5.55 4.043-.38 13.095-5.36 14.952-10.64 1.858-5.26 1.858-9.78 1.3-10.73-.558-.95-2.043-1.52-4.255-2.66z" />
                      </svg>
                      Chat on WhatsApp
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-black">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-white">
                Subscribe to the <span className="text-gold-500">Newsletter</span>
              </h2>
              <p className="mt-4 text-gray-400">
                Get the latest articles, tutorials, and updates delivered straight to your inbox.
              </p>
            </div>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </main>
  )
}
