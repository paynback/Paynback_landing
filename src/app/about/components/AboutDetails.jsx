import Image from"next/image";

export default function AboutDetails() {
 const IMG_APP_ONE_HAND ="/images/app-with-one-hand.png";

 return (
 <section className="w-full bg-white">
 <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24 flex flex-col gap-16 lg:gap-24">
 
 {/* ── Top Text Row ── */}
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
 {/* Left Text */}
 <div className="flex flex-col gap-6">
 <h2 className="text-[48px] font-medium leading-[124%] tracking-[-0.56px] text-slate-900">
 <span className="text-[#0964BC]">About</span> payNback
 </h2>
 <div className="text-[15px] sm:text-[16px] leading-[1.8] text-slate-600 font-normal">
 payNback is India&apos;s first in-store shopping support app that offers
 rewards and discounts to consumers. Enjoy massive benefits and
 pre-reduced prices when you shop at payNback-associated
 merchants. payNback is not an eCommerce platform from which
 you can buy or sell stuffs, but a platform that connects you with
 your desired merchants offering competitive prices, and significant
 cash back rewards and incentives for all parties involved, such as
 customers, referees, merchants, and franchisees. Moreover, it helps
 you manage your purchase bill payments and budgeting.
 </div>
 </div>

 {/* Right Text */}
 <div className="flex flex-col lg:pt-[5.5rem]">
 <div className="text-[15px] sm:text-[16px] leading-[1.8] text-slate-600 font-normal">
 Find your favourite stores, discover exclusive deals, and connect
 directly with them on payNback through calls or chats. Need
 directions? We&apos;ve got you covered. Enjoy seamless bill payments
 using UPI, your personal wallet, or by redeeming rewards.
 </div>
 </div>
 </div>

 {/* ── Bottom Image & Benefits Row ── */}
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
 
 {/* Left Image with Gradient Background */}
 <div className="relative w-full aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/3] rounded-[24px] overflow-hidden bg-black flex items-end justify-center pt-16">
 {/* Customized Gradient Glows */}
 <div className="absolute inset-0 bg-[#1e1b4b] z-0"></div> {/* Dark base */}
 <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[70%] bg-[#3b82f6] blur-[100px] opacity-70 z-0"></div> {/* Blue glow */}
 <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[70%] bg-[#be185d] blur-[100px] opacity-50 z-0"></div> {/* Pink/Magenta glow */}
 <div className="absolute top-[10%] left-[20%] w-[40%] h-[40%] bg-[#4c1d95] blur-[80px] opacity-40 z-0"></div> {/* Purple center glow */}

 {/* Hand Image */}
 <div className="relative z-10 w-[85%] sm:w-[65%] lg:w-[75%] h-[95%]">
 <Image
 src={IMG_APP_ONE_HAND}
 alt="PayNBack App displayed in one hand"
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
 <strong className="text-slate-900 font-medium tracking-tight">Discover :</strong> Find nearby stores, explore their offerings and
 uncover hidden gems.
 </span>
 </li>
 <li className="text-slate-600 font-normal flex items-start">
 <span className="mr-3 mt-[8px] w-[4px] h-[4px] bg-slate-800 rounded-full shrink-0"></span>
 <span>
 <strong className="text-slate-900 font-medium tracking-tight">Save :</strong> Benefit from pre-reduced prices, exclusive discounts, and
 cashback rewards on every purchase.
 </span>
 </li>
 <li className="text-slate-600 font-normal flex items-start">
 <span className="mr-3 mt-[8px] w-[4px] h-[4px] bg-slate-800 rounded-full shrink-0"></span>
 <span>
 <strong className="text-slate-900 font-medium tracking-tight">Engage :</strong> Chat directly with store owners, ask questions, and get
 personalized recommendations.
 </span>
 </li>
 <li className="text-slate-600 font-normal flex items-start">
 <span className="mr-3 mt-[8px] w-[4px] h-[4px] bg-slate-800 rounded-full shrink-0"></span>
 <span>
 <strong className="text-slate-900 font-medium tracking-tight">Pay with ease :</strong> Settle bills effortlessly using UPI or redeem your
 payNback rewards.
 </span>
 </li>
 <li className="text-slate-600 font-normal flex items-start">
 <span className="mr-3 mt-[8px] w-[4px] h-[4px] bg-slate-800 rounded-full shrink-0"></span>
 <span>
 <strong className="text-slate-900 font-medium tracking-tight">Earn :</strong> Refer friends, onboard merchants, and earn attractive
 incentives, including cash rewards, commissions, and exciting
 prizes.
 </span>
 </li>
 </ul>
 </div>

 </div>
 </div>
 </section>
 );
}
