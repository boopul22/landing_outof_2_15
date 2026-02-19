export interface QuoteFormData {
  firstName: string;
  lastName: string;
  zipCode: string;
  vehicleYear: string;
  vehicleMake: string;
  currentInsurer: string;
  agreedToTerms: boolean;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface TestimonialData {
  id: number;
  text: string;
  author: string;
  location: string;
  rating: number;
  initials: string;
  color: string;
}