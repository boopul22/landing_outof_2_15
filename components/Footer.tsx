import React from 'react';
import { Shield, Facebook, Twitter, Phone, Mail, MapPin, ArrowRight, Instagram, Linkedin } from 'lucide-react';
import Reveal from './Reveal';

const Footer: React.FC = () => {
  return (
    <>
        {/* Urgency CTA */}
        <section className="py-20 bg-brand-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary-600 opacity-10 mix-blend-overlay"></div>
            <div className="absolute -right-20 -top-20 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"></div>
            
            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <Reveal>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">Stop overpaying today.</h2>
                    <p className="text-slate-300 text-lg mb-10 font-light max-w-2xl mx-auto">Rates fluctuate daily. Lock in your savings before market prices adjust again.</p>
                    <a href="#get-quote" className="inline-flex items-center justify-center gap-3 bg-action-600 hover:bg-action-500 text-white text-lg font-bold py-4 px-10 rounded-xl shadow-xl shadow-action-600/20 transition-all hover:-translate-y-1">
                        Get My Free Quote
                        <ArrowRight size={20} />
                    </a>
                </Reveal>
            </div>
        </section>

        <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-brand-900 rounded-lg flex items-center justify-center text-white">
                                <Shield size={18} strokeWidth={2.5} />
                            </div>
                            <span className="font-display font-bold text-xl text-brand-900">QuickCover<span className="text-primary-600">USA</span></span>
                        </div>
                        <p className="text-sm text-slate-500 leading-relaxed mb-6">
                            Empowering American drivers with transparent, data-driven insurance comparisons since 2018.
                        </p>
                        <div className="flex gap-4 text-slate-400">
                            <a href="#" className="hover:text-primary-600 transition-colors p-2 hover:bg-slate-50 rounded-full"><Facebook size={18} /></a>
                            <a href="#" className="hover:text-primary-600 transition-colors p-2 hover:bg-slate-50 rounded-full"><Twitter size={18} /></a>
                            <a href="#" className="hover:text-primary-600 transition-colors p-2 hover:bg-slate-50 rounded-full"><Instagram size={18} /></a>
                        </div>
                    </div>

                    <div>
                        <h5 className="text-sm font-bold text-brand-900 mb-5 uppercase tracking-wider">Company</h5>
                        <ul className="space-y-3 text-sm text-slate-500">
                            <li><a href="#" className="hover:text-primary-600 transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-primary-600 transition-colors">Our Partners</a></li>
                            <li><a href="#" className="hover:text-primary-600 transition-colors">Press</a></li>
                            <li><a href="#" className="hover:text-primary-600 transition-colors">Careers</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="text-sm font-bold text-brand-900 mb-5 uppercase tracking-wider">Resources</h5>
                        <ul className="space-y-3 text-sm text-slate-500">
                            <li><a href="#" className="hover:text-primary-600 transition-colors">Insurance 101</a></li>
                            <li><a href="#" className="hover:text-primary-600 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-primary-600 transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-primary-600 transition-colors">Do Not Sell My Info</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="text-sm font-bold text-brand-900 mb-5 uppercase tracking-wider">Contact</h5>
                        <ul className="space-y-4 text-sm text-slate-500">
                            <li className="flex items-center gap-3"><Phone size={16} className="text-primary-600" /> <span className="text-brand-900 font-medium">1-800-555-0199</span></li>
                            <li className="flex items-center gap-3"><Mail size={16} className="text-primary-600" /> help@quickcoverusa.com</li>
                            <li className="flex items-center gap-3"><MapPin size={16} className="text-primary-600" /> 123 Market St, SF, CA</li>
                        </ul>
                    </div>
                </div>

                {/* Legal Block */}
                <div className="border-t border-slate-100 pt-10">
                    <div className="bg-slate-50 p-6 rounded-xl text-[11px] text-slate-400 leading-relaxed text-justify mb-8 border border-slate-100">
                        <p className="mb-3 font-bold text-slate-600">ADVERTISING DISCLOSURE</p>
                        <p className="mb-2">QuickCoverUSA.com is an independent marketplace and advertising service, not an insurance provider or agent. We connect consumers with insurance carriers and agencies. We do not issue policies, collect premiums, or bind coverage. All quotes and policies are provided by third-party insurers.</p>
                        <p><strong>Compensation Notice:</strong> This service is free for you. We may receive a marketing fee from the insurance providers when you submit a request or connect with them. This compensation may influence which providers are presented and their placement order.</p>
                        <p><strong>Savings Claim:</strong> "Average savings of $620" is based on a national survey of new customers who reported switching to a partner carrier in 2023. Individual savings vary based on driving history, vehicle, location, and coverage limits. Not all drivers will qualify for savings.</p>
                    </div>
                    
                    <div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 font-medium">
                        <p>© 2024 QuickCover Media LLC. All rights reserved.</p>
                        <div className="flex gap-6 mt-4 md:mt-0">
                            <a href="#" className="hover:text-brand-900">Privacy</a>
                            <a href="#" className="hover:text-brand-900">Terms</a>
                            <a href="#" className="hover:text-brand-900">Accessibility</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
  );
};

export default Footer;