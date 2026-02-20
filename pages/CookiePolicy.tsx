import React from 'react';

const CookiePolicy: React.FC = () => {
    return (
        <div className="py-24 bg-slate-50 min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-12 rounded-2xl shadow-sm border border-slate-100">
                <h1 className="text-4xl font-display font-bold text-brand-900 mb-8">Cookie Policy</h1>
                <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
                    <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

                    <h2 className="text-2xl font-bold text-brand-900 mt-8 mb-4">1. What Are Cookies</h2>
                    <p>As is common practice with almost all professional websites, this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience.</p>

                    <h2 className="text-2xl font-bold text-brand-900 mt-8 mb-4">2. How We Use Cookies</h2>
                    <p>We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site.</p>

                    <h2 className="text-2xl font-bold text-brand-900 mt-8 mb-4">3. Disabling Cookies</h2>
                    <p>You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit.</p>
                </div>
            </div>
        </div>
    );
};

export default CookiePolicy;
