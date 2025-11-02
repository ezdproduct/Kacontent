import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Cột 1: Giới thiệu */}
          <div>
            <Link href="/" className="text-2xl font-bold text-primary-foreground">
              KaContent
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/80">
              Chia sẻ kiến thức, tư duy và trải nghiệm về xây dựng nội dung đa
              nền tảng.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Cột 2: Nội dung */}
          <div>
            <h4 className="text-lg font-semibold text-primary-foreground mb-4">Nội dung</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">Sharing</a></li>
              <li><a href="#" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">Podcast</a></li>
              <li><a href="#" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">Toolbox</a></li>
              <li><a href="#" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">Articles</a></li>
              <li><a href="#" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">Câu chuyện</a></li>
            </ul>
          </div>

          {/* Cột 3: Chính sách */}
          <div>
            <h4 className="text-lg font-semibold text-primary-foreground mb-4">
              Chính sách
            </h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">Điều khoản dịch vụ</a></li>
              <li><a href="#" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">Chính sách bảo mật</a></li>
              <li><a href="#" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">Liên hệ</a></li>
            </ul>
          </div>

          {/* Cột 4: Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-primary-foreground mb-4">
              Đăng ký nhận tin
            </h4>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Đừng bỏ lỡ những bài viết mới nhất từ Ka Content.
            </p>
            <form action="#" method="POST">
              <div className="flex flex-col sm:flex-row gap-2">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  name="email-address"
                  id="email-address"
                  className="w-full px-4 py-2 text-foreground bg-background rounded-lg border-border focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Email của bạn"
                />
                <button
                  type="submit"
                  className="bg-primary-foreground text-primary font-semibold px-4 py-2 rounded-lg hover:bg-primary-foreground/90 transition duration-300"
                >
                  Gửi
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Dòng bản quyền */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-sm text-primary-foreground/60">
            &copy; 2025 Ka Content. Đã đăng ký bản quyền.
          </p>
        </div>
      </div>
    </footer>
  );
};