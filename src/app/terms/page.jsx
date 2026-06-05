import ScrollReveal from "@/components/ui/ScrollReveal";
import BlurReveal from "@/components/sections/BlurReveal";
import LastUpdateDate from "@/components/sections/LastUpdateDate";
import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions - PayNback",
  description: "Terms and conditions, shipment policy, refund policy, and return policy for PayNback.",
};

export default function TermsAndConditionsPage() {
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
            Terms & Conditions
          </h1>
          <p className="text-lg text-white/60 mb-8 max-w-2xl mx-auto leading-relaxed">
            Thank you for choosing PayNback, an offline shopping service provided by PayNback InfoSolutions LLP. By agreeing to these terms and conditions, you acknowledge that you have read and understood the following provisions and agree to be bound by them.
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
          
          {/* Section 1: General Terms */}
          <ScrollReveal>
            <div className="rounded-2xl border border-white/10 bg-[#0C1A31]/50 p-6 sm:p-10 backdrop-blur-sm shadow-xl">
              <h2 className="text-2xl font-semibold text-white mb-8 border-b border-white/10 pb-4">General Terms</h2>
              
              <div className="space-y-8 text-white/70 leading-relaxed text-[15px]">
                
                {/* 1. Account Registration */}
                <div>
                  <h3 className="text-lg font-medium text-white mb-3 flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-xs text-[#4EA8E9]">1</span>
                    Account Registration
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 ml-7 marker:text-[#4EA8E9]">
                    <li><strong className="text-white/90 font-medium">Personal Information Protection:</strong> Your account information is securely stored and protected according to industry standards and regulations.</li>
                    <li><strong className="text-white/90 font-medium">Identity Verification:</strong> You may be required to verify your identity during registration to enhance security and comply with regulations.</li>
                    <li><strong className="text-white/90 font-medium">Age Requirement:</strong> Users must be at least 18 years old to use the PayNback shopping service.</li>
                    <li><strong className="text-white/90 font-medium">Confidentiality Responsibility:</strong> It is your responsibility to maintain the confidentiality of your account information and password.</li>
                    <li><strong className="text-white/90 font-medium">Accuracy of Information:</strong> You agree to provide accurate and up-to-date information during the registration process.</li>
                  </ul>
                </div>

                {/* 2. PayNback shopping service */}
                <div>
                  <h3 className="text-lg font-medium text-white mb-3 flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-xs text-[#4EA8E9]">2</span>
                    PayNback Shopping Service
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 ml-7 marker:text-[#4EA8E9]">
                    <li>The PayNback shopping service allows you to purchase credits as points/coupons for transactions with merchants that accept PayNback.</li>
                    <li>Various payment methods, such as credit/debit cards, UPI, and bank transfers, can be used to add credits to your PayNback shopping service.</li>
                    <li>You can use your PayNback shopping service balance for payments at participating merchants for various transactions and services.</li>
                    <li><strong className="text-white/90 font-medium">Billing Security:</strong> Your billing information is encrypted and securely stored to protect your payment details.</li>
                    <li><strong className="text-white/90 font-medium">Fee Disclosure:</strong> PayNback may charge fees for certain transactions or services, which will be disclosed before you confirm the transaction.</li>
                  </ul>
                </div>

                {/* 3. Changes to Terms (First occurrence) */}
                <div>
                  <h3 className="text-lg font-medium text-white mb-3 flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-xs text-[#4EA8E9]">3</span>
                    Service Features
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 ml-7 marker:text-[#4EA8E9]">
                    <li>The service may offer features like sending money to other users or making bill payments.</li>
                    <li><strong className="text-white/90 font-medium">Secure Transactions:</strong> All PayNback shopping service transactions are encrypted for security.</li>
                    <li><strong className="text-white/90 font-medium">Regulatory Compliance:</strong> The PayNback shopping services comply with financial regulations to ensure safe transactions.</li>
                  </ul>
                </div>

                {/* 4. Transaction Processing */}
                <div>
                  <h3 className="text-lg font-medium text-white mb-3 flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-xs text-[#4EA8E9]">4</span>
                    Transaction Processing
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 ml-7 marker:text-[#4EA8E9]">
                    <li>Transactions are processed immediately when you use the PayNback shopping service for payments.</li>
                    <li><strong className="text-white/90 font-medium">Full Payment Responsibility:</strong> You agree to pay the full authorized transaction amount, including any applicable fees.</li>
                    <li><strong className="text-white/90 font-medium">Fraud Prevention:</strong> Advanced fraud detection measures are in place to prevent unauthorized transactions.</li>
                    <li><strong className="text-white/90 font-medium">Transaction Monitoring:</strong> Transactions are continuously monitored in real-time to detect and prevent suspicious activities.</li>
                  </ul>
                </div>

                {/* 5. Security */}
                <div>
                  <h3 className="text-lg font-medium text-white mb-3 flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-xs text-[#4EA8E9]">5</span>
                    Security
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 ml-7 mb-4 marker:text-[#4EA8E9]">
                    <li><strong className="text-white/90 font-medium">Data Protection:</strong> Robust security measures are implemented to safeguard your account and financial information.</li>
                    <li><strong className="text-white/90 font-medium">Two-factor Authentication:</strong> Two-factor authentication options are available for added account security.</li>
                  </ul>
                  <div className="ml-7 rounded-xl bg-white/3 p-5 border border-white/5 mt-4">
                    <p className="mb-4 text-white/80">Being a convenient and efficient way to make transactions, PayNback advises some tips to ensure the security of digital payment apps:</p>
                    <ul className="list-none space-y-3">
                      <li className="flex gap-3">
                        <span className="text-[#4EA8E9]">✓</span>
                        <span><strong className="text-white/90 font-medium">Use strong authentication methods:</strong> Enable two-factor authentication or biometric authentication options offered by the app.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-[#4EA8E9]">✓</span>
                        <span><strong className="text-white/90 font-medium">Protect your device:</strong> Keep your device and the digital payment app up to date. Use strong, unique passwords and avoid sharing your device.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-[#4EA8E9]">✓</span>
                        <span><strong className="text-white/90 font-medium">Be cautious with public Wi-Fi:</strong> Avoid making transactions on public Wi-Fi networks, as they can be insecure.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-[#4EA8E9]">✓</span>
                        <span><strong className="text-white/90 font-medium">Monitor your transactions:</strong> Keep an eye on your account activity and report any suspicious transactions immediately.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* 6. Fees and Charges */}
                <div>
                  <h3 className="text-lg font-medium text-white mb-3 flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-xs text-[#4EA8E9]">6</span>
                    Fees and Charges
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 ml-7 marker:text-[#4EA8E9]">
                    <li><strong className="text-white/90 font-medium">Transparent Fees:</strong> Clear information on applicable fees for transactions and services is provided.</li>
                    <li><strong className="text-white/90 font-medium">Billing Security:</strong> Your payment details are securely stored and encrypted to prevent unauthorized access.</li>
                    <li><strong className="text-white/90 font-medium">Fee Disclosure:</strong> PayNback may charge fees for specific transactions, such as adding funds or transferring money to other users. Fees will be communicated before transaction confirmation.</li>
                  </ul>
                </div>

                {/* 7. Limitation of Liability */}
                <div>
                  <h3 className="text-lg font-medium text-white mb-3 flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-xs text-[#4EA8E9]">7</span>
                    Limitation of Liability
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 ml-7 marker:text-[#4EA8E9]">
                    <li><strong className="text-white/90 font-medium">User Responsibility:</strong> While we ensure the security of your account, it is essential for users to take precautions to protect their account credentials.</li>
                    <li><strong className="text-white/90 font-medium">Reporting Concerns:</strong> Promptly report any suspicious activity or security breaches to our customer support team.</li>
                  </ul>
                </div>

                {/* 8. Regulatory Compliance */}
                <div>
                  <h3 className="text-lg font-medium text-white mb-3 flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-xs text-[#4EA8E9]">8</span>
                    Regulatory Compliance
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 ml-7 marker:text-[#4EA8E9]">
                    <li><strong className="text-white/90 font-medium">Compliance Standards:</strong> PayNback adheres to relevant financial regulations and data protection laws to safeguard your personal and financial information.</li>
                    <li><strong className="text-white/90 font-medium">Regulatory Updates:</strong> Services are updated in accordance with changes in regulatory requirements to ensure compliance and enhance security measures.</li>
                  </ul>
                </div>

                {/* 9. Governing Law */}
                <div>
                  <h3 className="text-lg font-medium text-white mb-3 flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-xs text-[#4EA8E9]">9</span>
                    Governing Law
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 ml-7 marker:text-[#4EA8E9]">
                    <li><strong className="text-white/90 font-medium">Legal Compliance:</strong> By using PayNback, you agree to comply with Indian laws related to financial transactions and data protection.</li>
                  </ul>
                </div>

                {/* 10. Changes to Terms */}
                <div>
                  <h3 className="text-lg font-medium text-white mb-3 flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-xs text-[#4EA8E9]">10</span>
                    Changes to Terms
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 ml-7 marker:text-[#4EA8E9]">
                    <li><strong className="text-white/90 font-medium">Notification of Changes:</strong> Any updates to terms and conditions will be communicated in advance via email or the app.</li>
                    <li><strong className="text-white/90 font-medium">Acceptance of Changes:</strong> Your continued use of the service after updates implies acceptance of the modified terms.</li>
                  </ul>
                </div>

                {/* 11. Dispute Resolution */}
                <div>
                  <h3 className="text-lg font-medium text-white mb-3 flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-xs text-[#4EA8E9]">11</span>
                    Dispute Resolution
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 ml-7 marker:text-[#4EA8E9]">
                    <li><strong className="text-white/90 font-medium">Arbitration Clause:</strong> In the event of disputes, parties agree to resolve them through arbitration under Indian law.</li>
                    <li><strong className="text-white/90 font-medium">Conflict Resolution:</strong> We prioritize addressing concerns in a fair and timely manner, protecting your rights as a PayNback user.</li>
                  </ul>
                </div>

              </div>
            </div>
          </ScrollReveal>

          {/* Section 2: Shipment Policy */}
          <ScrollReveal delay={100}>
            <div id="shipment-policy" className="rounded-2xl border border-white/10 bg-[#0C1A31]/50 p-6 sm:p-10 backdrop-blur-sm shadow-xl scroll-mt-24">
              <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4EA8E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                Shipment Policy
              </h2>
              <div className="space-y-6 text-white/70 leading-relaxed text-[15px]">
                <p>We strive to connect you with a wide variety of products from amazing merchants. Please note that each merchant on our platform fulfils and ships their own orders independently. This means the specific shipping options, costs, and timelines will vary depending on the merchant you purchase from.</p>
                
                <h4 className="text-white/90 font-medium mt-6 mb-2">General Overview of the Shipment Process:</h4>
                <ul className="list-disc pl-5 space-y-2 marker:text-[#4EA8E9]">
                  <li><strong className="text-white/90">Order Fulfilment:</strong> Once you place an order, the merchant you purchased from will process and fulfil the order. This may include packaging and preparing the shipment for pick-up by the chosen carrier.</li>
                  <li><strong className="text-white/90">Shipping Options and Costs:</strong> Each merchant will offer a variety of shipping options at checkout. These options will be displayed along with their associated costs. You can choose the option that best suits your needs and budget.</li>
                  <li><strong className="text-white/90">Delivery Timeframes:</strong> Merchants will provide estimated delivery timelines for each shipping option at checkout. Please note that these are estimates and actual delivery times may vary.</li>
                  <li><strong className="text-white/90">Tracking Your Order:</strong> Once your order ships, the merchant will provide you with a tracking number so you can follow your package&apos;s progress.</li>
                </ul>

                <h4 className="text-white/90 font-medium mt-6 mb-2">For specific details regarding shipping on a particular product:</h4>
                <ul className="list-disc pl-5 space-y-2 marker:text-[#4EA8E9]">
                  <li>Review the product listing information.</li>
                  <li>Visit the merchant&apos;s store or online page on our platform.</li>
                  <li>Contact the merchant directly through our platform for any questions.</li>
                </ul>

                <div className="p-4 rounded-xl bg-[#4EA8E9]/10 border border-[#4EA8E9]/20 mt-6">
                  <p className="text-white/80"><strong className="text-white/90">Please note:</strong> As each merchant fulfils their own orders, any inquiries or concerns regarding shipping delays, lost packages, or damaged items should be directed to the merchant you purchased from. We will do our best to assist you in finding the merchant&apos;s contact information.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Section 3: Refund Policy */}
          <ScrollReveal delay={100}>
            <div id="refund-policy" className="rounded-2xl border border-white/10 bg-[#0C1A31]/50 p-6 sm:p-10 backdrop-blur-sm shadow-xl scroll-mt-24">
              <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4EA8E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line></svg>
                PayNback Refund Policy
              </h2>
              <div className="space-y-6 text-white/70 leading-relaxed text-[15px]">
                <p>At PayNback, we prioritize a secure and convenient way to manage your credit points/coupons. This policy outlines situations where you might receive compensation for issues related to your PayNback account, as refunds for purchases made with your PayNback shopping service credits are not possible.</p>
                
                <p>PayNback shopping service facilitates e-commerce by connecting consumers and merchants. It benefits both parties by offering significant discounts and rewards programs. These rewards and discounts are credited to your respective PayNback shopping services within the platform and can be used for future transactions between buyers and sellers. However, it&apos;s important to note that PayNback is not a bank.</p>
                
                <p>Users add credits to their PayNback shopping services by purchasing points/coupons with various payment methods. These credits can be used for purchases at authorized merchants, loyalty programs, and PayNback affiliates. However, unlike cash, these credits cannot be directly withdrawn or refunded. They can only be redeemed for goods or services offered by PayNback affiliates or used according to the specific rules of reward programs offered by PayNback or its partners. Transfers between PayNback shopping services are allowed, subject to security checks, and PayNback may charge fees for this service.</p>
                
                <p>Reward credits added to a member&apos;s PayNback shopping service are for use within the specific program offered by PayNback or its partners and cannot be exchanged for cash.</p>
                
                <p>While PayNback prioritizes secure and convenient credit point and reward management, refunds for purchases made with PayNback shopping service credits are typically unavailable due to the system&apos;s closed-loop nature. However, this policy details situations where you may receive compensation for issues related to your PayNback account.</p>

                <div className="grid sm:grid-cols-2 gap-6 mt-8">
                  {/* General Compensation */}
                  <div className="rounded-xl border border-white/5 bg-white/2 p-5">
                    <h4 className="text-white/90 font-semibold mb-3 text-lg">General Compensation</h4>
                    <ul className="space-y-4">
                      <li>
                        <strong className="text-white/90 block mb-1">Unauthorized Transactions:</strong> 
                        If you believe a transaction was made on your account without your authorization, please contact our support team immediately. We will investigate the claim and if unauthorized use is confirmed, we will credit your PayNback shopping service with the full amount.
                      </li>
                      <li>
                        <strong className="text-white/90 block mb-1">Technical Errors:</strong> 
                        In the case of a technical error with the PayNback application that results in a failed or incorrect transaction, we will credit your PayNback shopping service with the full amount upon verification of the issue.
                      </li>
                    </ul>
                  </div>

                  {/* Ineligible Compensation */}
                  <div className="rounded-xl border border-white/5 bg-white/2 p-5">
                    <h4 className="text-white/90 font-semibold mb-3 text-lg">Ineligible Compensation</h4>
                    <ul className="space-y-4">
                      <li>
                        <strong className="text-white/90 block mb-1">Authorized Transactions:</strong> 
                        Since PayNback operates on a closed-loop system, compensation cannot be provided for transactions you authorized through the app, even if you&apos;re unhappy with the service or product.
                      </li>
                      <li>
                        <strong className="text-white/90 block mb-1">Accidental Top-Ups:</strong> 
                        While refunds for accidental top-ups aren&apos;t guaranteed, contact support. We&apos;ll review each on a case-by-case basis.
                      </li>
                      <li>
                        <strong className="text-white/90 block mb-1">Time Limits:</strong> 
                        All requests for compensation related to account issues must be submitted within 7 days of the transaction date.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-white/90 font-medium mb-3">Refund Process</h4>
                  <p className="mb-3">To request a refund, please contact our support team through the live chat at <a href="https://paynback.com" className="text-[#4EA8E9] hover:underline">paynback.com</a>, PayNback application or by email at <a href="mailto:support@paynback.com" className="text-[#4EA8E9] hover:underline">support@paynback.com</a>. Be sure to include:</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['PayNback ID, Name', 'Registered Mobile & Email', 'Date and Time of Transaction', 'Transaction Details', 'Reason for Refund Request'].map(tag => (
                      <span key={tag} className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs">{tag}</span>
                    ))}
                  </div>
                  <p>Our support team will review your request and respond within 4 business days. If your refund is approved, the points/coupons will be credited back to your PayNback shopping service account immediately.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Section 4: Return Policy */}
          <ScrollReveal delay={100}>
            <div id="return-policy" className="rounded-2xl border border-white/10 bg-[#0C1A31]/50 p-6 sm:p-10 backdrop-blur-sm shadow-xl scroll-mt-24">
              <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4EA8E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                Return Policy
              </h2>
              <div className="space-y-4 text-white/70 leading-relaxed text-[15px]">
                <p>Here at PayNback, we want you to be happy with your purchases. However, we understand that sometimes things don&apos;t work out as planned. That&apos;s why our return policy is designed to be simple and transparent.</p>
                
                <p>It&apos;s important to note that each merchant on our platform sets their own return policy. You&apos;ll find details about a specific product&apos;s return window, acceptable return conditions, and any restocking fees on the merchant&apos;s page or within the product listing itself.</p>
                
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="mt-1 shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#4EA8E9]/20 text-[#4EA8E9]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                  </div>
                  <div>
                    <h5 className="text-white/90 font-medium mb-1">Here&apos;s a quick tip:</h5>
                    <p className="text-sm">Be sure to check the return policy before you complete your purchase. This way, you&apos;ll know exactly what to expect if you need to return an item.</p>
                  </div>
                </div>

                <p>For any questions or assistance with a return, please contact the merchant directly. Their contact information will be readily available on their storefront or within your order details.</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Section 5: Acknowledgement & Contact */}
          <ScrollReveal delay={100}>
            <div className="rounded-2xl bg-linear-to-br from-[#1B519C]/20 to-[#080F18] border border-white/10 p-6 sm:p-10 backdrop-blur-sm shadow-xl">
              <h2 className="text-2xl font-semibold text-white mb-6">Acknowledgement</h2>
              <div className="space-y-4 text-white/70 leading-relaxed text-[15px] italic border-l-2 border-[#4EA8E9] pl-6 py-2">
                <p>Being a PayNback shopping service user, I hereby acknowledge that I have read and understood the terms and conditions outlined by PayNback LLP for the use of their PayNback shopping services. I consent to abide by these terms and agree to be bound by the provisions set forth in the agreement.</p>
                <p>I understand that by using the PayNback shopping service, I am required to provide accurate information during registration, maintain the confidentiality of my account details, and comply with all age and regulatory requirements.</p>
                <p>Furthermore, I consent to the storage and protection of my personal and financial information in accordance with industry standards and regulatory guidelines. I understand that PayNback may charge fees for certain transactions or services, and I agree to pay all authorized transaction amounts, including any applicable fees.</p>
                <p>I acknowledge the importance of reporting any suspicious activities or security breaches promptly and understand the arbitration clause for resolving disputes in accordance with Indian law.</p>
                <p>By continuing to use the PayNback shopping service, I hereby give my consent to the terms and conditions outlined above. I understand that any changes to the terms will be communicated to me in advance, and my continued use of the service after updates implies acceptance of the modified terms.</p>
              </div>

              <div className="mt-10 pt-6 border-t border-white/10 text-center">
                <h3 className="text-lg font-medium text-white mb-3">Contact Us</h3>
                <p className="text-white/70 mb-4">If you have any questions regarding these terms, please do not hesitate to contact us.</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="mailto:support@paynback.com" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[#080F18] transition hover:bg-white/90">
                    Email Support
                  </a>
                  <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-white/10">
                    Contact Page
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </main>
  );
}
