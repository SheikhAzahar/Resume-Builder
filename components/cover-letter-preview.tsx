"use client"

import { useCoverLetterContext } from "@/context/cover-letter-context"
import ProfessionalCoverLetterTemplate from "@/components/templates/professional-cover-letter-template"
import ModernCoverLetterTemplate from "@/components/templates/modern-cover-letter-template"

interface CoverLetterPreviewProps {
  fullPage?: boolean
}

export default function CoverLetterPreview({ fullPage = false }: CoverLetterPreviewProps) {
  const { coverLetterData, selectedTemplate } = useCoverLetterContext()

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case "professional":
        return <ProfessionalCoverLetterTemplate data={coverLetterData} fullPage={fullPage} />
      case "modern":
        return <ModernCoverLetterTemplate data={coverLetterData} fullPage={fullPage} />
      default:
        return <ProfessionalCoverLetterTemplate data={coverLetterData} fullPage={fullPage} />
    }
  }

  return (
    <div className={`bg-white ${fullPage ? "min-h-[1100px] w-full" : "h-[600px] overflow-auto"}`}>
      {renderTemplate()}
    </div>
  )
}