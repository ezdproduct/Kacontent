import { notFound } from 'next/navigation';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { getPostBySlug } from '@/lib/posts';
import { AuthorInfo } from '@/components/author-info';

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-background text-foreground">
      <Header />
      <main className="animate-fade-in">
        <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="max-w-3xl mx-auto">
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
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}