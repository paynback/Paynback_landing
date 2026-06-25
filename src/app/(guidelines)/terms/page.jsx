import Link from "next/link";
import LegalGuidelinesLayout from "@/components/legal/LegalGuidelinesLayout";
import { Section, SubSection } from "@/components/legal/LegalSection";

export const metadata = {
  title: "Terms & Conditions - PayNback",
  description:
    "Terms and conditions, shipment policy, refund policy, and return policy for PayNback.",
};

const TOC_ITEMS = [
  { id: "introduction", label: "Introduction" },
  { id: "general-terms", label: "General Terms" },
  { id: "shipment-policy", label: "Shipment Policy" },
  { id: "refund-policy", label: "Refund Policy" },
  { id: "return-policy", label: "Return Policy" },
  { id: "acknowledgement", label: "Acknowledgement" },
  { id: "contact", label: "Contact Us" },
];

export default function TermsAndConditionsPage() {
  return (
    <LegalGuidelinesLayout
      title="Terms & Conditions"
      breadcrumbLabel="Terms & Conditions"
      tocItems={TOC_ITEMS}
    >
      <Section id="introduction" number="1" title="Introduction">
        <p>
          Thank you for choosing PayNback, an offline shopping service provided by PayNback
          InfoSolutions LLP. By agreeing to these terms and conditions, you acknowledge that you
          have read and understood the following provisions and agree to be bound by them.
        </p>
      </Section>

      <Section id="general-terms" number="2" title="General Terms">
        <SubSection number="2.1" title="Account Registration">
          <ul className="list-disc space-y-2 pl-5 marker:text-[#4EA8E9]">
            <li>
              <strong className="text-white/90">Personal Information Protection:</strong> Your
              account information is securely stored and protected according to industry standards
              and regulations.
            </li>
            <li>
              <strong className="text-white/90">Identity Verification:</strong> You may be required
              to verify your identity during registration to enhance security and comply with
              regulations.
            </li>
            <li>
              <strong className="text-white/90">Age Requirement:</strong> Users must be at least 18
              years old to use the PayNback shopping service.
            </li>
            <li>
              <strong className="text-white/90">Confidentiality Responsibility:</strong> It is your
              responsibility to maintain the confidentiality of your account information and
              password.
            </li>
            <li>
              <strong className="text-white/90">Accuracy of Information:</strong> You agree to
              provide accurate and up-to-date information during the registration process.
            </li>
          </ul>
        </SubSection>

        <SubSection number="2.2" title="PayNback Shopping Service">
          <ul className="list-disc space-y-2 pl-5 marker:text-[#4EA8E9]">
            <li>
              The PayNback shopping service allows you to purchase credits as points/coupons for
              transactions with merchants that accept PayNback.
            </li>
            <li>
              Various payment methods, such as credit/debit cards, UPI, and bank transfers, can be
              used to add credits to your PayNback shopping service.
            </li>
            <li>
              You can use your PayNback shopping service balance for payments at participating
              merchants for various transactions and services.
            </li>
            <li>
              <strong className="text-white/90">Billing Security:</strong> Your billing information
              is encrypted and securely stored to protect your payment details.
            </li>
            <li>
              <strong className="text-white/90">Fee Disclosure:</strong> PayNback may charge fees
              for certain transactions or services, which will be disclosed before you confirm the
              transaction.
            </li>
          </ul>
        </SubSection>

        <SubSection number="2.3" title="Service Features">
          <ul className="list-disc space-y-2 pl-5 marker:text-[#4EA8E9]">
            <li>
              The service may offer features like sending money to other users or making bill
              payments.
            </li>
            <li>
              <strong className="text-white/90">Secure Transactions:</strong> All PayNback shopping
              service transactions are encrypted for security.
            </li>
            <li>
              <strong className="text-white/90">Regulatory Compliance:</strong> The PayNback
              shopping services comply with financial regulations to ensure safe transactions.
            </li>
          </ul>
        </SubSection>

        <SubSection number="2.4" title="Transaction Processing">
          <ul className="list-disc space-y-2 pl-5 marker:text-[#4EA8E9]">
            <li>
              Transactions are processed immediately when you use the PayNback shopping service for
              payments.
            </li>
            <li>
              <strong className="text-white/90">Full Payment Responsibility:</strong> You agree to
              pay the full authorized transaction amount, including any applicable fees.
            </li>
            <li>
              <strong className="text-white/90">Fraud Prevention:</strong> Advanced fraud detection
              measures are in place to prevent unauthorized transactions.
            </li>
            <li>
              <strong className="text-white/90">Transaction Monitoring:</strong> Transactions are
              continuously monitored in real-time to detect and prevent suspicious activities.
            </li>
          </ul>
        </SubSection>

        <SubSection number="2.5" title="Security">
          <ul className="list-disc space-y-2 pl-5 marker:text-[#4EA8E9]">
            <li>
              <strong className="text-white/90">Data Protection:</strong> Robust security measures
              are implemented to safeguard your account and financial information.
            </li>
            <li>
              <strong className="text-white/90">Two-factor Authentication:</strong> Two-factor
              authentication options are available for added account security.
            </li>
          </ul>
          <p className="pt-2 text-white/80">
            Being a convenient and efficient way to make transactions, PayNback advises some tips to
            ensure the security of digital payment apps:
          </p>
          <ul className="list-none space-y-3 pt-2">
            <li className="flex gap-3">
              <span className="text-[#4EA8E9]">✓</span>
              <span>
                <strong className="text-white/90">Use strong authentication methods:</strong> Enable
                two-factor authentication or biometric authentication options offered by the app.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#4EA8E9]">✓</span>
              <span>
                <strong className="text-white/90">Protect your device:</strong> Keep your device and
                the digital payment app up to date. Use strong, unique passwords and avoid sharing
                your device.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#4EA8E9]">✓</span>
              <span>
                <strong className="text-white/90">Be cautious with public Wi-Fi:</strong> Avoid
                making transactions on public Wi-Fi networks, as they can be insecure.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#4EA8E9]">✓</span>
              <span>
                <strong className="text-white/90">Monitor your transactions:</strong> Keep an eye on
                your account activity and report any suspicious transactions immediately.
              </span>
            </li>
          </ul>
        </SubSection>

        <SubSection number="2.6" title="Fees and Charges">
          <ul className="list-disc space-y-2 pl-5 marker:text-[#4EA8E9]">
            <li>
              <strong className="text-white/90">Transparent Fees:</strong> Clear information on
              applicable fees for transactions and services is provided.
            </li>
            <li>
              <strong className="text-white/90">Billing Security:</strong> Your payment details are
              securely stored and encrypted to prevent unauthorized access.
            </li>
            <li>
              <strong className="text-white/90">Fee Disclosure:</strong> PayNback may charge fees
              for specific transactions, such as adding funds or transferring money to other users.
              Fees will be communicated before transaction confirmation.
            </li>
          </ul>
        </SubSection>

        <SubSection number="2.7" title="Limitation of Liability">
          <ul className="list-disc space-y-2 pl-5 marker:text-[#4EA8E9]">
            <li>
              <strong className="text-white/90">User Responsibility:</strong> While we ensure the
              security of your account, it is essential for users to take precautions to protect
              their account credentials.
            </li>
            <li>
              <strong className="text-white/90">Reporting Concerns:</strong> Promptly report any
              suspicious activity or security breaches to our customer support team.
            </li>
          </ul>
        </SubSection>

        <SubSection number="2.8" title="Regulatory Compliance">
          <ul className="list-disc space-y-2 pl-5 marker:text-[#4EA8E9]">
            <li>
              <strong className="text-white/90">Compliance Standards:</strong> PayNback adheres to
              relevant financial regulations and data protection laws to safeguard your personal and
              financial information.
            </li>
            <li>
              <strong className="text-white/90">Regulatory Updates:</strong> Services are updated in
              accordance with changes in regulatory requirements to ensure compliance and enhance
              security measures.
            </li>
          </ul>
        </SubSection>

        <SubSection number="2.9" title="Governing Law">
          <ul className="list-disc space-y-2 pl-5 marker:text-[#4EA8E9]">
            <li>
              <strong className="text-white/90">Legal Compliance:</strong> By using PayNback, you
              agree to comply with Indian laws related to financial transactions and data protection.
            </li>
          </ul>
        </SubSection>

        <SubSection number="2.10" title="Changes to Terms">
          <ul className="list-disc space-y-2 pl-5 marker:text-[#4EA8E9]">
            <li>
              <strong className="text-white/90">Notification of Changes:</strong> Any updates to
              terms and conditions will be communicated in advance via email or the app.
            </li>
            <li>
              <strong className="text-white/90">Acceptance of Changes:</strong> Your continued use
              of the service after updates implies acceptance of the modified terms.
            </li>
          </ul>
        </SubSection>

        <SubSection number="2.11" title="Dispute Resolution">
          <ul className="list-disc space-y-2 pl-5 marker:text-[#4EA8E9]">
            <li>
              <strong className="text-white/90">Arbitration Clause:</strong> In the event of
              disputes, parties agree to resolve them through arbitration under Indian law.
            </li>
            <li>
              <strong className="text-white/90">Conflict Resolution:</strong> We prioritize
              addressing concerns in a fair and timely manner, protecting your rights as a PayNback
              user.
            </li>
          </ul>
        </SubSection>
      </Section>

      <Section id="shipment-policy" number="3" title="Shipment Policy">
        <p>
          We strive to connect you with a wide variety of products from amazing merchants. Please
          note that each merchant on our platform fulfils and ships their own orders independently.
          This means the specific shipping options, costs, and timelines will vary depending on the
          merchant you purchase from.
        </p>
        <SubSection number="3.1" title="General Overview of the Shipment Process">
          <ul className="list-disc space-y-2 pl-5 marker:text-[#4EA8E9]">
            <li>
              <strong className="text-white/90">Order Fulfilment:</strong> Once you place an order,
              the merchant you purchased from will process and fulfil the order. This may include
              packaging and preparing the shipment for pick-up by the chosen carrier.
            </li>
            <li>
              <strong className="text-white/90">Shipping Options and Costs:</strong> Each merchant
              will offer a variety of shipping options at checkout. These options will be displayed
              along with their associated costs. You can choose the option that best suits your
              needs and budget.
            </li>
            <li>
              <strong className="text-white/90">Delivery Timeframes:</strong> Merchants will provide
              estimated delivery timelines for each shipping option at checkout. Please note that
              these are estimates and actual delivery times may vary.
            </li>
            <li>
              <strong className="text-white/90">Tracking Your Order:</strong> Once your order ships,
              the merchant will provide you with a tracking number so you can follow your
              package&apos;s progress.
            </li>
          </ul>
        </SubSection>
        <SubSection number="3.2" title="Shipping details for a particular product">
          <ul className="list-disc space-y-2 pl-5 marker:text-[#4EA8E9]">
            <li>Review the product listing information.</li>
            <li>Visit the merchant&apos;s store or online page on our platform.</li>
            <li>Contact the merchant directly through our platform for any questions.</li>
          </ul>
        </SubSection>
        <p>
          <strong className="text-white/90">Please note:</strong> As each merchant fulfils their own
          orders, any inquiries or concerns regarding shipping delays, lost packages, or damaged
          items should be directed to the merchant you purchased from. We will do our best to assist
          you in finding the merchant&apos;s contact information.
        </p>
      </Section>

      <Section id="refund-policy" number="4" title="PayNback Refund Policy">
        <p>
          At PayNback, we prioritize a secure and convenient way to manage your credit
          points/coupons. This policy outlines situations where you might receive compensation for
          issues related to your PayNback account, as refunds for purchases made with your PayNback
          shopping service credits are not possible.
        </p>
        <p>
          PayNback shopping service facilitates e-commerce by connecting consumers and merchants. It
          benefits both parties by offering significant discounts and rewards programs. These
          rewards and discounts are credited to your respective PayNback shopping services within
          the platform and can be used for future transactions between buyers and sellers. However,
          it&apos;s important to note that PayNback is not a bank.
        </p>
        <p>
          Users add credits to their PayNback shopping services by purchasing points/coupons with
          various payment methods. These credits can be used for purchases at authorized merchants,
          loyalty programs, and PayNback affiliates. However, unlike cash, these credits cannot be
          directly withdrawn or refunded. They can only be redeemed for goods or services offered by
          PayNback affiliates or used according to the specific rules of reward programs offered by
          PayNback or its partners. Transfers between PayNback shopping services are allowed,
          subject to security checks, and PayNback may charge fees for this service.
        </p>
        <p>
          Reward credits added to a member&apos;s PayNback shopping service are for use within the
          specific program offered by PayNback or its partners and cannot be exchanged for cash.
        </p>
        <p>
          While PayNback prioritizes secure and convenient credit point and reward management,
          refunds for purchases made with PayNback shopping service credits are typically unavailable
          due to the system&apos;s closed-loop nature. However, this policy details situations
          where you may receive compensation for issues related to your PayNback account.
        </p>

        <SubSection number="4.1" title="General Compensation">
          <ul className="space-y-4">
            <li>
              <strong className="text-white/90">Unauthorized Transactions:</strong> If you believe a
              transaction was made on your account without your authorization, please contact our
              support team immediately. We will investigate the claim and if unauthorized use is
              confirmed, we will credit your PayNback shopping service with the full amount.
            </li>
            <li>
              <strong className="text-white/90">Technical Errors:</strong> In the case of a
              technical error with the PayNback application that results in a failed or incorrect
              transaction, we will credit your PayNback shopping service with the full amount upon
              verification of the issue.
            </li>
          </ul>
        </SubSection>

        <SubSection number="4.2" title="Ineligible Compensation">
          <ul className="space-y-4">
            <li>
              <strong className="text-white/90">Authorized Transactions:</strong> Since PayNback
              operates on a closed-loop system, compensation cannot be provided for transactions
              you authorized through the app, even if you&apos;re unhappy with the service or
              product.
            </li>
            <li>
              <strong className="text-white/90">Accidental Top-Ups:</strong> While refunds for
              accidental top-ups aren&apos;t guaranteed, contact support. We&apos;ll review each on
              a case-by-case basis.
            </li>
            <li>
              <strong className="text-white/90">Time Limits:</strong> All requests for compensation
              related to account issues must be submitted within 7 days of the transaction date.
            </li>
          </ul>
        </SubSection>

        <SubSection number="4.3" title="Refund Process">
          <p>
            To request a refund, please contact our support team through the live chat at{" "}
            <a
              href="https://paynback.com"
              className="text-[#4EA8E9] underline underline-offset-2 transition hover:text-[#99BAEC]"
            >
              paynback.com
            </a>
            , PayNback application or by email at{" "}
            <a
              href="mailto:support@paynback.com"
              className="text-[#4EA8E9] underline underline-offset-2 transition hover:text-[#99BAEC]"
            >
              support@paynback.com
            </a>
            . Be sure to include:
          </p>
          <ul className="list-disc space-y-1 pl-5 marker:text-[#4EA8E9]">
            <li>PayNback ID, Name</li>
            <li>Registered Mobile &amp; Email</li>
            <li>Date and Time of Transaction</li>
            <li>Transaction Details</li>
            <li>Reason for Refund Request</li>
          </ul>
          <p>
            Our support team will review your request and respond within 4 business days. If your
            refund is approved, the points/coupons will be credited back to your PayNback shopping
            service account immediately.
          </p>
        </SubSection>
      </Section>

      <Section id="return-policy" number="5" title="Return Policy">
        <p>
          Here at PayNback, we want you to be happy with your purchases. However, we understand that
          sometimes things don&apos;t work out as planned. That&apos;s why our return policy is
          designed to be simple and transparent.
        </p>
        <p>
          It&apos;s important to note that each merchant on our platform sets their own return
          policy. You&apos;ll find details about a specific product&apos;s return window,
          acceptable return conditions, and any restocking fees on the merchant&apos;s page or
          within the product listing itself.
        </p>
        <p>
          <strong className="text-white/90">Here&apos;s a quick tip:</strong> Be sure to check the
          return policy before you complete your purchase. This way, you&apos;ll know exactly what
          to expect if you need to return an item.
        </p>
        <p>
          For any questions or assistance with a return, please contact the merchant directly.
          Their contact information will be readily available on their storefront or within your
          order details.
        </p>
      </Section>

      <Section id="acknowledgement" number="6" title="Acknowledgement">
        <div className="space-y-4 border-l-2 border-[#4EA8E9]/50 pl-6 italic">
          <p>
            Being a PayNback shopping service user, I hereby acknowledge that I have read and
            understood the terms and conditions outlined by PayNback LLP for the use of their
            PayNback shopping services. I consent to abide by these terms and agree to be bound by
            the provisions set forth in the agreement.
          </p>
          <p>
            I understand that by using the PayNback shopping service, I am required to provide
            accurate information during registration, maintain the confidentiality of my account
            details, and comply with all age and regulatory requirements.
          </p>
          <p>
            Furthermore, I consent to the storage and protection of my personal and financial
            information in accordance with industry standards and regulatory guidelines. I
            understand that PayNback may charge fees for certain transactions or services, and I
            agree to pay all authorized transaction amounts, including any applicable fees.
          </p>
          <p>
            I acknowledge the importance of reporting any suspicious activities or security
            breaches promptly and understand the arbitration clause for resolving disputes in
            accordance with Indian law.
          </p>
          <p>
            By continuing to use the PayNback shopping service, I hereby give my consent to the
            terms and conditions outlined above. I understand that any changes to the terms will be
            communicated to me in advance, and my continued use of the service after updates implies
            acceptance of the modified terms.
          </p>
        </div>
      </Section>

      <Section id="contact" number="7" title="Contact Us">
        <p>
          If you have any questions regarding these terms, please do not hesitate to contact us.
        </p>
        <ul className="space-y-2 pt-1">
          <li>
            <a
              href="mailto:support@paynback.com"
              className="text-[#4EA8E9] underline underline-offset-2 transition hover:text-[#99BAEC]"
            >
              support@paynback.com
            </a>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-[#4EA8E9] underline underline-offset-2 transition hover:text-[#99BAEC]"
            >
              Contact Page
            </Link>
          </li>
        </ul>
      </Section>
    </LegalGuidelinesLayout>
  );
}
