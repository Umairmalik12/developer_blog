import Link from "next/link"
import { Code } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface CategoryCardProps {
  name: string
  count: number
}

export function CategoryCard({ name, count }: CategoryCardProps) {
  return (
    <Link href={`/blog/category/${name.toLowerCase()}`}>
      <Card className="bg-gray-900 border-gray-800 hover:border-gold-500/50 transition-all">
        <CardHeader className="pb-2">
          <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
            <Code className="h-6 w-6 text-gold-500" />
          </div>
        </CardHeader>
        <CardContent>
          <h3 className="text-lg font-semibold text-white">{name}</h3>
          <p className="text-sm text-gray-400">{count} articles</p>
        </CardContent>
      </Card>
    </Link>
  )
}
