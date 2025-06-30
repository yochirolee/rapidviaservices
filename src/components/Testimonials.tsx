'use client';
import Image from 'next/image';
import { testimonials } from '@/data/testimonials';
import { FaStar } from 'react-icons/fa';

interface TestimonialWithRating {
  name: string;
  role?: string;
  message: string;
  avatar: string;
  rating: number; // número entre 0 y 5, puede ser decimal
}

const renderStars = (rating: number) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {   
      stars.push(<FaStar key={rating} className="text-yellow-400" />);   
  }
  return stars;
};

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-6">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial: TestimonialWithRating, index) => (
            <div
              key={index}
              className="rounded-xl bg-gray-50 p-6 shadow-md transition hover:shadow-lg text-left"
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  {testimonial.role && (
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  )}
                  <div className="flex mt-1">{renderStars(testimonial.rating)}</div>
                </div>
              </div>
              <p className="text-gray-700 text-sm">“{testimonial.message}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}