"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useResumeContext } from "@/context/resume-context"

const templates = [
  {
    id: "professional",
    name: "Professional",
    description: "A clean, professional template suitable for most industries",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: "modern",
    name: "Modern",
    description: "A contemporary design with a creative touch",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: "minimal",
    name: "Minimal",
    description: "A simple, straightforward layout that focuses on content",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: "creative",
    name: "Creative",
    description: "A bold design for creative professionals",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: "executive",
    name: "Executive",
    description: "An elegant template for senior professionals",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: "technical",
    name: "Technical",
    description: "Optimized for technical roles and skills",
    image: "/placeholder.svg?height=400&width=300",
  },
]

export default function TemplateSelector({ onSelect }: { onSelect: () => void }) {
  const { setTemplate } = useResumeContext()
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const handleSelect = (templateId: string) => {
    setSelectedId(templateId)
    setTemplate(templateId)
    onSelect()
  }

  return (
    <div className="fade-in">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-3 gradient-text">Choose Your Template</h1>
        <p className="text-muted text-lg max-w-2xl mx-auto">Select from our professionally designed templates to create your standout resume</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {templates.map((template) => (
          <Card
            key={template.id}
            className={`group overflow-hidden cursor-pointer transition-all hover:shadow-lg ${selectedId === template.id ? "ring-2 ring-primary shadow-lg" : "hover:scale-[1.02]"}`}
            onClick={() => handleSelect(template.id)}
          >
            <div className="relative h-[300px] bg-surface overflow-hidden">
              <Image
                src={template.image || "/placeholder.svg"}
                alt={template.name}
                fill
                className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <CardContent className="p-6 bg-background/50 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-2">{template.name}</h3>
              <p className="text-muted mb-4">{template.description}</p>
              <Button 
                className="w-full button-primary group-hover:scale-[1.02]"
                onClick={() => handleSelect(template.id)}
              >
                Use This Template
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

