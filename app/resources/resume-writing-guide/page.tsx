"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ResumeWritingGuidePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <Button variant="outline" asChild>
          <Link href="/resources">← Back to Resources</Link>
        </Button>
      </div>
      
      <h1 className="text-3xl font-bold mb-6">Resume Writing Guide</h1>
      
      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
          <p className="text-gray-700 mb-4">
            Your resume is often the first impression you make on a potential employer. This comprehensive guide will help you create a professional, compelling resume that highlights your strengths and achievements.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Essential Resume Sections</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">1. Contact Information</h3>
              <p className="text-gray-700 mb-3">Include your:</p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Full name</li>
                <li>Professional email address</li>
                <li>Phone number</li>
                <li>Location (city and state/country)</li>
                <li>LinkedIn profile (optional)</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">2. Professional Summary</h3>
              <p className="text-gray-700 mb-3">
                A brief 2-3 sentence overview of your professional background, key achievements, and career goals.
              </p>
              <div className="bg-white p-4 rounded border border-gray-200">
                <p className="text-sm font-medium text-gray-600">Example:</p>
                <p className="text-gray-700 mt-2">
                  "Results-driven software engineer with 5 years of experience in full-stack development. Specialized in building scalable web applications using React and Node.js. Proven track record of delivering high-quality solutions that improve user experience and business efficiency."
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">3. Work Experience</h3>
              <p className="text-gray-700 mb-3">For each position, include:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Company name and location</li>
                <li>Your job title</li>
                <li>Employment dates</li>
                <li>Key responsibilities and achievements</li>
              </ul>
              <p className="text-gray-700">
                Use action verbs and quantify achievements when possible.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Tips for Success</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Do's</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Tailor your resume for each job application</li>
                <li>Use clear, professional fonts</li>
                <li>Include relevant keywords from the job description</li>
                <li>Proofread carefully</li>
                <li>Keep it concise and relevant</li>
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Don'ts</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Include personal information (age, marital status)</li>
                <li>Use complex fonts or designs</li>
                <li>Include irrelevant experience</li>
                <li>Write long paragraphs</li>
                <li>Use generic phrases without context</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">ATS Optimization</h2>
          <p className="text-gray-700 mb-4">
            Many companies use Applicant Tracking Systems (ATS) to screen resumes. Here's how to ensure your resume gets through:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Use standard section headings</li>
            <li>Avoid tables and complex formatting</li>
            <li>Include keywords from the job description</li>
            <li>Use standard fonts (Arial, Calibri, Times New Roman)</li>
            <li>Submit in the requested file format (usually PDF or Word)</li>
          </ul>
        </section>
      </div>
    </div>
  )
}