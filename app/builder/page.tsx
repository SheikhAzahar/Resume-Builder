"use client"

import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ErrorBoundary } from "@/components/error-boundary"

const metadata = {
  title: "Resume Builder - InstantResume.in",
  description: "Create your professional resume with our easy-to-use builder",
}

const ResumeBuilder = dynamic(() => import("@/components/resume-builder"))
const ResumeProvider = dynamic(() => import("@/context/resume-context").then(mod => mod.ResumeProvider))

export default function BuilderPage() {
  return (
    <ErrorBoundary>
      <ResumeProvider>
        <ResumeBuilder />
      </ResumeProvider>
    </ErrorBoundary>
  )
}