import Image from "next/image";

export default function HowToWork() {
    const IMG_TWO_HANDS = "/images/app-with-two-hand.png";

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
                            PayNback is an online-offline e-commerce support platform connecting consumers with merchants. Our mobile app features a curated list of partner merchants offering unique deals and benefits. Customers can easily browse, select, and purchase products or services.
                        </p>
                    </div>
                    <div className="flex flex-col lg:pt-18">
                        <p className="text-[15px] sm:text-[16px] leading-[1.8] text-slate-600 font-normal">
                            Another advantage is that customers can connect with desired merchants via telephone or chat. Settle your purchase bills instantly through the PayNback app by easily redeeming rewards, using your wallet, or paying via UPI. Enjoy rewards with every bill payment.
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
                                <strong className="text-slate-900 font-medium tracking-tight">Discover Great Offers :</strong> Browse a curated list of PayNback merchants on our mobile app. Find stores with special prices, discounts, and unique offerings.
                            </li>
                            <li className="pl-2">
                                <strong className="text-slate-900 font-medium tracking-tight">Seamless Shopping :</strong> Easily search for your desired products or services, browse by category, or find specific stores.
                            </li>
                            <li className="pl-2">
                                <strong className="text-slate-900 font-medium tracking-tight">Exclusive Perks :</strong> Enjoy special offers and benefits available only to PayNback customers.
                            </li>
                        </ol>
                    </div>

                    <div className="relative w-full aspect-4/5 sm:aspect-571/439 max-w-[571px] rounded-[16px] bg-linear-to-tr from-[#2b4fa8] to-[#86b5e5] flex items-end justify-center shadow-xl mx-auto lg:mx-0 overflow-hidden pt-12">
                        <div className="relative z-10 w-[85%] sm:w-[65%] lg:w-[60%] h-[95%]">
                            <Image src={IMG_TWO_HANDS} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-contain object-bottom" alt="App with two hands" />
                        </div>
                    </div>
                </div>

                {/* ── Row 3: Merchant Section ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="relative w-full aspect-4/5 sm:aspect-571/439 max-w-[571px] rounded-[16px] bg-linear-to-tr from-[#2b4fa8] to-[#86b5e5] flex items-end justify-center shadow-xl mx-auto lg:mx-0 overflow-hidden pt-12 order-last lg:order-first">
                        <div className="relative z-10 w-[85%] sm:w-[65%] lg:w-[60%] h-[95%]">
                            <Image src={IMG_TWO_HANDS} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-contain object-bottom" alt="App with two hands" />
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
