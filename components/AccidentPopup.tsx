import React, { useState, useEffect } from 'react';
import { Phone, X, CheckCircle2 } from 'lucide-react';

const AccidentPopup: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);

    useEffect(() => {
        // Show popup after a delay
        const timer = setTimeout(() => {
            const dismissed = localStorage.getItem('accident_popup_dismissed');
            if (!dismissed) {
                setIsVisible(true);
            }
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    const handleDismiss = () => {
        setIsVisible(false);
        // Delay actual removal for animation
        setTimeout(() => {
            setIsDismissed(true);
            localStorage.setItem('accident_popup_dismissed', 'true');
        }, 300); // reduced delay for quicker dismissal feel
    };

    if (isDismissed) return null;

    return (
        <div
            className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[100] w-[calc(100%-2rem)] sm:w-[380px] pointer-events-none transition-all duration-700 ease-[var(--ease-premium)] ${isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
        >
            <div className="bg-brand-950 pointer-events-auto rounded-2xl shadow-2xl border border-white/10 overflow-hidden relative">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-white/10 bg-brand-900/40">
                    <div className="flex items-center gap-2">
                        <div className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-action-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-action-500"></span>
                        </div>
                        <span className="text-action-500 text-xs font-bold tracking-wider uppercase">Live Support</span>
                    </div>
                    <button
                        onClick={handleDismiss}
                        className="text-slate-400 hover:text-white transition-colors p-1"
                        aria-label="Close"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="p-5">
                    {/* Call Button */}
                    <a
                        href="tel:1-800-555-0199"
                        className="flex flex-col items-center justify-center w-full bg-primary-600 bg-gradient-to-br from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white rounded-xl py-3.5 px-4 shadow-[0_10px_20px_-5px_rgba(79,70,229,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98] group mb-5"
                    >
                        <div className="flex items-center gap-2.5 mb-0.5">
                            <Phone size={20} className="fill-current group-hover:animate-bounce" />
                            <span className="text-xl font-bold tracking-tight">1-800-555-0199</span>
                        </div>
                        <span className="text-white/90 text-xs font-medium">Click to Call Now</span>
                    </a>

                    {/* Features List */}
                    <div className="space-y-4">
                        <h4 className="text-slate-100 text-sm font-bold">Free Expert Assistance:</h4>
                        <ul className="space-y-3">
                            {[
                                "Claims advice",
                                "Replacement vehicle help",
                                "Repair coordination",
                                "Injury claim guidance"
                            ].map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-3">
                                    <CheckCircle2 size={18} className="text-action-500 shrink-0" />
                                    <span className="text-slate-300 text-sm font-medium">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccidentPopup;
