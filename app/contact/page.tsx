"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8 fade-in">
      <div className="flex justify-between items-center mb-6">
        <Button variant="outline" asChild className="hover:bg-primary/5 transition-all">
          <Link href="/">← Back to Home</Link>
        </Button>
      </div>
      
      <h1 className="text-4xl font-bold mb-6 gradient-text text-center">Contact Us</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Get in Touch</h2>
            <p className="text-muted text-lg leading-relaxed mb-4">
              Have questions about our resume builder or need assistance? We're here to help! Fill out the form below, and our team will get back to you as soon as possible.
            </p>
          </section>

          <section className="bg-primary/5 p-6 rounded-lg mb-8 shadow-card hover:shadow-lg transition-all">
            <h2 className="text-2xl font-semibold mb-4 gradient-text">Office Information</h2>
            <div className="space-y-4">
              <div className="transition-all hover:translate-x-1">
                <h3 className="font-semibold text-primary">Address</h3>
                <p className="text-muted">123 Career Street<br />San Francisco, CA 94105</p>
              </div>
              <div className="transition-all hover:translate-x-1">
                <h3 className="font-semibold text-primary">Email</h3>
                <p className="text-muted">support@instantresume.io</p>
              </div>
              <div className="transition-all hover:translate-x-1">
                <h3 className="font-semibold text-primary">Business Hours</h3>
                <p className="text-muted">Monday - Friday: 9:00 AM - 6:00 PM PST</p>
              </div>
            </div>
          </section>
        </div>

        <div className="bg-background/50 backdrop-blur-sm p-8 rounded-lg shadow-card hover:shadow-lg transition-all">
          <h2 className="text-2xl font-semibold mb-6 gradient-text">Contact Form</h2>
          <form className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-primary">
                Name
              </label>
              <Input 
                id="name" 
                placeholder="Your name" 
                className="transition-all focus:scale-[1.01]"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-primary">
                Email
              </label>
              <Input 
                id="email" 
                type="email" 
                placeholder="your@email.com"
                className="transition-all focus:scale-[1.01]"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="block text-sm font-medium text-primary">
                Subject
              </label>
              <Input 
                id="subject" 
                placeholder="How can we help?"
                className="transition-all focus:scale-[1.01]"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-primary">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Your message"
                className="min-h-[150px] transition-all focus:scale-[1.01]"
              />
            </div>

            <Button className="w-full button-primary" type="submit">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}