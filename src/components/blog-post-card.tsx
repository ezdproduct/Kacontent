import Link from "next/link";

interface Post {
  imgSrc: string;
  category: string;
  author: string;
  title: string;
  excerpt: string;
}

interface BlogPostCardProps {
  post: Post;
}

export const BlogPostCard = ({ post }: BlogPostCardProps) => {
  return (
    <div className="bg-card rounded-2xl shadow-lg overflow-hidden flex flex-col group">
      <div className="relative">
        <Link href="#" className="block overflow-hidden">
          <img
            src={post.imgSrc}
            alt={`Ảnh bìa cho bài viết ${post.title}`}
            className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
        <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
          {post.category}
        </div>
        <div className="absolute bottom-4 right-4 bg-black/50 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
          {post.author}
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-3 text-foreground">
          <Link href="#" className="hover:text-primary transition-colors">
            {post.title}
          </Link>
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-3 flex-grow">
          {post.excerpt}
        </p>
      </div>
    </div>
  );
};