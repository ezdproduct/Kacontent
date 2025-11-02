import Link from "next/link";
import { Post } from "@/lib/types";

interface BlogSidebarProps {
  posts: Post[];
}

export const BlogSidebar = ({ posts }: BlogSidebarProps) => {
  return (
    <aside className="lg:sticky lg:top-24 h-fit">
      <h3 className="text-xl font-bold mb-4">Bài viết khác</h3>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.slug}`} className="flex items-center gap-4 group">
              <img
                src={post.imgSrc || "/default-blog-image.svg"}
                alt={post.title}
                className="w-20 h-12 object-cover rounded-md flex-shrink-0"
              />
              <div>
                <p className="font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </p>
                <p className="text-xs text-muted-foreground">{post.date}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};