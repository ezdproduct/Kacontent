import { Briefcase, Trophy, Users, Zap } from "lucide-react";

const AchievementItem = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md border border-gray-100">
    <div className="flex-shrink-0 p-3 rounded-full bg-blue-100 text-blue-600">
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <p className="text-gray-600 mt-1 text-sm">{description}</p>
    </div>
  </div>
);

export const Achievements = () => {
  const achievements = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Năm kinh nghiệm truyền thông quảng cáo",
      value: "10+",
      details: "Chuyên viên sáng tạo/Giám đốc Sáng tạo tại: Leo Burnett VN, J. Walter Thompson VN, Dentsu Alpha, Square Group.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Chiến dịch truyền thông",
      value: "25+",
      details: "Trực tiếp xây dựng & triển khai cho 50+ thương hiệu tiêu biểu: Unilever, PepsiCo, Dutch Lady, P&G, Lazada, Manulife, Mitsubishi Motors, Castrol, Danisa, WWF…",
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Cuộc thi Truyền thông & Sáng tạo",
      value: "5+",
      details: "Giám khảo chuyên môn: Young Spikes Vietnam 2016, Infina 2021, Vạn Xuân Awards 2021.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Cộng đồng Content khó lờ idea",
      value: "97K+",
      details: "Thành viên – sáng lập & Admin hệ sinh thái chia sẻ kiến thức content marketing cho content writer and marketer.",
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
            Hành Trình & Thành Tựu
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Kinh nghiệm thực chiến và những dấu ấn trong ngành truyền thông quảng cáo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Item 1: Kinh nghiệm */}
          <div className="text-center p-6 bg-gray-50 rounded-xl shadow-lg">
            <p className="text-5xl font-extrabold text-blue-600 mb-2">10+</p>
            <h3 className="text-lg font-semibold text-gray-900">Năm kinh nghiệm</h3>
            <p className="text-sm text-gray-600 mt-2">Truyền thông quảng cáo, Chuyên viên/Giám đốc Sáng tạo tại các agency hàng đầu.</p>
          </div>

          {/* Item 2: Chiến dịch */}
          <div className="text-center p-6 bg-gray-50 rounded-xl shadow-lg">
            <p className="text-5xl font-extrabold text-blue-600 mb-2">25+</p>
            <h3 className="text-lg font-semibold text-gray-900">Chiến dịch lớn</h3>
            <p className="text-sm text-gray-600 mt-2">Triển khai cho 50+ thương hiệu lớn như Unilever, PepsiCo, Lazada...</p>
          </div>

          {/* Item 3: Giám khảo */}
          <div className="text-center p-6 bg-gray-50 rounded-xl shadow-lg">
            <p className="text-5xl font-extrabold text-blue-600 mb-2">5+</p>
            <h3 className="text-lg font-semibold text-gray-900">Cuộc thi</h3>
            <p className="text-sm text-gray-600 mt-2">Giám khảo chuyên môn các cuộc thi Truyền thông & Sáng tạo.</p>
          </div>

          {/* Item 4: Cộng đồng */}
          <div className="text-center p-6 bg-gray-50 rounded-xl shadow-lg">
            <p className="text-5xl font-extrabold text-blue-600 mb-2">97K+</p>
            <h3 className="text-lg font-semibold text-gray-900">Thành viên</h3>
            <p className="text-sm text-gray-600 mt-2">Sáng lập & Admin cộng đồng "Content khó lờ idea".</p>
          </div>
        </div>
        
        {/* Thêm phần chi tiết về KA Content Digital Marketing Ltd. */}
        <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">KA Content Digital Marketing Ltd.</h3>
            <p className="text-lg text-gray-600">
                <span className="font-semibold text-blue-600">200+</span> Năm sáng lập & điều hành KA Content Digital Marketing Ltd. Tư vấn chiến lược nội dung & triển khai thực thi chiến dịch truyền thông tích hợp và sáng tạo đa kênh.
            </p>
        </div>
      </div>
    </section>
  );
};