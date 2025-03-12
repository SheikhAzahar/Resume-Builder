import type { ResumeData } from "@/types/resume"

interface TemplateProps {
  data: ResumeData
  fullPage?: boolean
}

export default function TechnicalTemplate({ data, fullPage = false }: TemplateProps) {
  const { personalInfo, experience, education, skills } = data

  return (
    <div className={`${fullPage ? "min-h-[1100px]" : ""} font-[system-ui] grid grid-cols-12`}>
      {/* Sidebar */}
      <div className="bg-gray-800 text-white p-6 col-span-4">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">
            {personalInfo.firstName}
            <br />
            {personalInfo.lastName}
          </h1>
          <p className="text-gray-300 mt-2 text-sm border-t border-gray-600 pt-2">{personalInfo.title}</p>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-sm uppercase tracking-wider font-semibold mb-3 text-gray-400 border-b border-gray-700 pb-1">
              Contact
            </h2>
            <div className="space-y-2 text-sm">
              {personalInfo.email && (
                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2 mt-0.5"
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
                  <span className="break-all">{personalInfo.email}</span>
                </div>
              )}
              {personalInfo.phone && (
                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2 mt-0.5"
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
                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2 mt-0.5"
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

          {/* Skills */}
          {skills.length > 0 && (
            <div>
              <h2 className="text-sm uppercase tracking-wider font-semibold mb-3 text-gray-400 border-b border-gray-700 pb-1">
                Technical Skills
              </h2>
              <div className="space-y-2">
                {skills.map((skill) => (
                  <div key={skill.id} className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {education.length > 0 && (
            <div>
              <h2 className="text-sm uppercase tracking-wider font-semibold mb-3 text-gray-400 border-b border-gray-700 pb-1">
                Education
              </h2>
              <div className="space-y-3">
                {education.map((edu) => (
                  <div key={edu.id}>
                    <h3 className="font-medium">{edu.degree}</h3>
                    <div className="text-sm text-gray-400">{edu.institution}</div>
                    <div className="text-xs text-gray-500">
                      {edu.startDate} - {edu.endDate}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 col-span-8">
        {/* Summary */}
        {personalInfo.summary && (
          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
              <div className="w-6 h-1 bg-green-500 mr-2"></div>
              Professional Summary
            </h2>
            <p className="text-gray-700">{personalInfo.summary}</p>
          </div>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
              <div className="w-6 h-1 bg-green-500 mr-2"></div>
              Work Experience
            </h2>

            <div className="space-y-6">
              {experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-gray-800">{exp.title}</h3>
                    <div className="text-sm text-gray-600 bg-gray-100 px-2 py-0.5 rounded">
                      {exp.startDate} - {exp.endDate}
                    </div>
                  </div>
                  <div className="text-gray-600 font-medium">
                    {exp.company}
                    {exp.location ? ` | ${exp.location}` : ""}
                  </div>
                  <p className="mt-2 text-gray-700 whitespace-pre-line">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

