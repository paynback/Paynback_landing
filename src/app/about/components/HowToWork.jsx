import Image from "next/image";

export default function HowToWork() {
    const CUSTOMER_JOIN = "/images/About-us_cust-join.png";
    const MERCHANT_JOIN = "/images/About-us_merch-join.png";

    return (
        <section className="w-full bg-white pt-16 pb-42 lg:pb-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-10 space-y-24 lg:space-y-32">

                {/* ── Row 1: Top Text Columns ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                    <div className="flex flex-col gap-6">
                        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-slate-900 tracking-[-0.5px]">
                            How does PayNback work?
                        </h2>
                        <p className="text-[15px] sm:text-[16px] leading-[1.8] text-slate-600 font-normal">
                            PayNback is a connected retail ecosystem that brings customers and partner merchants onto a single, 
                            seamless platform—enhancing the way everyday shopping is experienced and rewarded.Every purchase made
                             at an onboarded merchant earns you cashback and rewards, credited directly to your PayNback account. 
                             These rewards are not limited to a single store—they can be redeemed instantly or used across other
                              participating merchants within the ecosystem, creating continuous value with every transaction.
                        </p>
                    </div>
                    <div className="flex flex-col lg:pt-18">
                        <p className="text-[15px] sm:text-[16px] leading-[1.8] text-slate-600 font-normal">
                            The app also enables effortless discovery and engagement. Users can explore curated partner stores,
                             view exclusive in-store offers, and connect directly with merchants for enquiries or assistance through
                              chat or call.Payments are designed to be smooth and flexible. Bills can be settled instantly via UPI, 
                              PayNback wallet, or redeemed rewards—ensuring a frictionless checkout experience at every step.
                        </p>
                    </div>
                </div>

                {/* ── Row 2: Customer Section ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="flex flex-col gap-8 lg:pr-8">
                        <h3 className="text-2xl sm:text-[28px] font-semibold text-slate-900">
                            For Customers :
                        </h3>
                        <ol className="flex flex-col gap-6 text-[15px] sm:text-[16px] leading-[1.6] text-slate-600 list-decimal list-outside pl-4">
                            <li className="pl-2">
                                <strong className="text-slate-900 font-medium tracking-tight">Secure Registration & Verification :</strong> Initiate your account setup by entering your mobile number and completing OTP-based verification. This ensures a secure, authenticated, and frictionless onboarding process.
                            </li>
                            <li className="pl-2">
                                <strong className="text-slate-900 font-medium tracking-tight">Profile Configuration & Personalization :</strong> Complete your user profile by providing key details such as name and email ID, enabling a tailored experience with access to relevant offers, rewards, and platform features
                            </li>
                            <li className="pl-2">
                                <strong className="text-slate-900 font-medium tracking-tight">Transaction Enablement & Rewards Activation :</strong> Begin transacting by scanning partner QR codes and making payments via UPI, bank, or wallet. Instantly access cashback, rewards, and exclusive deals while managing your purchases efficiently.
                            </li>
                        </ol>
                    </div>

                    <div 
                        className="relative w-full aspect-4/5 sm:aspect-571/439 max-w-[571px] rounded-[16px] flex items-center justify-center shadow-xl mx-auto lg:mx-0 overflow-hidden"
                        style={{ background: 'linear-gradient(237.6deg, #969696 11.12%, #C1C1C1 35.61%, #E2E2E2 63.38%, #646464 93.58%)' }}
                    >
                        <div className="relative z-10 w-[70%] sm:w-[50%] lg:w-[45%] h-[80%]">
                            <Image src={CUSTOMER_JOIN} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-contain object-center" alt="App with two hands" />
                        </div>
                    </div>
                </div>

                {/* ── Row 3: Merchant Section ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div 
                        className="relative w-full aspect-4/5 sm:aspect-571/439 max-w-[571px] rounded-[16px] flex items-center justify-center shadow-xl mx-auto lg:mx-0 overflow-hidden order-last lg:order-first"
                        style={{ background: 'linear-gradient(237.6deg, #969696 11.12%, #C1C1C1 35.61%, #E2E2E2 63.38%, #646464 93.58%)' }}
                    >
                        <div className="relative z-10 w-[90%] sm:w-[70%] lg:w-[65%] h-[95%]">
                            <Image src={MERCHANT_JOIN} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-contain object-center" alt="App with two hands" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 lg:pl-8">
                        <h3 className="text-2xl sm:text-[28px] font-semibold text-slate-900">
                            Joining as a Merchant :
                        </h3>
                        <ol className="flex flex-col gap-5 text-[15px] sm:text-[16px] leading-[1.6] text-slate-600 list-decimal list-outside pl-4">
                            <li className="pl-2">
                                <strong className="text-slate-900 font-medium tracking-tight">Simple Sign-Up :</strong> Get started by accepting a referral link from our marketing team, sharing it on social media, or visiting our website www.PayNback.in. Download and install PayNback mobile app from play store.
                            </li>
                            <li className="pl-2">
                                <strong className="text-slate-900 font-medium tracking-tight">Open App :</strong> and click to sign up with basic information.
                            </li>
                            <li className="pl-2">
                                <strong className="text-slate-900 font-medium tracking-tight">Complete your Profile :</strong> Provide essential information about your business, including licenses, tax details, location, bank account details, and at least four high-quality photos showcasing your shop and key products.
                            </li>
                        </ol>
                    </div>
                </div>

            </div>
        </section>
    );
}
