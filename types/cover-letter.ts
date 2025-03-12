export interface CoverLetterData {
  personalInfo: {
    firstName: string
    lastName: string
    title?: string
    email?: string
    phone?: string
    location?: string
  }
  recipientInfo: {
    name?: string
    title?: string
    company?: string
    address?: string
  }
  letterContent: {
    opening: string
    body: string
    closing: string
  }
}

export type CoverLetterTemplate = "professional" | "modern"