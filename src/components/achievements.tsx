export const Achievements = () => {
  return (
    <section className="bg-background py-12 lg:py-20 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground">
            Hành Trình & Thành Tựu
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Kinh nghiệm thực chiến và những dấu ấn trong ngành truyền thông quảng cáo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-card rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <p className="text-5xl font-extrabold text-primary mb-2">10+</p>
            <h3 className="text-lg font-semibold text-foreground">Năm kinh nghiệm</h3>
            <p className="text-sm text-muted-foreground mt-2">Truyền thông quảng cáo, Chuyên viên/Giám đốc Sáng tạo tại các agency hàng đầu.</p>
          </div>

          <div className="text-center p-6 bg-card rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <p className="text-5xl font-extrabold text-primary mb-2">25+</p>
            <h3 className="text-lg font-semibold text-foreground">Chiến dịch lớn</h3>
            <p className="text-sm text-muted-foreground mt-2">Triển khai cho 50+ thương hiệu lớn như Unilever, PepsiCo, Lazada...</p>
          </div>

          <div className="text-center p-6 bg-card rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <p className="text-5xl font-extrabold text-primary mb-2">5+</p>
            <h3 className="text-lg font-semibold text-foreground">Cuộc thi</h3>
            <p className="text-sm text-muted-foreground mt-2">Giám khảo chuyên môn các cuộc thi Truyền thông & Sáng tạo.</p>
          </div>

          <div className="text-center p-6 bg-card rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <p className="text-5xl font-extrabold text-primary mb-2">97K+</p>
            <h3 className="text-lg font-semibold text-foreground">Thành viên</h3>
            <p className="text-sm text-muted-foreground mt-2">Sáng lập & Admin cộng đồng "Content khó lờ idea".</p>
          </div>
        </div>
        
        <div className="mt-16 pt-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">KA Content Digital Marketing Ltd.</h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                <span className="font-semibold text-primary">200+</span> Năm sáng lập & điều hành KA Content Digital Marketing Ltd. Tư vấn chiến lược nội dung & triển khai thực thi chiến dịch truyền thông tích hợp và sáng tạo đa kênh.
            </p>
        </div>
      </div>
    </section>
  );
};