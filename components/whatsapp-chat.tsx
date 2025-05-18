"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Send, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

interface WhatsAppChatProps {
  phoneNumber: string
  welcomeMessage?: string
}

// WhatsApp SVG Icon component for better reliability
const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 175.216 175.552"
    className="h-7 w-7 fill-current"
    aria-hidden="true"
  >
    <path d="M87.4 0C39.195 0 0 39.304 0 87.6c0 19.291 6.28 37.182 16.957 51.65L5.868 175.552l37.345-11.93c13.936 9.868 30.955 15.64 49.187 15.64 48.205 0 87.4-39.304 87.4-87.6C179.8 39.304 135.605 0 87.4 0zm0 160.167c-16.642 0-32.057-5.263-44.677-14.215l-31.188 9.962 10.282-30.045c-9.541-13.215-15.167-29.458-15.167-46.97 0-40.37 32.138-73.017 71.59-73.017 39.452 0 71.59 32.647 71.59 73.017 0 40.37-32.138 73.017-71.59 73.017zm42.01-54.54c-2.21-1.14-13.095-6.544-15.138-7.3-2.043-.757-3.528-1.14-5.014 1.14-1.486 2.28-5.75 7.3-7.057 8.82-1.307 1.52-2.614 1.71-4.825.57-2.21-1.14-9.324-3.49-17.76-11.115-6.565-5.93-11-13.26-12.307-15.54-1.307-2.28-.143-3.51 1-4.65 1.028-1.02 2.21-2.66 3.348-3.99 1.14-1.33 1.486-2.28 2.23-3.8.744-1.52.372-2.85-.186-3.99-.558-1.14-5.014-12.255-6.873-16.775-1.858-4.52-3.716-3.8-5.014-3.8-1.307 0-2.792-.19-4.278-.19s-3.9.57-5.942 2.85c-2.043 2.28-7.8 7.68-7.8 18.795s7.985 21.84 9.092 23.36c1.107 1.52 15.138 24.31 37.436 33.14 22.298 8.82 22.298 5.93 26.34 5.55 4.043-.38 13.095-5.36 14.952-10.64 1.858-5.26 1.858-9.78 1.3-10.73-.558-.95-2.043-1.52-4.255-2.66z" />
  </svg>
)

// Change the export to default
export default function WhatsAppChat({
  phoneNumber,
  welcomeMessage = "Hello! How can I help you today?",
}: WhatsAppChatProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [message, setMessage] = useState("")
  const [isMounted, setIsMounted] = useState<boolean>(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const formattedPhoneNumber = phoneNumber.replace(/\D/g, "")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return

    // Create WhatsApp URL with the message
    const whatsappUrl = `https://wa.me/${formattedPhoneNumber}?text=${encodeURIComponent(message)}`

    // Safely open window
    if (typeof window !== "undefined") {
      window.open(whatsappUrl, "_blank")
    }

    setMessage("")
  }

  if (!isMounted) {
    return null
  }

  return (
    <>
      {/* WhatsApp Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full ${
          isOpen ? "bg-gray-700" : "bg-[#25D366]"
        } text-white shadow-lg transition-all ${isOpen ? "hover:bg-gray-600" : "hover:bg-[#20c35c]"}`}
        aria-label={isOpen ? "Close WhatsApp Chat" : "Open WhatsApp Chat"}
      >
        {isOpen ? <X className="h-7 w-7" /> : <WhatsAppIcon />}
      </button>

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 overflow-hidden rounded-lg bg-white shadow-xl">
          {/* Header */}
          <div className="flex items-center justify-between bg-[#25D366] px-4 py-3 text-white">
            <div className="flex items-center">
              <WhatsAppIcon />
              <div>
                <h3 className="font-medium">WhatsApp Chat</h3>
                <p className="text-xs opacity-90">Typically replies within an hour</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-full p-1.5 bg-[#20c35c]/20 hover:bg-[#20c35c]/30 transition-colors"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="h-64 overflow-y-auto bg-[#e5ded8] p-3">
            {/* Welcome Message */}
            <div className="mb-3 max-w-[80%] rounded-lg bg-white p-3 shadow-sm">
              <p className="text-sm text-gray-700">{welcomeMessage}</p>
              <span className="mt-1 block text-right text-xs text-gray-500">
                {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </span>
            </div>
          </div>

          {/* Chat Input */}
          <form onSubmit={handleSubmit} className="flex border-t border-gray-200 bg-white p-2">
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className="mr-2 min-h-[40px] flex-1 resize-none border-gray-300 py-2 text-sm"
              maxLength={500}
            />
            <Button type="submit" size="sm" className="h-10 w-10 rounded-full bg-[#25D366] p-0 hover:bg-[#20c35c]">
              <Send className="h-5 w-5" />
              <span className="sr-only">Send</span>
            </Button>
          </form>
        </div>
      )}
    </>
  )
}

// And keep a named export for backward compatibility
export { WhatsAppChat }
