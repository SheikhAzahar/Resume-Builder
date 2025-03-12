"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ResourcesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <Button variant="outline" asChild>
          <Link href="/">← Back to Home</Link>
        </Button>
      </div>
      <h1 className="text-3xl font-bold mb-6">Resume Resources</h1>
      <p className="text-gray-600 mb-8">
        Access our comprehensive collection of resume writing guides, tips, and best practices to help you create a winning resume.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Resume Writing Guide</h2>
          <p className="text-gray-600 mb-4">Learn how to write a professional resume that stands out to employers.</p>
          <Link href="/resources/resume-writing-guide" className="text-blue-500 hover:text-blue-600">Read More →</Link>
        </div>
        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Cover Letter Tips</h2>
          <p className="text-gray-600 mb-4">Master the art of writing compelling cover letters that complement your resume.</p>
          <Link href="/resources/cover-letter-tips" className="text-blue-500 hover:text-blue-600">Read More →</Link>
        </div>
        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Interview Preparation</h2>
          <p className="text-gray-600 mb-4">Get ready for your job interviews with our comprehensive preparation guide.</p>
          <Link href="/resources/interview-preparation" className="text-blue-500 hover:text-blue-600">Read More →</Link>
        </div>
      </div>
    </div>
  )
}