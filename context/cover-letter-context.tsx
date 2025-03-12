"use client"

import { createContext, useContext, useState, ReactNode } from "react"
import type { CoverLetterData } from "@/types/cover-letter"

interface CoverLetterContextType {
  coverLetterData: CoverLetterData
  setCoverLetterData: (data: CoverLetterData) => void
  selectedTemplate: string
  setTemplate: (template: string) => void
}

const defaultCoverLetterData: CoverLetterData = {
  personalInfo: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    title: ""
  },
  recipientInfo: {
    name: "",
    title: "",
    company: "",
    address: ""
  },
  letterContent: {
    opening: "",
    body: "",
    closing: ""
  }
}

const CoverLetterContext = createContext<CoverLetterContextType | undefined>(undefined)

export function CoverLetterProvider({ children }: { children: ReactNode }) {
  const [coverLetterData, setCoverLetterData] = useState<CoverLetterData>(defaultCoverLetterData)
  const [selectedTemplate, setSelectedTemplate] = useState("professional")

  const setTemplate = (template: string) => {
    setSelectedTemplate(template)
  }

  return (
    <CoverLetterContext.Provider
      value={{
        coverLetterData,
        setCoverLetterData,
        selectedTemplate,
        setTemplate,
      }}
    >
      {children}
    </CoverLetterContext.Provider>
  )
}

export function useCoverLetterContext() {
  const context = useContext(CoverLetterContext)
  if (context === undefined) {
    throw new Error("useCoverLetterContext must be used within a CoverLetterProvider")
  }
  return context
}