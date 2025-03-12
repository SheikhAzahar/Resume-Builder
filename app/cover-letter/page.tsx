"use client"

import CoverLetterBuilder from "@/components/cover-letter-builder"
import { ErrorBoundary } from "@/components/error-boundary"
import { CoverLetterProvider } from "@/context/cover-letter-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CoverLetterPage() {
  return (
    <ErrorBoundary>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <Button variant="outline" asChild>
            <Link href="/">← Back to Home</Link>
          </Button>
        </div>
        <CoverLetterProvider>
          <CoverLetterBuilder />
        </CoverLetterProvider>
      </div>
    </ErrorBoundary>
  )
}