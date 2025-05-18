import Link from "next/link"
import { Badge } from "@/components/ui/badge"

interface Tag {
  name: string
  count: number
}

interface TagCloudProps {
  tags: Tag[]
}

export function TagCloud({ tags }: TagCloudProps) {
  // Sort tags by count (descending)
  const sortedTags = [...tags].sort((a, b) => b.count - a.count)

  return (
    <div className="flex flex-wrap gap-2">
      {sortedTags.map((tag) => (
        <Link key={tag.name} href={`/blog/tag/${tag.name.toLowerCase()}`}>
          <Badge
            variant="outline"
            className="border-gray-700 text-gray-400 hover:border-gold-500 hover:text-gold-500 transition-colors"
          >
            {tag.name} ({tag.count})
          </Badge>
        </Link>
      ))}
    </div>
  )
}
