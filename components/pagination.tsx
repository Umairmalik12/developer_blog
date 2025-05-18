"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PaginationProps {
  totalPages: number
  currentPage: number
  onPageChange?: (page: number) => void
}

export function Pagination({ totalPages, currentPage, onPageChange }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  // Handle page change
  const handlePageChange = (page: number) => {
    if (onPageChange) {
      onPageChange(page)
    }
  }

  // Handle previous page
  const handlePrevious = () => {
    if (currentPage > 1 && onPageChange) {
      onPageChange(currentPage - 1)
    }
  }

  // Handle next page
  const handleNext = () => {
    if (currentPage < totalPages && onPageChange) {
      onPageChange(currentPage + 1)
    }
  }

  return (
    <div className="flex justify-center items-center space-x-2">
      <Button
        variant="outline"
        size="icon"
        disabled={currentPage === 1}
        className="border-gray-800 text-gray-400 hover:text-gold-500 hover:border-gold-500/50"
        onClick={handlePrevious}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous page</span>
      </Button>
      {pages.map((page) => (
        <Button
          key={page}
          variant={currentPage === page ? "default" : "outline"}
          size="icon"
          className={
            currentPage === page
              ? "bg-gold-500 hover:bg-gold-600 text-black"
              : "border-gray-800 text-gray-400 hover:text-gold-500 hover:border-gold-500/50"
          }
          onClick={() => handlePageChange(page)}
        >
          {page}
        </Button>
      ))}
      <Button
        variant="outline"
        size="icon"
        disabled={currentPage === totalPages}
        className="border-gray-800 text-gray-400 hover:text-gold-500 hover:border-gold-500/50"
        onClick={handleNext}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next page</span>
      </Button>
    </div>
  )
}
