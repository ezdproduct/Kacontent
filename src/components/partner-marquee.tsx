"use client";

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
    {partnerLogos.map((logo, index) => (
      <div
        key={index}
        className="h-24 w-64 bg-muted-foreground/50 hover:bg-primary transition-all duration-300"
        style={{
          maskImage: `url(${logo.src})`,
          maskSize: 'contain',
          maskRepeat: 'no-repeat',
          maskPosition: 'center',
          WebkitMaskImage: `url(${logo.src})`,
          WebkitMaskSize: 'contain',
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center',
        }}
      />
    ))}
  </>
);

export const PartnerMarquee = () => {
  return (
    <section className="bg-background overflow-hidden py-8">
      <div className="text-center mb-8">
        <p className="text-lg font-bold text-muted-foreground">
          Được tin tưởng bởi các thương hiệu hàng đầu
        </p>
      </div>
      <div className="flex whitespace-nowrap">
        <div className="flex space-x-8 animate-marquee items-center">
          <MarqueeContent />
          <MarqueeContent />
        </div>
      </div>
    </section>
  );
};