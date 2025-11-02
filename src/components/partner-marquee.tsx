import React from 'react';
import Image from 'next/image';

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

// Lặp lại danh sách để đảm bảo hiệu ứng chạy liên tục
const partners = [...partnerLogos, ...partnerLogos];

export const PartnerMarquee = () => {
  return (
    <div className="mt-12 overflow-hidden py-8 border-y border-blue-700 bg-blue-900">
      <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6 text-center">
        Với sự đồng hành của các đối tác hàng đầu
      </h3>
      <div className="flex whitespace-nowrap">
        <div className="flex space-x-16 animate-marquee items-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex-shrink-0 w-32 h-10 relative opacity-70 hover:opacity-100 transition duration-300">
              <img
                src={partner.src}
                alt={partner.alt}
                // Áp dụng filter để logo hiển thị màu sáng trên nền tối
                className="object-contain w-full h-full filter grayscale invert"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};