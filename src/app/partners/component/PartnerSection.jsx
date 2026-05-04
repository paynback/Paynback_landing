"use client";

import React from 'react';
import PartenrForm from './PartenrForm';

export default function PartnerSection() {
    return (
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50 font-sans text-slate-900 w-full">
            <div className="max-w-4xl mx-auto">
                {/* Header Section */}
                <div className="mb-10 text-center md:text-left">
                    <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-4">
                        <span className="text-(--brand-primary)">Be</span> Our Channel <span className="text-(--brand-primary)">Partner</span>
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-base text-slate-600 leading-relaxed text-left">
                        <p>
                            Partner with PayNback and onboard local businesses into a powerful digital rewards and payments platform. Help merchants boost visibility, attract more customers, and increase repeat sales.
                        </p>
                        <p>
                            Join our partner network and earn rewarding incentives while expanding the PayNback community.
                        </p>
                    </div>
                </div>

                {/* Form Card */}
                <PartenrForm />
            </div>
        </section>
    );
}
