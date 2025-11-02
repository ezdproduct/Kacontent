import Link from "next/link";
import { AuthorInfo } from "./author-info";

const DEFAULT_IMAGE_URL = "https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=2070&auto=format&fit=crop";

export interface Post {
  imgSrc?: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  authorAvatar: string;
  date: string;
  featured?: boolean;
}

interface BlogPostCardProps {
  post: Post;
}

export const BlogPostCard = ({ post }: BlogPostCardProps) => {
  return (
    <div className="group flex flex-col">
      <Link href="#" className="block overflow-hidden rounded-2xl mb-6">
        <img
          src={post.imgSrc || DEFAULT_IMAGE_URL}
          alt={`Ảnh bìa cho bài viết ${post.title}`}
          className="w-full aspect-[16/10] object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>
      <p className="text-primary font-semibold text-sm mb-2">{post.category}</p>
      <h3 className="text-xl font-bold mb-3 text-foreground">
        <Link href="#" className="hover:text-primary/80 transition-colors">
          {post.title}
        </Link>
      </h3>
      <p className="text-muted-foreground mb-6 line-clamp-2 flex-grow">
        {post.excerpt}
      </p>
      <AuthorInfo avatar={post.authorAvatar} name={post.author} date={post.date} />
    </div>
  );
};