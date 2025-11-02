import Link from "next/link";
import { GraduationCap, BookOpen, FolderKanban } from "lucide-react";

export const Features = () => {
  return (
    <section className="bg-background py-12 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground">
            Bắt đầu hành trình của bạn
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Khám phá các khóa học chuyên sâu, tài nguyên miễn phí và bài viết chuyên môn để nâng tầm kỹ năng content của bạn.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Feature: Courses */}
          <Link href="/courses" className="lg:col-span-2 bg-card p-8 rounded-2xl shadow-lg border border-border transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/10 flex flex-col">
            <GraduationCap className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-foreground">
              Khóa Học Chuyên Sâu
            </h3>
            <p className="text-muted-foreground mb-6 flex-grow">
              Nâng cấp kỹ năng của bạn với các khóa học thực chiến, từ chiến lược content, copywriting đến xây dựng thương hiệu cá nhân.
            </p>
            <span className="font-semibold text-primary mt-auto">
              Xem tất cả khóa học &rarr;
            </span>
          </Link>

          {/* Other Features */}
          <div className="grid grid-cols-1 gap-8">
            <Link href="/resource" className="bg-card p-8 rounded-2xl shadow-lg border border-border transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/10 flex flex-col">
              <FolderKanban className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2 text-foreground">
                Kho Tài Nguyên
              </h3>
              <p className="text-muted-foreground mb-4 flex-grow">
                Tải về các template, checklist và prompt AI miễn phí.
              </p>
              <span className="font-semibold text-primary mt-auto">
                Khám phá ngay &rarr;
              </span>
            </Link>
            <Link href="/blog" className="bg-card p-8 rounded-2xl shadow-lg border border-border transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/10 flex flex-col">
              <BookOpen className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2 text-foreground">
                Blog Chuyên Môn
              </h3>
              <p className="text-muted-foreground mb-4 flex-grow">
                Đọc các bài viết chuyên sâu về tư duy và kỹ năng làm content.
              </p>
              <span className="font-semibold text-primary mt-auto">
                Đọc blog &rarr;
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};