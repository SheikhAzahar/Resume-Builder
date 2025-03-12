"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import TemplateSelector from "@/components/template-selector"
import ResumeEditor from "@/components/resume-editor"
import ResumePreview from "@/components/resume-preview"
import AtsAnalysis from "@/components/ats-analysis"
import ExportOptions from "@/components/export-options"
import Header from "@/components/header"

export default function ResumeBuilder() {
  const [activeTab, setActiveTab] = useState("templates")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className={`flex flex-col min-h-screen bg-surface ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        <Tabs defaultValue="templates" className="w-full" value={activeTab} onValueChange={setActiveTab}>
          <div className="flex justify-between items-center mb-8">
            <TabsList className="grid grid-cols-4 w-[400px] bg-background/50 backdrop-blur-sm shadow-sm">
              <TabsTrigger value="templates" className="text-sm font-medium">Templates</TabsTrigger>
              <TabsTrigger value="edit" className="text-sm font-medium">Edit</TabsTrigger>
              <TabsTrigger value="preview" className="text-sm font-medium">Preview</TabsTrigger>
              <TabsTrigger value="analyze" className="text-sm font-medium">Analyze</TabsTrigger>
            </TabsList>

            <ExportOptions />
          </div>

          <div className="grid gap-8">
            <TabsContent value="templates" className="mt-0 page-transition">
              <TemplateSelector onSelect={() => setActiveTab("edit")} />
            </TabsContent>

            <TabsContent value="edit" className="mt-0 page-transition">
              <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8">
                <Card className="p-6 h-fit bg-background/50 backdrop-blur-sm shadow-card hover:shadow-lg transition-all">
                  <ResumeEditor />
                </Card>

                <Card className="p-6 bg-background shadow-card hover:shadow-lg transition-all">
                  <h2 className="text-xl font-semibold mb-4 gradient-text">Live Preview</h2>
                  <div className="border rounded-md overflow-hidden bg-white">
                    <ResumePreview />
                  </div>
                  <div className="mt-6 flex justify-end">
                    <Button 
                      onClick={() => setActiveTab("preview")}
                      className="button-primary"
                    >
                      Full Preview
                    </Button>
                  </div>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="preview" className="mt-0 page-transition">
              <Card className="p-8 bg-background shadow-card hover:shadow-lg transition-all">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-semibold gradient-text">Resume Preview</h2>
                  <Button 
                    onClick={() => setActiveTab("edit")}
                    variant="outline"
                    className="hover:bg-primary/5"
                  >
                    Back to Editor
                  </Button>
                </div>
                <div className="max-w-[800px] mx-auto border rounded-md overflow-hidden bg-white shadow-sm">
                  <ResumePreview fullPage />
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="analyze" className="mt-0 page-transition">
              <AtsAnalysis />
            </TabsContent>
          </div>
        </Tabs>
      </main>
    </div>
  )
}

