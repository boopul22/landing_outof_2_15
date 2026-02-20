import React from 'react';

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="py-24 bg-slate-50 min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-12 rounded-2xl shadow-sm border border-slate-100">
                <h1 className="text-4xl font-display font-bold text-brand-900 mb-2">Privacy Policy</h1>
                <p className="text-slate-400 text-sm mb-10">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

                <div className="prose prose-slate max-w-none text-slate-600 space-y-8">

                    <section>
                        <h2 className="text-2xl font-bold text-brand-900 mb-4">1. Introduction</h2>
                        <p>Allstate Claims Support ("we," "us," or "our") is committed to safeguarding the privacy of everyone who interacts with our website and services. This Privacy Policy explains what personal information we collect, why we collect it, how we use it, and what rights you have regarding your data. By using our website, you acknowledge that you have read and understood this policy.</p>
                        <p className="mt-3">This policy applies to all personal information collected through our website, phone calls, forms, and any other digital or physical touchpoints related to our services.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-brand-900 mb-4">2. Information We Collect</h2>
                        <p>We collect several types of information in connection with the services we offer:</p>
                        <ul className="list-disc pl-5 space-y-3 mt-3">
                            <li><strong>Identity & Contact Information:</strong> Your first and last name, phone number, email address, ZIP code, and mailing address.</li>
                            <li><strong>Vehicle & Accident Information:</strong> Vehicle make, model, year, VIN, registration details, accident date and location, and a description of the incident.</li>
                            <li><strong>Insurance Details:</strong> Your current insurance provider and, if relevant, your policy number.</li>
                            <li><strong>Technical Data:</strong> IP address, browser type and version, device type, pages visited, time spent on pages, and referring URLs — collected automatically when you use our site.</li>
                            <li><strong>Communication Records:</strong> Records of calls, emails, or form submissions made to our team.</li>
                        </ul>
                        <p className="mt-3">We do not knowingly collect information from children under the age of 18. If you believe a minor has submitted information to us, please contact us immediately so we can remove it.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-brand-900 mb-4">3. How We Use Your Information</h2>
                        <p>Your personal information is used strictly for the purposes below:</p>
                        <ul className="list-disc pl-5 space-y-3 mt-3">
                            <li><strong>Service Delivery:</strong> To connect you with licensed, authorized accident-management providers who can assist with your vehicle repair, rental coordination, or injury support.</li>
                            <li><strong>Communication:</strong> To respond to your inquiries and provide updates on matters you have raised with our team.</li>
                            <li><strong>Service Improvement:</strong> To analyze how visitors use our site so we can improve usability, content, and the services we offer.</li>
                            <li><strong>Legal Compliance:</strong> To meet our obligations under applicable United States federal and state laws.</li>
                            <li><strong>Consent-Based Marketing:</strong> If you have opted in, to send you relevant information about accident-management services that may benefit you.</li>
                        </ul>
                        <p className="mt-3">We will never use your personal data in a way that goes beyond the purposes described above, and we will not sell your data to unrelated third parties for their own marketing purposes.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-brand-900 mb-4">4. Sharing Your Information</h2>
                        <p>We may share your information only in the following circumstances:</p>
                        <ul className="list-disc pl-5 space-y-3 mt-3">
                            <li><strong>Partner Providers:</strong> With our network of authorized accident-management companies, repairers, and rental agencies who provide services on your behalf.</li>
                            <li><strong>Legal & Regulatory Authorities:</strong> Where required by law, court order, or at the request of government agencies in the United States.</li>
                            <li><strong>Business Operations:</strong> With trusted service providers who assist us in operating our website (e.g., hosting, analytics) under strict confidentiality obligations.</li>
                            <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
                        </ul>
                        <p className="mt-3">We do not sell, rent, or trade your personal data for third-party marketing purposes.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-brand-900 mb-4">5. Data Retention</h2>
                        <p>We retain your personal data only for as long as is necessary to fulfill the purposes outlined in this policy, or as required by applicable law. Generally, contact and inquiry records are retained for up to 3 years. You may request deletion of your data at any time by contacting us (see Section 8 below).</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-brand-900 mb-4">6. Data Security</h2>
                        <p>We implement industry-standard technical and organizational safeguards to protect your personal information from unauthorized access, disclosure, alteration, or destruction. These include encrypted data transmission (SSL/TLS), access controls, and regular security reviews.</p>
                        <p className="mt-3">While we take every reasonable precaution, no internet transmission can be guaranteed to be 100% secure. We encourage you to use secure networks when submitting personal information online.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-brand-900 mb-4">7. Your Privacy Rights</h2>
                        <p>Depending on your state of residence, you may have the following rights under US privacy law (including the California Consumer Privacy Act, CCPA, and similar state laws):</p>
                        <ul className="list-disc pl-5 space-y-3 mt-3">
                            <li><strong>Right to Know:</strong> Request information about what personal data we collect, use, disclose, or sell.</li>
                            <li><strong>Right to Delete:</strong> Request that we delete the personal data we have collected from you, subject to certain exceptions.</li>
                            <li><strong>Right to Correct:</strong> Request correction of inaccurate personal data we hold about you.</li>
                            <li><strong>Right to Opt-Out:</strong> Opt out of the sale or sharing of your personal information (we do not sell data, but you may request confirmation).</li>
                            <li><strong>Right to Non-Discrimination:</strong> We will not deny, charge different prices for, or provide a lower quality of service because you exercised your privacy rights.</li>
                        </ul>
                        <p className="mt-3">To exercise any of these rights, please contact us using the details in Section 8. We will respond to verified requests within 45 days, as required by applicable law.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-brand-900 mb-4">8. Contact Us</h2>
                        <p>If you have questions, concerns, or requests regarding this Privacy Policy, please reach out to us:</p>
                        <ul className="list-none pl-0 space-y-2 mt-3">
                            <li><strong>Email:</strong> support@allstate-claims.com</li>
                            <li><strong>Phone:</strong> 1-800-555-0199</li>
                            <li><strong>Address:</strong> 450 Lexington Ave, Suite 2100, New York, NY 10017</li>
                        </ul>
                        <p className="mt-3">We reserve the right to update this Privacy Policy periodically. Any changes will be posted on this page with a revised "Last updated" date.</p>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
