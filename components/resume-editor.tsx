"use client"

import type React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { PlusCircle, Trash2 } from "lucide-react"
import { useResumeContext } from "@/context/resume-context"

export default function ResumeEditor() {
  const { resumeData, updateResumeData } = useResumeContext()

  // Enhanced form layout and spacing
  const formClass = "space-y-6";
  const inputClass = "w-full rounded-md border border-gray-300 p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200";
  const labelClass = "block text-sm font-medium text-gray-700 mb-1";
  const sectionClass = "bg-white rounded-lg shadow-sm p-6";
  const buttonClass = "inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200";

  const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    updateResumeData({
      ...resumeData,
      personalInfo: {
        ...resumeData.personalInfo,
        [name]: value,
      },
    })
  }

  const addExperience = () => {
    updateResumeData({
      ...resumeData,
      experience: [
        ...resumeData.experience,
        {
          id: Date.now().toString(),
          title: "",
          company: "",
          location: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    })
  }

  const updateExperience = (id: string, field: string, value: string) => {
    updateResumeData({
      ...resumeData,
      experience: resumeData.experience.map((exp) => (exp.id === id ? { ...exp, [field]: value } : exp)),
    })
  }

  const removeExperience = (id: string) => {
    updateResumeData({
      ...resumeData,
      experience: resumeData.experience.filter((exp) => exp.id !== id),
    })
  }

  const addEducation = () => {
    updateResumeData({
      ...resumeData,
      education: [
        ...resumeData.education,
        {
          id: Date.now().toString(),
          degree: "",
          institution: "",
          location: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    })
  }

  const updateEducation = (id: string, field: string, value: string) => {
    updateResumeData({
      ...resumeData,
      education: resumeData.education.map((edu) => (edu.id === id ? { ...edu, [field]: value } : edu)),
    })
  }

  const removeEducation = (id: string) => {
    updateResumeData({
      ...resumeData,
      education: resumeData.education.filter((edu) => edu.id !== id),
    })
  }

  const addSkill = () => {
    if (resumeData.skills.length < 15) {
      updateResumeData({
        ...resumeData,
        skills: [...resumeData.skills, { id: Date.now().toString(), name: "" }],
      })
    }
  }

  const updateSkill = (id: string, value: string) => {
    updateResumeData({
      ...resumeData,
      skills: resumeData.skills.map((skill) => (skill.id === id ? { ...skill, name: value } : skill)),
    })
  }

  const removeSkill = (id: string) => {
    updateResumeData({
      ...resumeData,
      skills: resumeData.skills.filter((skill) => skill.id !== id),
    })
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Edit Your Resume</h2>

      <Tabs defaultValue="personal" className="w-full">
        <TabsList className="grid grid-cols-4 mb-4">
          <TabsTrigger value="personal">Personal</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
        </TabsList>

        <TabsContent value="personal" className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                value={resumeData.personalInfo.firstName}
                onChange={handlePersonalInfoChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                value={resumeData.personalInfo.lastName}
                onChange={handlePersonalInfoChange}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="title">Professional Title</Label>
            <Input
              id="title"
              name="title"
              value={resumeData.personalInfo.title}
              onChange={handlePersonalInfoChange}
              placeholder="e.g. Senior Software Engineer"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={resumeData.personalInfo.email}
              onChange={handlePersonalInfoChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" name="phone" value={resumeData.personalInfo.phone} onChange={handlePersonalInfoChange} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              name="location"
              value={resumeData.personalInfo.location}
              onChange={handlePersonalInfoChange}
              placeholder="e.g. San Francisco, CA"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="summary">Professional Summary</Label>
            <Textarea
              id="summary"
              name="summary"
              value={resumeData.personalInfo.summary}
              onChange={handlePersonalInfoChange}
              rows={4}
              placeholder="Brief overview of your professional background and strengths"
            />
          </div>
        </TabsContent>

        <TabsContent value="experience" className="space-y-6">
          {resumeData.experience.map((exp, index) => (
            <div key={exp.id} className="p-4 border rounded-md relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
                onClick={() => removeExperience(exp.id)}
              >
                <Trash2 size={18} />
              </Button>

              <h3 className="font-medium mb-3">Experience {index + 1}</h3>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor={`job-title-${exp.id}`}>Job Title</Label>
                    <Input
                      id={`job-title-${exp.id}`}
                      value={exp.title}
                      onChange={(e) => updateExperience(exp.id, "title", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`company-${exp.id}`}>Company</Label>
                    <Input
                      id={`company-${exp.id}`}
                      value={exp.company}
                      onChange={(e) => updateExperience(exp.id, "company", e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor={`location-${exp.id}`}>Location</Label>
                  <Input
                    id={`location-${exp.id}`}
                    value={exp.location}
                    onChange={(e) => updateExperience(exp.id, "location", e.target.value)}
                    placeholder="e.g. San Francisco, CA"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor={`start-date-${exp.id}`}>Start Date</Label>
                    <Input
                      id={`start-date-${exp.id}`}
                      value={exp.startDate}
                      onChange={(e) => updateExperience(exp.id, "startDate", e.target.value)}
                      placeholder="e.g. Jan 2020"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`end-date-${exp.id}`}>End Date</Label>
                    <Input
                      id={`end-date-${exp.id}`}
                      value={exp.endDate}
                      onChange={(e) => updateExperience(exp.id, "endDate", e.target.value)}
                      placeholder="e.g. Present"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor={`description-${exp.id}`}>Description</Label>
                  <Textarea
                    id={`description-${exp.id}`}
                    value={exp.description}
                    onChange={(e) => updateExperience(exp.id, "description", e.target.value)}
                    rows={4}
                    placeholder="Describe your responsibilities and achievements"
                  />
                </div>
              </div>
            </div>
          ))}

          <Button variant="outline" className="w-full flex items-center justify-center gap-2" onClick={addExperience}>
            <PlusCircle size={16} />
            <span>Add Experience</span>
          </Button>
        </TabsContent>

        <TabsContent value="education" className="space-y-6">
          {resumeData.education.map((edu, index) => (
            <div key={edu.id} className="p-4 border rounded-md relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
                onClick={() => removeEducation(edu.id)}
              >
                <Trash2 size={18} />
              </Button>

              <h3 className="font-medium mb-3">Education {index + 1}</h3>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor={`degree-${edu.id}`}>Degree</Label>
                    <Input
                      id={`degree-${edu.id}`}
                      value={edu.degree}
                      onChange={(e) => updateEducation(edu.id, "degree", e.target.value)}
                      placeholder="e.g. Bachelor of Science"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`institution-${edu.id}`}>Institution</Label>
                    <Input
                      id={`institution-${edu.id}`}
                      value={edu.institution}
                      onChange={(e) => updateEducation(edu.id, "institution", e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor={`location-${edu.id}`}>Location</Label>
                  <Input
                    id={`location-${edu.id}`}
                    value={edu.location}
                    onChange={(e) => updateEducation(edu.id, "location", e.target.value)}
                    placeholder="e.g. Boston, MA"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor={`start-date-${edu.id}`}>Start Date</Label>
                    <Input
                      id={`start-date-${edu.id}`}
                      value={edu.startDate}
                      onChange={(e) => updateEducation(edu.id, "startDate", e.target.value)}
                      placeholder="e.g. Sep 2016"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`end-date-${edu.id}`}>End Date</Label>
                    <Input
                      id={`end-date-${edu.id}`}
                      value={edu.endDate}
                      onChange={(e) => updateEducation(edu.id, "endDate", e.target.value)}
                      placeholder="e.g. May 2020"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor={`description-${edu.id}`}>Description</Label>
                  <Textarea
                    id={`description-${edu.id}`}
                    value={edu.description}
                    onChange={(e) => updateEducation(edu.id, "description", e.target.value)}
                    rows={3}
                    placeholder="Relevant coursework, achievements, etc."
                  />
                </div>
              </div>
            </div>
          ))}

          <Button variant="outline" className="w-full flex items-center justify-center gap-2" onClick={addEducation}>
            <PlusCircle size={16} />
            <span>Add Education</span>
          </Button>
        </TabsContent>

        <TabsContent value="skills" className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {resumeData.skills.map((skill) => (
              <div key={skill.id} className="flex items-center gap-2">
                <Input
                  value={skill.name}
                  onChange={(e) => updateSkill(skill.id, e.target.value)}
                  placeholder="e.g. JavaScript"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-500 hover:text-red-500"
                  onClick={() => removeSkill(skill.id)}
                >
                  <Trash2 size={16} />
                </Button>
              </div>
            ))}
          </div>

          {resumeData.skills.length < 15 && (
            <Button variant="outline" className="w-full flex items-center justify-center gap-2 mt-4" onClick={addSkill}>
              <PlusCircle size={16} />
              <span>Add Skill</span>
            </Button>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

