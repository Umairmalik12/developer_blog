"use client"

import Link from "next/link"
import { Code, Menu, X } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"
import { useMobile } from "@/hooks/use-mobile"

export function SiteHeader() {
  const isMobile = useMobile()
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 mr-6">
          <Code className="h-6 w-6 text-gold-500" />
          <span className="hidden font-bold sm:inline-block text-white">Developer&apos;s Log</span>
        </Link>
        {isMobile ? (
          <div className="flex flex-1 items-center justify-end">
            <Button
              variant="ghost"
              className="ml-auto h-8 w-8 p-0 text-white"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <span className="sr-only">Toggle menu</span>
              {showMobileMenu ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            {showMobileMenu && <MobileNav onClose={() => setShowMobileMenu(false)} />}
          </div>
        ) : (
          <>
            <nav className="flex flex-1 items-center gap-6 text-sm">
              <Link href="/" className="text-gray-300 transition-colors hover:text-gold-500">
                Home
              </Link>
              <Link href="/blog" className="text-gray-300 transition-colors hover:text-gold-500">
                Blog
              </Link>
              <Link href="/tech-stack" className="text-gray-300 transition-colors hover:text-gold-500">
                Tech Stack
              </Link>
              <Link href="/code-snippets" className="text-gray-300 transition-colors hover:text-gold-500">
                Code Snippets
              </Link>
              <Link href="/contact" className="text-gray-300 transition-colors hover:text-gold-500">
                Contact
              </Link>
            </nav>
            <div className="ml-auto flex items-center gap-2">
              <Button asChild variant="ghost" size="sm" className="text-gray-300 hover:text-gold-500">
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button asChild size="sm" className="bg-gold-500 hover:bg-gold-600 text-black">
                <Link href="/blog">Read Blog</Link>
              </Button>
            </div>
          </>
        )}
      </div>
    </header>
  )
}
