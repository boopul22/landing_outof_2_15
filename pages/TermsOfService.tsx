import React from 'react';

const TermsOfService: React.FC = () => {
    return (
        <div className="py-24 bg-slate-50 min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-12 rounded-2xl shadow-sm border border-slate-100">
                <h1 className="text-4xl font-display font-bold text-brand-900 mb-2">Terms & Conditions</h1>
                <p className="text-slate-400 text-sm mb-10">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

                <div className="prose prose-slate max-w-none text-slate-600 space-y-8">

                    <section>
                        <h2 className="text-2xl font-bold text-brand-900 mb-4">1. Agreement to Terms</h2>
                        <p>By accessing or using the Allstate Claims Support website (the "Site"), you confirm that you are at least 18 years of age and that you have read, understood, and agree to be bound by these Terms and Conditions ("Terms"). If you do not agree with any provision of these Terms, you must stop using this Site immediately.</p>
                        <p className="mt-3">We reserve the right to update or modify these Terms at any time. Continued use of the Site after any changes constitutes your acceptance of the revised Terms. We recommend reviewing this page regularly.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-brand-900 mb-4">2. Nature of Our Services</h2>
                        <p>Allstate Claims Support is an independent advertising and lead-generation platform. We operate within the United States and connect consumers who have been involved in road accidents with licensed, authorized accident-management service providers.</p>
                        <p className="mt-3 font-semibold text-brand-900">We are not:</p>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                            <li>An insurance company or insurance broker.</li>
                            <li>A law firm or provider of legal advice.</li>
                            <li>A licensed claims adjuster or claims management company.</li>
                        </ul>
                        <p className="mt-3">All guidance provided on this Site and through our helpline is for general informational purposes only and does not constitute professional legal, insurance, or financial advice. You should always seek independent professional advice tailored to your specific situation.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-brand-900 mb-4">3. Eligibility</h2>
                        <p>To use our services, you must:</p>
                        <ul className="list-disc pl-5 space-y-2 mt-3">
                            <li>Be at least 18 years of age.</li>
                            <li>Be a resident of the United States.</li>
                            <li>Provide accurate and truthful information when submitting a request through our Site or via phone.</li>
                        </ul>
                        <p className="mt-3">We reserve the right to refuse service to any person who provides false or misleading information or who we believe intends to misuse our platform.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-brand-900 mb-4">4. Consent to Contact</h2>
                        <p>By submitting your information through our website forms, you expressly consent to being contacted by Allstate Claims Support and our partner providers by phone, email, or text message — including through automated dialing systems — in connection with your accident inquiry. Standard messaging and data rates may apply.</p>
                        <p className="mt-3">You may opt out of automated communications at any time by contacting us at support@allstate-claims.com or by calling 1-800-555-0199.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-brand-900 mb-4">5. No Obligation</h2>
                        <p>You are under no obligation to use any service provider introduced to you through our platform. Any agreement you enter into with a third-party accident-management provider is solely between you and that provider. We are not a party to such agreements and carry no liability for the quality, performance, or outcome of their services.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-brand-900 mb-4">6. Intellectual Property</h2>
                        <p>All content on this Site — including but not limited to text, graphics, logos, images, and page layouts — is the property of Allstate Claims Support or its content licensors and is protected by US and international copyright laws. You may not reproduce, republish, distribute, or commercially exploit any material from this Site without express written permission.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-brand-900 mb-4">7. Disclaimers & Limitations of Liability</h2>
                        <p>The information and services on this Site are provided on an "as is" and "as available" basis without warranties of any kind, either express or implied. We do not warrant that:</p>
                        <ul className="list-disc pl-5 space-y-2 mt-3">
                            <li>The Site will be uninterrupted, error-free, or free of viruses or other harmful components.</li>
                            <li>The information on the Site is accurate, complete, or current.</li>
                            <li>Any particular outcome or result from using our services or those of our partner providers.</li>
                        </ul>
                        <p className="mt-3">To the fullest extent permitted by applicable law, Allstate Claims Support and its affiliates, officers, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of this Site or our services.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-brand-900 mb-4">8. Third-Party Links</h2>
                        <p>Our Site may contain links to third-party websites. These links are provided for your convenience only. We have no control over, and assume no responsibility for, the content, privacy practices, or terms of any third-party sites. We encourage you to review the policies of any third-party site you visit.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-brand-900 mb-4">9. Governing Law & Dispute Resolution</h2>
                        <p>These Terms shall be governed by and construed in accordance with the laws of the State of New York, United States, without regard to its conflict of law provisions. Any disputes arising from these Terms or your use of our Site shall first be addressed through good-faith negotiation. If unresolved, disputes shall be subject to binding arbitration in the State of New York, in accordance with the rules of the American Arbitration Association.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-brand-900 mb-4">10. Contact Us</h2>
                        <p>For questions or concerns about these Terms, please contact us at:</p>
                        <ul className="list-none pl-0 space-y-2 mt-3">
                            <li><strong>Email:</strong> support@allstate-claims.com</li>
                            <li><strong>Phone:</strong> 1-800-555-0199</li>
                            <li><strong>Address:</strong> 450 Lexington Ave, Suite 2100, New York, NY 10017</li>
                        </ul>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
