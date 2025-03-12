import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="border-b bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center mr-8">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center text-white font-bold text-xl mr-3">IR</div>
              <span className="font-bold text-xl tracking-tight text-gray-900">InstantResume</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/builder" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Templates
            </Link>
            <Link href="/examples" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Examples
            </Link>
            <Link href="/pricing" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Pricing
            </Link>
            <Link href="/resources" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Resources
            </Link>
          </nav>
        </div>

        <div className="flex items-center space-x-6">
          <Link href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors hidden md:inline-block">
            Sign In
          </Link>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 transition-colors">
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  )
}

