import { Post } from './types';

const mockPosts: Post[] = [
    {
      id: 'mock-1',
      slug: 'chien-luoc-content-2025',
      featured: true,
      imgSrc: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2070&auto=format&fit=crop",
      category: "Content Strategy",
      title: "Chiến Lược Content 2025: Đón Đầu Xu Hướng và Bứt Phá",
      excerpt: "<p>Năm 2025 sẽ là một năm đầy biến động trong lĩnh vực marketing. Hãy cùng khám phá những xu hướng content sẽ thống trị và cách để bạn có thể áp dụng chúng ngay hôm nay.</p>",
      content: "<p>Đây là nội dung chi tiết cho bài viết về Chiến Lược Content 2025. Nội dung này là placeholder và sẽ được thay thế bằng nội dung thật.</p>",
      author: "Khanh Nguyễn",
      authorAvatar: "/images/nguyen-thuy-khanh-portrait.jpg",
      date: "30 Oct 2024",
    },
    {
      id: 'mock-2',
      slug: 'bi-quyet-xay-dung-kenh-tiktok',
      imgSrc: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop",
      category: "Social Media",
      title: "Bí Quyết Xây Dựng Kênh TikTok Triệu View Từ Con Số 0",
      excerpt: "<p>Khám phá lộ trình chi tiết, từ việc xác định đối tượng, sáng tạo nội dung viral, đến cách tận dụng thuật toán của TikTok.</p>",
      content: "<p>Đây là nội dung chi tiết cho bài viết về Bí Quyết Xây Dựng Kênh TikTok. Nội dung này là placeholder.</p>",
      author: "Khanh Nguyễn",
      authorAvatar: "/images/nguyen-thuy-khanh-portrait.jpg",
      date: "25 Oct 2024",
    },
];

async function fetchWordPressPosts(): Promise<Post[]> {
  try {
    const response = await fetch('https://backend.probase.tech/kacontent/wp-json/wp/v2/posts?_embed');
    if (!response.ok) {
      console.error("Failed to fetch posts from WordPress API");
      return [];
    }
    const data = await response.json();
    
    return data.map((post: any): Post => ({
      id: post.id,
      slug: post.slug,
      title: post.title.rendered,
      excerpt: post.excerpt.rendered.replace(/<p class="link-more">.*/, ''), // Clean up the excerpt
      content: post.content.rendered,
      date: new Date(post.date).toLocaleDateString('vi-VN', { day: 'numeric', month: 'short', year: 'numeric' }),
      imgSrc: post._embedded?.['wp:featuredmedia']?.[0]?.source_url,
      category: post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized',
      author: "Khanh Nguyễn",
      authorAvatar: "/images/nguyen-thuy-khanh-portrait.jpg",
    }));
  } catch (error) {
    console.error("Error fetching WordPress posts:", error);
    return [];
  }
}

let allPosts: Post[] | null = null;

export async function getAllPosts(): Promise<Post[]> {
  if (allPosts) {
    return allPosts;
  }
  
  const wpPosts = await fetchWordPressPosts();
  // Combine and remove duplicates, giving priority to mock posts if slugs conflict
  const combined = [...mockPosts, ...wpPosts.filter(wp => !mockPosts.some(mp => mp.slug === wp.slug))];
  allPosts = combined;
  
  return allPosts;
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  const posts = await getAllPosts();
  return posts.find(p => p.slug === slug);
}