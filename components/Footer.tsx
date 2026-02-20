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
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">Get the support you deserve.</h2>
                        <p className="text-slate-300 text-lg mb-10 font-light max-w-2xl mx-auto">Our specialists are ready to guide you through your Allstate claim process.</p>
                        <a href="tel:18005550199" className="inline-flex items-center justify-center gap-3 bg-action-600 hover:bg-action-500 text-white text-lg font-bold py-4 px-10 rounded-xl shadow-xl shadow-action-600/20 transition-all hover:-translate-y-1">
                            Call For Assistance
                            <Phone size={20} />
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
                                <span className="font-display font-bold text-xl text-brand-900">Allstate <span className="text-primary-600">insurance</span></span>
                            </div>
                            <p className="text-sm text-slate-500 leading-relaxed mb-6">
                                Expert guidance for USA road accident claims. Professional support when you need it most.
                            </p>
                            <div className="flex gap-4 text-slate-400">
                                <a href="#" className="hover:text-primary-600 transition-colors p-2 hover:bg-slate-50 rounded-full"><Facebook size={18} /></a>
                                <a href="#" className="hover:text-primary-600 transition-colors p-2 hover:bg-slate-50 rounded-full"><Twitter size={18} /></a>
                                <a href="#" className="hover:text-primary-600 transition-colors p-2 hover:bg-slate-50 rounded-full"><Instagram size={18} /></a>
                            </div>
                        </div>

                        <div>
                            <h5 className="text-sm font-bold text-brand-900 mb-5 uppercase tracking-wider">Quick Links</h5>
                            <ul className="space-y-3 text-sm text-slate-500">
                                <li><a href="#" className="hover:text-primary-600 transition-colors">Home</a></li>
                                <li><a href="#" className="hover:text-primary-600 transition-colors">Supported Insurers</a></li>
                                <li><a href="#" className="hover:text-primary-600 transition-colors">Call Us: 1-800-555-0199</a></li>
                            </ul>
                        </div>

                        <div>
                            <h5 className="text-sm font-bold text-brand-900 mb-5 uppercase tracking-wider">Legal Information</h5>
                            <ul className="space-y-3 text-sm text-slate-500">
                                <li><a href="#" className="hover:text-primary-600 transition-colors">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-primary-600 transition-colors">Cookie Policy</a></li>
                                <li><a href="#" className="hover:text-primary-600 transition-colors">Terms & Conditions</a></li>
                                <li><a href="#" className="hover:text-primary-600 transition-colors">Complaints Procedure</a></li>
                            </ul>
                        </div>

                        <div>
                            <h5 className="text-sm font-bold text-brand-900 mb-5 uppercase tracking-wider">Contact</h5>
                            <ul className="space-y-4 text-sm text-slate-500">
                                <li className="flex items-center gap-3"><Phone size={16} className="text-primary-600" /> <span className="text-brand-900 font-medium">1-800-555-0199</span></li>
                                <li className="flex items-center gap-3"><Mail size={16} className="text-primary-600" /> support@allstate-claims.com</li>
                                <li className="flex items-center gap-3"><MapPin size={16} className="text-primary-600" /> 123 Insurance Street, New York, NY</li>
                            </ul>
                        </div>
                    </div>

                    {/* Legal Block */}
                    <div className="border-t border-slate-100 pt-10">
                        <div className="text-center text-[10px] text-slate-400 leading-relaxed mb-8">
                            <p className="mb-3 uppercase tracking-wider font-semibold text-slate-500">REGULATORY DISCLOSURE</p>
                            <p className="max-w-4xl mx-auto">This site operates within the advertising and lead-generation sector. We introduce customers to authorized USA accident-management providers who deliver repair and replacement services following non-fault accidents. We do not provide insurance, legal, or claims-management services directly. We are independent of all insurers and accident-management companies. You are under no obligation to use our partners.</p>
                        </div>

                        <div className="flex flex-col items-center justify-center text-xs text-slate-400 font-medium">
                            <p>© 2026 Accident Guide. All rights reserved.</p>
                            <p className="mt-1">Professional accident management services across the United States.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;