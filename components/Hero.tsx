import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, Users, ArrowRight, Loader2, Lock, Phone, AlertTriangle, Camera, FileText, Car, Clock } from 'lucide-react';
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
                    <h3 className="text-3xl font-display font-bold text-brand-900 mb-2">Request Received!</h3>
                    <p className="text-slate-600 mb-8 leading-relaxed">
                        Thank you, <span className="font-semibold text-brand-900">{formData.firstName}</span>. A claims specialist will review your
                        <span className="font-semibold text-brand-900"> {formData.vehicleYear} {formData.vehicleMake}</span> case and connect with you shortly.
                    </p>

                    <div className="bg-brand-50 p-6 rounded-xl border border-brand-100 mb-8 transform hover:scale-105 transition-transform duration-300">
                        <p className="text-xs font-semibold text-brand-500 uppercase tracking-wider mb-1">What Happens Next</p>
                        <p className="text-lg font-display font-bold text-brand-900">A dedicated advisor will call you within minutes</p>
                    </div>

                    <div className="space-y-3 mb-8">
                        <div className="flex items-center gap-3 text-sm text-slate-600 bg-white p-3 rounded border border-slate-100">
                            <Loader2 size={16} className="animate-spin text-primary-600" />
                            Connecting you with a local claims specialist...
                        </div>
                    </div>

                    <button
                        onClick={() => setSubmitted(false)}
                        className="text-primary-600 hover:text-primary-700 font-semibold text-sm hover:underline"
                    >
                        Submit another request
                    </button>
                </div>
            </section>
        )
    }

    return (
        <>
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
                                    USA's Trusted Accident Claims Guide
                                </div>

                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white tracking-tight leading-[1.05] mb-8 drop-shadow-sm">
                                    Your Roadside-to-Resolution <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 via-accent-300 to-primary-300 bg-[length:200%_auto] animate-[gradient_4s_linear_infinite]">
                                        Claims Companion
                                    </span>
                                </h1>

                                <p className="text-xl text-brand-100 mb-10 font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed opacity-90">
                                    Professional assistance for <strong className="text-white">Allstate insurance</strong> policyholders. Get the support and clarity you need immediately after a road accident.
                                </p>

                                <div className="hidden lg:flex flex-wrap gap-x-8 gap-y-4">
                                    <div className="flex items-center gap-3 text-brand-200 text-sm font-medium w-full">
                                        <div className="p-1 rounded-full bg-action-500/20 text-action-400"><CheckCircle2 size={16} /></div>
                                        <span>Independent claims advice & strategy</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-brand-200 text-sm font-medium w-full">
                                        <div className="p-1 rounded-full bg-action-500/20 text-action-400"><CheckCircle2 size={16} /></div>
                                        <span>Rental car & replacement vehicle coordination</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-brand-200 text-sm font-medium w-full">
                                        <div className="p-1 rounded-full bg-action-500/20 text-action-400"><CheckCircle2 size={16} /></div>
                                        <span>Collision repair management</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-brand-200 text-sm font-medium w-full">
                                        <div className="p-1 rounded-full bg-action-500/20 text-action-400"><CheckCircle2 size={16} /></div>
                                        <span>Personal injury claim assistance</span>
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
                                                <h3 className="text-2xl font-display font-bold text-brand-900">Free Expert Assistance</h3>
                                                <p className="text-slate-500 text-sm mt-1">No cost. No obligation. Available 24/7.</p>
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

            {/* Claims Process Guide Section */}
            <section className="py-20 bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Reveal className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-900 tracking-tight">Post-Accident Claims Roadmap</h2>
                        <p className="text-slate-500 mt-4 text-lg">Follow these critical steps after any collision to safeguard your rights and maximize your claim recovery.</p>
                        <div className="w-16 h-1 bg-primary-600 mx-auto mt-6 rounded-full"></div>
                    </Reveal>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Reveal>
                            <div className="bg-brand-50 p-8 rounded-2xl border border-slate-100 h-full hover:shadow-lg transition-shadow">
                                <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-5">
                                    <AlertTriangle size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-brand-900 mb-3">Secure the Scene Immediately</h3>
                                <ul className="space-y-2 text-sm text-slate-600 leading-relaxed">
                                    <li className="flex gap-2"><span className="text-primary-500 mt-0.5">•</span>Pull over to a safe spot and activate your hazard flashers.</li>
                                    <li className="flex gap-2"><span className="text-primary-500 mt-0.5">•</span>Assess all parties for injuries — dial 911 for any medical emergencies.</li>
                                    <li className="flex gap-2"><span className="text-primary-500 mt-0.5">•</span>Never admit fault or apologize at the scene.</li>
                                    <li className="flex gap-2"><span className="text-primary-500 mt-0.5">•</span>Move vehicles only if they're blocking traffic and it's safe to do so.</li>
                                </ul>
                            </div>
                        </Reveal>

                        <Reveal delay={75}>
                            <div className="bg-brand-50 p-8 rounded-2xl border border-slate-100 h-full hover:shadow-lg transition-shadow">
                                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                                    <Camera size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-brand-900 mb-3">Document Everything</h3>
                                <ul className="space-y-2 text-sm text-slate-600 leading-relaxed">
                                    <li className="flex gap-2"><span className="text-primary-500 mt-0.5">•</span>Photograph all vehicle damage, license plates, and the intersection.</li>
                                    <li className="flex gap-2"><span className="text-primary-500 mt-0.5">•</span>Exchange driver's license, insurance, and registration info.</li>
                                    <li className="flex gap-2"><span className="text-primary-500 mt-0.5">•</span>Get names and phone numbers of any witnesses.</li>
                                    <li className="flex gap-2"><span className="text-primary-500 mt-0.5">•</span>Note weather, road conditions, and traffic signals.</li>
                                </ul>
                            </div>
                        </Reveal>

                        <Reveal delay={150}>
                            <div className="bg-brand-50 p-8 rounded-2xl border border-slate-100 h-full hover:shadow-lg transition-shadow">
                                <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center mb-5">
                                    <FileText size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-brand-900 mb-3">File Your Claim Strategically</h3>
                                <ul className="space-y-2 text-sm text-slate-600 leading-relaxed">
                                    <li className="flex gap-2"><span className="text-primary-500 mt-0.5">•</span>Call us at 1-800-555-0199 before speaking to the other driver's insurer.</li>
                                    <li className="flex gap-2"><span className="text-primary-500 mt-0.5">•</span>Have your policy number, VIN, and registration handy.</li>
                                    <li className="flex gap-2"><span className="text-primary-500 mt-0.5">•</span>Provide a factual, detailed account — avoid speculation.</li>
                                    <li className="flex gap-2"><span className="text-primary-500 mt-0.5">•</span>Submit all photos, police reports, and witness info promptly.</li>
                                </ul>
                            </div>
                        </Reveal>

                        <Reveal delay={225}>
                            <div className="bg-brand-50 p-8 rounded-2xl border border-slate-100 h-full hover:shadow-lg transition-shadow">
                                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-5">
                                    <Car size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-brand-900 mb-3">Vehicle Repair & Rental</h3>
                                <ul className="space-y-2 text-sm text-slate-600 leading-relaxed">
                                    <li className="flex gap-2"><span className="text-primary-500 mt-0.5">•</span>An independent adjuster will evaluate the damage and repair costs.</li>
                                    <li className="flex gap-2"><span className="text-primary-500 mt-0.5">•</span>We can arrange a rental vehicle while yours is in the shop.</li>
                                    <li className="flex gap-2"><span className="text-primary-500 mt-0.5">•</span>Repairs begin once fault determination and cost estimates are finalized.</li>
                                    <li className="flex gap-2"><span className="text-primary-500 mt-0.5">•</span>You have the right to select your own certified body shop.</li>
                                </ul>
                            </div>
                        </Reveal>

                        <Reveal delay={300}>
                            <div className="bg-brand-50 p-8 rounded-2xl border border-slate-100 h-full hover:shadow-lg transition-shadow">
                                <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-5">
                                    <Clock size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-brand-900 mb-3">What to Expect After Filing</h3>
                                <ul className="space-y-2 text-sm text-slate-600 leading-relaxed">
                                    <li className="flex gap-2"><span className="text-primary-500 mt-0.5">•</span>Insurers will investigate and negotiate fault determination.</li>
                                    <li className="flex gap-2"><span className="text-primary-500 mt-0.5">•</span>Your deductible may apply depending on fault assignment.</li>
                                    <li className="flex gap-2"><span className="text-primary-500 mt-0.5">•</span>If you weren't at fault, we'll pursue full cost recovery on your behalf.</li>
                                    <li className="flex gap-2"><span className="text-primary-500 mt-0.5">•</span>Expect regular status updates until your case is fully resolved.</li>
                                </ul>
                            </div>
                        </Reveal>

                        <Reveal delay={375}>
                            <div className="bg-brand-50 p-8 rounded-2xl border border-slate-100 h-full hover:shadow-lg transition-shadow">
                                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-5">
                                    <ShieldCheck size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-brand-900 mb-3">Protect Your Interests</h3>
                                <ul className="space-y-2 text-sm text-slate-600 leading-relaxed">
                                    <li className="flex gap-2"><span className="text-primary-500 mt-0.5">•</span>Keep a detailed log of all accident-related expenses and lost wages.</li>
                                    <li className="flex gap-2"><span className="text-primary-500 mt-0.5">•</span>Don't sign any settlement from the at-fault driver's insurer without guidance.</li>
                                    <li className="flex gap-2"><span className="text-primary-500 mt-0.5">•</span>See a doctor for any injuries — even minor aches can worsen over time.</li>
                                    <li className="flex gap-2"><span className="text-primary-500 mt-0.5">•</span>Call us for advice on protecting your no-fault benefits and premiums.</li>
                                </ul>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Step-by-step Process */}
            <section className="py-20 bg-brand-950 text-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Reveal className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight">How to File a Claim: Step-by-Step</h2>
                        <p className="text-brand-200 mt-4 text-lg font-light">Follow these critical steps to ensure your claim is processed quickly and correctly.</p>
                    </Reveal>

                    <div className="space-y-0">
                        {[
                            { step: 1, title: "Secure the Scene", desc: "Make sure everyone is safe. Activate hazard lights. Call 911 if there are injuries. Do not move vehicles unless they pose a danger to other drivers." },
                            { step: 2, title: "Exchange Information", desc: "Collect the name, address, phone number, driver's license number, license plate, and insurance details from every driver involved." },
                            { step: 3, title: "Gather Evidence", desc: "Take photos of all damage, road positions, traffic signs, and weather conditions. Get contact info for any bystander witnesses." },
                            { step: 4, title: "Contact Our Team", desc: "Call our support line at 1-800-555-0199 before reaching out to the other party's insurer. We'll advise you on the smartest steps to protect your claim." },
                            { step: 5, title: "We Handle the Rest", desc: "Our team will coordinate with all parties, manage the paperwork, initiate the claims process, and keep you informed at every stage." },
                        ].map((item, idx) => (
                            <Reveal key={item.step} delay={idx * 100}>
                                <div className="flex gap-6 items-start py-8 border-b border-white/10 last:border-b-0">
                                    <div className="shrink-0 w-14 h-14 rounded-2xl bg-primary-600/20 text-primary-300 flex items-center justify-center font-display font-bold text-xl">
                                        {item.step}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                        <p className="text-brand-200 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;