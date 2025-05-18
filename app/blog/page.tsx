"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Search, Grid3X3, List, Filter, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Pagination } from "@/components/pagination"
import { TagCloud } from "@/components/tag-cloud"
import { BlogCard } from "@/components/blog-card"
import Image from "next/image"

export default function BlogPage() {
  // Rest of the code remains the same...
  // The existing code is already marked with "use client" so it should work

  // Mock data for blog posts - expanded with more posts
  const allBlogPosts = [
    {
      id: 1,
      title: "Building Responsive Layouts with CSS Grid",
      excerpt: "Learn how to create complex layouts with CSS Grid that adapt to any screen size.",
      category: "CSS",
      date: "May 10, 2025",
      image: "/placeholder.svg?height=400&width=600",
      slug: "building-responsive-layouts-with-css-grid",
      tags: ["CSS", "Web Design", "Responsive", "Layout"],
    },
    {
      id: 2,
      title: "React Server Components: A Deep Dive",
      excerpt: "Explore the benefits and implementation details of React Server Components.",
      category: "React",
      date: "May 5, 2025",
      image: "/placeholder.svg?height=400&width=600",
      slug: "react-server-components-deep-dive",
      tags: ["React", "JavaScript", "Server Components", "Performance"],
    },
    {
      id: 3,
      title: "Building Interactive UIs with React Hooks",
      excerpt: "Learn how to create dynamic and interactive user interfaces using React Hooks.",
      category: "React",
      date: "April 28, 2025",
      image: "/placeholder.svg?height=400&width=600",
      slug: "building-rest-api-nodejs-express",
      tags: ["React", "Hooks", "JavaScript", "UI"],
    },
    {
      id: 4,
      title: "Understanding JavaScript Promises",
      excerpt: "A comprehensive guide to working with Promises in JavaScript.",
      category: "JavaScript",
      date: "April 20, 2025",
      image: "/placeholder.svg?height=400&width=600",
      slug: "understanding-javascript-promises",
      tags: ["JavaScript", "Promises", "Async", "Web Development"],
    },
    {
      id: 5,
      title: "CSS Animation Techniques",
      excerpt: "Learn how to create engaging animations using CSS.",
      category: "CSS",
      date: "April 15, 2025",
      image: "/placeholder.svg?height=400&width=600",
      slug: "css-animation-techniques",
      tags: ["CSS", "Animation", "Web Design", "UI"],
    },
    {
      id: 6,
      title: "State Management in React",
      excerpt: "Comparing different state management solutions in React applications.",
      category: "React",
      date: "April 8, 2025",
      image: "/placeholder.svg?height=400&width=600",
      slug: "state-management-in-react",
      tags: ["React", "JavaScript", "State Management", "Redux"],
    },
    {
      id: 7,
      title: "Introduction to TypeScript",
      excerpt: "Getting started with TypeScript in your JavaScript projects.",
      category: "TypeScript",
      date: "April 1, 2025",
      image: "/placeholder.svg?height=400&width=600",
      slug: "introduction-to-typescript",
      tags: ["TypeScript", "JavaScript", "Web Development"],
    },
    {
      id: 8,
      title: "Mastering CSS Flexbox",
      excerpt: "A complete guide to building flexible layouts with CSS Flexbox.",
      category: "CSS",
      date: "March 25, 2025",
      image: "/placeholder.svg?height=400&width=600",
      slug: "mastering-css-flexbox",
      tags: ["CSS", "Flexbox", "Layout", "Responsive"],
    },
    {
      id: 9,
      title: "Modern Frontend Tooling",
      excerpt: "Exploring the latest tools and technologies for frontend development.",
      category: "Tools",
      date: "March 18, 2025",
      image: "/placeholder.svg?height=400&width=600",
      slug: "modern-frontend-tooling",
      tags: ["Tools", "Web Development", "Frontend", "JavaScript"],
    },
    // Additional blog posts
    {
      id: 10,
      title: "Optimizing Web Performance",
      excerpt: "Techniques and best practices for improving website performance and speed.",
      category: "Performance",
      date: "March 10, 2025",
      image: "/placeholder.svg?height=400&width=600",
      slug: "optimizing-web-performance",
      tags: ["Performance", "Web Development", "Optimization", "Speed"],
    },
    {
      id: 11,
      title: "Advanced TypeScript Patterns",
      excerpt: "Exploring advanced TypeScript features and design patterns for better code.",
      category: "TypeScript",
      date: "March 5, 2025",
      image: "/placeholder.svg?height=400&width=600",
      slug: "advanced-typescript-patterns",
      tags: ["TypeScript", "Design Patterns", "JavaScript", "Advanced"],
    },
    {
      id: 12,
      title: "Web Accessibility Fundamentals",
      excerpt: "Essential practices for building accessible websites for all users.",
      category: "Accessibility",
      date: "February 28, 2025",
      image: "/placeholder.svg?height=400&width=600",
      slug: "web-accessibility-fundamentals",
      tags: ["Accessibility", "Web Development", "HTML", "ARIA"],
    },
    {
      id: 13,
      title: "CSS Custom Properties (Variables)",
      excerpt: "How to use CSS variables to create more maintainable stylesheets.",
      category: "CSS",
      date: "February 20, 2025",
      image: "/placeholder.svg?height=400&width=600",
      slug: "css-custom-properties-variables",
      tags: ["CSS", "Variables", "Web Design", "Theming"],
    },
    {
      id: 14,
      title: "Testing React Applications",
      excerpt: "A comprehensive guide to testing React components and applications.",
      category: "React",
      date: "February 15, 2025",
      image: "/placeholder.svg?height=400&width=600",
      slug: "testing-react-applications",
      tags: ["React", "Testing", "Jest", "React Testing Library"],
    },
    {
      id: 15,
      title: "JavaScript ES2023 Features",
      excerpt: "Exploring the latest features in the JavaScript language.",
      category: "JavaScript",
      date: "February 8, 2025",
      image: "/placeholder.svg?height=400&width=600",
      slug: "javascript-es2023-features",
      tags: ["JavaScript", "ES2023", "Web Development"],
    },
  ]

  // State for search, pagination, and filtering
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("newest")
  const [filteredPosts, setFilteredPosts] = useState(allBlogPosts)
  const [displayedPosts, setDisplayedPosts] = useState<typeof allBlogPosts>([])
  const postsPerPage = 6

  // Get URL parameters on component mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search)
      const categoryParam = params.get("category")
      if (categoryParam) {
        setSelectedCategory(categoryParam)
      }
    }
  }, [])

  // Generate categories from blog posts
  const categories = [
    { name: "All", count: allBlogPosts.length },
    ...Array.from(new Set(allBlogPosts.map((post) => post.category))).map((category) => ({
      name: category,
      count: allBlogPosts.filter((post) => post.category === category).length,
    })),
  ]

  // Generate tags from blog posts
  const allTags = allBlogPosts.flatMap((post) => post.tags || [])
  const tagCounts: Record<string, number> = {}
  allTags.forEach((tag) => {
    tagCounts[tag] = (tagCounts[tag] || 0) + 1
  })
  const tags = Object.entries(tagCounts).map(([name, count]) => ({ name, count }))

  // Filter and sort posts when dependencies change
  useEffect(() => {
    let result = [...allBlogPosts]

    // Filter by search term
    if (searchTerm) {
      result = result.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (post.tags && post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))),
      )
    }

    // Filter by category
    if (selectedCategory !== "All") {
      result = result.filter((post) => post.category === selectedCategory)
    }

    // Sort posts
    if (sortBy === "newest") {
      result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    } else if (sortBy === "oldest") {
      result.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    }

    setFilteredPosts(result)
    setCurrentPage(1) // Reset to first page when filters change
  }, [searchTerm, selectedCategory, sortBy])

  // Update displayed posts when filtered posts or current page changes
  useEffect(() => {
    const startIndex = (currentPage - 1) * postsPerPage
    const endIndex = startIndex + postsPerPage
    setDisplayedPosts(filteredPosts.slice(startIndex, endIndex))
  }, [filteredPosts, currentPage])

  // Calculate total pages
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)

    // Update URL with category parameter
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href)
      if (category === "All") {
        url.searchParams.delete("category")
      } else {
        url.searchParams.set("category", category)
      }
      window.history.pushState({}, "", url.toString())
    }
  }

  // Handle pagination
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // Scroll to top when changing pages
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <main className="flex-1 bg-gray-950">
      <section className="py-12 md:py-16 bg-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">
              Blog <span className="text-gold-500">Archive</span>
            </h1>
            <p className="max-w-[700px] text-gray-400 md:text-lg">
              Explore all articles, tutorials, and insights from my developer journey.
            </p>
            <div className="w-full max-w-md mt-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                <Input
                  type="search"
                  placeholder="Search articles..."
                  className="pl-10 bg-gray-900 border-gray-800 focus-visible:ring-gold-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="w-full lg:w-1/4 space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.name}>
                      <button
                        onClick={() => handleCategoryChange(category.name)}
                        className={`flex justify-between items-center w-full text-left ${
                          selectedCategory === category.name ? "text-gold-500" : "text-gray-400 hover:text-gold-500"
                        } transition-colors`}
                      >
                        <span>{category.name}</span>
                        <Badge variant="outline" className="border-gray-700 text-gray-400">
                          {category.count}
                        </Badge>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Tags</h3>
                <TagCloud tags={tags} />
              </div>
            </div>

            {/* Main Content */}
            <div className="w-full lg:w-3/4">
              <Tabs defaultValue="grid" className="w-full">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                  <div className="flex items-center space-x-2 mb-4 sm:mb-0">
                    <TabsList className="bg-gray-900">
                      <TabsTrigger
                        value="grid"
                        className="data-[state=active]:bg-gray-800 data-[state=active]:text-gold-500"
                      >
                        <Grid3X3 className="h-4 w-4" />
                      </TabsTrigger>
                      <TabsTrigger
                        value="list"
                        className="data-[state=active]:bg-gray-800 data-[state=active]:text-gold-500"
                      >
                        <List className="h-4 w-4" />
                      </TabsTrigger>
                    </TabsList>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger className="w-[180px] bg-gray-900 border-gray-800">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-900 border-gray-800">
                        <SelectItem value="newest">Newest First</SelectItem>
                        <SelectItem value="oldest">Oldest First</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline" size="icon" className="border-gray-800">
                      <Filter className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <TabsContent value="grid" className="mt-0">
                  {displayedPosts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {displayedPosts.map((post, index) => (
                        <BlogCard
                          key={post.id}
                          post={post}
                          variant={index === 0 && currentPage === 1 ? "featured" : "default"}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <h3 className="text-xl font-semibold text-white mb-2">No posts found</h3>
                      <p className="text-gray-400">
                        Try adjusting your search or filters to find what you're looking for.
                      </p>
                      <Button
                        variant="outline"
                        className="mt-4 border-gold-500/30 text-gold-500 hover:bg-gold-500/10"
                        onClick={() => {
                          setSearchTerm("")
                          setSelectedCategory("All")
                          setSortBy("newest")
                        }}
                      >
                        Reset Filters
                      </Button>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="list" className="mt-0">
                  {displayedPosts.length > 0 ? (
                    <div className="space-y-6">
                      {displayedPosts.map((post) => (
                        <Card
                          key={post.id}
                          className="bg-gray-900 border-gray-800 overflow-hidden hover:border-gold-500/50 transition-all"
                        >
                          <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/3 aspect-video relative">
                              <Image
                                src={post.image || "/placeholder.svg"}
                                alt={post.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 33vw"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement
                                  target.src = "/placeholder.svg?height=400&width=600"
                                }}
                              />
                            </div>
                            <div className="md:w-2/3 p-4">
                              <div className="flex justify-between items-center mb-2">
                                <Badge className="bg-gold-500 hover:bg-gold-600 text-black">
                                  <button onClick={() => handleCategoryChange(post.category)} className="text-black">
                                    {post.category}
                                  </button>
                                </Badge>
                                <span className="text-sm text-gray-400">{post.date}</span>
                              </div>
                              <h3 className="text-xl font-bold text-white hover:text-gold-500 transition-colors mb-2">
                                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                              </h3>
                              <p className="text-gray-400 mb-4">{post.excerpt}</p>
                              <Link
                                href={`/blog/${post.slug}`}
                                className="text-gold-500 hover:text-gold-400 inline-flex items-center"
                              >
                                Read more
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Link>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <h3 className="text-xl font-semibold text-white mb-2">No posts found</h3>
                      <p className="text-gray-400">
                        Try adjusting your search or filters to find what you're looking for.
                      </p>
                      <Button
                        variant="outline"
                        className="mt-4 border-gold-500/30 text-gold-500 hover:bg-gold-500/10"
                        onClick={() => {
                          setSearchTerm("")
                          setSelectedCategory("All")
                          setSortBy("newest")
                        }}
                      >
                        Reset Filters
                      </Button>
                    </div>
                  )}
                </TabsContent>

                {totalPages > 1 && (
                  <div className="mt-8">
                    <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
                  </div>
                )}
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
