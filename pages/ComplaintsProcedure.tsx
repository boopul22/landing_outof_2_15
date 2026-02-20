import React from 'react';

const ComplaintsProcedure: React.FC = () => {
    return (
        <div className="py-24 bg-slate-50 min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-12 rounded-2xl shadow-sm border border-slate-100">
                <h1 className="text-4xl font-display font-bold text-brand-900 mb-8">Complaints Procedure</h1>
                <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
                    <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

                    <h2 className="text-2xl font-bold text-brand-900 mt-8 mb-4">1. Our Commitment</h2>
                    <p>We are committed to providing a high-quality service to all our users. When something goes wrong, we need you to tell us about it. This will help us to improve our standards.</p>

                    <h2 className="text-2xl font-bold text-brand-900 mt-8 mb-4">2. How to Complain</h2>
                    <p>If you have a complaint, please contact us with the details by emailing support@allstate-claims.com. We have eight weeks to consider your complaint. If we have not resolved it within this time you may complain to the relevant ombudsman service.</p>

                    <h2 className="text-2xl font-bold text-brand-900 mt-8 mb-4">3. What Happens Next?</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>We will send you a letter acknowledging receipt of your complaint within three days of receiving it, enclosing a copy of this procedure.</li>
                        <li>We will then investigate your complaint. This will normally involve passing your complaint to our customer care manager, who will review your matter file and speak to the member of staff who acted for you.</li>
                        <li>We will send you a detailed written reply to your complaint, including our suggestions for resolving the matter, within 21 days of sending you the acknowledgement letter.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ComplaintsProcedure;
