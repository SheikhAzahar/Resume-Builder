"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { useResumeContext } from "@/context/resume-context"
import { AlertCircle, CheckCircle2, Info } from "lucide-react"

export default function AtsAnalysis() {
  const { resumeData } = useResumeContext()
  const [analyzing, setAnalyzing] = useState(false)
  const [analyzed, setAnalyzed] = useState(false)
  const [score, setScore] = useState(0)
  const [feedback, setFeedback] = useState<
    {
      category: string
      score: number
      feedback: string
      suggestions: string[]
    }[]
  >([])

  const analyzeResume = () => {
    setAnalyzing(true)

    // Simulate API call delay
    setTimeout(() => {
      // Calculate scores based on resume content
      const personalInfoScore = calculatePersonalInfoScore()
      const experienceScore = calculateExperienceScore()
      const educationScore = calculateEducationScore()
      const skillsScore = calculateSkillsScore()
      const keywordsScore = calculateKeywordsScore()

      const totalScore = Math.round(
        (personalInfoScore + experienceScore + educationScore + skillsScore + keywordsScore) / 5,
      )

      setScore(totalScore)
      setFeedback([
        {
          category: "Contact Information",
          score: personalInfoScore,
          feedback: getPersonalInfoFeedback(personalInfoScore),
          suggestions: getPersonalInfoSuggestions(personalInfoScore),
        },
        {
          category: "Work Experience",
          score: experienceScore,
          feedback: getExperienceFeedback(experienceScore),
          suggestions: getExperienceSuggestions(experienceScore),
        },
        {
          category: "Education",
          score: educationScore,
          feedback: getEducationFeedback(educationScore),
          suggestions: getEducationSuggestions(educationScore),
        },
        {
          category: "Skills",
          score: skillsScore,
          feedback: getSkillsFeedback(skillsScore),
          suggestions: getSkillsSuggestions(skillsScore),
        },
        {
          category: "Keywords & Phrases",
          score: keywordsScore,
          feedback: getKeywordsFeedback(keywordsScore),
          suggestions: getKeywordsSuggestions(keywordsScore),
        },
      ])

      setAnalyzing(false)
      setAnalyzed(true)
    }, 2000)
  }

  const calculatePersonalInfoScore = () => {
    const { personalInfo } = resumeData
    let score = 0

    if (personalInfo.firstName && personalInfo.lastName) score += 20
    if (personalInfo.email) score += 20
    if (personalInfo.phone) score += 20
    if (personalInfo.location) score += 20
    if (personalInfo.summary && personalInfo.summary.length > 50) score += 20

    return score
  }

  const calculateExperienceScore = () => {
    const { experience } = resumeData

    if (experience.length === 0) return 0

    let score = 0
    const maxScore = 100
    const scorePerExp = maxScore / experience.length

    experience.forEach((exp) => {
      let expScore = 0
      if (exp.title) expScore += 0.2
      if (exp.company) expScore += 0.2
      if (exp.startDate && exp.endDate) expScore += 0.2
      if (exp.description) {
        // More points for detailed descriptions
        const words = exp.description.split(/\s+/).filter(Boolean).length
        expScore += words > 30 ? 0.4 : words > 15 ? 0.3 : 0.1
      }

      score += expScore * scorePerExp
    })

    return Math.min(Math.round(score), 100)
  }

  const calculateEducationScore = () => {
    const { education } = resumeData

    if (education.length === 0) return 50 // Not having education isn't as bad as no experience

    let score = 0
    const maxScore = 100
    const scorePerEdu = maxScore / education.length

    education.forEach((edu) => {
      let eduScore = 0
      if (edu.degree) eduScore += 0.3
      if (edu.institution) eduScore += 0.3
      if (edu.startDate && edu.endDate) eduScore += 0.2
      if (edu.description) eduScore += 0.2

      score += eduScore * scorePerEdu
    })

    return Math.min(Math.round(score), 100)
  }

  const calculateSkillsScore = () => {
    const { skills } = resumeData

    if (skills.length === 0) return 0

    // More skills is better, up to a reasonable limit
    const skillCount = skills.filter((s) => s.name.trim()).length
    let score = 0

    if (skillCount >= 10) {
      score = 100
    } else if (skillCount >= 7) {
      score = 90
    } else if (skillCount >= 5) {
      score = 80
    } else if (skillCount >= 3) {
      score = 70
    } else if (skillCount >= 1) {
      score = 50
    }

    return score
  }

  const calculateKeywordsScore = () => {
    // This would normally analyze the resume for industry-specific keywords
    // For this demo, we'll use a simplified approach

    const allText = [
      resumeData.personalInfo.summary,
      ...resumeData.experience.map((e) => `${e.title} ${e.company} ${e.description}`),
      ...resumeData.skills.map((s) => s.name),
    ]
      .join(" ")
      .toLowerCase()

    // Common keywords that ATS systems look for
    const keywords = [
      "managed",
      "leadership",
      "developed",
      "team",
      "project",
      "created",
      "improved",
      "increased",
      "reduced",
      "budget",
      "strategy",
      "analysis",
      "research",
      "communication",
      "customer",
      "sales",
      "revenue",
      "growth",
      "implementation",
      "solution",
      "problem",
      "technology",
      "software",
    ]

    // Count how many keywords are present
    let keywordCount = 0
    keywords.forEach((keyword) => {
      if (allText.includes(keyword)) keywordCount++
    })

    // Score based on keyword density
    const keywordPercentage = (keywordCount / keywords.length) * 100
    let score = 0

    if (keywordPercentage >= 50) {
      score = 100
    } else if (keywordPercentage >= 40) {
      score = 90
    } else if (keywordPercentage >= 30) {
      score = 80
    } else if (keywordPercentage >= 20) {
      score = 70
    } else if (keywordPercentage >= 10) {
      score = 60
    } else if (keywordPercentage > 0) {
      score = 50
    }

    return score
  }

  // Feedback generators
  const getPersonalInfoFeedback = (score: number) => {
    if (score >= 80) return "Your contact information is well-structured and complete."
    if (score >= 50) return "Your contact information is adequate but could be improved."
    return "Your contact information needs significant improvement."
  }

  const getPersonalInfoSuggestions = (score: number) => {
    const suggestions = []
    const { personalInfo } = resumeData

    if (!personalInfo.firstName || !personalInfo.lastName) {
      suggestions.push("Add your full name")
    }
    if (!personalInfo.email) {
      suggestions.push("Add a professional email address")
    }
    if (!personalInfo.phone) {
      suggestions.push("Add a contact phone number")
    }
    if (!personalInfo.location) {
      suggestions.push("Add your location")
    }
    if (!personalInfo.summary || personalInfo.summary.length < 50) {
      suggestions.push("Expand your professional summary to be more detailed")
    }

    return suggestions
  }

  const getExperienceFeedback = (score: number) => {
    if (score >= 80) return "Your work experience is well-detailed and effectively presented."
    if (score >= 50) return "Your work experience section is good but could be more detailed."
    return "Your work experience section needs more content and detail."
  }

  const getExperienceSuggestions = (score: number) => {
    const suggestions = []
    const { experience } = resumeData

    if (experience.length === 0) {
      suggestions.push("Add your work experience")
      return suggestions
    }

    experience.forEach((exp) => {
      if (!exp.title || !exp.company) {
        suggestions.push("Ensure all positions have both a title and company name")
      }
      if (!exp.startDate || !exp.endDate) {
        suggestions.push("Add complete employment dates for all positions")
      }
      if (!exp.description || exp.description.split(/\s+/).filter(Boolean).length < 30) {
        suggestions.push("Add more detailed descriptions of your responsibilities and achievements")
      }
    })

    return [...new Set(suggestions)]
  }

  const getEducationFeedback = (score: number) => {
    if (score >= 80) return "Your education section is comprehensive and well-presented."
    if (score >= 50) return "Your education section is adequate but could be enhanced."
    return "Your education section needs more detail."
  }

  const getEducationSuggestions = (score: number) => {
    const suggestions = []
    const { education } = resumeData

    if (education.length === 0) {
      suggestions.push("Add your educational background")
      return suggestions
    }

    education.forEach((edu) => {
      if (!edu.degree) {
        suggestions.push("Specify your degree or certification")
      }
      if (!edu.institution) {
        suggestions.push("Add the name of your educational institution")
      }
      if (!edu.startDate || !edu.endDate) {
        suggestions.push("Include complete dates for your education")
      }
    })

    return [...new Set(suggestions)]
  }

  const getSkillsFeedback = (score: number) => {
    if (score >= 80) return "You have a strong set of relevant skills listed."
    if (score >= 50) return "Your skills section is good but could be expanded."
    return "Your skills section needs more relevant skills."
  }

  const getSkillsSuggestions = (score: number) => {
    const suggestions = []
    const { skills } = resumeData

    if (skills.length === 0) {
      suggestions.push("Add your key skills and competencies")
    } else if (skills.length < 5) {
      suggestions.push("Add more relevant skills (aim for at least 5-10 key skills)")
    }

    return suggestions
  }

  const getKeywordsFeedback = (score: number) => {
    if (score >= 80) return "Your resume contains a good balance of relevant keywords."
    if (score >= 50) return "Your resume includes some important keywords but could use more."
    return "Your resume needs more industry-specific keywords."
  }

  const getKeywordsSuggestions = (score: number) => {
    if (score >= 80) return []
    
    return [
      "Include more action verbs (e.g., managed, developed, implemented)",
      "Add industry-specific technical terms",
      "Incorporate more quantifiable achievements",
      "Include relevant certifications and tools"
    ]
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600"
    if (score >= 60) return "text-yellow-600"
    return "text-red-600"
  }

  const getScoreProgressColor = (score: number) => {
    if (score >= 80) return "bg-green-500"
    if (score >= 60) return "bg-yellow-500"
    return "bg-red-500"
  }

  const getScoreIcon = (score: number) => {
    if (score >= 80) return <CheckCircle2 className="h-5 w-5 text-green-500" />
    if (score >= 60) return <Info className="h-5 w-5 text-yellow-600" />
    return <AlertCircle className="h-5 w-5 text-red-500" />
  }

  return (
    <div className="space-y-6">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">ATS Resume Analysis</h1>
        <p className="text-gray-600 mb-6">
          Our AI-powered tool analyzes your resume against Applicant Tracking Systems (ATS) to help you optimize it for
          better results.
        </p>

        {!analyzed && (
          <Button onClick={analyzeResume} disabled={analyzing} className="w-full md:w-auto" size="lg">
            {analyzing ? "Analyzing..." : "Analyze My Resume"}
          </Button>
        )}
      </div>

      {analyzed && (
        <div className="space-y-8 max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            <div className="bg-gray-50 p-6 border-b">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold">ATS Compatibility Score</h2>
                  <p className="text-gray-600">How well your resume will perform with ATS systems</p>
                </div>
                <div className="text-center mt-4 md:mt-0">
                  <div className={`text-5xl font-bold ${getScoreColor(score)}`}>{score}%</div>
                </div>
              </div>
              <div className="mt-4">
                <Progress value={score} className={getScoreProgressColor(score)} />
              </div>
            </div>
            <CardContent className="p-6">
              <div className="space-y-6">
                {feedback.map((item, index) => (
                  <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        {getScoreIcon(item.score)}
                        <h3 className="font-semibold">{item.category}</h3>
                      </div>
                      <div className={`font-semibold ${getScoreColor(item.score)}`}>{item.score}%</div>
                    </div>
                    <p className="text-gray-700 mb-2">{item.feedback}</p>
                    {item.suggestions.length > 0 && (
                      <div className="bg-gray-50 p-3 rounded-md">
                        <p className="font-medium text-sm mb-1">Suggestions:</p>
                        <ul className="list-disc pl-5 text-sm space-y-1">
                          {item.suggestions.map((suggestion, i) => (
                            <li key={i}>{suggestion}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button onClick={() => setAnalyzed(false)} variant="outline">
              Back to Analysis
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

