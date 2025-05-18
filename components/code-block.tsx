"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CodeBlockProps {
  code: string
  language: string
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative rounded-md bg-gray-800 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
        <span className="text-xs font-mono text-gray-400">{language}</span>
        <Button variant="ghost" size="sm" className="h-8 px-2 text-gray-400 hover:text-white" onClick={handleCopy}>
          {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
          <span className="sr-only">Copy code</span>
        </Button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono text-gray-300">
        <code>{code}</code>
      </pre>
    </div>
  )
}
