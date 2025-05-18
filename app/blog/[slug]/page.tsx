"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Tag, Clock, Bookmark, MessageSquare } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { NewsletterForm } from "@/components/newsletter-form"
import { ShareButtons } from "@/components/share-buttons"
import { toast } from "@/hooks/use-toast"

// Mock function to get blog post data
function getBlogPost(slug: string) {
  // This would normally fetch from a database or API
  const posts = {
    "building-responsive-layouts-with-css-grid": {
      title: "Building Responsive Layouts with CSS Grid",
      excerpt: "Learn how to create complex layouts with CSS Grid that adapt to any screen size.",
      content: `
        <p>CSS Grid Layout is a two-dimensional layout system designed specifically for the web. It allows you to organize content into rows and columns and has many features that make building complex layouts straightforward.</p>
        
        <h2>Why Use CSS Grid?</h2>
        <p>CSS Grid provides a layout system that was previously impossible without using complicated CSS hacks or JavaScript. Some benefits include:</p>
        <ul>
          <li>Two-dimensional control over layout (rows AND columns)</li>
          <li>No need for layout frameworks</li>
          <li>Precise item placement</li>
          <li>Control of overlapping items</li>
          <li>Responsive design without media queries (in some cases)</li>
        </ul>
        
        <h2>Basic Grid Terminology</h2>
        <p>Before diving into code examples, let's understand some basic terminology:</p>
        <ul>
          <li><strong>Grid Container</strong>: The element with <code>display: grid</code> applied to it.</li>
          <li><strong>Grid Item</strong>: The children of the grid container.</li>
          <li><strong>Grid Line</strong>: The dividing lines that make up the grid structure.</li>
          <li><strong>Grid Track</strong>: The space between two adjacent grid lines (rows or columns).</li>
          <li><strong>Grid Cell</strong>: The space between four grid lines (like a table cell).</li>
          <li><strong>Grid Area</strong>: Any rectangular area bounded by four grid lines.</li>
        </ul>
        
        <h2>Creating a Basic Grid</h2>
        <p>Let's start with a basic grid layout:</p>
        
        <pre><code>.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}
        </code></pre>
        
        <p>This creates a grid with three equal-width columns and a 20px gap between grid items.</p>
        
        <h2>Making It Responsive</h2>
        <p>One of the most powerful features of CSS Grid is how easily it can create responsive layouts. Here's an example:</p>
        
        <pre><code>.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
}
        </code></pre>
        
        <p>This creates a grid where each column is at least 250px wide, and as many columns as can fit will be created. As the viewport width changes, the number of columns adjusts automatically.</p>
        
        <h2>Advanced Grid Techniques</h2>
        <p>CSS Grid becomes even more powerful when you start placing items explicitly:</p>
        
        <pre><code>.item-a {
  grid-column: 1 / 3; /* Start at column line 1, end at column line 3 */
  grid-row: 1 / 2; /* Start at row line 1, end at row line 2 */
}

.item-b {
  grid-column: 3 / 4; /* Start at column line 3, end at column line 4 */
  grid-row: 1 / 3; /* Start at row line 1, end at row line 3 */
}
        </code></pre>
        
        <p>This allows for complex layouts that were previously very difficult to achieve with CSS.</p>
        
        <h2>Conclusion</h2>
        <p>CSS Grid is a powerful tool for creating responsive web layouts. By understanding its basic concepts and properties, you can create complex designs that adapt beautifully to different screen sizes without relying on external frameworks or JavaScript.</p>
        
        <p>In future articles, we'll explore more advanced CSS Grid techniques and how to combine Grid with Flexbox for even more layout possibilities.</p>
      `,
      category: "CSS",
      date: "May 10, 2025",
      readTime: "8 min read",
      author: {
        name: "Alex Johnson",
        image: "/placeholder.svg?height=100&width=100",
        role: "Frontend Developer",
      },
      tags: ["CSS", "Web Design", "Responsive", "Layout"],
      image: "/placeholder.svg?height=400&width=600",
    },
    "react-server-components-deep-dive": {
      title: "React Server Components: A Deep Dive",
      excerpt: "Explore the benefits and implementation details of React Server Components.",
      content: `
        <p>React Server Components represent a paradigm shift in how we build React applications. They allow components to run on the server, reducing bundle size and improving performance.</p>
        
        <h2>What Are React Server Components?</h2>
        <p>React Server Components (RSC) are a new kind of component that can be rendered on the server. Unlike traditional server-side rendering (SSR), Server Components remain on the server and never get shipped to the client.</p>
        
        <p>This approach offers several advantages:</p>
        <ul>
          <li>Reduced JavaScript bundle size</li>
          <li>Access to server-only resources (databases, file systems, etc.)</li>
          <li>Improved initial page load performance</li>
          <li>Better security for sensitive operations</li>
        </ul>
        
        <h2>How Server Components Work</h2>
        <p>Server Components work by splitting your application into two parts:</p>
        <ol>
          <li><strong>Server Components</strong>: These run only on the server and can access server resources directly.</li>
          <li><strong>Client Components</strong>: These are traditional React components that run in the browser.</li>
        </ol>
        
        <p>The React runtime intelligently handles the communication between these two types of components.</p>
        
        <h2>Server Components vs. Server-Side Rendering</h2>
        <p>It's important to understand that Server Components are different from Server-Side Rendering (SSR):</p>
        
        <ul>
          <li><strong>SSR</strong>: Renders components to HTML on the server for the initial load, then hydrates them into fully interactive components on the client.</li>
          <li><strong>Server Components</strong>: Remain on the server and never get sent to the client as JavaScript. Only their rendered output is sent.</li>
        </ul>
        
        <h2>Implementing Server Components</h2>
        <p>In Next.js 13+ with the App Router, Server Components are the default. Here's a simple example:</p>
        
        <pre><code>// This is a Server Component
async function BlogPosts() {
  // This code only runs on the server
  const posts = await fetchPostsFromDatabase();
  
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default BlogPosts;
        </code></pre>
        
        <p>To create a Client Component, you need to use the "use client" directive at the top of your file:</p>
        
        <pre><code>"use client"

// This is a Client Component
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
        </code></pre>
        
        <h2>Best Practices</h2>
        <p>When working with Server Components, consider these best practices:</p>
        
        <ol>
          <li>Keep as many components as possible as Server Components</li>
          <li>Only use Client Components when you need interactivity or browser-specific APIs</li>
          <li>Create clear boundaries between Server and Client Components</li>
          <li>Pass data from Server Components to Client Components as props</li>
        </ol>
        
        <h2>Conclusion</h2>
        <p>React Server Components represent an exciting evolution in React's capabilities. By intelligently splitting rendering responsibilities between server and client, they enable more performant and secure applications.</p>
        
        <p>As this technology matures, we can expect to see more frameworks and tools built around the Server Components paradigm, further improving the developer and user experience.</p>
      `,
      category: "React",
      date: "May 5, 2025",
      readTime: "10 min read",
      author: {
        name: "Sarah Chen",
        image: "/placeholder.svg?height=100&width=100",
        role: "Senior React Developer",
      },
      tags: ["React", "JavaScript", "Server Components", "Performance"],
      image: "/placeholder.svg?height=400&width=600",
    },
    "building-rest-api-nodejs-express": {
      title: "Building Interactive UIs with React Hooks",
      excerpt: "Learn how to create dynamic and interactive user interfaces using React Hooks.",
      content: `
        <p>React Hooks have revolutionized how we build components in React, making it easier to reuse stateful logic and create more maintainable code. In this guide, we'll explore how to build interactive UIs using React Hooks.</p>
        
        <h2>Why Use React Hooks?</h2>
        <p>Before Hooks were introduced in React 16.8, you had to use class components to manage state and lifecycle methods. Hooks bring several advantages:</p>
        <ul>
          <li>Simpler component logic</li>
          <li>Reusable stateful logic without render props or higher-order components</li>
          <li>Splitting components based on responsibility rather than lifecycle methods</li>
          <li>Using React features without classes</li>
          <li>Better TypeScript integration</li>
        </ul>
        
        <h2>Essential Hooks for Interactive UIs</h2>
        <p>Let's explore the most important hooks for building interactive interfaces:</p>
        
        <h3>1. useState</h3>
        <p>The <code>useState</code> hook allows you to add state to functional components:</p>
        
        <pre><code>import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}</code></pre>
        
        <h3>2. useEffect</h3>
        <p>The <code>useEffect</code> hook lets you perform side effects in functional components:</p>
        
        <pre><code>import React, { useState, useEffect } from 'react';

function WindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    
    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array means this runs once on mount
  
  return (
    <div>
      <p>Window width: {width}px</p>
    </div>
  );
}</code></pre>
        
        <h3>3. useRef</h3>
        <p>The <code>useRef</code> hook creates a mutable reference that persists across renders:</p>
        
        <pre><code>import React, { useRef } from 'react';

function TextInputWithFocusButton() {
  const inputRef = useRef(null);
  
  const focusInput = () => {
    inputRef.current.focus();
  };
  
  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}</code></pre>
        
        <h2>Building a Complex Interactive Component</h2>
        <p>Let's build a more complex interactive component using multiple hooks - a searchable, filterable list:</p>
        
        <pre><code>import React, { useState, useEffect, useMemo } from 'react';

function FilterableList({ items }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  
  // Get unique categories for the filter dropdown
  const categories = useMemo(() => {
    const uniqueCategories = new Set(items.map(item => item.category));
    return ['all', ...uniqueCategories];
  }, [items]);
  
  // Filter items based on search term and category
  const filteredItems = useMemo(() => {
    return items.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = filterCategory === 'all' || item.category === filterCategory;
      return matchesSearch && matchesCategory;
    });
  }, [items, searchTerm, filterCategory]);
  
  return (
    <div>
      <div className="filters">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <select 
          value={filterCategory} 
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
      </div>
      
      <ul className="item-list">
        {filteredItems.length > 0 ? (
          filteredItems.map(item => (
            <li key={item.id} className="item">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <span className="category">{item.category}</span>
            </li>
          ))
        ) : (
          <li className="no-results">No items found</li>
        )}
      </ul>
    </div>
  );
}</code></pre>
        
        <h2>Creating Custom Hooks</h2>
        <p>One of the most powerful features of Hooks is the ability to create custom hooks that encapsulate reusable logic:</p>
        
        <pre><code>import { useState, useEffect } from 'react';

// Custom hook for handling form input
function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  
  function handleChange(e) {
    setValue(e.target.value);
  }
  
  return {
    value,
    onChange: handleChange,
    reset: () => setValue(initialValue)
  };
}

// Custom hook for storing data in localStorage
function useLocalStorage(key, initialValue) {
  // Get from localStorage on initial render
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });
  
  // Update localStorage when the state changes
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue]);
  
  return [storedValue, setStoredValue];
}

// Example usage
function ProfileForm() {
  const name = useFormInput('');
  const email = useFormInput('');
  const [savedProfiles, setSavedProfiles] = useLocalStorage('profiles', []);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newProfile = { 
      id: Date.now(), 
      name: name.value, 
      email: email.value 
    };
    
    setSavedProfiles([...savedProfiles, newProfile]);
    name.reset();
    email.reset();
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" {...name} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" {...email} required />
        </div>
        <button type="submit">Save Profile</button>
      </form>
      
      <h2>Saved Profiles</h2>
      <ul>
        {savedProfiles.map(profile => (
          <li key={profile.id}>
            {profile.name} ({profile.email})
          </li>
        ))}
      </ul>
    </div>
  );
}</code></pre>
        
        <h2>Conclusion</h2>
        <p>React Hooks provide a powerful way to build interactive UIs with cleaner, more reusable code. By mastering hooks like useState, useEffect, useRef, and creating custom hooks, you can create complex interactive components without the overhead of class components.</p>
        
        <p>In future articles, we'll explore more advanced hook patterns and how to optimize performance in hook-based components.</p>
      `,
      category: "React",
      date: "April 28, 2025",
      readTime: "12 min read",
      author: {
        name: "Michael Rodriguez",
        image: "/placeholder.svg?height=100&width=100",
        role: "Frontend Developer",
      },
      tags: ["React", "Hooks", "JavaScript", "UI"],
      image: "/placeholder.svg?height=400&width=600",
    },
  }

  return posts[slug] || null
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [commentCount, setCommentCount] = useState(5)

  // Check if post is bookmarked on component mount
  useEffect(() => {
    if (typeof window !== "undefined" && post) {
      try {
        const bookmarks = JSON.parse(localStorage.getItem("bookmarked_posts") || "[]")
        setIsBookmarked(bookmarks.some((bookmark: any) => bookmark.slug === params.slug))
      } catch (error) {
        console.error("Error reading bookmarks:", error)
        setIsBookmarked(false)
      }
    }
  }, [params.slug, post])

  // Toggle bookmark
  const toggleBookmark = () => {
    if (!post || typeof window === "undefined") return

    try {
      const bookmarks = JSON.parse(localStorage.getItem("bookmarked_posts") || "[]")

      if (isBookmarked) {
        // Remove bookmark
        const updatedBookmarks = bookmarks.filter((bookmark: any) => bookmark.slug !== params.slug)
        localStorage.setItem("bookmarked_posts", JSON.stringify(updatedBookmarks))
        setIsBookmarked(false)
        toast({
          title: "Removed from bookmarks",
          description: "The post has been removed from your bookmarks.",
        })
      } else {
        // Add bookmark
        const newBookmark = {
          slug: params.slug,
          title: post.title,
          category: post.category,
          date: post.date,
          image: post.image,
        }
        localStorage.setItem("bookmarked_posts", JSON.stringify([...bookmarks, newBookmark]))
        setIsBookmarked(true)
        toast({
          title: "Bookmarked!",
          description: "The post has been added to your bookmarks.",
        })
      }
    } catch (error) {
      console.error("Error updating bookmarks:", error)
      toast({
        title: "Error",
        description: "There was a problem updating your bookmarks.",
        variant: "destructive",
      })
    }
  }

  if (!post) {
    return (
      <main className="flex-1 bg-gray-950 py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">Post Not Found</h1>
            <p className="max-w-[700px] text-gray-400 md:text-lg">
              The blog post you're looking for doesn't exist or has been removed.
            </p>
            <Button asChild className="bg-gold-500 hover:bg-gold-600 text-black">
              <Link href="/blog">Back to Blog</Link>
            </Button>
          </div>
        </div>
      </main>
    )
  }

  // Find related posts based on category and tags
  const findRelatedPosts = () => {
    const allPosts = Object.entries(
      getBlogPost("building-responsive-layouts-with-css-grid")
        ? {
            "building-responsive-layouts-with-css-grid": getBlogPost("building-responsive-layouts-with-css-grid"),
            "react-server-components-deep-dive": getBlogPost("react-server-components-deep-dive"),
            "building-rest-api-nodejs-express": getBlogPost("building-rest-api-nodejs-express"),
          }
        : {},
    ).map(([slug, post]) => ({ slug, ...(post as any) }))

    // Filter out current post
    const otherPosts = allPosts.filter((p) => p.slug !== params.slug)

    // Find posts with same category or tags
    const sameCategory = otherPosts.filter((p) => p.category === post.category)
    const sameTags = otherPosts.filter((p) => p.tags && post.tags && p.tags.some((tag) => post.tags.includes(tag)))

    // Combine and remove duplicates
    const related = [...sameCategory, ...sameTags]
    const uniqueRelated = Array.from(new Set(related.map((p) => p.slug)))
      .map((slug) => related.find((p) => p.slug === slug))
      .slice(0, 2)

    return uniqueRelated
  }

  const relatedPosts = findRelatedPosts()

  return (
    <main className="flex-1 bg-gray-950">
      {/* Hero Section */}
      <section className="relative bg-black py-12 md:py-16">
        <div className="absolute inset-0 bg-black opacity-20 bg-cover bg-center"></div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-gold-500 hover:text-gold-400 transition-colors mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-4">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-6">
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4 text-gold-500" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4 text-gold-500" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center">
                <Badge className="bg-gold-500 hover:bg-gold-600 text-black">{post.category}</Badge>
              </div>
            </div>
            <div className="flex items-center gap-3 mb-8">
              <Avatar>
                <AvatarImage src={post.author.image || "/placeholder.svg"} alt={post.author.name} />
                <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium text-white">{post.author.name}</div>
                <div className="text-sm text-gray-400">{post.author.role}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 1200px"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = "/placeholder.svg?height=400&width=600"
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <article className="prose prose-invert prose-gold max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </article>

              <div className="mt-8 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Link key={tag} href={`/blog/tag/${tag.toLowerCase()}`}>
                    <Badge
                      variant="outline"
                      className="border-gray-700 text-gray-400 hover:border-gold-500 hover:text-gold-500 transition-colors"
                    >
                      <Tag className="mr-1 h-3 w-3" />
                      {tag}
                    </Badge>
                  </Link>
                ))}
              </div>

              <Separator className="my-8 bg-gray-800" />

              <div className="flex justify-between items-center">
                <ShareButtons url={`/blog/${params.slug}`} title={post.title} description={post.excerpt} />
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className={`border-gray-800 ${isBookmarked ? "text-gold-500" : "text-gray-400 hover:text-gold-500"}`}
                    onClick={toggleBookmark}
                  >
                    <Bookmark className="mr-2 h-4 w-4" fill={isBookmarked ? "currentColor" : "none"} />
                    {isBookmarked ? "Saved" : "Save"}
                  </Button>
                  <Button variant="outline" size="sm" className="border-gray-800 text-gray-400 hover:text-gold-500">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Comments ({commentCount})
                  </Button>
                </div>
              </div>

              <Separator className="my-8 bg-gray-800" />

              {/* Author Bio */}
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={post.author.image || "/placeholder.svg"} alt={post.author.name} />
                    <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{post.author.name}</h3>
                    <p className="text-gray-400 mb-4">
                      {post.author.role} with over 10 years of experience in web development. Passionate about creating
                      clean, efficient, and accessible web applications.
                    </p>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-gold-500/30 text-gold-500 hover:bg-gold-500/10"
                      >
                        View Profile
                      </Button>
                      <Button size="sm" className="bg-gold-500 hover:bg-gold-600 text-black">
                        Follow
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white">Related Posts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {relatedPosts.length > 0 ? (
                    relatedPosts.map((relatedPost: any) => (
                      <div key={relatedPost.slug} className="space-y-2">
                        <Link
                          href={`/blog/${relatedPost.slug}`}
                          className="text-white hover:text-gold-500 transition-colors font-medium"
                        >
                          {relatedPost.title}
                        </Link>
                        <div className="flex items-center text-sm text-gray-400">
                          <Badge variant="outline" className="mr-2 border-gray-700">
                            {relatedPost.category}
                          </Badge>
                          <span>{relatedPost.date}</span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-400">No related posts found.</p>
                  )}
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white">Subscribe</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 mb-4">Get notified about new posts and updates.</p>
                  <NewsletterForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
