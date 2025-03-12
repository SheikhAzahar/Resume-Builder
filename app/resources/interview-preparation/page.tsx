"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function InterviewPreparationPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <Button variant="outline" asChild>
          <Link href="/resources">← Back to Resources</Link>
        </Button>
      </div>
      
      <h1 className="text-3xl font-bold mb-6">Interview Preparation Guide</h1>
      
      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Before the Interview</h2>
          <div className="bg-gray-50 p-6 rounded-lg space-y-4">
            <h3 className="text-xl font-semibold">Research the Company</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Study the company's website, mission, and values</li>
              <li>Review recent news and developments</li>
              <li>Understand their products/services</li>
              <li>Research their industry position and competitors</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6">Prepare Your Responses</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Review common interview questions</li>
              <li>Prepare STAR method responses (Situation, Task, Action, Result)</li>
              <li>Practice your elevator pitch</li>
              <li>Prepare questions to ask the interviewer</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Common Interview Questions</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">Tell me about yourself</h3>
              <div className="space-y-3">
                <p className="text-gray-700">Tips for answering:</p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Keep it professional and relevant</li>
                  <li>Focus on your career journey</li>
                  <li>Highlight key achievements</li>
                  <li>Connect your experience to the role</li>
                </ul>
                <div className="bg-blue-50 p-4 rounded mt-3">
                  <p className="text-sm font-medium text-gray-600">Example Response:</p>
                  <p className="text-gray-700 mt-2">
                    "I'm a software developer with 5 years of experience specializing in web applications. I started my career at [Company], where I developed strong skills in React and Node.js. In my current role, I've led several successful projects and mentored junior developers. I'm now looking to take on more challenging projects and contribute to a dynamic team like yours."
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">What are your strengths and weaknesses?</h3>
              <div className="space-y-3">
                <p className="text-gray-700">How to approach:</p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Be honest but strategic</li>
                  <li>Focus on professional traits</li>
                  <li>Provide specific examples</li>
                  <li>Show self-awareness and growth</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Interview Day Tips</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Do's</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Arrive 10-15 minutes early</li>
                <li>Dress professionally</li>
                <li>Bring extra copies of your resume</li>
                <li>Make eye contact and smile</li>
                <li>Listen carefully to questions</li>
                <li>Show enthusiasm and interest</li>
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Don'ts</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Be late</li>
                <li>Speak negatively about previous employers</li>
                <li>Use slang or inappropriate language</li>
                <li>Forget to turn off your phone</li>
                <li>Appear disinterested or distracted</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Follow-up</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              After the interview, it's important to follow up appropriately:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Send a thank-you email within 24 hours</li>
              <li>Reference specific conversation points</li>
              <li>Reiterate your interest in the position</li>
              <li>Keep it brief and professional</li>
            </ul>
            <div className="bg-white p-4 rounded border border-gray-200 mt-4">
              <p className="text-sm font-medium text-gray-600">Sample Thank You Email:</p>
              <p className="text-gray-700 mt-2">
                "Dear [Interviewer's Name],
                
Thank you for taking the time to meet with me yesterday regarding the [Position] role. I enjoyed learning more about [specific topic discussed] and am very excited about the possibility of joining your team.
                
Best regards,
[Your Name]"
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}