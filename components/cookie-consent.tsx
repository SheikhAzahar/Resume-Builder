"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CookieConsent() {
  const [isOpen, setIsOpen] = useState(true)
  const [showPreferences, setShowPreferences] = useState(false)

  if (!isOpen) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 z-50">
      <div className="container mx-auto">
        <div className="flex items-center gap-2 mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
          <h3 className="font-bold">Protect your data</h3>
        </div>

        <p className="text-sm mb-4">
          We use cookies to provide our services, improve the user experience, for analysis and marketing purposes. By
          giving your consent, you also agree that your data may be transferred to the USA by the use of cookies. You
          can revoke your consent at any time. You can find further information in our{" "}
          <Link href="#" className="text-blue-500 hover:underline">
            privacy policy
          </Link>{" "}
          and{" "}
          <Link href="#" className="text-blue-500 hover:underline">
            cookie policy
          </Link>
          .
        </p>

        <div className="flex gap-3">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white" onClick={() => setIsOpen(false)}>
            Accept All
          </Button>

          <Button
            variant="outline"
            className="border-gray-300 text-gray-700"
            onClick={() => setShowPreferences(!showPreferences)}
          >
            Cookie Preferences
          </Button>
        </div>

        {showPreferences && (
          <div className="mt-4 border-t pt-4">
            <h4 className="font-medium mb-2">Manage Cookie Preferences</h4>
            {/* Cookie preference options would go here */}
          </div>
        )}
      </div>
    </div>
  )
}

