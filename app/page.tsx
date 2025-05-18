import Link from "next/link"
import { ArrowRight, Code } from "lucide-react"

import { Button } from "@/components/ui/button"
import { CategoryCard } from "@/components/category-card"
import { NewsletterForm } from "@/components/newsletter-form"
import { BlogCard } from "@/components/blog-card"

export default function Home() {
  // Mock data for latest blog posts
  const latestPosts = [
    {
      id: 1,
      title: "Building Responsive Layouts with CSS Grid",
      excerpt: "Learn how to create complex layouts with CSS Grid that adapt to any screen size.",
      category: "CSS",
      date: "May 10, 2025",
      image: "/placeholder.svg?height=400&width=600",
      slug: "building-responsive-layouts-with-css-grid",
    },
    {
      id: 2,
      title: "React Server Components: A Deep Dive",
      excerpt: "Explore the benefits and implementation details of React Server Components.",
      category: "React",
      date: "May 5, 2025",
      image: "/placeholder.svg?height=400&width=600",
      slug: "react-server-components-deep-dive",
    },
    {
      id: 3,
      title: "Building Interactive UIs with React Hooks",
      excerpt: "Learn how to create dynamic and interactive user interfaces using React Hooks.",
      category: "React",
      date: "April 28, 2025",
      image: "/placeholder.svg?height=400&width=600",
      slug: "building-rest-api-nodejs-express",
    },
  ]

  // Mock data for categories
  const categories = [
    { name: "JavaScript", count: 24, icon: "Code" },
    { name: "React", count: 18, icon: "Code" },
    { name: "CSS", count: 12, icon: "Code" },
    { name: "TypeScript", count: 9, icon: "Code" },
    { name: "HTML", count: 8, icon: "Code" },
    { name: "Tools", count: 6, icon: "Code" },
  ]

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-black py-24 md:py-32">
        <div className="absolute inset-0 bg-black opacity-20 bg-cover bg-center"></div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
              Developer&apos;s Log
              <span className="block text-gold-500">Learn. Code. Share.</span>
            </h1>
            <p className="max-w-[700px] text-lg text-gray-300 md:text-xl">
              A collection of insights, tutorials, and code snippets from my journey as a developer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button asChild size="lg" className="bg-gold-500 hover:bg-gold-600 text-black">
                <Link href="/blog">
                  Explore Blog
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-gold-500 text-gold-500 hover:bg-gold-500/10"
              >
                <Link href="/code-snippets">
                  <Code className="mr-2 h-4 w-4" />
                  Code Snippets
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts Section */}
      <section className="py-16 bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter text-white">
              Latest <span className="text-gold-500">Posts</span>
            </h2>
            <Link
              href="/blog"
              className="mt-4 md:mt-0 flex items-center text-gold-500 hover:text-gold-400 transition-colors"
            >
              View all posts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-black">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-white mb-10">
            Top <span className="text-gold-500">Categories</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.name} name={category.name} count={category.count} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tighter text-white">
                Subscribe to the <span className="text-gold-500">Newsletter</span>
              </h2>
              <p className="mt-4 text-gray-400">
                Get the latest articles, tutorials, and updates delivered straight to your inbox.
              </p>
            </div>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </main>
  )
}
