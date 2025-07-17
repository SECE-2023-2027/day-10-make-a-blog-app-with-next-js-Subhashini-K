import Link from "next/link";
import { getAllBlogPosts } from "@/data/blogPosts";
import Header from "@/components/Header";

function BlogCard({ post }) {
  return (
    <Link href={`/blog/${post.id}`} className="group block">
      <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
        <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 relative">
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
          <div className="absolute bottom-4 left-4">
            <span className="text-white text-sm font-medium bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
              {post.readTime}
            </span>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {post.title}
          </h2>
          
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
            <span className="font-medium">{post.author}</span>
            <time>{new Date(post.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'short', 
              day: 'numeric' 
            })}</time>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default function Home() {
  const posts = getAllBlogPosts();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header with GitHub OAuth */}
      <Header />

      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Welcome to TechBlog
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover insights and tutorials for modern web development. Stay updated with the latest trends in React, JavaScript, and cutting-edge programming practices.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Post */}
        {posts.length > 0 && (
          <section className="mb-16">
            <div className="relative">
              <Link href={`/blog/${posts[0].id}`} className="group block">
                <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="relative z-10">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {posts[0].tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-blue-200 transition-colors duration-300">
                      {posts[0].title}
                    </h2>
                    <p className="text-xl mb-6 text-blue-100 max-w-3xl">
                      {posts[0].excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-blue-200">
                      <span className="font-medium">{posts[0].author}</span>
                      <span>•</span>
                      <time>{new Date(posts[0].date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</time>
                      <span>•</span>
                      <span>{posts[0].readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Latest Posts
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.slice(1).map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p>&copy; 2025 TechBlog. Built with Next.js and Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
