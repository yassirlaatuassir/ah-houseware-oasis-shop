
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface TestimonialCardProps {
  testimonial: {
    id: number;
    name: string;
    location: string;
    rating: number;
    comment: string;
    avatar: string;
  };
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <Card key={testimonial.id} className="bg-white shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
            <p className="text-sm text-gray-600">{testimonial.location}</p>
          </div>
        </div>
        <div className="flex items-center mb-3">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
          ))}
        </div>
        <p className="text-gray-700 italic">"{testimonial.comment}"</p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
