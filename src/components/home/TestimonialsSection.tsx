
import TestimonialCard from './TestimonialCard';

interface TestimonialsSectionProps {
  testimonials: Array<{
    id: number;
    name: string;
    location: string;
    rating: number;
    comment: string;
    avatar: string;
  }>;
}

const TestimonialsSection = ({ testimonials }: TestimonialsSectionProps) => {
  return (
    <section id="testimoni" className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Testimoni Pelanggan</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kepuasan pelanggan adalah prioritas utama kami
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
