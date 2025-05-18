import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  category: string
  date: string
  image: string
  slug: string
  tags?: string[]
}

interface BlogCardProps {
  post: BlogPost
  variant?: "default" | "featured"
}

export function BlogCard({ post, variant = "default" }: BlogCardProps) {
  const isFeatured = variant === "featured"

  return (
    <Card
      className={`bg-gray-900 border-gray-800 overflow-hidden hover:border-gold-500/50 transition-all ${
        isFeatured ? "md:col-span-2" : ""
      }`}
    >
      <div className={`grid ${isFeatured ? "md:grid-cols-2" : "grid-cols-1"}`}>
        <div className="aspect-video relative">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover"
            sizes={isFeatured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity">
            <div className="absolute bottom-4 left-4">
              <Badge className="bg-gold-500 hover:bg-gold-600 text-black">{post.category}</Badge>
            </div>
          </div>
        </div>
        <div className="p-4 flex flex-col">
          <CardHeader className={`p-0 ${isFeatured ? "mb-4" : "mb-2"}`}>
            <div className="flex justify-between items-center mb-2">
              <Badge className="bg-gold-500 hover:bg-gold-600 text-black">{post.category}</Badge>
              <span className="text-sm text-gray-400">{post.date}</span>
            </div>
            <CardTitle
              className={`${isFeatured ? "text-2xl" : "text-xl"} text-white hover:text-gold-500 transition-colors`}
            >
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 flex-grow">
            <p className="text-gray-400">{post.excerpt}</p>
          </CardContent>
          <CardFooter className="p-0 pt-4">
            <Link href={`/blog/${post.slug}`} className="text-gold-500 hover:text-gold-400 inline-flex items-center">
              Read more
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </CardFooter>
        </div>
      </div>
    </Card>
  )
}
