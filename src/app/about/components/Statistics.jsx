import Image from "next/image";

export default function Statistics() {
  const IMG_CENTER_MANTIS = "/images/89070870dc113db25d12458ae30da2d0d8cf718c.png";

  const cards = [
    {
      id: 1,
      title: "1000",
      description: "Tech-Savvy\nUsers",
      titleColor: "#3B1159", // Dark purple
      angle: -90, // Top
    },
    {
      id: 2,
      title: "453",
      description: "Smart\nInfluencers",
      titleColor: "#EA6C53", // Orange/red
      angle: -18,
    },
    {
      id: 3,
      title: "276",
      description: "Digitalized\nBrands",
      titleColor: "#32C954", // Green
      angle: 54,
    },
    {
      id: 4,
      title: "1000",
      description: "Search Listing",
      titleColor: "#3B82F6", // Blue
      angle: 126,
    },
    {
      id: 5,
      title: "93",
      description: "Happy\nCustomers",
      titleColor: "#EAB308", // Yellow
      angle: 198,
    },
  ];

  // Outer orbit radius
  const OUTER_R = 561.5 / 2;

  return (
    <section className="w-full bg-white font-['Poppins'] flex flex-col items-center justify-center py-20 lg:py-28 overflow-hidden">
      
      {/* ── Orbits Container ── */}
      {/* Defined as 638.78px height roughly matching screenshot framing */}
      <div className="relative w-[638px] h-[638px] flex items-center justify-center">
        
        {/* Outer Ellipse */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[561.5px] h-[561.5px] rounded-full border-[1.64px] border-[#8D71B9] border-dashed lg:border-solid pointer-events-none opacity-60"></div>
        
        {/* Inner Ellipse */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340.35px] h-[340.35px] rounded-full border-[1.64px] border-[#8D71B9] border-dashed lg:border-solid pointer-events-none opacity-60"></div>

        {/* Secondary Inner Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[134px] h-[134px] rounded-full bg-[#0964BC33]"></div>

        {/* Main Inner Image Wrapper */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[101.12px] h-[101.12px] rounded-full bg-[#0964BC] overflow-hidden flex items-start justify-center shadow-lg">
          <Image
            src={IMG_CENTER_MANTIS}
            alt="Mascot Mascot"
            width={100}
            height={100}
            className="object-contain mt-[16px]"
          />
        </div>

        {/* Magenta Dot Orbiting on Outer */}
        <div 
          className="absolute top-1/2 left-1/2 w-[14px] h-[14px] bg-[#D904F0] rounded-full shadow-md"
          style={{
            transform: `translate(-50%, -50%) translate(${OUTER_R * Math.cos(170 * (Math.PI / 180))}px, ${OUTER_R * Math.sin(170 * (Math.PI / 180))}px)`
          }}
        ></div>

        {/* Blue Dot Orbiting on Inner */}
        <div 
          className="absolute top-1/2 left-1/2 w-[18px] h-[18px] bg-[#89C5FF] rounded-full shadow-md"
          style={{
            transform: `translate(-50%, -50%) translate(${170 * Math.cos(200 * (Math.PI / 180))}px, ${170 * Math.sin(200 * (Math.PI / 180))}px)`
          }}
        ></div>

        {/* Dynamic Cards */}
        {cards.map((card) => {
          // Calculate X and Y from center
          const radian = card.angle * (Math.PI / 180);
          const xOffset = OUTER_R * Math.cos(radian);
          const yOffset = OUTER_R * Math.sin(radian);

          return (
            <div
              key={card.id}
              className="absolute top-1/2 left-1/2 w-[132.36px] h-[132.36px] bg-white rounded-full flex flex-col items-center justify-center text-center p-3"
              style={{
                transform: `translate(-50%, -50%) translate(${xOffset}px, ${yOffset}px)`,
                boxShadow: "3.29px 3.29px 10.69px 0px rgba(0, 0, 0, 0.08)", // Softer shadow for cleaner UI, exact match rgba(0,0,0,0.25)
              }}
            >
              <span 
                className="text-[26px] font-bold leading-none tracking-tight"
                style={{ color: card.titleColor }}
              >
                {card.title}
              </span>
              <span className="text-[12px] font-medium leading-[1.2] text-slate-600 mt-1 whitespace-pre-wrap">
                {card.description}
              </span>
            </div>
          );
        })}
      </div>

      {/* ── Bottom Text Area ── */}
      <div className="mt-8 flex flex-col items-center text-center gap-1 z-10">
        <h3 className="text-[24px] sm:text-[28px] font-semibold text-[#0964BC]">
          Enhanced activity statistics
        </h3>
        <h2 className="text-[36px] sm:text-[42px] font-bold text-black leading-tight tracking-tight mt-1">
          payNback
        </h2>
        <p className="text-[15px] font-medium text-slate-500 mt-1 uppercase tracking-wide">
          Striving Innovation Across India
        </p>
      </div>

    </section>
  );
}
