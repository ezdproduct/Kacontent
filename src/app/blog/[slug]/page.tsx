import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { getPostBySlug, getAllPosts } from '@/lib/posts';
import { AuthorInfo } from '@/components/author-info';
import { BlogSidebar } from '@/components/blog-sidebar';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Không tìm thấy bài viết',
      description: 'Bài viết bạn đang tìm kiếm không tồn tại.',
    };
  }

  return {
    title: `${post.title} | KA Content`,
    description: post.excerpt.substring(0, 160), // Use excerpt for meta description
  };
}

export default async function PostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug);
  if (!post) {
    notFound();
  }

  const allPosts = await getAllPosts();
  const otherPosts = allPosts.filter(p => p.slug !== params.slug).slice(0, 5);

  return (
    <div className="bg-background text-foreground">
      <Header />
      <main className="animate-fade-in">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <BlogSidebar posts={otherPosts} />
            </div>

            {/* Main Article */}
            <article className="lg:col-span-3">
              <header className="mb-8">
                <p className="text-primary font-semibold mb-2">{post.category}</p>
                <h1 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-4">{post.title}</h1>
                <AuthorInfo avatar={post.authorAvatar} name={post.author} date={post.date} />
              </header>
              {post.imgSrc && (
                <img 
                  src={post.imgSrc} 
                  alt={post.title} 
                  className="w-full rounded-2xl mb-8 aspect-video object-cover"
                />
              )}
              <div
                className="prose lg:prose-xl max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content || '' }}
              />
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}