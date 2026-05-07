import Image from "next/image";
import LiquidChrome from "@/components/ui/LiquidChrome";

export default function AboutDetails() {
    const IMG_2PHONES = "/images/About-us_2phone.png";

    return (
        <section className="w-full bg-white">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24 flex flex-col gap-16 lg:gap-24">

                {/* ── Top Text Row ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                    {/* Left Text */}
                    <div className="flex flex-col gap-6">
                        <h2 className="text-[48px] font-medium leading-[124%] tracking-[-0.56px] text-slate-900">
                            <span className="text-brand-primary">About</span> PayNback
                        </h2>
                        <div className="text-[15px] sm:text-[16px] leading-[1.8] text-slate-600 font-normal">
                            PayNback is redefining how local commerce works by turning everyday transactions into 
                            meaningful value for both customers and businesses. As India’s first in-store shopping 
                            support platform, we bridge the gap between nearby merchants and consumers—enabling smarter 
                            spending, stronger visibility, and sustainable growth. Unlike traditional marketplaces,
                             PayNback does not replace physical stores—it strengthens them. By connecting users directly 
                             with local merchants, the platform enhances in-store experiences while driving measurable 
                             outcomes such as increased footfall, improved customer engagement, and higher conversion rates.
                        </div>
                    </div>

                    {/* Right Text */}
                    <div className="flex flex-col lg:pt-22">
                        <div className="text-[15px] sm:text-[16px] leading-[1.8] text-slate-600 font-normal">
                            For users, PayNback delivers a seamless way to discover nearby deals, unlock exclusive rewards, 
                            and make every purchase more rewarding. For merchants, it provides a powerful ecosystem to promote their business,
                             reach the right audience, and grow consistently in a competitive market.
                            By integrating discovery, rewards, promotions, and engagement into a single platform, PayNback transforms 
                            routine spending into a strategic advantage—creating long-term value for all stakeholders.
                        </div>
                    </div>
                </div>

                {/* ── Bottom Image & Benefits Row ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left Image with Gradient Background */}
                    <div className="relative w-full aspect-4/5 sm:aspect-4/3 lg:aspect-4/3 rounded-[24px] overflow-hidden bg-black flex items-end justify-center pt-16 pb-8">
                        {/* Customized Gradient Glows replaced by Liquid Chrome */}
                        <div className="absolute inset-0 z-0 opacity-50">
                            <LiquidChrome
                                baseColor={[0.635, 0.31, 0.576]} // #A24F93
                                speed={0.5}
                                amplitude={0.6}
                                interactive={true}
                            />
                        </div>
                        <div className="absolute inset-0 bg-[#1e1b4b]/80 z-0"></div> {/* Dark overlay to blend */}

                        {/* Hand Image */}
                        <div className="relative z-10 w-[85%] sm:w-[65%] lg:w-[75%] h-[95%]">
                            <Image
                                src={IMG_2PHONES}
                                alt="PayNback App displayed in one hand"
                                fill
                                className="object-contain object-bottom"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                    </div>

                    {/* Right Benefits List */}
                    <div className="flex flex-col gap-8">
                        <h3 className="text-[32px] font-medium leading-[124%] tracking-[-0.56px] text-slate-900">
                            Enjoy a world of benefits:
                        </h3>

                        <ul className="flex flex-col gap-6 text-[15px] sm:text-[16px] leading-[1.6]">
                            <li className="text-slate-600 font-normal flex items-start">
                                <span className="mr-3 mt-[8px] w-[4px] h-[4px] bg-slate-800 rounded-full shrink-0"></span>
                                <span>
                                    <strong className="text-slate-900 font-medium tracking-tight">Explore Local Opportunities:</strong> 
                                    Discover nearby businesses and relevant offers tailored to your needs
                                </span>
                            </li>
                            <li className="text-slate-600 font-normal flex items-start">
                                <span className="mr-3 mt-[8px] w-[4px] h-[4px] bg-slate-800 rounded-full shrink-0"></span>
                                <span>
                                    <strong className="text-slate-900 font-medium tracking-tight">Unlock Better Savings:</strong> Benefit from exclusive deals and reward-driven pricing. 
                                </span>
                            </li>
                            <li className="text-slate-600 font-normal flex items-start">
                                <span className="mr-3 mt-[8px] w-[4px] h-[4px] bg-slate-800 rounded-full shrink-0"></span>
                                <span>
                                    <strong className="text-slate-900 font-medium tracking-tight">Interact with Confidence:</strong> Communicate directly with merchants for a more personalized experience.
                                </span>
                            </li>
                            <li className="text-slate-600 font-normal flex items-start">
                                <span className="mr-3 mt-[8px] w-[4px] h-[4px] bg-slate-800 rounded-full shrink-0"></span>
                                <span>
                                    <strong className="text-slate-900 font-medium tracking-tight">Simplify Payments: </strong> Enjoy smooth, hassle-free transactions with integrated options. 
                                </span>
                            </li>
                            <li className="text-slate-600 font-normal flex items-start">
                                <span className="mr-3 mt-[8px] w-[4px] h-[4px] bg-slate-800 rounded-full shrink-0"></span>
                                <span>
                                    <strong className="text-slate-900 font-medium tracking-tight">Gain More Value:</strong> Earn rewards and incentives through active participation and referrals. 
                                </span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}
