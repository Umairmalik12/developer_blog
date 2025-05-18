"use client"

import Image from "next/image"
import { useState } from "react"

interface TechImageProps {
  src: string
  alt: string
  width: number
  height: number
}

export function TechImage({ src, alt, width, height }: TechImageProps) {
  const [error, setError] = useState(false)

  return (
    <Image
      src={error ? "/placeholder.svg?height=24&width=24" : src}
      alt={alt}
      width={width}
      height={height}
      onError={() => setError(true)}
    />
  )
}
