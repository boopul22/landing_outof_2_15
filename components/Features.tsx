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
                <p className="text-lg font-bold text-brand-900 mb-1">Expert Guidance</p>
                <p className="text-sm text-slate-500 font-medium">Navigate the complexities of insurance claims with our professional team. We provide step-by-step support tailored to your situation.</p>
              </div>
            </Reveal>
            <Reveal delay={75} className="flex flex-col items-center gap-3 py-2 md:py-0 pt-6 md:pt-0">
              <Clock className="text-primary-600" size={32} strokeWidth={1.5} />
              <div>
                <p className="text-lg font-bold text-brand-900 mb-1">24/7 Support</p>
                <p className="text-sm text-slate-500 font-medium">Accidents don't wait for business hours. Our helpline is staffed around the clock to ensure you're never left without help.</p>
              </div>
            </Reveal>
            <Reveal delay={100} className="flex flex-col items-center gap-3 py-2 md:py-0 pt-6 md:pt-0">
              <FileBadge className="text-primary-600" size={32} strokeWidth={1.5} />
              <div>
                <p className="text-lg font-bold text-brand-900 mb-1">All USA Insurers</p>
                <p className="text-sm text-slate-500 font-medium">We provide expert independent guidance compatible with all major USA insurance providers and comparison sites.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <section id="how-it-works" className="py-24 bg-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-900 tracking-tight">How We Help You</h2>
            <div className="w-16 h-1 bg-primary-600 mx-auto mt-4 rounded-full"></div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Step 1 */}
            <Reveal className="group">
              <div className="bg-brand-950 p-8 rounded-2xl shadow-xl h-full text-center flex flex-col items-center">
                <div className="text-primary-400 mb-6">
                  <Headphones size={48} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Immediate Advice</h3>
                <p className="text-slate-300 leading-relaxed text-sm">Call our team from the roadside for immediate instructions on what information to gather and how to ensure your safety.</p>
              </div>
            </Reveal>

            {/* Step 2 */}
            <Reveal delay={100} className="group">
              <div className="bg-brand-950 p-8 rounded-2xl shadow-xl h-full text-center flex flex-col items-center">
                <div className="text-primary-400 mb-6">
                  <CheckCircle2 size={48} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Claim Strategy</h3>
                <p className="text-slate-300 leading-relaxed text-sm">We help you understand your rights and the best path forward to ensure your vehicle is repaired correctly and your costs recovered.</p>
              </div>
            </Reveal>

            {/* Step 3 */}
            <Reveal delay={200} className="group">
              <div className="bg-brand-950 p-8 rounded-2xl shadow-xl h-full text-center flex flex-col items-center">
                <div className="text-primary-400 mb-6">
                  <ShieldCheck size={48} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Total Support</h3>
                <p className="text-slate-300 leading-relaxed text-sm">From credit hire vehicles to personal injury assistance, we manage the entire process so you can focus on getting back to normal.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Value Proposition Removed to match target site */}
    </>
  );
};

const FeatureCard = ({ icon, title, desc, color, delay = 0 }: { icon: React.ReactNode, title: string, desc: string, color: string, delay?: number }) => (
  <Reveal delay={delay} className="flex gap-5 p-6 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all duration-300">
    <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${color}`}>
      {icon}
    </div>
    <div>
      <h4 className="text-lg font-bold text-brand-900 mb-2">{title}</h4>
      <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
    </div>
  </Reveal>
);

export default Features;