export const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development in 2025",
    excerpt: "Exploring the latest trends and technologies shaping the future of web development, from AI integration to new frameworks.",
    content: `
      <p>As we navigate through 2025, web development continues to evolve at an unprecedented pace. The integration of artificial intelligence, the rise of edge computing, and the maturation of modern JavaScript frameworks are reshaping how we build applications.</p>
      
      <h2>AI-Powered Development</h2>
      <p>Artificial Intelligence is no longer just a buzzword in web development. Tools like GitHub Copilot, ChatGPT, and specialized AI coding assistants are becoming integral parts of the development workflow. These tools help developers write code faster, debug issues more efficiently, and even generate entire components from simple descriptions.</p>
      
      <h2>The Rise of Edge Computing</h2>
      <p>Edge computing is revolutionizing how we think about web application performance. By moving computation closer to users, we can deliver faster, more responsive experiences. Platforms like Vercel Edge Functions and Cloudflare Workers are making edge deployment more accessible than ever.</p>
      
      <h2>Framework Evolution</h2>
      <p>React, Next.js, Vue, and Svelte continue to evolve, offering better performance, developer experience, and new features. The introduction of React Server Components and the continued improvement of build tools like Vite are making development more efficient.</p>
      
      <h2>Conclusion</h2>
      <p>The future of web development is bright, with new tools and technologies making it easier to build fast, scalable, and maintainable applications. Staying updated with these trends is crucial for any web developer looking to remain competitive in the field.</p>
    `,
    author: "Alex Chen",
    date: "2025-07-10",
    readTime: "5 min read",
    tags: ["Web Development", "AI", "React", "Performance"],
    image: "/api/placeholder/800/400"
  },
  {
    id: 2,
    title: "Building Scalable React Applications",
    excerpt: "Best practices and patterns for creating React applications that can grow with your team and user base.",
    content: `
      <p>Building scalable React applications requires careful planning, proper architecture, and adherence to best practices. In this comprehensive guide, we'll explore the key strategies for creating applications that can handle growth.</p>
      
      <h2>Component Architecture</h2>
      <p>A well-structured component architecture is the foundation of any scalable React application. This involves creating reusable components, establishing clear component hierarchies, and implementing proper separation of concerns.</p>
      
      <h2>State Management</h2>
      <p>As applications grow, managing state becomes increasingly complex. Tools like Redux Toolkit, Zustand, or React Query can help manage global state and server state effectively. Choose the right tool based on your application's specific needs.</p>
      
      <h2>Code Organization</h2>
      <p>Organizing your code in a logical, scalable way is crucial. Consider using feature-based folder structures, implementing proper naming conventions, and establishing clear import/export patterns.</p>
      
      <h2>Performance Optimization</h2>
      <p>Performance is key to user experience. Implement code splitting, lazy loading, memoization, and other optimization techniques to ensure your application remains fast as it grows.</p>
      
      <h2>Testing Strategy</h2>
      <p>A comprehensive testing strategy including unit tests, integration tests, and end-to-end tests ensures your application remains reliable as new features are added and changes are made.</p>
    `,
    author: "Sarah Johnson",
    date: "2025-07-08",
    readTime: "8 min read",
    tags: ["React", "Architecture", "Scalability", "Best Practices"],
    image: "/api/placeholder/800/400"
  },
  {
    id: 3,
    title: "Mastering CSS Grid and Flexbox",
    excerpt: "A comprehensive guide to modern CSS layout techniques that will transform how you approach web design.",
    content: `
      <p>CSS Grid and Flexbox are two powerful layout systems that have revolutionized web design. Understanding when and how to use each one effectively can dramatically improve your ability to create complex, responsive layouts.</p>
      
      <h2>Understanding Flexbox</h2>
      <p>Flexbox excels at one-dimensional layouts, whether in a row or column. It's perfect for aligning items, distributing space, and creating flexible components that adapt to different screen sizes.</p>
      
      <h2>The Power of CSS Grid</h2>
      <p>CSS Grid is designed for two-dimensional layouts, allowing you to control both rows and columns simultaneously. It's ideal for creating complex page layouts and organizing content in sophisticated ways.</p>
      
      <h2>When to Use Each</h2>
      <p>Use Flexbox for component-level layouts and simple arrangements of items. Use CSS Grid for page-level layouts and when you need precise control over both rows and columns.</p>
      
      <h2>Combining Both</h2>
      <p>The real power comes from combining both techniques. You might use CSS Grid for your overall page layout and Flexbox for arranging elements within grid areas.</p>
      
      <h2>Browser Support</h2>
      <p>Both CSS Grid and Flexbox have excellent browser support, making them safe choices for production applications. Modern development practices encourage using these native CSS features over complex framework solutions.</p>
    `,
    author: "Michael Rodriguez",
    date: "2025-07-05",
    readTime: "6 min read",
    tags: ["CSS", "Layout", "Grid", "Flexbox", "Design"],
    image: "/api/placeholder/800/400"
  },
  {
    id: 4,
    title: "JavaScript ES2024: New Features You Should Know",
    excerpt: "Discover the latest JavaScript features and improvements that are making development more efficient and enjoyable.",
    content: `
      <p>JavaScript continues to evolve with each new ECMAScript specification. ES2024 brings several exciting features that improve developer productivity and code quality.</p>
      
      <h2>Array Grouping</h2>
      <p>The new Object.groupBy() and Map.groupBy() methods make it easier to group array elements based on a callback function, reducing the need for complex reduce operations.</p>
      
      <h2>Promise.withResolvers()</h2>
      <p>This new method provides a more convenient way to create promises with externally resolvable resolvers, useful for scenarios where you need to resolve a promise from outside its constructor.</p>
      
      <h2>Temporal API Progress</h2>
      <p>While still in development, the Temporal API promises to replace the problematic Date object with a modern, immutable, and timezone-aware date/time API.</p>
      
      <h2>Regular Expression Improvements</h2>
      <p>New regex features including the 'v' flag for improved Unicode support and set notation provide more powerful text processing capabilities.</p>
      
      <h2>Adoption Strategy</h2>
      <p>When adopting new JavaScript features, consider browser compatibility, transpilation needs, and team familiarity. Tools like Babel can help bridge the gap while these features gain wider support.</p>
    `,
    author: "Emma Thompson",
    date: "2025-07-03",
    readTime: "7 min read",
    tags: ["JavaScript", "ES2024", "Features", "Programming"],
    image: "/api/placeholder/800/400"
  },
  {
    id: 5,
    title: "The Art of Code Reviews",
    excerpt: "Best practices for conducting effective code reviews that improve code quality and team collaboration.",
    content: `
      <p>Code reviews are one of the most important practices in software development. They not only catch bugs and improve code quality but also facilitate knowledge sharing and team collaboration.</p>
      
      <h2>Setting the Right Tone</h2>
      <p>Code reviews should be constructive and educational, not critical or judgmental. Focus on the code, not the person, and always assume positive intent.</p>
      
      <h2>What to Look For</h2>
      <p>During reviews, focus on correctness, readability, maintainability, performance, and security. Also consider whether the code follows team conventions and best practices.</p>
      
      <h2>Providing Feedback</h2>
      <p>Give specific, actionable feedback with examples. Explain the 'why' behind your suggestions and offer alternative solutions when pointing out issues.</p>
      
      <h2>Tools and Automation</h2>
      <p>Use tools like ESLint, Prettier, and automated testing to catch basic issues before human review. This allows reviewers to focus on higher-level concerns.</p>
      
      <h2>Building a Review Culture</h2>
      <p>Encourage a culture where code reviews are seen as learning opportunities. Make them a regular part of your development process, not an afterthought.</p>
    `,
    author: "David Park",
    date: "2025-07-01",
    readTime: "5 min read",
    tags: ["Code Review", "Team Collaboration", "Best Practices", "Development"],
    image: "/api/placeholder/800/400"
  }
];

export function getBlogPost(id) {
  return blogPosts.find(post => post.id === parseInt(id));
}

export function getAllBlogPosts() {
  return blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
}
