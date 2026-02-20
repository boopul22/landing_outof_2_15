import React from 'react';

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="py-24 bg-slate-50 min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-12 rounded-2xl shadow-sm border border-slate-100">
                <h1 className="text-4xl font-display font-bold text-brand-900 mb-8">Privacy Policy</h1>
                <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
                    <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

                    <h2 className="text-2xl font-bold text-brand-900 mt-8 mb-4">1. Introduction</h2>
                    <p>Welcome to Allstate Claims Support. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>

                    <h2 className="text-2xl font-bold text-brand-900 mt-8 mb-4">2. The Data We Collect</h2>
                    <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Identity Data</strong> includes first name, last name.</li>
                        <li><strong>Contact Data</strong> includes zipcode and telephone numbers.</li>
                        <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, operating system and platform.</li>
                        <li><strong>Usage Data</strong> includes information about how you use our website and services.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-brand-900 mt-8 mb-4">3. How We Use Your Data</h2>
                    <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>To connect you with authorized accident-management providers.</li>
                        <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                        <li>Where we need to comply with a legal obligation.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-brand-900 mt-8 mb-4">4. Data Security</h2>
                    <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.</p>

                    <h2 className="text-2xl font-bold text-brand-900 mt-8 mb-4">5. Contact Us</h2>
                    <p>If you have any questions about this privacy policy or our privacy practices, please contact us at support@allstate-claims.com.</p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
