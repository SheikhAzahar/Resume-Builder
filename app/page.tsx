import LandingPage from "@/components/landing-page"
import { ErrorBoundary } from "@/components/error-boundary"

export default function HomePage() {
  return (
    <ErrorBoundary>
      <LandingPage />
    </ErrorBoundary>
  )
}

