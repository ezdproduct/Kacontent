import React from 'react';

const partnerLogos = [
  { src: "/logos/partners/unilever.png", alt: "Unilever" },
  { src: "/logos/partners/suntory-pepsico.png", alt: "Suntory PepsiCo" },
  { src: "/logos/partners/prudential.png", alt: "Prudential" },
  { src: "/logos/partners/wwf.png", alt: "WWF" },
  { src: "/logos/partners/who.png", alt: "World Health Organization" },
  { src: "/logos/partners/lazada.png", alt: "Lazada" },
  { src: "/logos/partners/toshiba.png", alt: "Toshiba" },
  { src: "/logos/partners/rohto.png", alt: "Rohto" },
  { src: "/logos/partners/vietcombank.png", alt: "Vietcombank" },
  { src: "/logos/partners/frieslandcampina.png", alt: "FrieslandCampina" },
  { src: "/logos/partners/honda.png", alt: "Honda" },
  { src: "/logos/partners/danisa.png", alt: "Danisa" },
  { src: "/logos/partners/maxilite.png", alt: "Maxilite Dulux" },
  { src: "/logos/partners/shopee.png", alt: "Shopee" },
  { src: "/logos/partners/mitsubishi.png", alt: "Mitsubishi" },
];

const MarqueeContent = () => (
  <>
    {partnerLogos.map((partner, index) => (
      <div key={index} className="flex-shrink-0 w-48 h-20 md:w-64 md:h-24 relative opacity-80 hover:opacity-100 transition-opacity duration-300">
        <img
          src={partner.src}
          alt={partner.alt}
          className="object-contain w-full h-full filter brightness-0 invert"
        />
      </div>
    ))}
  </>
);

export const PartnerMarquee = () => {
  return (
    <div className="mt-12 overflow-hidden py-8 border-y border-border bg-foreground group">
      <h3 className="text-sm font-semibold text-background uppercase tracking-wider mb-6 text-center">
        Với sự đồng hành của các đối tác hàng đầu
      </h3>
      <div className="flex whitespace-nowrap">
        <div className="flex space-x-16 md:space-x-24 animate-marquee items-center group-hover:[animation-play-state:paused]">
          <MarqueeContent />
          <MarqueeContent />
        </div>
      </div>
    </div>
  );
};