export interface CourseItem {
  id: string;
  title: string;
  iconName: string;
  tagline: string;
  description: string;
  highlights: string[];
  category: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface RegistrationFormData {
  fullName: string;
  phone: string;
  email: string;
  location: string;
  ageRange: string;
  device: string;
  paymentRef: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface AcademySettings {
  selarLink: string;
  whatsappNumber: string;
  email: string;
  facebookUrl: string;
  instagramUrl: string;
}
