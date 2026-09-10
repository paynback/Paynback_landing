import Link from "next/link";
import LegalGuidelinesLayout from "@/components/legal/LegalGuidelinesLayout";
import { Section, SubSection } from "@/components/legal/LegalSection";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Merchant Terms",
  description: "Terms and conditions for merchants using the PayNback platform.",
  path: "/merchant-terms",
});

const TOC_ITEMS = [
  { id: "introduction", label: "Introduction" },
  { id: "definitions", label: "Definitions" },
  { id: "appointment", label: "Appointment of Service Agreement" },
  { id: "merchant-obligations", label: "Merchant Obligations" },
  { id: "intermediary-obligations", label: "Intermediary Obligations" },
  { id: "fees-and-charges", label: "Fees and Charges" },
  { id: "term-and-termination", label: "Term and Termination" },
  { id: "dispute-resolution", label: "Dispute Resolution" },
  { id: "settlement-of-funds", label: "Settlement of Funds" },
  { id: "contact", label: "Contact Us" },
];

export default function MerchantTermsPage() {
  return (
    <LegalGuidelinesLayout
      title="Merchant Terms"
      breadcrumbLabel="Merchant Terms"
      tocItems={TOC_ITEMS}
    >
      <Section id="introduction" number="1" title="Introduction">
        <p>
          The information provided below outlines the formal franchise and merchant agreement terms,
          detailing the legally binding language for operating on the PayNback platform.
        </p>
      </Section>

      <Section id="definitions" number="2" title="Definitions">
        <div className="space-y-4">
          <p>
            <strong className="text-white/90">2.1. &quot;Platform&quot;</strong> means the eCommerce
            platform Mobile Apps and associated web application operated by the Intermediary.
          </p>
          <p>
            <strong className="text-white/90">2.2. &quot;Services&quot;</strong> refer to the
            eCommerce services provided by the Intermediary to the Merchant, which include but are
            not limited to: listing and displaying the Merchant&apos;s products and services
            prominently on the Platform, actively promoting Merchants and their offerings to Platform
            users through exclusive deals and attractive discounts, facilitating seamless
            communication between Merchants and Platform customers, providing user-friendly search
            tools to help customers easily discover and explore Merchant options, offering advanced
            search functionalities to guide customers towards their desired Merchants, simplifying
            the payment process through secure bill payments and settlements, expanding the
            Merchant&apos;s market reach by showcasing their products and services to a wider
            audience, and delivering comprehensive customer support services.
          </p>
          <p>
            <strong className="text-white/90">
              2.3. &quot;eCommerce Intermediary Platform and Payment Management Service
              Agreement&quot;
            </strong>{" "}
            means the services provided by the Intermediator to the Merchant in relation to
            collection of bill payments from customers for the Merchant&apos;s products or services.
          </p>
        </div>
      </Section>

      <Section id="appointment" number="3" title="Appointment of Service Agreement">
        <div className="space-y-4">
          <p>
            <strong className="text-white/90">3.1.</strong> The Merchant hereby appoints the
            Intermediary as its exclusive eCommerce intermediary and bill payment collection agent
            for the sale of its products or services to the Platform customers.
          </p>
          <p>
            <strong className="text-white/90">3.2.</strong> The Intermediary shall provide the
            Services to the Merchant in accordance with the terms and conditions of this Agreement.
          </p>
        </div>
      </Section>

      <Section id="merchant-obligations" number="4" title="Merchant Obligations">
        <div className="space-y-4">
          <p>
            <strong className="text-white/90">4.1.</strong> The Merchant shall provide accurate and
            complete information about its products or services to the Intermediary.
          </p>
          <p>
            <strong className="text-white/90">4.2.</strong> The Merchant shall comply with all
            applicable laws and regulations in connection with the sale of its products or services.
          </p>
          <p>
            <strong className="text-white/90">4.3.</strong> The Merchant shall be responsible for the
            quality, description, and pricing of its products or services.
          </p>
          <p>
            <strong className="text-white/90">4.4.</strong> The Merchant shall indemnify and hold
            harmless the Intermediary from and against all claims, damages, liabilities, and
            expenses arising out of or in connection with the Merchant&apos;s breach of this
            Agreement or the sale of its products or services.
          </p>
        </div>

        <SubSection number="4.5" title="Merchant Policy: Sale of Legal Goods Only">
          <p>
            Merchants are strictly prohibited from listing, advertising, or selling any illegal or
            prohibited items on our platform. This includes but is not limited to items that:
          </p>
          <ul className="list-disc space-y-2 pl-5 marker:text-[#4EA8E9]">
            <li>Violate any applicable laws, rules, or regulations</li>
            <li>Infringe upon the intellectual property rights of others</li>
            <li>Pose a safety or health risk to consumers</li>
            <li>Are considered obscene, defamatory, or offensive</li>
            <li>Are restricted or prohibited by our platform policies</li>
          </ul>
          <p className="font-medium text-white/80">
            Failure to comply with this policy may result in severe consequences, including but not
            limited to:
          </p>
          <ul className="list-disc space-y-2 pl-5 marker:text-[#4EA8E9]">
            <li>Immediate removal of the offending listing</li>
            <li>Suspension or termination of the merchant&apos;s account</li>
            <li>Legal action against the merchant</li>
          </ul>
          <p className="italic text-white/60">
            By agreeing to these terms, merchants acknowledge their responsibility to ensure that all
            products and services offered on the platform are legal and compliant.
          </p>
        </SubSection>
      </Section>

      <Section id="intermediary-obligations" number="5" title="Intermediary Obligations">
        <ul className="space-y-4">
          <li>
            <strong className="text-white/90">5.1.</strong> The Intermediary shall provide the
            Services to the Merchant in a professional and efficient manner.
          </li>
          <li>
            <strong className="text-white/90">5.2.</strong> The Intermediary shall use commercially
            reasonable efforts to protect the Merchant&apos;s confidential information.
          </li>
          <li>
            <strong className="text-white/90">5.3.</strong> The Intermediary shall process payments
            from customers for the Merchant&apos;s products or services in accordance with the terms
            of this Agreement and applicable laws and regulations.
          </li>
          <li>
            <strong className="text-white/90">5.4.</strong> The Intermediary shall remit to the
            Merchant the net proceeds from the sale of the Merchant&apos;s products or services,
            less any applicable fees and charges, in accordance with the terms of this Agreement.
          </li>
          <li>
            <strong className="text-white/90">5.5. Platform Maintenance and Uptime:</strong> The
            Intermediary shall use commercially reasonable efforts to maintain the Platform in good
            working order and ensure maximum uptime.
          </li>
          <li>
            <strong className="text-white/90">5.6. Data Privacy and Security:</strong> The
            Intermediary shall implement and maintain appropriate security measures to protect the
            personal data of Merchants and their customers in accordance with applicable data
            protection laws and regulations.
          </li>
          <li>
            <strong className="text-white/90">5.7. Dispute Resolution:</strong> The Intermediary
            shall provide a platform for Merchants and Customers to resolve disputes efficiently and
            shall cooperate in good faith with any dispute resolution process.
          </li>
          <li>
            <strong className="text-white/90">5.8. Intellectual Property Rights:</strong> The
            Intermediary shall respect the intellectual property rights of the Merchant and shall
            not use or disclose any confidential or proprietary information of the Merchant without
            prior written consent.
          </li>
          <li>
            <strong className="text-white/90">5.9. Performance Metrics:</strong> The Intermediary
            shall provide the Merchant with regular performance metrics related to the
            Merchant&apos;s listings, sales, and customer engagement.
          </li>
          <li>
            <strong className="text-white/90">5.10. Marketing and Promotion:</strong> The
            Intermediary shall undertake reasonable efforts to market and promote the Merchant&apos;s
            products or services on the Platform.
          </li>
          <li>
            <strong className="text-white/90">5.11.</strong> The Intermediary reserve the right to
            modify this policy at any time without prior notice.
          </li>
        </ul>
        <p className="pt-2 text-sm italic text-[#4EA8E9]">
          (If you have any questions or concerns, please contact our merchant support team).
        </p>
      </Section>

      <Section id="fees-and-charges" number="6" title="Fees and Charges">
        <ul className="space-y-4">
          <li>
            <strong className="text-white/90">6.1.</strong> The Merchant shall pay the Intermediary a
            commission of 10% (varies from merchant to merchant) of the total amount (including any
            taxes) of the invoices paid by the customer against the product or service sold to the
            platform members (Customers).
          </li>
          <li>
            <strong className="text-white/90">6.2.</strong> The Merchant shall not be responsible
            for paying any applicable transaction fees, payment processing fees, and other charges
            imposed by the Intermediary or third-party service providers.
          </li>
          <li>
            <strong className="text-white/90">6.3.</strong> The intermediary may charge additional
            fees for merchant promotions, advertisements, specific product listings, featured
            placement, and other value-added services.
          </li>
        </ul>
      </Section>

      <Section id="term-and-termination" number="7" title="Term and Termination">
        <ul className="space-y-4">
          <li>
            <strong className="text-white/90">7.1.</strong> This Agreement shall commence on the 1st
            of September 2024 and shall continue in full force and effect until terminated by either
            party upon 7 days&apos; written notice to the other party.
          </li>
          <li>
            <strong className="text-white/90">7.2.</strong> Either party may terminate this
            Agreement immediately if the other party materially breaches this Agreement and fails to
            cure such breach within 7 days of written notice.
          </li>
        </ul>
      </Section>

      <Section id="dispute-resolution" number="8" title="Dispute Resolution">
        <ul className="space-y-4">
          <li>
            <strong className="text-white/90">8.1.</strong> Any disputes arising out of or in
            connection with this Agreement shall be resolved through negotiation in good faith.
          </li>
          <li>
            <strong className="text-white/90">8.2.</strong> If the parties are unable to resolve a
            dispute through negotiation, such dispute shall be submitted to arbitration, mediation,
            or litigation.
          </li>
        </ul>
      </Section>

      <Section id="settlement-of-funds" number="9" title="Settlement of Funds">
        <p className="font-medium text-white/90">
          Incorporating Daily Settlement into the Agreement:
        </p>
        <ul className="space-y-4 pt-2">
          <li>
            <strong className="text-white/90">9.1. Daily Settlement:</strong> The Intermediary will
            settle the net proceeds from bill payments made through its platform by its members
            against the bills for the Merchant&apos;s products or services purchased by those
            members. Net proceeds are calculated by subtracting the Intermediary&apos;s commission
            and any applicable fees or charges from the total sales amount.
          </li>
          <li>
            <strong className="text-white/90">9.2. Settlement Timeline:</strong> The Intermediary
            will initiate the transfer of net proceeds to the Merchant&apos;s designated bank
            account within 24 hours of the end of each business day.
          </li>
          <li>
            <strong className="text-white/90">9.3. Settlement Cutoff Time:</strong> The Intermediary
            and Merchant will mutually agree on a daily cutoff time for processing sales and
            initiating settlements.
          </li>
          <li>
            <strong className="text-white/90">9.4. Bank Details:</strong> The Merchant must provide
            accurate and up-to-date bank account details to the Intermediary for fund transfers. The
            Intermediary is not liable for settlement delays or errors caused by incorrect or
            outdated bank information provided by the Merchant.
          </li>
          <li>
            <strong className="text-white/90">9.5. Settlement Confirmation:</strong> The Intermediary
            will provide the Merchant with a daily settlement report detailing the total sales
            amount, commission deducted, and net amount transferred.
          </li>
          <li>
            <strong className="text-white/90">9.6. Currency:</strong> Generally, settlements will be
            in the local currency and equivalent to wallet balances at a 1:1 ratio. Beneficiaries
            may request settlement in multiple currencies denominated in the local currency or USD,
            subject to applicable exchange rates and fees borne by the merchant.
          </li>
          <li>
            <strong className="text-white/90">9.7. Payment Methods:</strong> Settlements will be made
            through bank transfer, UPI, or other mutually agreed-upon payment methods, and bank
            charges for transfers will be borne by the Merchant.
          </li>
          <li>
            <strong className="text-white/90">9.8. Dispute Resolution:</strong> Any discrepancies in
            settlement amounts will be resolved through generally acceptable manners by both parties.
          </li>
          <li>
            <strong className="text-white/90">9.9. Force Majeure:</strong> Neither party will be
            liable for delays in settlement due to unforeseen circumstances beyond its reasonable
            control, such as Networks &amp; Banking system issues, natural disasters, war,
            government actions and so on.
          </li>
        </ul>
      </Section>

      <Section id="contact" number="10" title="Contact Us">
        <p>
          If you have any questions or concerns regarding these merchant terms, please contact our
          merchant support team.
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
