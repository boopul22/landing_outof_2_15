import React from 'react';
import { Star, Quote } from 'lucide-react';
import Reveal from './Reveal';
import { TestimonialData } from '../types';

const testimonials: TestimonialData[] = [
  {
    id: 1,
    text: "I was paying nearly $200 a month with my old carrier. QuickCover matched me with a plan that was $85 cheaper for the exact same limits. It was shockingly easy.",
    author: "Michael Stevens",
    location: "Austin, TX",
    rating: 5,
    initials: "MS",
    color: "bg-brand-900 text-white"
  },
  {
    id: 2,
    text: "I hate dealing with insurance sales calls. This site gave me actual numbers on the screen so I could choose who to talk to. Efficient and transparent.",
    author: "Jennifer Lopez",
    location: "Columbus, OH",
    rating: 5,
    initials: "JL",
    color: "bg-primary-600 text-white"
  },
  {
    id: 3,
    text: "My renewal rate jumped 30% for no reason. I hopped on here, spent 3 minutes filling out the form, and found a better rate immediately. Switched the next day.",
    author: "David Ross",
    location: "Miami, FL",
    rating: 5,
    initials: "DR",
    color: "bg-accent-500 text-white"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-brand-50 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-900 mb-4">Real Drivers. Real Savings.</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Join thousands of American drivers who have stopped overpaying for car insurance.</p>
        </Reveal>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <Reveal key={t.id} delay={idx * 150} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-6">
                <div className="flex text-amber-400 gap-0.5">
                    {[...Array(5)].map((_, i) => (
                    <Star 
                        key={i} 
                        size={18} 
                        fill="currentColor" 
                        className="text-amber-400"
                    />
                    ))}
                </div>
                <Quote size={24} className="text-primary-100" />
              </div>
              
              <p className="text-slate-600 text-sm leading-7 mb-8 flex-grow">"{t.text}"</p>
              
              <div className="flex items-center gap-4 mt-auto border-t border-slate-50 pt-6">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm shadow-md ${t.color}`}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-brand-900">{t.author}</p>
                  <p className="text-xs text-slate-400 font-medium">{t.location}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;