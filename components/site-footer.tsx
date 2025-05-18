import Link from "next/link"
import { Code, Github, Linkedin, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-gray-800 bg-black py-8">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Code className="h-6 w-6 text-gold-500" />
              <span className="font-bold text-white">Developer&apos;s Log</span>
            </Link>
            <p className="text-sm text-gray-400">
              A collection of insights, tutorials, and code snippets from my journey as a developer.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold-500"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold-500"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold-500"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-gold-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-gold-500">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/tech-stack" className="text-gray-400 hover:text-gold-500">
                  Tech Stack
                </Link>
              </li>
              <li>
                <Link href="/code-snippets" className="text-gray-400 hover:text-gold-500">
                  Code Snippets
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-gold-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog?category=javascript" className="text-gray-400 hover:text-gold-500">
                  JavaScript
                </Link>
              </li>
              <li>
                <Link href="/blog?category=react" className="text-gray-400 hover:text-gold-500">
                  React
                </Link>
              </li>
              <li>
                <Link href="/blog?category=css" className="text-gray-400 hover:text-gold-500">
                  CSS
                </Link>
              </li>
              <li>
                <Link href="/blog?category=typescript" className="text-gray-400 hover:text-gold-500">
                  TypeScript
                </Link>
              </li>
              <li>
                <Link href="/blog?category=tools" className="text-gray-400 hover:text-gold-500">
                  Tools
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-gold-500">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-gold-500">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-400 hover:text-gold-500">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Developer&apos;s Log. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
