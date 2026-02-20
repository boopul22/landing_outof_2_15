import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, Users, ArrowRight, Loader2, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import { QuoteFormData } from '../types';

const Hero: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState<QuoteFormData>({
        firstName: '',
        lastName: '',
        zipCode: '',
        vehicleYear: '',
        vehicleMake: '',
        currentInsurer: '',
        agreedToTerms: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (e.target.type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData(prev => ({ ...prev, [name]: checked }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.agreedToTerms) {
            alert("Please agree to the terms to proceed.");
            return;
        }

        setLoading(true);
        // Simulate API call processing
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 2500);
    };

    if (submitted) {
        return (
            <section className="relative bg-brand-950 pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden min-h-[700px] flex items-center justify-center">
                <div className="absolute inset-0 bg-brand-900 z-0">
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-primary-600/20 rounded-full blur-[100px]"></div>
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-accent-500/10 rounded-full blur-[80px]"></div>
                </div>

                <div className="relative z-10 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-8 max-w-lg w-full text-center mx-4 animate-fade-in-up border border-white/20">
                    <div className="w-20 h-20 bg-action-50 text-action-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                        <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-3xl font-display font-bold text-brand-900 mb-2">Analysis Complete!</h3>
                    <p className="text-slate-600 mb-8 leading-relaxed">
                        Great news, <span className="font-semibold text-brand-900">{formData.firstName}</span>. We've identified potential savings for your
                        <span className="font-semibold text-brand-900"> {formData.vehicleYear} {formData.vehicleMake}</span> in <span className="font-semibold text-brand-900">{formData.zipCode}</span>.
                    </p>

                    <div className="bg-brand-50 p-6 rounded-xl border border-brand-100 mb-8 transform hover:scale-105 transition-transform duration-300">
                        <p className="text-xs font-semibold text-brand-500 uppercase tracking-wider mb-1">Estimated Annual Savings</p>
                        <p className="text-4xl font-display font-extrabold text-action-600 tracking-tight">$620 - $840</p>
                    </div>

                    <div className="space-y-3 mb-8">
                        <div className="flex items-center gap-3 text-sm text-slate-600 bg-white p-3 rounded border border-slate-100">
                            <Loader2 size={16} className="animate-spin text-primary-600" />
                            Matching with 3 local agents...
                        </div>
                    </div>

                    <button
                        onClick={() => setSubmitted(false)}
                        className="text-primary-600 hover:text-primary-700 font-semibold text-sm hover:underline"
                    >
                        Start a new quote
                    </button>
                </div>
            </section>
        )
    }

    return (
        <section className="relative bg-brand-950 pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden min-h-[850px]">
            {/* Modern Gradient Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] bg-primary-600/20 rounded-full blur-[120px] mix-blend-screen opacity-60 animate-pulse-slow"></div>
                <div className="absolute -bottom-[20%] -left-[10%] w-[60vw] h-[60vw] bg-accent-500/10 rounded-full blur-[100px] mix-blend-screen opacity-50"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                    {/* Hero Content */}
                    <div className="lg:col-span-7 text-center lg:text-left">
                        <Reveal>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm text-accent-300 text-xs font-semibold mb-8 hover:bg-white/15 transition-colors cursor-default">
                                <span className="flex h-4 w-4 relative items-center justify-center text-sm">
                                    🇺🇸
                                </span>
                                USA's Trusted Accident Guide
                            </div>

                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white tracking-tight leading-[1.05] mb-8 drop-shadow-sm">
                                Expert Accident Claims <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 via-accent-300 to-primary-300 bg-[length:200%_auto] animate-[gradient_4s_linear_infinite]">
                                    Support & Guidance
                                </span>
                            </h1>

                            <p className="text-xl text-brand-100 mb-10 font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed opacity-90">
                                Professional assistance for <strong className="text-white">Allstate insurance</strong> policyholders. Get the support and clarity you need immediately after a road accident.
                            </p>

                            <div className="hidden lg:flex flex-wrap gap-x-8 gap-y-4">
                                <div className="flex items-center gap-3 text-brand-200 text-sm font-medium w-full">
                                    <div className="p-1 rounded-full bg-action-500/20 text-action-400"><CheckCircle2 size={16} /></div>
                                    <span>Independent claims management advice</span>
                                </div>
                                <div className="flex items-center gap-3 text-brand-200 text-sm font-medium w-full">
                                    <div className="p-1 rounded-full bg-action-500/20 text-action-400"><CheckCircle2 size={16} /></div>
                                    <span>Replacement vehicle assistance</span>
                                </div>
                                <div className="flex items-center gap-3 text-brand-200 text-sm font-medium w-full">
                                    <div className="p-1 rounded-full bg-action-500/20 text-action-400"><CheckCircle2 size={16} /></div>
                                    <span>Vehicle repair coordination</span>
                                </div>
                                <div className="flex items-center gap-3 text-brand-200 text-sm font-medium w-full">
                                    <div className="p-1 rounded-full bg-action-500/20 text-action-400"><CheckCircle2 size={16} /></div>
                                    <span>Expert personal injury guidance</span>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    {/* Lead Form - Glassmorphism Card */}
                    <div className="lg:col-span-5 relative">
                        <Reveal delay={100}>
                            <div id="get-quote" className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-1 border border-white/20 relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-accent-400 to-primary-500"></div>

                                <div className="bg-white rounded-xl p-6 md:p-8">
                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                            <h3 className="text-2xl font-display font-bold text-brand-900">Get Support Now</h3>
                                            <p className="text-slate-500 text-sm mt-1">Free expert assistance, 24/7.</p>
                                        </div>
                                        <Lock className="text-primary-500 opacity-20" size={32} />
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">First Name</label>
                                                <input
                                                    required
                                                    name="firstName"
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                    type="text"
                                                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-brand-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400"
                                                    placeholder="Jane"
                                                />
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Last Name</label>
                                                <input
                                                    required
                                                    name="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleChange}
                                                    type="text"
                                                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-brand-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400"
                                                    placeholder="Doe"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">ZIP Code</label>
                                            <input
                                                required
                                                name="zipCode"
                                                value={formData.zipCode}
                                                onChange={handleChange}
                                                type="tel"
                                                pattern="[0-9]{5}"
                                                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-brand-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400"
                                                placeholder="e.g. 90210"
                                            />
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Year</label>
                                                <div className="relative">
                                                    <select
                                                        required
                                                        name="vehicleYear"
                                                        value={formData.vehicleYear}
                                                        onChange={handleChange}
                                                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-brand-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all cursor-pointer appearance-none"
                                                    >
                                                        <option value="" disabled>Select</option>
                                                        {[...Array(15)].map((_, i) => (
                                                            <option key={i} value={2025 - i}>{2025 - i}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Make</label>
                                                <div className="relative">
                                                    <select
                                                        required
                                                        name="vehicleMake"
                                                        value={formData.vehicleMake}
                                                        onChange={handleChange}
                                                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-brand-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all cursor-pointer appearance-none"
                                                    >
                                                        <option value="" disabled>Select</option>
                                                        <option value="Toyota">Toyota</option>
                                                        <option value="Ford">Ford</option>
                                                        <option value="Honda">Honda</option>
                                                        <option value="Chevrolet">Chevrolet</option>
                                                        <option value="Tesla">Tesla</option>
                                                        <option value="BMW">BMW</option>
                                                        <option value="Mercedes">Mercedes</option>
                                                        <option value="Audi">Audi</option>
                                                        <option value="Other">Other</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Current Provider</label>
                                            <div className="relative">
                                                <select
                                                    required
                                                    name="currentInsurer"
                                                    value={formData.currentInsurer}
                                                    onChange={handleChange}
                                                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-brand-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all cursor-pointer appearance-none"
                                                >
                                                    <option value="" disabled>Who insures you now?</option>
                                                    <option value="Geico">Geico</option>
                                                    <option value="Progressive">Progressive</option>
                                                    <option value="State Farm">State Farm</option>
                                                    <option value="Allstate">Allstate</option>
                                                    <option value="USAA">USAA</option>
                                                    <option value="None">Currently Uninsured</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3 pt-2">
                                            <label className="relative flex items-center cursor-pointer pt-0.5">
                                                <input
                                                    required
                                                    type="checkbox"
                                                    name="agreedToTerms"
                                                    checked={formData.agreedToTerms}
                                                    onChange={handleChange}
                                                    className="sr-only peer"
                                                />
                                                <div className="w-5 h-5 border-2 border-slate-300 rounded bg-white flex items-center justify-center transition-all peer-focus:ring-2 peer-focus:ring-primary-500/40 peer-checked:bg-action-600 peer-checked:border-action-600">
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100" />
                                                </div>
                                            </label>
                                            <p className="text-[10px] text-slate-500 leading-relaxed">
                                                By clicking "Request Assistance", I authorize Allstate insurance and its <Link to="/privacy-policy" className="underline decoration-slate-300 hover:text-primary-600">partners</Link> to contact me via automated technology. I agree to the <Link to="/privacy-policy" className="underline decoration-slate-300 hover:text-primary-600">Privacy Policy</Link>.
                                            </p>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="w-full bg-action-600 hover:bg-action-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-action-600/30 transition-all transform hover:-translate-y-0.5 active:scale-[0.98] flex items-center justify-center gap-2.5 disabled:opacity-70 disabled:cursor-not-allowed text-base"
                                        >
                                            {loading ? (
                                                <Loader2 className="animate-spin" size={24} />
                                            ) : (
                                                <>
                                                    Request Assistance
                                                    <ArrowRight size={20} strokeWidth={2.5} />
                                                </>
                                            )}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;