import React from 'react';
import { Map, Clock, ShieldCheck, Star, Banknote, LineChart, Zap, FileBadge, Lock, Headphones, CheckCircle2 } from 'lucide-react';
import Reveal from './Reveal';

const Features: React.FC = () => {
  return (
    <>
      {/* Core Features */}
      <div className="bg-white border-b border-slate-100 shadow-sm relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-100 text-center">
            <Reveal className="flex flex-col items-center gap-3 py-2 md:py-0">
              <ShieldCheck className="text-primary-600" size={32} strokeWidth={1.5} />
              <div>
                <p className="text-lg font-bold text-brand-900 mb-1">Dedicated Claim Specialist</p>
                <p className="text-sm text-slate-500 font-medium">Every case is assigned a knowledgeable advisor who walks you through the entire claims journey — from first call to final resolution.</p>
              </div>
            </Reveal>
            <Reveal delay={75} className="flex flex-col items-center gap-3 py-2 md:py-0 pt-6 md:pt-0">
              <Clock className="text-primary-600" size={32} strokeWidth={1.5} />
              <div>
                <p className="text-lg font-bold text-brand-900 mb-1">Around-the-Clock Helpline</p>
                <p className="text-sm text-slate-500 font-medium">Collisions happen at all hours. Our support line is open day and night, weekends and holidays, so you always have someone to turn to.</p>
              </div>
            </Reveal>
            <Reveal delay={100} className="flex flex-col items-center gap-3 py-2 md:py-0 pt-6 md:pt-0">
              <FileBadge className="text-primary-600" size={32} strokeWidth={1.5} />
              <div>
                <p className="text-lg font-bold text-brand-900 mb-1">Works with All Insurers</p>
                <p className="text-sm text-slate-500 font-medium">Whether you're covered by GEICO, State Farm, Progressive, or any other US carrier, our guidance is fully compatible with your policy.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <section id="how-it-works" className="py-24 bg-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-900 tracking-tight">How Our Team Supports You</h2>
            <div className="w-16 h-1 bg-primary-600 mx-auto mt-4 rounded-full"></div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Step 1 */}
            <Reveal className="group">
              <div className="bg-brand-950 p-8 rounded-2xl shadow-xl h-full text-center flex flex-col items-center">
                <div className="text-primary-400 mb-6">
                  <Headphones size={48} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Immediate Roadside Guidance</h3>
                <p className="text-slate-300 leading-relaxed text-sm">Call us from the scene for step-by-step instructions: what evidence to collect, how to exchange information safely, and when to involve law enforcement.</p>
              </div>
            </Reveal>

            {/* Step 2 */}
            <Reveal delay={100} className="group">
              <div className="bg-brand-950 p-8 rounded-2xl shadow-xl h-full text-center flex flex-col items-center">
                <div className="text-primary-400 mb-6">
                  <CheckCircle2 size={48} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Strategic Claim Filing</h3>
                <p className="text-slate-300 leading-relaxed text-sm">We help you understand your coverage, navigate the paperwork, and build the strongest possible case — so your claim moves forward without unnecessary delays.</p>
              </div>
            </Reveal>

            {/* Step 3 */}
            <Reveal delay={200} className="group">
              <div className="bg-brand-950 p-8 rounded-2xl shadow-xl h-full text-center flex flex-col items-center">
                <div className="text-primary-400 mb-6">
                  <ShieldCheck size={48} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Full Recovery Assistance</h3>
                <p className="text-slate-300 leading-relaxed text-sm">From securing a rental car to coordinating body shop repairs to connecting you with injury specialists, we handle the logistics so you can focus on getting back on your feet.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;