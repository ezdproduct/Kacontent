import Image from "next/image";
import Link from "next/link";

export const LatestPosts = () => {
  const posts = [
    {
      imgSrc: "https://placehold.co/600x400/e2e8f0/333?text=Bài+viết+1",
      title: "ĐIỂM THI ĐẠI HỌC CHỈ LÀ KHỞI ĐẦU",
      excerpt:
        "Cuộc sống là một hành trình dài. Điểm thi đại học không quyết định bạn là ai. Nó chỉ là một cột mốc, một khởi đầu...",
    },
    {
      imgSrc: "https://placehold.co/600x400/e2e8f0/333?text=Bài+viết+2",
      title: "CHÚNG TA KHÔNG THỂ GIỎI TẤT CẢ MỌI THỨ",
      excerpt:
        'Chúng ta không thể giỏi tất cả mọi thứ. Thay vì trở thành "all-in-one", hãy tập trung vào điểm mạnh nhất của mình và phát triển nó...',
    },
    {
      imgSrc: "https://placehold.co/600x400/e2e8f0/333?text=Bài+viết+3",
      title: "CHIẾN LƯỢC - TẦM NHÌN VÀ KHẢ NĂNG THỰC THI",
      excerpt:
        "Chiến lược và tầm nhìn là những thứ rất vĩ mô. Nhưng để thành công, bạn cần khả năng thực thi, biến những ý tưởng đó thành...",
    },
  ];

  return (
    <div className="dark">
      <section className="bg-background text-foreground py-12 lg:py-20 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground">
              Nội Dung Mới Nhất
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              Nơi mình chia sẻ những bài đăng mới nhất về các chủ đề xoay quanh
              content.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl shadow-lg overflow-hidden flex flex-col group"
              >
                <Link href="#" className="overflow-hidden">
                  <img
                    src={post.imgSrc}
                    alt="Ảnh bìa bài viết"
                    className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    <Link href="#" className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};