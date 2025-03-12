"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ExamplesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <Button variant="outline" asChild>
          <Link href="/">← Back to Home</Link>
        </Button>
      </div>
      <h1 className="text-3xl font-bold mb-6">Resume Examples</h1>
      <p className="text-gray-600 mb-8">
        Browse through our collection of professionally written resume examples for inspiration.
        Find examples specific to your industry and job role.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example cards will be added here */}
        <div className="p-4 border rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Coming Soon</h2>
          <p className="text-gray-600">We're working on adding more resume examples.</p>
        </div>
      </div>
    </div>
  )
}