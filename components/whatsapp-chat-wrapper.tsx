"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"

// Dynamic import with ssr: false (only allowed in Client Components)
const WhatsAppChatComponent = dynamic(() => import("@/components/whatsapp-chat").then((mod) => mod.WhatsAppChat), {
  ssr: false,
})

export function WhatsAppChatWrapper({
  phoneNumber,
  welcomeMessage,
}: {
  phoneNumber: string
  welcomeMessage: string
}) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return <WhatsAppChatComponent phoneNumber={phoneNumber} welcomeMessage={welcomeMessage} />
}
