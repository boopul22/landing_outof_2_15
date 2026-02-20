import React from 'react';

const CookiePolicy: React.FC = () => {
    return (
        <div className="py-24 bg-slate-50 min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-12 rounded-2xl shadow-sm border border-slate-100">
                <h1 className="text-4xl font-display font-bold text-brand-900 mb-2">Cookie Policy</h1>
                <p className="text-slate-400 text-sm mb-10">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

                <div className="prose prose-slate max-w-none text-slate-600 space-y-8">

                    <section>
                        <h2 className="text-2xl font-bold text-brand-900 mb-4">1. What Are Cookies?</h2>
                        <p>Cookies are small text files stored on your device (computer, smartphone, or tablet) when you visit a website. They are widely used to make websites function more efficiently, to remember your preferences, and to provide information that helps website owners understand how visitors interact with their sites.</p>
                        <p className="mt-3">Cookies do not contain personally identifiable information on their own, but they can be linked to data we hold about you. By continuing to browse our Site, you consent to our use of cookies as outlined in this policy.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-brand-900 mb-4">2. Types of Cookies We Use</h2>
                        <p>We use the following categories of cookies on the Allstate Claims Support website:</p>
                        <div className="space-y-5 mt-4">
                            <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                                <h3 className="text-lg font-bold text-brand-900 mb-2">Essential Cookies</h3>
                                <p>These cookies are required for the website to function correctly. They enable core features such as page navigation, form submission security, and access to protected areas of the Site. Without these cookies, our services cannot be delivered properly. These cannot be disabled.</p>
                            </div>
                            <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                                <h3 className="text-lg font-bold text-brand-900 mb-2">Performance & Analytics Cookies</h3>
                                <p>These cookies collect anonymous information about how visitors use our Site — such as which pages are visited most often, how long users stay, and where they navigate from. This data helps us improve the structure and content of our website. We may use tools such as Google Analytics for this purpose.</p>
                            </div>
                            <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                                <h3 className="text-lg font-bold text-brand-900 mb-2">Functional Cookies</h3>
                                <p>These cookies remember choices you make on the Site (such as form field data or language preferences) to provide a more personalized experience. The information collected by these cookies is not used to track your activity on other websites.</p>
                            </div>
                            <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                                <h3 className="text-lg font-bold text-brand-900 mb-2">Marketing & Advertising Cookies</h3>
                                <p>These cookies track your browsing activity across websites to help us and our advertising partners deliver ads that are relevant to your interests. They also limit how many times you see an ad and help us measure the effectiveness of our campaigns. These are placed only with your consent.</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-brand-900 mb-4">3. Third-Party Cookies</h2>
                        <p>Some cookies on our Site are placed by third-party services we use to enhance functionality and measure performance. These may include:</p>
                        <ul className="list-disc pl-5 space-y-2 mt-3">
                            <li><strong>Google Analytics</strong> — for website performance and audience analysis.</li>
                            <li><strong>Google Ads / Meta Pixel</strong> — for remarketing and campaign measurement.</li>
                            <li><strong>Cloudflare</strong> — for website security and performance optimization.</li>
                        </ul>
                        <p className="mt-3">These third parties have their own privacy policies governing their use of cookies. We recommend reviewing their policies directly.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-brand-900 mb-4">4. Managing & Disabling Cookies</h2>
                        <p>You have several options to control or limit how cookies are used on your device:</p>
                        <ul className="list-disc pl-5 space-y-3 mt-3">
                            <li><strong>Browser Settings:</strong> Most web browsers allow you to manage cookies through their settings. You can typically set your browser to refuse cookies, delete existing cookies, or notify you when cookies are being placed. Refer to your browser's Help documentation for instructions.</li>
                            <li><strong>Opt-Out Tools:</strong> For analytics cookies specifically, you can opt out using the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Google Analytics Opt-Out Browser Add-on</a>.</li>
                            <li><strong>Do Not Track:</strong> Some browsers include a "Do Not Track" feature. Our Site responds to Do Not Track signals where possible.</li>
                        </ul>
                        <p className="mt-3">Please note that restricting cookies may impact the functionality and personalization of our Site. Essential cookies cannot be disabled without affecting your ability to use the Site.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-brand-900 mb-4">5. Your California Privacy Rights</h2>
                        <p>If you are a California resident, you have additional rights regarding cookies and tracking technologies under the California Consumer Privacy Act (CCPA). You have the right to know what personal information is collected through cookies and to opt out of the sale of that information. To exercise these rights, please contact us using the information below.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-brand-900 mb-4">6. Contact Us</h2>
                        <p>If you have any questions about this Cookie Policy or how we use cookies, please contact us:</p>
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

export default CookiePolicy;
