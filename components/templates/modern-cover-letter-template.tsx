import type { CoverLetterData } from "@/types/cover-letter"

interface TemplateProps {
  data: CoverLetterData
  fullPage?: boolean
}

export default function ModernCoverLetterTemplate({ data, fullPage = false }: TemplateProps) {
  const { personalInfo, recipientInfo, letterContent } = data

  return (
    <div className={`${fullPage ? "min-h-[1100px]" : ""} font-[system-ui]`}>
      {/* Header */}
      <div className="bg-blue-600 text-white p-8">
        <h1 className="text-3xl font-bold">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        {personalInfo.title && <p className="text-xl mt-1 text-blue-100">{personalInfo.title}</p>}

        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-4 text-sm">
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

      <div className="p-8">
        {/* Date */}
        <div className="text-gray-600 mb-8">{new Date().toLocaleDateString()}</div>

        {/* Recipient Info */}
        <div className="mb-8">
          {recipientInfo.name && <div className="text-gray-800 font-medium">{recipientInfo.name}</div>}
          {recipientInfo.title && <div className="text-gray-700">{recipientInfo.title}</div>}
          {recipientInfo.company && <div className="text-gray-700">{recipientInfo.company}</div>}
          {recipientInfo.address && <div className="text-gray-700">{recipientInfo.address}</div>}
        </div>

        {/* Salutation */}
        <div className="text-gray-800 mb-6">
          {recipientInfo.name ? `Dear ${recipientInfo.name},` : "Dear Hiring Manager,"}
        </div>

        {/* Letter Content */}
        <div className="space-y-4 mb-8 text-gray-700">
          {letterContent.opening && (
            <p className="whitespace-pre-line">{letterContent.opening}</p>
          )}
          {letterContent.body && (
            <p className="whitespace-pre-line">{letterContent.body}</p>
          )}
          {letterContent.closing && (
            <p className="whitespace-pre-line">{letterContent.closing}</p>
          )}
        </div>

        {/* Signature */}
        <div className="text-gray-800">
          <div className="mb-2">Sincerely,</div>
          <div className="font-medium">
            {personalInfo.firstName} {personalInfo.lastName}
          </div>
        </div>
      </div>
    </div>
  )
}