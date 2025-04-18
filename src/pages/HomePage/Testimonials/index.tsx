'use client';

import { useState } from 'react';

import { Card, CardVariant, SectionTitle } from '@/components';
import { CarouselControls } from '@/pages/HomePage/Testimonials/CarouselControls';
import { CarouselIndicators } from '@/pages/HomePage/Testimonials/CarouselIndicators';
import { TestimonialCard } from '@/pages/HomePage/Testimonials/TestimonialCard';

const testimonialsList = [
  {
    id: 1,
    content:
      'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
    author: 'John Smith',
    position: 'Marketing Director at XYZ Corp',
  },
  {
    id: 2,
    content:
      'Positivus has been a game-changer for our digital marketing strategy. Their expertise in SEO and social media marketing has helped us reach new audiences and increase our brand awareness. The team is knowledgeable, friendly, and always willing to go the extra mile to ensure our success.',
    author: 'Jane Doe',
    position: 'Marketing Director at XYZ Corp',
  },
  {
    id: 3,
    content:
      'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
    author: 'Michael Johnson',
    position: 'Design Lead at ABC Inc',
  },
];

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsList.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonialsList.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <SectionTitle
      title="Testimonials"
      description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
    >
      <main className="bg-dark rounded-5xl p-6 w-full">
        {testimonialsList.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`w-full transition-all ${
              index === activeIndex
                ? 'translate-x-0'
                : 'translate-x-full hidden'
            }`}
          >
            <TestimonialCard
              content={testimonial.content}
              author={testimonial.author}
              position={testimonial.position}
            />
          </div>
        ))}

        <CarouselControls onPrev={handlePrev} onNext={handleNext}>
          <CarouselIndicators
            count={testimonialsList.length}
            activeIndex={activeIndex}
          />
        </CarouselControls>
      </main>
    </SectionTitle>
  );
};
