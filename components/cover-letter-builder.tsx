"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { CoverLetterProvider } from "@/context/cover-letter-context"
import { useCoverLetterContext } from "@/context/cover-letter-context"
import CoverLetterPreview from "@/components/cover-letter-preview"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import html2canvas from "html2canvas"
import { jsPDF } from "jspdf"

export default function CoverLetterBuilder() {
  const { coverLetterData, setCoverLetterData, selectedTemplate, setTemplate } = useCoverLetterContext()
  const [exporting, setExporting] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setCoverLetterData((prev) => ({
      ...prev,
      recipientInfo: {
        ...prev.recipientInfo,
        [field]: value,
      },
    }))
  }

  const handleLetterContentChange = (field: string, value: string) => {
    setCoverLetterData((prev) => ({
      ...prev,
      letterContent: {
        ...prev.letterContent,
        [field]: value,
      },
    }))
  }

  const exportAsPDF = async () => {
    setExporting(true)

    try {
      const coverLetterElement = document.getElementById("cover-letter-preview-for-export")

      if (!coverLetterElement) {
        console.error("Cover letter element not found")
        return
      }

      const exportDiv = document.createElement("div")
      exportDiv.style.position = "absolute"
      exportDiv.style.left = "-9999px"
      exportDiv.style.top = "-9999px"
      exportDiv.id = "cover-letter-export-container"
      document.body.appendChild(exportDiv)

      const clone = coverLetterElement.cloneNode(true) as HTMLElement
      clone.style.width = "794px"
      clone.style.height = "1123px"
      clone.style.backgroundColor = "white"
      clone.style.padding = "0"
      clone.style.position = "relative"
      clone.style.display = "block"
      clone.style.overflow = "visible"
      exportDiv.appendChild(clone)

      // Add necessary styles for modern template
      const styleSheet = document.createElement("style")
      styleSheet.textContent = `
        .bg-blue-600 { background-color: #2563eb; }
        .text-white { color: white; }
        .text-blue-100 { color: #dbeafe; }
        .text-gray-600 { color: #4b5563; }
        .text-gray-700 { color: #374151; }
        .text-gray-800 { color: #1f2937; }
        .font-bold { font-weight: 700; }
        .font-medium { font-weight: 500; }
        .text-3xl { font-size: 1.875rem; line-height: 2.25rem; }
        .text-xl { font-size: 1.25rem; line-height: 1.75rem; }
        .text-sm { font-size: 0.875rem; line-height: 1.25rem; }
        .p-8 { padding: 2rem; }
        .mt-1 { margin-top: 0.25rem; }
        .mt-4 { margin-top: 1rem; }
        .mb-8 { margin-bottom: 2rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .mb-2 { margin-bottom: 0.5rem; }
        .mr-1 { margin-right: 0.25rem; }
        .gap-x-4 { column-gap: 1rem; }
        .gap-y-1 { row-gap: 0.25rem; }
        .flex { display: flex; }
        .flex-wrap { flex-wrap: wrap; }
        .items-center { align-items: center; }
        .space-y-4 > * + * { margin-top: 1rem; }
        .whitespace-pre-line { white-space: pre-line; }
        .h-4 { height: 1rem; }
        .w-4 { width: 1rem; }
      `
      exportDiv.appendChild(styleSheet)
      
      await new Promise(resolve => setTimeout(resolve, 500))
  
      const canvas = await html2canvas(clone, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff",
        width: 800,
        height: 1131,
        windowWidth: 800,
        windowHeight: 1131
      })
  
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4"
      })
  
      const imgData = canvas.toDataURL("image/png", 1.0)
      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = pdf.internal.pageSize.getHeight()
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight)
  
      const fileName = `cover_letter.pdf`
      pdf.save(fileName)
  
      document.body.removeChild(exportDiv)
    } catch (error) {
      console.error("Error exporting PDF:", error)
    } finally {
      setExporting(false)
    }
  }

  const exportAsDOC = () => {
    setExporting(true)

    try {
      const coverLetterElement = document.getElementById("cover-letter-preview-for-export")

      if (!coverLetterElement) {
        console.error("Cover letter element not found")
        return
      }

      const exportDiv = document.createElement("div")
      exportDiv.style.position = "absolute"
      exportDiv.style.left = "-9999px"
      exportDiv.style.top = "-9999px"
      document.body.appendChild(exportDiv)

      const clone = coverLetterElement.cloneNode(true) as HTMLElement
      exportDiv.appendChild(clone)

      const htmlContent = `
        <html>
          <head>
            <meta charset="utf-8">
            <title>Cover Letter</title>
            <style>
              body { font-family: system-ui, sans-serif; margin: 0; padding: 20px; }
              h1, h2, h3 { margin-top: 0; }
              .section { margin-bottom: 20px; }
              .bg-blue-600 { background-color: #2563eb; }
              .text-white { color: white; }
              .text-blue-100 { color: #dbeafe; }
              .text-gray-600 { color: #4b5563; }
              .text-gray-700 { color: #374151; }
              .text-gray-800 { color: #1f2937; }
              .font-bold { font-weight: 700; }
              .font-medium { font-weight: 500; }
              .text-3xl { font-size: 1.875rem; line-height: 2.25rem; }
              .text-xl { font-size: 1.25rem; line-height: 1.75rem; }
              .text-sm { font-size: 0.875rem; line-height: 1.25rem; }
              .p-8 { padding: 2rem; }
              .mt-1 { margin-top: 0.25rem; }
              .mt-4 { margin-top: 1rem; }
              .mb-8 { margin-bottom: 2rem; }
              .mb-6 { margin-bottom: 1.5rem; }
              .mb-2 { margin-bottom: 0.5rem; }
              .mr-1 { margin-right: 0.25rem; }
              .gap-x-4 { column-gap: 1rem; }
              .gap-y-1 { row-gap: 0.25rem; }
              .flex { display: flex; }
              .flex-wrap { flex-wrap: wrap; }
              .items-center { align-items: center; }
              .space-y-4 > * + * { margin-top: 1rem; }
              .whitespace-pre-line { white-space: pre-line; }
              .h-4 { height: 1rem; }
              .w-4 { width: 1rem; }
            </style>
          </head>
          <body>
            ${exportDiv.innerHTML}
          </body>
        </html>
      `

      const blob = new Blob([htmlContent], { type: "application/msword" })
      const link = document.createElement("a")
      link.href = URL.createObjectURL(blob)
      link.download = `cover_letter.doc`

      document.body.appendChild(link)
      link.click()

      document.body.removeChild(link)
      document.body.removeChild(exportDiv)
    } catch (error) {
      console.error("Error exporting DOC:", error)
    } finally {
      setExporting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Cover Letter Builder</h1>
        <div className="flex gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Select Template</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setTemplate("professional")}>Professional</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTemplate("modern")}>Modern</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Export</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={exportAsPDF} disabled={exporting}>Export as PDF</DropdownMenuItem>
              <DropdownMenuItem onClick={exportAsDOC} disabled={exporting}>Export as DOC</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Recipient Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="name">
                  Recipient Name
                </label>
                <Input
                  id="name"
                  value={coverLetterData.recipientInfo.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="e.g., John Smith"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="title">
                  Recipient Title
                </label>
                <Input
                  id="title"
                  value={coverLetterData.recipientInfo.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                  placeholder="e.g., Hiring Manager"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="company">
                  Company Name
                </label>
                <Input
                  id="company"
                  value={coverLetterData.recipientInfo.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  placeholder="e.g., Acme Corporation"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="address">
                  Company Address
                </label>
                <Input
                  id="address"
                  value={coverLetterData.recipientInfo.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  placeholder="e.g., 123 Business St, City, State"
                />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Letter Content</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="opening">
                  Opening Paragraph
                </label>
                <Textarea
                  id="opening"
                  value={coverLetterData.letterContent.opening}
                  onChange={(e) => handleLetterContentChange("opening", e.target.value)}
                  placeholder="Introduce yourself and state the position you're applying for"
                  rows={4}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="body">
                  Body Content
                </label>
                <Textarea
                  id="body"
                  value={coverLetterData.letterContent.body}
                  onChange={(e) => handleLetterContentChange("body", e.target.value)}
                  placeholder="Describe your relevant experience and qualifications"
                  rows={6}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="closing">
                  Closing Paragraph
                </label>
                <Textarea
                  id="closing"
                  value={coverLetterData.letterContent.closing}
                  onChange={(e) => handleLetterContentChange("closing", e.target.value)}
                  placeholder="Thank the reader and express your interest in further discussion"
                  rows={4}
                />
              </div>
            </div>
          </Card>
        </div>

        <div>
          <div className="sticky top-6">
            <Card className="overflow-hidden">
              <CoverLetterPreview />
            </Card>
          </div>
        </div>

        {/* Hidden element for export */}
        <div id="cover-letter-preview-for-export" className="hidden">
          <CoverLetterPreview fullPage />
        </div>
      </div>
    </div>
  )
}