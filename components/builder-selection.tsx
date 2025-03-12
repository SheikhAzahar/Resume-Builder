"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function BuilderSelection() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-6">
        <Button variant="outline" asChild>
          <Link href="/">← Back to Home</Link>
        </Button>
      </div>
      
      <h1 className="text-4xl font-bold text-center mb-12">Choose Your Builder</h1>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card className="p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-4">Resume Builder</h2>
          <p className="text-gray-600 mb-6">
            Create a professional, ATS-optimized resume with our intuitive builder.
            Choose from multiple templates and get real-time preview.
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li>Multiple professional templates</li>
            <li>ATS-friendly formatting</li>
            <li>Real-time preview</li>
            <li>Export to PDF</li>
          </ul>
          <Button className="w-full" asChild>
            <Link href="/builder">Create Resume</Link>
          </Button>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-4">Cover Letter Builder</h2>
          <p className="text-gray-600 mb-6">
            Craft a compelling cover letter that complements your resume and
            highlights your qualifications.
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li>Professional formatting</li>
            <li>Built-in tips and examples</li>
            <li>Real-time preview</li>
            <li>Easy customization</li>
          </ul>
          <Button className="w-full" asChild>
            <Link href="/cover-letter">Create Cover Letter</Link>
          </Button>
        </Card>
      </div>
    </div>
  );
}