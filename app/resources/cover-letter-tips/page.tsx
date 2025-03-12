"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CoverLetterTipsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <Button variant="outline" asChild>
          <Link href="/resources">← Back to Resources</Link>
        </Button>
      </div>
      
      <h1 className="text-3xl font-bold mb-6">Cover Letter Tips</h1>
      
      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Purpose of a Cover Letter</h2>
          <p className="text-gray-700 mb-4">
            A cover letter is your opportunity to make a strong first impression and demonstrate why you're the perfect fit for the position. It should complement your resume by highlighting specific experiences and skills that align with the job requirements.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Cover Letter Structure</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">1. Header</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Your full name and contact information</li>
                <li>Date</li>
                <li>Recipient's name and title</li>
                <li>Company name and address</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">2. Opening Paragraph</h3>
              <p className="text-gray-700 mb-3">
                Grab the reader's attention and state the position you're applying for.
              </p>
              <div className="bg-white p-4 rounded border border-gray-200">
                <p className="text-sm font-medium text-gray-600">Example:</p>
                <p className="text-gray-700 mt-2">
                  "I am writing to express my strong interest in the Senior Software Developer position at [Company Name], as advertised on your company website. With over five years of experience in full-stack development and a passion for creating innovative solutions, I am confident in my ability to contribute to your team's success."
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">3. Body Paragraphs</h3>
              <p className="text-gray-700 mb-3">Include:</p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Specific examples of relevant achievements</li>
                <li>How your skills match the job requirements</li>
                <li>Why you're interested in the company</li>
                <li>What you can bring to the role</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">4. Closing Paragraph</h3>
              <p className="text-gray-700 mb-3">
                Express enthusiasm, thank the reader, and include a call to action.
              </p>
              <div className="bg-white p-4 rounded border border-gray-200">
                <p className="text-sm font-medium text-gray-600">Example:</p>
                <p className="text-gray-700 mt-2">
                  "Thank you for considering my application. I am excited about the possibility of joining [Company Name] and would welcome the opportunity to discuss how I can contribute to your team. I look forward to speaking with you soon."
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Key Tips</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Customize each letter for the specific job</li>
                <li>Research the company thoroughly</li>
                <li>Keep it concise (one page maximum)</li>
                <li>Use specific examples and metrics</li>
                <li>Proofread carefully</li>
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Common Mistakes</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Using a generic template</li>
                <li>Making it too long</li>
                <li>Repeating your resume word-for-word</li>
                <li>Focusing too much on yourself</li>
                <li>Forgetting to proofread</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Formatting Guidelines</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Use a professional font (Arial, Calibri, Times New Roman)</li>
            <li>Set margins to 1 inch on all sides</li>
            <li>Use standard business letter format</li>
            <li>Include proper spacing between paragraphs</li>
            <li>Save as a PDF unless otherwise specified</li>
          </ul>
        </section>
      </div>
    </div>
  )
}