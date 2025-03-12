"use client"

import Link from "next/link";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.classList.add('animate-fade-in');
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <header className="container mx-auto px-4 py-4 sm:py-8">
        <nav className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-2">
            <div className="text-foreground font-bold text-2xl tracking-tight">InstantResume.in</div>
          </div>
          <div className="flex gap-4 sm:gap-6 w-full sm:w-auto justify-center sm:justify-end">
            <Button variant="ghost" className="text-foreground text-base sm:text-lg">Sign In</Button>
            <Button className="bg-foreground text-background hover:bg-foreground/90 text-base sm:text-lg font-medium">Get Started</Button>
          </div>
        </nav>
      </header>

      <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center" ref={heroRef}>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-foreground mb-6 sm:mb-8 animate-slide-in-from-bottom leading-tight tracking-tight">
              Create Your Professional<br className="hidden sm:inline" /> Resume in Minutes
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 sm:mb-12 animate-slide-in-from-bottom max-w-2xl mx-auto">
              Build an ATS-optimized resume that lands you more interviews. Simple, fast, and effective.
            </p>
            <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 text-base sm:text-lg font-medium px-6 sm:px-8 py-4 sm:py-6 animate-slide-in-from-bottom w-full sm:w-auto" asChild>
              <Link href="/select-builder">Start Building Now</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-muted" ref={statsRef}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
            <div className="transform transition-all duration-500">
              <div className="text-3xl sm:text-4xl font-bold text-foreground mb-2">50K+</div>
              <div className="text-sm sm:text-base text-muted-foreground">Resumes Created</div>
            </div>
            <div className="transform transition-all duration-500">
              <div className="text-3xl sm:text-4xl font-bold text-foreground mb-2">95%</div>
              <div className="text-sm sm:text-base text-muted-foreground">Success Rate</div>
            </div>
            <div className="transform transition-all duration-500">
              <div className="text-3xl sm:text-4xl font-bold text-foreground mb-2">24/7</div>
              <div className="text-sm sm:text-base text-muted-foreground">Support</div>
            </div>
            <div className="transform transition-all duration-500">
              <div className="text-3xl sm:text-4xl font-bold text-foreground mb-2">4.9/5</div>
              <div className="text-sm sm:text-base text-muted-foreground">User Rating</div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-background" ref={featuresRef}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Why Choose InstantResume.in</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-muted rounded-lg">
              <h3 className="text-xl font-semibold mb-4">ATS-Optimized Templates</h3>
              <p className="text-muted-foreground">Our templates are designed to pass through Applicant Tracking Systems with ease.</p>
            </div>
            <div className="p-6 bg-muted rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Easy Customization</h3>
              <p className="text-muted-foreground">Customize your resume with our intuitive editor - no design skills needed.</p>
            </div>
            <div className="p-6 bg-muted rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Expert Support</h3>
              <p className="text-muted-foreground">Get guidance from our career experts to make your resume stand out.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-background rounded-lg">
              <p className="text-muted-foreground mb-4">"Got my dream job thanks to the professional resume I created here. The templates are amazing!"</p>
              <div className="font-semibold">Sarah Johnson</div>
              <div className="text-sm text-muted-foreground">Software Engineer</div>
            </div>
            <div className="p-6 bg-background rounded-lg">
              <p className="text-muted-foreground mb-4">"The ATS-friendly templates helped my resume get noticed. Highly recommended!"</p>
              <div className="font-semibold">Michael Chen</div>
              <div className="text-sm text-muted-foreground">Marketing Manager</div>
            </div>
            <div className="p-6 bg-background rounded-lg">
              <p className="text-muted-foreground mb-4">"Simple to use and professional results. Worth every penny!"</p>
              <div className="font-semibold">Emily Rodriguez</div>
              <div className="text-sm text-muted-foreground">UX Designer</div>
            </div>
          </div>
        </div>
      </section>

      <footer ref={footerRef} className="bg-primary py-12 text-white mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">InstantResume.in</h3>
              <p className="text-white/80">Create professional resumes in minutes with our easy-to-use builder.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-white/80 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="text-white/80 hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/pricing" className="text-white/80 hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/resources" className="text-white/80 hover:text-white transition-colors">Resources</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="/resources/resume-writing-guide" className="text-white/80 hover:text-white transition-colors">Resume Guide</Link></li>
                <li><Link href="/resources/cover-letter-tips" className="text-white/80 hover:text-white transition-colors">Cover Letter Tips</Link></li>
                <li><Link href="/resources/interview-preparation" className="text-white/80 hover:text-white transition-colors">Interview Prep</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="/privacy-policy" className="text-white/80 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-white/80 hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>© {new Date().getFullYear()} InstantResume.in. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
                