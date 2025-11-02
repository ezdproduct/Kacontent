import React from 'react';

const partners = [
  "shondo",
  "COOLMATE",
  "CONVERSE",
  "haravan",
  "GC GROUP",
  "TikPlus",
  // Lặp lại danh sách để đảm bảo hiệu ứng chạy liên tục
  "shondo",
  "COOLMATE",
  "CONVERSE",
  "haravan",
  "GC GROUP",
  "TikPlus",
];

export const PartnerMarquee = () => {
  return (
    <div className="mt-12 overflow-hidden py-4 border-y border-gray-200 bg-gray-50">
      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4 text-center">
        Với sự đồng hành của các đối tác hàng đầu
      </h3>
      <div className="flex whitespace-nowrap">
        <div className="flex space-x-16 animate-marquee">
          {partners.map((partner, index) => (
            <span key={index} className="text-3xl font-bold text-gray-400 opacity-70 hover:opacity-100 transition duration-300">
              {partner}
            </span>
          ))}
        </div>
        {/* Lặp lại nội dung để tạo hiệu ứng liền mạch */}
        <div className="flex space-x-16 animate-marquee">
          {partners.map((partner, index) => (
            <span key={index + partners.length} className="text-3xl font-bold text-gray-400 opacity-70 hover:opacity-100 transition duration-300">
              {partner}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};