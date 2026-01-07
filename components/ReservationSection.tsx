
import React from 'react';
import { useLocation } from 'react-router-dom';
import ContactForm from './ContactForm.tsx';

const ReservationSection: React.FC = () => {
  const location = useLocation();

  // Do not show the reservation section on the Contact page to avoid redundancy
  if (location.pathname === '/contact') {
    return null;
  }

  return (
    <section className="bg-[#FAF9F6] py-32 px-6 border-t border-neutral-100">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-[#c5a059] uppercase tracking-[0.4em] text-[10px] font-bold block mb-4">
            Reservations
          </span>
          <h2 className="text-5xl md:text-6xl font-serif mb-6 text-neutral-900">
            Let's Create Your Story
          </h2>
          <p className="text-neutral-500 max-w-lg mx-auto italic font-light">
            Tell us more about your special day and let us craft a visual legacy that echoes through generations.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default ReservationSection;
