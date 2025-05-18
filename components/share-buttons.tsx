"use client"

import { Twitter, Facebook, Linkedin, LinkIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "@/hooks/use-toast"

interface ShareButtonsProps {
  url: string
  title: string
  description?: string
}

export function ShareButtons({ url, title, description }: ShareButtonsProps) {
  // Ensure we have the full URL
  const fullUrl = url.startsWith("http") ? url : `https://developerslog.com${url}`

  // Encode parameters
  const encodedUrl = encodeURIComponent(fullUrl)
  const encodedTitle = encodeURIComponent(title)
  const encodedDescription = description ? encodeURIComponent(description) : ""

  // Share URLs
  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`

  // Copy link to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(fullUrl)
    toast({
      title: "Link copied!",
      description: "The link has been copied to your clipboard.",
    })
  }

  return (
    <div className="flex space-x-2">
      <Button
        variant="outline"
        size="sm"
        className="border-gray-800 text-gray-400 hover:text-twitter hover:border-twitter/50"
        onClick={() => window.open(twitterUrl, "_blank")}
      >
        <Twitter className="h-4 w-4" />
        <span className="sr-only">Share on Twitter</span>
      </Button>
      <Button
        variant="outline"
        size="sm"
        className="border-gray-800 text-gray-400 hover:text-facebook hover:border-facebook/50"
        onClick={() => window.open(facebookUrl, "_blank")}
      >
        <Facebook className="h-4 w-4" />
        <span className="sr-only">Share on Facebook</span>
      </Button>
      <Button
        variant="outline"
        size="sm"
        className="border-gray-800 text-gray-400 hover:text-linkedin hover:border-linkedin/50"
        onClick={() => window.open(linkedinUrl, "_blank")}
      >
        <Linkedin className="h-4 w-4" />
        <span className="sr-only">Share on LinkedIn</span>
      </Button>
      <Button
        variant="outline"
        size="sm"
        className="border-gray-800 text-gray-400 hover:text-gold-500 hover:border-gold-500/50"
        onClick={copyToClipboard}
      >
        <LinkIcon className="h-4 w-4" />
        <span className="sr-only">Copy link</span>
      </Button>
    </div>
  )
}
