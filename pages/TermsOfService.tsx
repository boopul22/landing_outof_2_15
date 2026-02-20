import React from 'react';

const TermsOfService: React.FC = () => {
    return (
        <div className="py-24 bg-slate-50 min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-12 rounded-2xl shadow-sm border border-slate-100">
                <h1 className="text-4xl font-display font-bold text-brand-900 mb-8">Terms of Service</h1>
                <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
                    <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

                    <h2 className="text-2xl font-bold text-brand-900 mt-8 mb-4">1. Agreement to Terms</h2>
                    <p>By accessing our website, you agree to be bound by these Terms of Service and to comply with all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>

                    <h2 className="text-2xl font-bold text-brand-900 mt-8 mb-4">2. Use License</h2>
                    <p>Permission is granted to temporarily download one copy of the materials (information or software) on our website for personal, non-commercial transitory viewing only.</p>

                    <h2 className="text-2xl font-bold text-brand-900 mt-8 mb-4">3. Disclaimer</h2>
                    <p>The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

                    <p>We are a free independent service acting as an introducer to authorized USA accident-management providers. We are not an insurance provider or law firm.</p>

                    <h2 className="text-2xl font-bold text-brand-900 mt-8 mb-4">4. Limitations</h2>
                    <p>In no event shall we or our suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.</p>

                    <h2 className="text-2xl font-bold text-brand-900 mt-8 mb-4">5. Governing Law</h2>
                    <p>These terms and conditions are governed by and construed in accordance with the laws of the United States and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
