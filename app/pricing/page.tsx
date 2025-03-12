"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <Button variant="outline" asChild>
          <Link href="/">← Back to Home</Link>
        </Button>
      </div>
      <h1 className="text-3xl font-bold mb-6">Pricing Plans</h1>
      <p className="text-gray-600 mb-8">
        Choose the plan that best fits your needs. All plans include access to our professional templates and ATS-friendly formats.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Basic</h2>
          <p className="text-3xl font-bold mb-4">Free</p>
          <ul className="space-y-2 mb-6">
            <li>✓ Basic Templates</li>
            <li>✓ Export to PDF</li>
            <li>✓ Basic Customization</li>
          </ul>
          <button className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">
            Get Started
          </button>
        </div>
        <div className="p-6 border rounded-lg bg-blue-50">
          <h2 className="text-xl font-semibold mb-2">Pro</h2>
          <p className="text-3xl font-bold mb-4">$9.99/mo</p>
          <ul className="space-y-2 mb-6">
            <li>✓ All Basic Features</li>
            <li>✓ Premium Templates</li>
            <li>✓ Multiple Formats</li>
            <li>✓ Priority Support</li>
          </ul>
          <button className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">
            Choose Pro
          </button>
        </div>
        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Enterprise</h2>
          <p className="text-3xl font-bold mb-4">Contact Us</p>
          <ul className="space-y-2 mb-6">
            <li>✓ All Pro Features</li>
            <li>✓ Custom Branding</li>
            <li>✓ Team Management</li>
            <li>✓ API Access</li>
          </ul>
          <button className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  )
}