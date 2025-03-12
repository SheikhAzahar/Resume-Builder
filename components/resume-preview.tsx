"use client"

import { useResumeContext } from "@/context/resume-context"
import ProfessionalTemplate from "@/components/templates/professional-template"
import ModernTemplate from "@/components/templates/modern-template"
import MinimalTemplate from "@/components/templates/minimal-template"
import CreativeTemplate from "@/components/templates/creative-template"
import ExecutiveTemplate from "@/components/templates/executive-template"
import TechnicalTemplate from "@/components/templates/technical-template"

interface ResumePreviewProps {
  fullPage?: boolean
}

export default function ResumePreview({ fullPage = false }: ResumePreviewProps) {
  const { resumeData, selectedTemplate } = useResumeContext()

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case "professional":
        return <ProfessionalTemplate data={resumeData} fullPage={fullPage} />
      case "modern":
        return <ModernTemplate data={resumeData} fullPage={fullPage} />
      case "minimal":
        return <MinimalTemplate data={resumeData} fullPage={fullPage} />
      case "creative":
        return <CreativeTemplate data={resumeData} fullPage={fullPage} />
      case "executive":
        return <ExecutiveTemplate data={resumeData} fullPage={fullPage} />
      case "technical":
        return <TechnicalTemplate data={resumeData} fullPage={fullPage} />
      default:
        return <ProfessionalTemplate data={resumeData} fullPage={fullPage} />
    }
  }

  return (
    <div 
      className={`bg-white rounded-md shadow-md transition-all duration-300 ease-in-out
      ${fullPage ? "min-h-[1100px] w-full" : "h-[600px] overflow-auto animate-fade-in"}`}
    >
      {renderTemplate()}
    </div>
  )
}

