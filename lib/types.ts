export type AudienceType = "families" | "clinicians"
export type ConsentStatus = "unset" | "accepted" | "declined"

export interface ConsumerFormData {
  email: string
  relationship: string
  agreedToEmails: boolean
}

export interface ProfessionalFormData {
  name: string
  email: string
  organization: string
  role: string
  notes?: string
}

export interface ImageAsset {
  src: string
  alt: string
}

export interface FeatureItem {
  title: string
  description: string
}

export interface FAQItem {
  question: string
  answer: string
}
