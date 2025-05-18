import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Toaster } from "@/components/ui/toaster"
import { WhatsAppChat } from "@/components/whatsapp-chat"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Developer's Log",
  description: "A blog about web development, programming, and technology.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-gray-950 text-gray-50 flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <SiteHeader />
          {children}
          <SiteFooter />
          <WhatsAppChat
            phoneNumber="03077099421"
            welcomeMessage="👋 Hello! Welcome to Developer's Log. How can I assist you today? Feel free to ask any questions about our services, blog posts, or code snippets."
          />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
