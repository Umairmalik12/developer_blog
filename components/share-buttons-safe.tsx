"use client"

import { ShareButtons } from "@/components/share-buttons"

interface ShareButtonsSafeProps {
  url: string
  title: string
  description?: string
}

export function ShareButtonsSafe({ url, title, description }: ShareButtonsSafeProps) {
  return <ShareButtons url={url} title={title} description={description} />
}
