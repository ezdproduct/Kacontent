import Link from "next/link";
import { AuthorInfo } from "./author-info";
import { Post } from "@/types";

const DEFAULT_IMAGE_URL = "/default-blog-image.svg";

interface BlogPostCardProps {
  post: Post;
}

export const BlogPostCard = ({ post }: BlogPostCardProps) => {
  return (
    <div className="group flex flex-col border border-transparent hover:border-primary rounded-2xl p-2 transition-colors">
      <Link href={`/blog/${post.slug}`} className="block overflow-hidden rounded-xl mb-4">
        <img
          src={post.imgSrc || DEFAULT_IMAGE_URL}
          alt={`Ảnh bìa cho bài viết ${post.title}`}
          className="w-full aspect-[16/10] object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>
      <div className="px-2 pb-2 flex flex-col flex-grow">
        <p className="text-primary font-semibold text-sm mb-2">{post.category}</p>
        <h3 className="text-xl font-bold mb-3 text-foreground">
          <Link href={`/blog/${post.slug}`} className="hover:text-primary/80 transition-colors">
            {post.title}
          </Link>
        </h3>
        <p className="text-muted-foreground mb-6 line-clamp-2 flex-grow" dangerouslySetInnerHTML={{ __html: post.excerpt }} />
        <AuthorInfo avatar={post.authorAvatar} name={post.author} date={post.date} />
      </div>
    </div>
  );
};