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

export const Partners = () => {
  return (
    <section className="bg-background py-12 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-lg font-semibold text-muted-foreground">
            Được tin tưởng bởi các thương hiệu hàng đầu
          </p>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-12 place-items-center">
            {partnerLogos.map((logo, index) => (
              <div
                key={index}
                className="h-10 w-32 bg-muted-foreground/50 hover:bg-primary transition-all duration-300"
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
          </div>
        </div>
      </div>
    </section>
  );
};