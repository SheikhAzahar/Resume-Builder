import type { ResumeData } from "@/types/resume"

interface TemplateProps {
  data: ResumeData
  fullPage?: boolean
}

export default function ExecutiveTemplate({ data, fullPage = false }: TemplateProps) {
  const { personalInfo, experience, education, skills } = data

  return (
    <div className={`p-8 ${fullPage ? "min-h-[1100px]" : ""} font-[system-ui]`}>
      {/* Header */}
      <div className="border-b-4 border-gray-800 pb-4 mb-6">
        <h1 className="text-3xl font-bold text-gray-800 uppercase tracking-wide">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        <p className="text-lg text-gray-600 mt-1 uppercase tracking-wider">{personalInfo.title}</p>

        <div className="flex flex-wrap gap-x-6 gap-y-1 mt-3 text-sm text-gray-600">
          {personalInfo.email && (
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              {personalInfo.email}
            </div>
          )}
          {personalInfo.phone && (
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              {personalInfo.phone}
            </div>
          )}
          {personalInfo.location && (
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {personalInfo.location}
            </div>
          )}
        </div>
      </div>

      {/* Summary */}
      {personalInfo.summary && (
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wider mb-3">Executive Summary</h2>
          <p className="text-gray-700 border-l-4 border-gray-300 pl-4 py-1">{personalInfo.summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wider mb-4">Professional Experience</h2>

          <div className="space-y-6">
            {experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-center border-b border-gray-200 pb-1 mb-2">
                  <h3 className="font-semibold text-gray-800">{exp.company}</h3>
                  <div className="text-sm text-gray-600">
                    {exp.startDate} - {exp.endDate}
                  </div>
                </div>
                <div className="font-medium text-gray-700 mb-1">
                  {exp.title}
                  {exp.location ? ` | ${exp.location}` : ""}
                </div>
                <p className="text-gray-700 whitespace-pre-line">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wider mb-4">Education</h2>

          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-gray-800">{edu.degree}</h3>
                  <div className="text-sm text-gray-600">
                    {edu.startDate} - {edu.endDate}
                  </div>
                </div>
                <div className="text-gray-700">
                  {edu.institution}
                  {edu.location ? `, ${edu.location}` : ""}
                </div>
                <p className="mt-1 text-gray-700 whitespace-pre-line">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div>
          <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wider mb-3">Core Competencies</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {skills.map((skill) => (
              <div key={skill.id} className="flex items-center">
                <div className="w-2 h-2 bg-gray-800 rounded-full mr-2"></div>
                <span className="text-gray-700">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

