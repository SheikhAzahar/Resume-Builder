import type { CoverLetterData } from "@/types/cover-letter"

interface TemplateProps {
  data: CoverLetterData
  fullPage?: boolean
}

export default function ProfessionalCoverLetterTemplate({ data, fullPage = false }: TemplateProps) {
  const { personalInfo, recipientInfo, letterContent } = data

  return (
    <div className={`p-8 ${fullPage ? "min-h-[1100px]" : ""} font-[system-ui]`}>
      {/* Sender Info */}
      <div className="mb-8">
        <div className="text-gray-800">
          {personalInfo.firstName} {personalInfo.lastName}
        </div>
        {personalInfo.email && <div className="text-gray-600">{personalInfo.email}</div>}
        {personalInfo.phone && <div className="text-gray-600">{personalInfo.phone}</div>}
        {personalInfo.location && <div className="text-gray-600">{personalInfo.location}</div>}
      </div>

      {/* Date */}
      <div className="mb-8">
        <div className="text-gray-800">{new Date().toLocaleDateString()}</div>
      </div>

      {/* Recipient Info */}
      <div className="mb-8">
        {recipientInfo.name && <div className="text-gray-800">{recipientInfo.name}</div>}
        {recipientInfo.title && <div className="text-gray-800">{recipientInfo.title}</div>}
        {recipientInfo.company && <div className="text-gray-800">{recipientInfo.company}</div>}
        {recipientInfo.address && <div className="text-gray-800">{recipientInfo.address}</div>}
      </div>

      {/* Salutation */}
      <div className="mb-6">
        <div className="text-gray-800">
          {recipientInfo.name ? `Dear ${recipientInfo.name},` : "Dear Hiring Manager,"}
        </div>
      </div>

      {/* Letter Content */}
      <div className="space-y-4 mb-8">
        {letterContent.opening && (
          <p className="text-gray-800 whitespace-pre-line">{letterContent.opening}</p>
        )}
        {letterContent.body && (
          <p className="text-gray-800 whitespace-pre-line">{letterContent.body}</p>
        )}
        {letterContent.closing && (
          <p className="text-gray-800 whitespace-pre-line">{letterContent.closing}</p>
        )}
      </div>

      {/* Signature */}
      <div>
        <div className="text-gray-800 mb-2">Sincerely,</div>
        <div className="text-gray-800">
          {personalInfo.firstName} {personalInfo.lastName}
        </div>
      </div>
    </div>
  )
}