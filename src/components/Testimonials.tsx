'use client';
import Image from 'next/image';
import { testimonials } from '@/data/testimonials';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

interface TestimonialWithRating {
  name: string;
  role?: string;
  message: string;
  avatar: string;
  rating: number; // 0..5, puede decimal
}

const renderStars = (rating: number) => {
  const stars = [];
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.5;
  const empty = 5 - full - (hasHalf ? 1 : 0);

  for (let i = 0; i < full; i++) {
    stars.push(<FaStar key={`star-full-${i}`} className="h-4 w-4 md:h-5 md:w-5 text-yellow-400" />);
  }
  if (hasHalf) {
    stars.push(<FaStarHalfAlt key="star-half" className="h-4 w-4 md:h-5 md:w-5 text-yellow-400" />);
  }
  for (let i = 0; i < empty; i++) {
    stars.push(<FaRegStar key={`star-empty-${i}`} className="h-4 w-4 md:h-5 md:w-5 text-yellow-400" />);
  }
  return stars;
};

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-6">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t: TestimonialWithRating, index) => (
            <div
              key={`${t.name}-${index}`}
              className="rounded-xl bg-gray-50 p-6 shadow-md transition hover:shadow-lg text-left"
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-base md:text-lg font-semibold text-gray-900 leading-snug">
                    {t.name}
                  </p>
                  {t.role && (
                    <p className="text-sm text-body-color leading-normal">
                      {t.role}
                    </p>
                  )}
                  <div className="flex mt-1" aria-label={`Calificación: ${t.rating} de 5`}>
                    {renderStars(t.rating)}
                  </div>
                </div>
              </div>
              <p className="text-base leading-relaxed text-body-color">
                {t.message}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
