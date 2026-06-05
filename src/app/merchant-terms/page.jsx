import ScrollReveal from "@/components/ui/ScrollReveal";
import BlurReveal from "@/components/sections/BlurReveal";
import LastUpdateDate from "@/components/sections/LastUpdateDate";
import Link from "next/link";

export const metadata = {
  title: "Merchant Terms - PayNback",
  description: "Terms and conditions for merchants using the PayNback platform.",
};

export default function MerchantTermsPage() {
  return (
    <main className="min-h-screen bg-[#080F18] font-sans text-white pb-20">
      {/* Background Atmosphere */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
        <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-[#1B519C] blur-[150px] opacity-20" />
        <div className="absolute top-[20%] right-[-5%] h-[400px] w-[400px] rounded-full bg-[#3E72E0] blur-[120px] opacity-15" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center px-6 pt-40 pb-16 text-center sm:pt-48 sm:pb-24">
        <BlurReveal className="max-w-3xl">
          <h1 className="mb-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl text-transparent bg-clip-text bg-linear-to-r from-white to-white/70">
            Merchant Terms
          </h1>
          <p className="text-lg text-white/60 mb-8 max-w-2xl mx-auto leading-relaxed">
            The information provided below outlines the formal franchise and merchant agreement terms, detailing the legally binding language for operating on the PayNback platform.
          </p>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-white/60 backdrop-blur-md shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4EA8E9] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4EA8E9]"></span>
            </span>
            Last Updated: <LastUpdateDate />
          </div>
        </BlurReveal>
      </section>

      {/* Main Content Area */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-8">
        <div className="flex flex-col gap-12">
          
          {/* Section 1 & 2: Definitions and Appointment */}
          <ScrollReveal>
            <div className="rounded-2xl border border-white/10 bg-[#0C1A31]/50 p-6 sm:p-10 backdrop-blur-sm shadow-xl">
              <div className="space-y-10 text-white/70 leading-relaxed text-[15px]">
                
                {/* 1. Definitions */}
                <div>
                  <h2 className="text-2xl font-semibold text-white mb-6 border-b border-white/10 pb-4 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm text-[#4EA8E9]">1</span>
                    Definitions
                  </h2>
                  <div className="space-y-4 ml-2 sm:ml-11">
                    <p><strong className="text-white/90">1.1. &quot;Platform&quot;</strong> means the eCommerce platform Mobile Apps and associated web application operated by the Intermediary.</p>
                    <p><strong className="text-white/90">1.2. &quot;Services&quot;</strong> refer to the eCommerce services provided by the Intermediary to the Merchant, which include but are not limited to: listing and displaying the Merchant&apos;s products and services prominently on the Platform, actively promoting Merchants and their offerings to Platform users through exclusive deals and attractive discounts, facilitating seamless communication between Merchants and Platform customers, providing user-friendly search tools to help customers easily discover and explore Merchant options, offering advanced search functionalities to guide customers towards their desired Merchants, simplifying the payment process through secure bill payments and settlements, expanding the Merchant&apos;s market reach by showcasing their products and services to a wider audience, and delivering comprehensive customer support services.</p>
                    <p><strong className="text-white/90">1.3. &quot;eCommerce Intermediary Platform and Payment Management Service Agreement&quot;</strong> means the services provided by the Intermediator to the Merchant in relation to collection of bill payments from customers for the Merchant&apos;s products or services.</p>
                  </div>
                </div>

                {/* 2. Appointment */}
                <div>
                  <h2 className="text-2xl font-semibold text-white mb-6 border-b border-white/10 pb-4 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm text-[#4EA8E9]">2</span>
                    Appointment of Service Agreement
                  </h2>
                  <div className="space-y-4 ml-2 sm:ml-11">
                    <p><strong className="text-white/90">2.1.</strong> The Merchant hereby appoints the Intermediary as its exclusive eCommerce intermediary and bill payment collection agent for the sale of its products or services to the Platform customers.</p>
                    <p><strong className="text-white/90">2.2.</strong> The Intermediary shall provide the Services to the Merchant in accordance with the terms and conditions of this Agreement.</p>
                  </div>
                </div>

              </div>
            </div>
          </ScrollReveal>

          {/* Section 3: Merchant Obligations */}
          <ScrollReveal delay={100}>
            <div className="rounded-2xl border border-white/10 bg-[#0C1A31]/50 p-6 sm:p-10 backdrop-blur-sm shadow-xl scroll-mt-24">
              <h2 className="text-2xl font-semibold text-white mb-6 border-b border-white/10 pb-4 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm text-[#4EA8E9]">3</span>
                Merchant Obligations
              </h2>
              
              <div className="space-y-6 text-white/70 leading-relaxed text-[15px] ml-2 sm:ml-11">
                <p><strong className="text-white/90">3.1.</strong> The Merchant shall provide accurate and complete information about its products or services to the Intermediary.</p>
                <p><strong className="text-white/90">3.2.</strong> The Merchant shall comply with all applicable laws and regulations in connection with the sale of its products or services.</p>
                <p><strong className="text-white/90">3.3.</strong> The Merchant shall be responsible for the quality, description, and pricing of its products or services.</p>
                <p><strong className="text-white/90">3.4.</strong> The Merchant shall indemnify and hold harmless the Intermediary from and against all claims, damages, liabilities, and expenses arising out of or in connection with the Merchant&apos;s breach of this Agreement or the sale of its products or services.</p>

                <div className="mt-8 p-6 rounded-xl border border-red-500/20 bg-red-500/5">
                  <h3 className="text-lg font-semibold text-white/90 mb-3 flex items-center gap-2">
                    <span className="text-red-400">⚠️</span> Merchant Policy: Sale of Legal Goods Only
                  </h3>
                  <p className="mb-4">Merchants are strictly prohibited from listing, advertising, or selling any illegal or prohibited items on our platform. This includes but is not limited to items that:</p>
                  <ul className="list-disc pl-5 space-y-2 marker:text-red-400 mb-6">
                    <li>Violate any applicable laws, rules, or regulations</li>
                    <li>Infringe upon the intellectual property rights of others</li>
                    <li>Pose a safety or health risk to consumers</li>
                    <li>Are considered obscene, defamatory, or offensive</li>
                    <li>Are restricted or prohibited by our platform policies</li>
                  </ul>
                  
                  <p className="mb-2 text-white/80 font-medium">Failure to comply with this policy may result in severe consequences, including but not limited to:</p>
                  <ul className="list-disc pl-5 space-y-2 marker:text-red-400 mb-4">
                    <li>Immediate removal of the offending listing</li>
                    <li>Suspension or termination of the merchant&apos;s account</li>
                    <li>Legal action against the merchant</li>
                  </ul>
                  <p className="italic text-white/60 text-sm">By agreeing to these terms, merchants acknowledge their responsibility to ensure that all products and services offered on the platform are legal and compliant.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Section 4: Intermediary Obligations */}
          <ScrollReveal delay={100}>
            <div className="rounded-2xl border border-white/10 bg-[#0C1A31]/50 p-6 sm:p-10 backdrop-blur-sm shadow-xl scroll-mt-24">
              <h2 className="text-2xl font-semibold text-white mb-6 border-b border-white/10 pb-4 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm text-[#4EA8E9]">4</span>
                Intermediary Obligations
              </h2>
              
              <div className="space-y-6 text-white/70 leading-relaxed text-[15px] ml-2 sm:ml-11">
                <ul className="space-y-4">
                  <li><strong className="text-white/90">4.1.</strong> The Intermediary shall provide the Services to the Merchant in a professional and efficient manner.</li>
                  <li><strong className="text-white/90">4.2.</strong> The Intermediary shall use commercially reasonable efforts to protect the Merchant&apos;s confidential information.</li>
                  <li><strong className="text-white/90">4.3.</strong> The Intermediary shall process payments from customers for the Merchant&apos;s products or services in accordance with the terms of this Agreement and applicable laws and regulations.</li>
                  <li><strong className="text-white/90">4.4.</strong> The Intermediary shall remit to the Merchant the net proceeds from the sale of the Merchant&apos;s products or services, less any applicable fees and charges, in accordance with the terms of this Agreement.</li>
                  <li><strong className="text-white/90">4.5. Platform Maintenance and Uptime:</strong> The Intermediary shall use commercially reasonable efforts to maintain the Platform in good working order and ensure maximum uptime.</li>
                  <li><strong className="text-white/90">4.6. Data Privacy and Security:</strong> The Intermediary shall implement and maintain appropriate security measures to protect the personal data of Merchants and their customers in accordance with applicable data protection laws and regulations.</li>
                  <li><strong className="text-white/90">4.7. Dispute Resolution:</strong> The Intermediary shall provide a platform for Merchants and Customers to resolve disputes efficiently and shall cooperate in good faith with any dispute resolution process.</li>
                  <li><strong className="text-white/90">4.8. Intellectual Property Rights:</strong> The Intermediary shall respect the intellectual property rights of the Merchant and shall not use or disclose any confidential or proprietary information of the Merchant without prior written consent.</li>
                  <li><strong className="text-white/90">4.9. Performance Metrics:</strong> The Intermediary shall provide the Merchant with regular performance metrics related to the Merchant&apos;s listings, sales, and customer engagement.</li>
                  <li><strong className="text-white/90">4.10. Marketing and Promotion:</strong> The Intermediary shall undertake reasonable efforts to market and promote the Merchant&apos;s products or services on the Platform.</li>
                  <li><strong className="text-white/90">4.11.</strong> The Intermediary reserve the right to modify this policy at any time without prior notice.</li>
                </ul>
                <p className="text-sm italic mt-6 text-[#4EA8E9]">(If you have any questions or concerns, please contact our merchant support team).</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Section 5, 6, 7: Fees, Term, Dispute */}
          <ScrollReveal delay={100}>
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Section 5 */}
              <div className="rounded-2xl border border-white/10 bg-[#0C1A31]/50 p-6 sm:p-8 backdrop-blur-sm shadow-xl">
                <h2 className="text-xl font-semibold text-white mb-6 border-b border-white/10 pb-4 flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-xs text-[#4EA8E9]">5</span>
                  Fees and Charges
                </h2>
                <ul className="space-y-4 text-white/70 leading-relaxed text-[14px] ml-2">
                  <li><strong className="text-white/90">5.1.</strong> The Merchant shall pay the Intermediary a commission of 10% (varies from merchant to merchant) of the total amount (including any taxes) of the invoices paid by the customer against the product or service sold to the platform members (Customers).</li>
                  <li><strong className="text-white/90">5.2.</strong> The Merchant shall not be responsible for paying any applicable transaction fees, payment processing fees, and other charges imposed by the Intermediary or third-party service providers.</li>
                  <li><strong className="text-white/90">5.3.</strong> The intermediary may charge additional fees for merchant promotions, advertisements, specific product listings, featured placement, and other value-added services.</li>
                </ul>
              </div>

              <div className="space-y-8">
                {/* Section 6 */}
                <div className="rounded-2xl border border-white/10 bg-[#0C1A31]/50 p-6 sm:p-8 backdrop-blur-sm shadow-xl">
                  <h2 className="text-xl font-semibold text-white mb-6 border-b border-white/10 pb-4 flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-xs text-[#4EA8E9]">6</span>
                    Term and Termination
                  </h2>
                  <ul className="space-y-4 text-white/70 leading-relaxed text-[14px] ml-2">
                    <li><strong className="text-white/90">6.1.</strong> This Agreement shall commence on the 1st of September 2024 and shall continue in full force and effect until terminated by either party upon 7 days&apos; written notice to the other party.</li>
                    <li><strong className="text-white/90">6.2.</strong> Either party may terminate this Agreement immediately if the other party materially breaches this Agreement and fails to cure such breach within 7 days of written notice.</li>
                  </ul>
                </div>

                {/* Section 7 */}
                <div className="rounded-2xl border border-white/10 bg-[#0C1A31]/50 p-6 sm:p-8 backdrop-blur-sm shadow-xl">
                  <h2 className="text-xl font-semibold text-white mb-6 border-b border-white/10 pb-4 flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-xs text-[#4EA8E9]">7</span>
                    Dispute Resolution
                  </h2>
                  <ul className="space-y-4 text-white/70 leading-relaxed text-[14px] ml-2">
                    <li><strong className="text-white/90">7.1.</strong> Any disputes arising out of or in connection with this Agreement shall be resolved through negotiation in good faith.</li>
                    <li><strong className="text-white/90">7.2.</strong> If the parties are unable to resolve a dispute through negotiation, such dispute shall be submitted to arbitration, mediation, or litigation.</li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Section 8: Settlement of Funds */}
          <ScrollReveal delay={100}>
            <div className="rounded-2xl border border-white/10 bg-[#0C1A31]/50 p-6 sm:p-10 backdrop-blur-sm shadow-xl scroll-mt-24">
              <h2 className="text-2xl font-semibold text-white mb-6 border-b border-white/10 pb-4 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm text-[#4EA8E9]">8</span>
                Settlement of Funds
              </h2>
              
              <div className="space-y-6 text-white/70 leading-relaxed text-[15px] ml-2 sm:ml-11">
                <p className="mb-6 font-medium text-white/90">Incorporating Daily Settlement into the Agreement:</p>
                <ul className="space-y-4">
                  <li><strong className="text-white/90">8.1. Daily Settlement:</strong> The Intermediary will settle the net proceeds from bill payments made through its platform by its members against the bills for the Merchant&apos;s products or services purchased by those members. Net proceeds are calculated by subtracting the Intermediary&apos;s commission and any applicable fees or charges from the total sales amount.</li>
                  <li><strong className="text-white/90">8.2. Settlement Timeline:</strong> The Intermediary will initiate the transfer of net proceeds to the Merchant&apos;s designated bank account within 24 hours of the end of each business day.</li>
                  <li><strong className="text-white/90">8.3. Settlement Cutoff Time:</strong> The Intermediary and Merchant will mutually agree on a daily cutoff time for processing sales and initiating settlements.</li>
                  <li><strong className="text-white/90">8.4. Bank Details:</strong> The Merchant must provide accurate and up-to-date bank account details to the Intermediary for fund transfers. The Intermediary is not liable for settlement delays or errors caused by incorrect or outdated bank information provided by the Merchant.</li>
                  <li><strong className="text-white/90">8.5. Settlement Confirmation:</strong> The Intermediary will provide the Merchant with a daily settlement report detailing the total sales amount, commission deducted, and net amount transferred.</li>
                  <li><strong className="text-white/90">8.6. Currency:</strong> Generally, settlements will be in the local currency and equivalent to wallet balances at a 1:1 ratio. Beneficiaries may request settlement in multiple currencies denominated in the local currency or USD, subject to applicable exchange rates and fees borne by the merchant.</li>
                  <li><strong className="text-white/90">8.7. Payment Methods:</strong> Settlements will be made through bank transfer, UPI, or other mutually agreed-upon payment methods, and bank charges for transfers will be borne by the Merchant.</li>
                  <li><strong className="text-white/90">8.9. Dispute Resolution:</strong> Any discrepancies in settlement amounts will be resolved through generally acceptable manners by both parties.</li>
                  <li><strong className="text-white/90">8.10. Force Majeure:</strong> Neither party will be liable for delays in settlement due to unforeseen circumstances beyond its reasonable control, such as Networks &amp; Banking system issues, natural disasters, war, government actions and so on.</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </main>
  );
}
