export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Placeholder testimonial — real content coming soon.",
    name: "Client Name",
    role: "Estate Executor, Las Vegas",
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
