import type { ResumeData } from "@/types/resume"

interface TemplateProps {
  data: ResumeData
  fullPage?: boolean
}

export default function ProfessionalTemplate({ data, fullPage = false }: TemplateProps) {
  const { personalInfo, experience, education, skills } = data

  return (
    <div className={`p-8 ${fullPage ? "min-h-[1100px]" : ""} font-[system-ui]`}>
      {/* Header */}
      <div className="border-b border-gray-300 pb-4 mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        <p className="text-lg text-gray-600 mt-1">{personalInfo.title}</p>

        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-sm text-gray-600">
          {personalInfo.email && <div>{personalInfo.email}</div>}
          {personalInfo.phone && <div>{personalInfo.phone}</div>}
          {personalInfo.location && <div>{personalInfo.location}</div>}
        </div>
      </div>

      {/* Summary */}
      {personalInfo.summary && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Professional Summary</h2>
          <p className="text-gray-700">{personalInfo.summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Experience</h2>

          <div className="space-y-4">
            {experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between">
                  <h3 className="font-medium text-gray-800">{exp.title}</h3>
                  <div className="text-sm text-gray-600">
                    {exp.startDate} - {exp.endDate}
                  </div>
                </div>
                <div className="text-gray-700">
                  {exp.company}
                  {exp.location ? `, ${exp.location}` : ""}
                </div>
                <p className="mt-2 text-gray-700 whitespace-pre-line">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Education</h2>

          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between">
                  <h3 className="font-medium text-gray-800">{edu.degree}</h3>
                  <div className="text-sm text-gray-600">
                    {edu.startDate} - {edu.endDate}
                  </div>
                </div>
                <div className="text-gray-700">
                  {edu.institution}
                  {edu.location ? `, ${edu.location}` : ""}
                </div>
                <p className="mt-2 text-gray-700 whitespace-pre-line">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <div key={skill.id} className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

