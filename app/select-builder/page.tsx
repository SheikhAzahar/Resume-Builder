"use client"

import BuilderSelection from "@/components/builder-selection"
import { ErrorBoundary } from "@/components/error-boundary"

export default function SelectBuilderPage() {
  return (
    <ErrorBoundary>
      <BuilderSelection />
    </ErrorBoundary>
  )
}