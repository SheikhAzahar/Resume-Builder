"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import type { ResumeData } from "@/types/resume"

interface ResumeContextType {
  resumeData: ResumeData
  selectedTemplate: string
  updateResumeData: (data: ResumeData) => void
  setTemplate: (templateId: string) => void
}

const defaultResumeData: ResumeData = {
  personalInfo: {
    firstName: "John",
    lastName: "Doe",
    title: "Software Engineer",
    email: "john.doe@example.com",
    phone: "(555) 123-4567",
    location: "San Francisco, CA",
    summary:
      "Experienced software engineer with a passion for developing innovative solutions. Skilled in JavaScript, React, and Node.js with a strong background in building scalable web applications.",
  },
  experience: [
    {
      id: "exp1",
      title: "Senior Software Engineer",
      company: "Tech Solutions Inc.",
      location: "San Francisco, CA",
      startDate: "Jan 2020",
      endDate: "Present",
      description:
        "• Developed and maintained key features for the company's flagship product\n• Led a team of 5 developers to implement a microservices architecture\n• Reduced application load time by 40% through code optimization\n• Collaborated with product managers to define and prioritize new features",
    },
    {
      id: "exp2",
      title: "Software Engineer",
      company: "WebDev Innovations",
      location: "Seattle, WA",
      startDate: "Jun 2017",
      endDate: "Dec 2019",
      description:
        "• Built responsive web applications using React and Redux\n• Implemented RESTful APIs using Node.js and Express\n• Participated in code reviews and mentored junior developers\n• Improved test coverage from 65% to 90%",
    },
  ],
  education: [
    {
      id: "edu1",
      degree: "Master of Science in Computer Science",
      institution: "Stanford University",
      location: "Stanford, CA",
      startDate: "Sep 2015",
      endDate: "May 2017",
      description: "Specialized in Software Engineering and Artificial Intelligence. Graduated with honors.",
    },
    {
      id: "edu2",
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Washington",
      location: "Seattle, WA",
      startDate: "Sep 2011",
      endDate: "May 2015",
      description: "Dean's List, Computer Science Student Association, Undergraduate Research Assistant",
    },
  ],
  skills: [
    { id: "skill1", name: "JavaScript" },
    { id: "skill2", name: "React" },
    { id: "skill3", name: "Node.js" },
    { id: "skill4", name: "TypeScript" },
    { id: "skill5", name: "GraphQL" },
    { id: "skill6", name: "AWS" },
    { id: "skill7", name: "Docker" },
    { id: "skill8", name: "Git" },
  ],
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined)

export function ResumeProvider({ children }: { children: ReactNode }) {
  const [resumeData, setResumeData] = useState<ResumeData>(defaultResumeData)
  const [selectedTemplate, setSelectedTemplate] = useState<string>("professional")

  const updateResumeData = (data: ResumeData) => {
    setResumeData(data)
  }

  const setTemplate = (templateId: string) => {
    setSelectedTemplate(templateId)
  }

  return (
    <ResumeContext.Provider value={{ resumeData, selectedTemplate, updateResumeData, setTemplate }}>
      {children}
    </ResumeContext.Provider>
  )
}

export function useResumeContext() {
  const context = useContext(ResumeContext)
  if (context === undefined) {
    throw new Error("useResumeContext must be used within a ResumeProvider")
  }
  return context
}

