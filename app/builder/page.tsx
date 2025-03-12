"use client"

import dynamic from "next/dynamic"
import { ErrorBoundary } from "@/components/error-boundary"
import { Suspense } from "react"

const ResumeBuilder = dynamic(() => import("@/components/resume-builder"), {
  ssr: false,
  loading: () => null
})

const ResumeProvider = dynamic(() => import("@/context/resume-context").then(mod => mod.ResumeProvider), {
  ssr: false
})

const LoadingComponent = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-pulse text-lg text-gray-600">Loading...</div>
  </div>
)

export default function BuilderPage() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingComponent />}>
        <ResumeProvider>
          <ResumeBuilder />
        </ResumeProvider>
      </Suspense>
    </ErrorBoundary>
  )
}