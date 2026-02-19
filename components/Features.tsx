import React from 'react';
import { Map, Clock, ShieldCheck, Star, Banknote, LineChart, Zap, FileBadge, Lock, Headphones } from 'lucide-react';
import Reveal from './Reveal';

const Features: React.FC = () => {
  return (
    <>
      {/* Stats Bar */}
      <div className="bg-white border-b border-slate-100 shadow-sm relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-100 text-center">
            <Reveal className="flex flex-col items-center gap-3 py-2 md:py-0">
              <Map className="text-primary-600" size={28} strokeWidth={1.5} />
              <div>
                <p className="text-lg font-bold text-brand-900">50 States</p>
                <p className="text-xs text-slate-500 uppercase tracking-wide font-medium">Nationwide Coverage</p>
              </div>
            </Reveal>
            <Reveal delay={75} className="flex flex-col items-center gap-3 py-2 md:py-0 pt-6 md:pt-0">
              <Clock className="text-primary-600" size={28} strokeWidth={1.5} />
              <div>
                <p className="text-lg font-bold text-brand-900">2 Minutes</p>
                <p className="text-xs text-slate-500 uppercase tracking-wide font-medium">Average Quote Time</p>
              </div>
            </Reveal>
            <Reveal delay={100} className="flex flex-col items-center gap-3 py-2 md:py-0 pt-6 md:pt-0">
              <ShieldCheck className="text-primary-600" size={28} strokeWidth={1.5} />
              <div>
                <p className="text-lg font-bold text-brand-900">100% Secure</p>
                <p className="text-xs text-slate-500 uppercase tracking-wide font-medium">Bank-Level Encryption</p>
              </div>
            </Reveal>
            <Reveal delay={150} className="flex flex-col items-center gap-3 py-2 md:py-0 pt-6 md:pt-0">
              <Star className="text-primary-600" size={28} strokeWidth={1.5} />
              <div>
                <p className="text-lg font-bold text-brand-900">4.9/5 Rating</p>
                <p className="text-xs text-slate-500 uppercase tracking-wide font-medium">Customer Satisfaction</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <section id="how-it-works" className="py-24 bg-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-900 tracking-tight mb-4">Insurance Simplified.</h2>
            <p className="text-lg text-slate-600 font-light">We've stripped away the complexity. Our smart platform connects you directly with savings in three simple steps.</p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-10 relative">
            {/* Connector Line */}
            <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-transparent via-primary-200 to-transparent -z-10"></div>

            {/* Step 1 */}
            <Reveal className="group">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="w-14 h-14 bg-brand-900 text-white rounded-xl flex items-center justify-center text-xl font-display font-bold mb-6 shadow-lg shadow-brand-900/20 group-hover:scale-110 transition-transform">1</div>
                <h3 className="text-xl font-bold text-brand-900 mb-3">Tell Us About You</h3>
                <p className="text-slate-500 leading-relaxed text-sm">Fill out one simple, secure form. We only ask for the details necessary to find you accurate discounts.</p>
              </div>
            </Reveal>

            {/* Step 2 */}
            <Reveal delay={100} className="group">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="w-14 h-14 bg-primary-600 text-white rounded-xl flex items-center justify-center text-xl font-display font-bold mb-6 shadow-lg shadow-primary-600/20 group-hover:scale-110 transition-transform">2</div>
                <h3 className="text-xl font-bold text-brand-900 mb-3">AI Matching Engine</h3>
                <p className="text-slate-500 leading-relaxed text-sm">Our algorithms instantly scan hundreds of carrier pricing models to identify your specific savings opportunities.</p>
              </div>
            </Reveal>

            {/* Step 3 */}
            <Reveal delay={200} className="group">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="w-14 h-14 bg-white border-2 border-slate-100 text-brand-900 rounded-xl flex items-center justify-center text-xl font-display font-bold mb-6 group-hover:border-action-500 group-hover:text-action-600 transition-colors">3</div>
                <h3 className="text-xl font-bold text-brand-900 mb-3">Compare & Save</h3>
                <p className="text-slate-500 leading-relaxed text-sm">View your top matches side-by-side. Choose the policy that fits your budget and lock in your rate online.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-primary-50 text-primary-600 font-semibold text-xs uppercase tracking-wider mb-4">Why QuickCover</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-900 tracking-tight">The Modern Way to Insure Your Car</h2>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
                icon={<Banknote size={24} />} 
                title="Completely Free Service" 
                desc="You never pay us a dime. Our service is funded by insurance carriers, ensuring you get the raw, unbiased rates."
                color="bg-action-50 text-action-600"
            />
             <FeatureCard 
                icon={<LineChart size={24} />} 
                title="Top-Tier Carrier Access" 
                desc="From national giants to regional specialists, we give you access to the entire market, not just one brand."
                color="bg-primary-50 text-primary-600"
                delay={75}
            />
             <FeatureCard 
                icon={<Zap size={24} />} 
                title="Instant Gratification" 
                desc="Skip the phone calls and waiting periods. See real options immediately after submitting your details."
                color="bg-accent-50 text-accent-600"
                delay={100}
            />
             <FeatureCard 
                icon={<FileBadge size={24} />} 
                title="Verified Partners Only" 
                desc="We rigorously vet every provider in our network to ensure they are licensed, rated 'A' or better, and reliable."
                color="bg-brand-50 text-brand-600"
                delay={150}
            />
             <FeatureCard 
                icon={<Lock size={24} />} 
                title="Privacy First" 
                desc="Your data is encrypted and only shared with the specific agents needed to generate your quote."
                color="bg-primary-50 text-primary-600"
                delay={200}
            />
             <FeatureCard 
                icon={<Headphones size={24} />} 
                title="Expert Support" 
                desc="Confused by coverage limits? Our partner agents are ready to explain the fine print before you buy."
                color="bg-action-50 text-action-600"
                delay={250}
            />
          </div>
        </div>
      </section>
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