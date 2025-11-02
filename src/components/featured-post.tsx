import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface Post {
  imgSrc: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  authorAvatar: string;
  date: string;
}

interface FeaturedPostProps {
    post: Post;
}

export const FeaturedPost = ({ post }: FeaturedPostProps) => {
    return (
        <div className="relative rounded-2xl overflow-hidden group mt-12">
            <img src={post.imgSrc} className="w-full h-[400px] md:h-[500px] object-cover" alt={`Ảnh bìa cho bài viết ${post.title}`} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 md:p-10 text-white w-full md:w-3/4">
                <p className="font-semibold mb-2 text-sm uppercase tracking-wider">{post.category}</p>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                    <Link href="#" className="hover:underline">{post.title}</Link>
                </h2>
                <p className="text-base lg:text-lg text-white/80 line-clamp-2">
                    {post.excerpt}
                </p>
            </div>
            <Link href="#" className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <ArrowRight className="w-7 h-7 text-white" />
                </div>
            </Link>
        </div>
    );
};