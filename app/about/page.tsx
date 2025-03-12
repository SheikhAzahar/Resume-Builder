"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 fade-in">
      <div className="flex justify-between items-center mb-6">
        <Button variant="outline" asChild className="hover:bg-primary/5 transition-all">
          <Link href="/">← Back to Home</Link>
        </Button>
      </div>
      
      <h1 className="text-4xl font-bold mb-8 gradient-text text-center">About InstantResume.in</h1>
      
      <div className="prose max-w-none space-y-12">
        <section className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Our Mission</h2>
          <p className="text-muted text-lg leading-relaxed">
            At InstantResume.in, we're dedicated to empowering job seekers with the tools they need to succeed in their career journey. Our mission is to make professional resume creation accessible, efficient, and effective for everyone.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-primary text-center">What We Offer</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-background/50 backdrop-blur-sm p-8 rounded-lg shadow-card hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-3 gradient-text">Professional Resume Builder</h3>
              <p className="text-muted leading-relaxed">
                Our intuitive resume builder helps you create ATS-friendly resumes that stand out to employers. With multiple templates and customization options, you can craft the perfect resume for your industry.
              </p>
            </div>

            <div className="bg-background/50 backdrop-blur-sm p-8 rounded-lg shadow-card hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-3 gradient-text">Career Resources</h3>
              <p className="text-muted leading-relaxed">
                Access our comprehensive library of career resources, including resume writing guides, interview tips, and cover letter templates to enhance your job search success.
              </p>
            </div>

            <div className="bg-background/50 backdrop-blur-sm p-8 rounded-lg shadow-card hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-3 gradient-text">Expert Support</h3>
              <p className="text-muted leading-relaxed">
                Our team of career experts is here to help you navigate your professional journey with personalized guidance and industry insights.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-primary text-center">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-primary/5 p-8 rounded-lg shadow-card hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-4 gradient-text">Our Approach</h3>
              <ul className="space-y-3 text-muted">
                <li className="flex items-center">✓ User-friendly interface</li>
                <li className="flex items-center">✓ ATS-optimized templates</li>
                <li className="flex items-center">✓ Regular updates and improvements</li>
                <li className="flex items-center">✓ Data security and privacy</li>
                <li className="flex items-center">✓ Responsive customer support</li>
              </ul>
            </div>

            <div className="bg-secondary/5 p-8 rounded-lg shadow-card hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-4 gradient-text">Our Impact</h3>
              <ul className="space-y-3 text-muted">
                <li className="flex items-center">✓ 50,000+ resumes created</li>
                <li className="flex items-center">✓ 95% success rate</li>
                <li className="flex items-center">✓ Trusted by professionals worldwide</li>
                <li className="flex items-center">✓ Industry-leading templates</li>
                <li className="flex items-center">✓ Continuous innovation</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 p-12 rounded-lg text-center max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4 gradient-text">Our Commitment</h2>
          <p className="text-muted text-lg mb-8 leading-relaxed">
            We're committed to helping you succeed in your career journey. Our platform is continuously evolving to meet the changing needs of the job market and provide you with the best tools for success.
          </p>
          <Button className="button-primary text-lg" asChild>
            <Link href="/builder">Start Building Your Resume</Link>
          </Button>
        </section>
      </div>
    </div>
  )
}