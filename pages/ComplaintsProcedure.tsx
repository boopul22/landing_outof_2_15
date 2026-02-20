import React from 'react';

const ComplaintsProcedure: React.FC = () => {
    return (
        <div className="py-24 bg-slate-50 min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-12 rounded-2xl shadow-sm border border-slate-100">
                <h1 className="text-4xl font-display font-bold text-brand-900 mb-2">Complaints Procedure</h1>
                <p className="text-slate-400 text-sm mb-10">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

                <div className="prose prose-slate max-w-none text-slate-600 space-y-8">

                    <section>
                        <h2 className="text-2xl font-bold text-brand-900 mb-4">1. Our Commitment to You</h2>
                        <p>At Allstate Claims Support, we are committed to providing every user with a high standard of service, clear communication, and fair treatment. We understand that complaints can arise, and we take every concern seriously.</p>
                        <p className="mt-3">If something has not met your expectations — whether it relates to the quality of our guidance, the conduct of our team, the accuracy of information provided, or the behavior of a partner provider we referred you to — we want to hear from you. Your feedback helps us improve.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-brand-900 mb-4">2. What You Can Complain About</h2>
                        <p>You may raise a complaint with us about any of the following:</p>
                        <ul className="list-disc pl-5 space-y-2 mt-3">
                            <li>The quality or accuracy of information or guidance you received from our team.</li>
                            <li>The conduct or professionalism of our staff or agents.</li>
                            <li>Delays or failures in communication on our part.</li>
                            <li>How your personal information was handled or protected.</li>
                            <li>The referral process to our partner accident-management providers.</li>
                        </ul>
                        <p className="mt-3">Please note: If your complaint relates to a service delivered directly by a third-party provider we referred you to (e.g., a repair shop or rental agency), we will do our best to assist, but those providers have their own complaints processes which we will direct you to if appropriate.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-brand-900 mb-4">3. How to Submit a Complaint</h2>
                        <p>You can contact us using any of the following methods:</p>
                        <div className="grid sm:grid-cols-3 gap-4 mt-4">
                            <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 text-center">
                                <p className="font-bold text-brand-900 mb-1">📞 Phone</p>
                                <p>Call us at <br /><strong>1-800-555-0199</strong><br />Mon–Fri, 9am–6pm ET</p>
                            </div>
                            <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 text-center">
                                <p className="font-bold text-brand-900 mb-1">✉️ Email</p>
                                <p>Send details to <br /><strong>support@allstate-claims.com</strong><br />We respond within 2 business days</p>
                            </div>
                            <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 text-center">
                                <p className="font-bold text-brand-900 mb-1">📬 Mail</p>
                                <p>Write to us at<br /><strong>450 Lexington Ave, Suite 2100,<br />New York, NY 10017</strong></p>
                            </div>
                        </div>
                        <p className="mt-4">When submitting a complaint, please include: your full name, contact number, a description of your concern, any relevant dates, and your preferred resolution. The more detail you provide, the faster we can investigate.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-brand-900 mb-4">4. What Happens After You Complain</h2>
                        <p>Once we receive your complaint, we will follow this process:</p>
                        <div className="space-y-4 mt-4">
                            <div className="flex gap-4 items-start">
                                <div className="shrink-0 w-10 h-10 rounded-full bg-primary-600/10 text-primary-700 font-bold flex items-center justify-center">1</div>
                                <div>
                                    <p className="font-bold text-brand-900">Acknowledgment — within 2 business days</p>
                                    <p className="text-sm mt-1">We will confirm receipt of your complaint in writing (by email or letter) and provide a reference number and the name of the team member handling your case.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="shrink-0 w-10 h-10 rounded-full bg-primary-600/10 text-primary-700 font-bold flex items-center justify-center">2</div>
                                <div>
                                    <p className="font-bold text-brand-900">Investigation — within 5 business days</p>
                                    <p className="text-sm mt-1">A senior member of our team will review your complaint, gather relevant records, and assess what happened. We may contact you during this stage to request additional information.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="shrink-0 w-10 h-10 rounded-full bg-primary-600/10 text-primary-700 font-bold flex items-center justify-center">3</div>
                                <div>
                                    <p className="font-bold text-brand-900">Resolution — within 10 business days</p>
                                    <p className="text-sm mt-1">We will provide a full written response outlining our findings, any steps we are taking to address the issue, and any remedy or goodwill gesture where appropriate.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-brand-900 mb-4">5. If You're Not Satisfied</h2>
                        <p>If you are dissatisfied with our initial resolution, you may request a review by a senior manager. Simply reply to our response email or call us, and we will escalate your case within 3 business days.</p>
                        <p className="mt-3">If you remain unsatisfied after our final response, you may seek assistance from an independent third party, including:</p>
                        <ul className="list-disc pl-5 space-y-2 mt-3">
                            <li>Your state's <strong>Attorney General's office</strong> for consumer protection matters.</li>
                            <li>The <strong>Better Business Bureau (BBB)</strong> for mediation and dispute resolution.</li>
                            <li>The <strong>Federal Trade Commission (FTC)</strong> if you believe your consumer rights have been violated.</li>
                        </ul>
                        <p className="mt-3">We will always provide the contact information for relevant external bodies in our final written response to your complaint.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-brand-900 mb-4">6. Our Promise</h2>
                        <p>We treat every complaint as a learning opportunity. No complaint will be dismissed or deprioritized based on its nature. Every person who contacts us can expect to be heard respectfully, to receive a thorough investigation, and to get a clear, honest response — regardless of the outcome.</p>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default ComplaintsProcedure;
