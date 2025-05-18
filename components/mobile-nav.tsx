"use client"

import Link from "next/link"
import { Code } from "lucide-react"

interface MobileNavProps {
  onClose: () => void
}

export function MobileNav({ onClose }: MobileNavProps) {
  return (
    <div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden">
      <div className="relative z-20 grid gap-6 rounded-md bg-gray-900 p-4 shadow-md border border-gray-800">
        <Link href="/" className="flex items-center gap-2" onClick={onClose}>
          <Code className="h-6 w-6 text-gold-500" />
          <span className="font-bold text-white">Developer&apos;s Log</span>
        </Link>
        <nav className="grid grid-flow-row auto-rows-max text-sm">
          <Link
            href="/"
            className="flex w-full items-center rounded-md p-2 text-gray-300 hover:bg-gray-800 hover:text-gold-500"
            onClick={onClose}
          >
            Home
          </Link>
          <Link
            href="/blog"
            className="flex w-full items-center rounded-md p-2 text-gray-300 hover:bg-gray-800 hover:text-gold-500"
            onClick={onClose}
          >
            Blog
          </Link>
          <Link
            href="/tech-stack"
            className="flex w-full items-center rounded-md p-2 text-gray-300 hover:bg-gray-800 hover:text-gold-500"
            onClick={onClose}
          >
            Tech Stack
          </Link>
          <Link
            href="/code-snippets"
            className="flex w-full items-center rounded-md p-2 text-gray-300 hover:bg-gray-800 hover:text-gold-500"
            onClick={onClose}
          >
            Code Snippets
          </Link>
          <Link
            href="/contact"
            className="flex w-full items-center rounded-md p-2 text-gray-300 hover:bg-gray-800 hover:text-gold-500"
            onClick={onClose}
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  )
}
