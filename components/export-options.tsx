"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Download, Loader2 } from "lucide-react"
import { useResumeContext } from "@/context/resume-context"
import { jsPDF } from "jspdf"
import html2canvas from "html2canvas"
import ResumePreview from "./resume-preview"

export default function ExportOptions() {
  const { resumeData, selectedTemplate } = useResumeContext()
  const [exporting, setExporting] = useState(false)

  const exportAsPDF = async () => {
    setExporting(true)

    try {
      const resumeElement = document.getElementById("resume-preview-for-export")

      if (!resumeElement) {
        console.error("Resume element not found")
        return
      }

      const exportDiv = document.createElement("div")
      exportDiv.style.position = "absolute"
      exportDiv.style.left = "-9999px"
      exportDiv.style.top = "-9999px"
      exportDiv.id = "resume-export-container"
      document.body.appendChild(exportDiv)

      const clone = resumeElement.cloneNode(true) as HTMLElement
      clone.style.width = "794px"
      clone.style.height = "1123px"
      clone.style.backgroundColor = "white"
      clone.style.padding = "40px"
      clone.style.position = "relative"
      clone.style.display = "block"
      clone.style.overflow = "visible"
      exportDiv.appendChild(clone)
      
      await new Promise(resolve => setTimeout(resolve, 1000))

      const canvas = await html2canvas(clone, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff",
        width: 800,
        height: 1131,
        windowWidth: 800,
        windowHeight: 1131,
        logging: true,
        foreignObjectRendering: true,
        onclone: (clonedDoc) => {
          const styleSheets = document.styleSheets
          Array.from(styleSheets).forEach(sheet => {
            try {
              const cssRules = sheet.cssRules
              let css = ''
              for (let rule of cssRules) {
                css += rule.cssText
              }
              const style = clonedDoc.createElement('style')
              style.textContent = css
              clonedDoc.head.appendChild(style)
            } catch (e) {
              console.warn('Could not copy styles', e)
            }
          })
        }
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

      const fileName = `${resumeData.personalInfo.firstName}_${resumeData.personalInfo.lastName}_Resume.pdf`
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
      const resumeElement = document.getElementById("resume-preview-for-export")

      if (!resumeElement) {
        console.error("Resume element not found")
        return
      }

      const exportDiv = document.createElement("div")
      exportDiv.style.position = "absolute"
      exportDiv.style.left = "-9999px"
      exportDiv.style.top = "-9999px"
      document.body.appendChild(exportDiv)

      const clone = resumeElement.cloneNode(true) as HTMLElement
      exportDiv.appendChild(clone)

      const styleSheets = document.styleSheets
      let css = ''
      Array.from(styleSheets).forEach(sheet => {
        try {
          const cssRules = sheet.cssRules
          for (let rule of cssRules) {
            css += rule.cssText
          }
        } catch (e) {
          console.warn('Could not copy styles', e)
        }
      })

      const htmlContent = `
        <html>
          <head>
            <meta charset="utf-8">
            <title>Resume</title>
            <style>
              ${css}
              body { font-family: Arial, sans-serif; margin: 0; padding: 20px; }
              h1, h2, h3 { margin-top: 0; }
              .section { margin-bottom: 20px; }
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
      link.download = `${resumeData.personalInfo.firstName}_${resumeData.personalInfo.lastName}_Resume.doc`

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
    <div>
      {/* Hidden element for export */}
      <div id="resume-preview-for-export" className="hidden">
        <ResumePreview fullPage={true} />
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button disabled={exporting} className="flex items-center gap-2">
            {exporting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />}
            <span>Export</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={exportAsPDF}>Download as PDF</DropdownMenuItem>
          <DropdownMenuItem onClick={exportAsDOC}>Download as DOC</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

