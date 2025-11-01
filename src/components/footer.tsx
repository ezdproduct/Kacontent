import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Cột 1: Giới thiệu */}
          <div>
            <Link href="/" className="text-2xl font-bold">
              <span className="text-white">NHÃN NGUYỄN</span>
              <span className="text-blue-500">SHARING</span>
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              Chia sẻ kiến thức, tư duy và trải nghiệm về xây dựng nội dung đa
              nền tảng.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Cột 2: Nội dung */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Nội dung</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Sharing
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Podcast
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Toolbox
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Articles
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Câu chuyện
                </a>
              </li>
            </ul>
          </div>

          {/* Cột 3: Chính sách */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Chính sách
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Điều khoản dịch vụ
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Chính sách bảo mật
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>

          {/* Cột 4: Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Đăng ký nhận tin
            </h4>
            <p className="text-sm text-gray-400 mb-4">
              Đừng bỏ lỡ những bài viết mới nhất từ Nhãn Nguyễn.
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
                  className="w-full px-4 py-2 text-gray-900 bg-white rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Email của bạn"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Gửi
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Dòng bản quyền */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-500">
            &copy; 2025 Nhãn Nguyễn Sharing. Đã đăng ký bản quyền.
          </p>
        </div>
      </div>
    </footer>
  );
};