"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function LandingPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  // Enhanced animation and spacing
  const sectionClass = "py-20 px-4 md:px-8 lg:px-16";
  const titleClass = "text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-6";
  const subtitleClass = "text-xl text-gray-600 mb-8 max-w-2xl mx-auto";
  const cardClass = "bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300";

  useEffect(() => {
    const timer = setTimeout(() => {
      const heroElement = heroRef.current;
      if (heroElement) {
        heroElement.classList.add('animate-fade-in');
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

      const elements = [statsRef.current, featuresRef.current, footerRef.current];
      elements.forEach(el => el && observer.observe(el));

      return () => {
        elements.forEach(el => el && observer.unobserve(el));
        observer.disconnect();
      };
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <header className="container mx-auto px-4 py-4 sm:py-8">
        <nav className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-2">
              <div className="text-foreground font-bold text-2xl tracking-tight transition-all duration-300 hover:scale-105">InstantResume.in</div>
          </div>
          <div className="flex gap-4 sm:gap-6 w-full sm:w-auto justify-center sm:justify-end">
            <Button variant="ghost" className="text-foreground text-base sm:text-lg transition-all duration-300 hover:scale-105">Sign In</Button>
            <Button className="bg-foreground text-background hover:bg-foreground/90 text-base sm:text-lg font-medium transition-all duration-300 hover:scale-105">Get Started</Button>
          </div>
        </nav>
      </header>

      <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center" ref={heroRef}>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-foreground mb-6 sm:mb-8 animate-slide-in-from-bottom leading-tight tracking-tight">
              Create Your Professional<br className="hidden sm:inline" /> Resume in Minutes
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 sm:mb-12 animate-slide-in-from-bottom max-w-2xl mx-auto" style={{animationDelay: '200ms'}}>
              Build an ATS-optimized resume that lands you more interviews. Simple, fast, and effective.
            </p>
            <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 text-base sm:text-lg font-medium px-6 sm:px-8 py-4 sm:py-6 transition-all duration-300 hover:scale-105 animate-slide-in-from-bottom w-full sm:w-auto" style={{animationDelay: '400ms'}} asChild>
              <Link href="/select-builder">Start Building Now</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-muted" ref={statsRef}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
            <div className="transform transition-all duration-500 hover:scale-110">
              <div className="text-3xl sm:text-4xl font-bold text-foreground mb-2">50K+</div>
              <div className="text-sm sm:text-base text-muted-foreground">Resumes Created</div>
            </div>
            <div className="transform transition-all duration-500 hover:scale-110">
              <div className="text-3xl sm:text-4xl font-bold text-foreground mb-2">95%</div>
              <div className="text-sm sm:text-base text-muted-foreground">Success Rate</div>
            </div>
            <div className="transform transition-all duration-500 hover:scale-110">
              <div className="text-3xl sm:text-4xl font-bold text-foreground mb-2">24/7</div>
              <div className="text-sm sm:text-base text-muted-foreground">Support</div>
            </div>
            <div className="transform transition-all duration-500 hover:scale-110">
              <div className="text-3xl sm:text-4xl font-bold text-foreground mb-2">4.9/5</div>
              <div className="text-sm sm:text-base text-muted-foreground">User Rating</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-background" ref={featuresRef}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-4 animate-slide-in-from-bottom">
            Why Choose Our Resume Builder?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground text-center mb-8 sm:mb-12 max-w-3xl mx-auto animate-slide-in-from-bottom" style={{animationDelay: '200ms'}}>
            Create a professional resume in minutes with our easy-to-use builder
          </p>
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="p-6 sm:p-8 hover:shadow-xl transition-all duration-500 hover:scale-105 bg-card text-card-foreground border-border animate-slide-in-from-left" style={{animationDelay: '300ms'}}>
              <div className="h-14 w-14 bg-muted rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 hover:bg-muted/80">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-foreground transition-transform duration-300 hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">ATS-Friendly Templates</h3>
              <p className="text-muted-foreground">
                Our templates are designed to pass Applicant Tracking Systems and get your resume noticed.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-500 hover:scale-105 bg-card text-card-foreground border-border animate-slide-in-from-bottom" style={{animationDelay: '500ms'}}>
              <div className="h-14 w-14 bg-muted rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 hover:bg-muted/80">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-foreground transition-transform duration-300 hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Real-Time Editor</h3>
              <p className="text-muted-foreground">
                See your changes instantly with our live preview feature. Edit and customize your resume with ease.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-500 hover:scale-105 bg-card text-card-foreground border-border animate-slide-in-from-right" style={{animationDelay: '700ms'}}>
              <div className="h-14 w-14 bg-muted rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 hover:bg-muted/80">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-foreground transition-transform duration-300 hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Professional Designs</h3>
              <p className="text-muted-foreground">
                Choose from multiple professionally designed templates that stand out and make a great first impression.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-blue-600 text-white py-16" ref={footerRef}>
        <div className="container mx-auto px-4 flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl w-full">
            <div className="mb-8 sm:mb-0">
              <h3 className="text-xl font-semibold mb-4 animate-slide-in-from-left" style={{animationDelay: '200ms'}}>InstantResume.in</h3>
              <p className="text-muted-foreground animate-slide-in-from-left" style={{animationDelay: '300ms'}}>
                Building better careers through professional resumes.
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-4 animate-slide-in-from-bottom" style={{animationDelay: '400ms'}}>Resources</h4>
              <ul className="space-y-2">
                <li><Link href="/resources/resume-writing-guide" className="text-muted-foreground hover:text-foreground transition-colors duration-300 animate-slide-in-from-bottom" style={{animationDelay: '500ms'}}>Resume Guide</Link></li>
                <li><Link href="/resources/cover-letter-tips" className="text-muted-foreground hover:text-foreground transition-colors duration-300 animate-slide-in-from-bottom" style={{animationDelay: '600ms'}}>Cover Letters</Link></li>
                <li><Link href="/resources/interview-preparation" className="text-muted-foreground hover:text-foreground transition-colors duration-300 animate-slide-in-from-bottom" style={{animationDelay: '700ms'}}>Interview Tips</Link></li>
              </ul>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-4 animate-slide-in-from-bottom" style={{animationDelay: '400ms'}}>Company</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors duration-300 animate-slide-in-from-bottom" style={{animationDelay: '500ms'}}>About Us</Link></li>
                <li><Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors duration-300 animate-slide-in-from-bottom" style={{animationDelay: '600ms'}}>Contact</Link></li>
                <li><Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground transition-colors duration-300 animate-slide-in-from-bottom" style={{animationDelay: '700ms'}}>Privacy Policy</Link></li>
              </ul>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-4 animate-slide-in-from-bottom" style={{animationDelay: '400ms'}}>Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-300 animate-slide-in-from-bottom" style={{animationDelay: '500ms'}}>Twitter</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-300 animate-slide-in-from-bottom" style={{animationDelay: '600ms'}}>LinkedIn</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-300 animate-slide-in-from-bottom" style={{animationDelay: '700ms'}}>GitHub</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
                