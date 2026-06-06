export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  location?: string;
  rating?: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Joseph Chollampel",
    role: "Probate Attorney",
    location: "Oceanside, CA",
    quote: "I can confidently say I will never use a traditional estate liquidation company again. The items sold for significantly more than we anticipated — everything handled discreetly, in roughly half the time projected. The level of service exceeded every expectation. Truly first class in every way.",
    rating: 5,
  },
  {
    id: 2,
    quote: "Placeholder testimonial — real content coming soon.",
    name: "Client Name",
    role: "Real Estate Agent",
  },
  {
    id: 3,
    quote: "Placeholder testimonial — real content coming soon.",
    name: "Client Name",
    role: "Probate Attorney",
  },
];
