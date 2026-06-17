import Image from "next/image";
import Link from "next/link";

export const posts = [
  {
    id: 1,
    title: "Understanding React Hooks: A Comprehensive Guide",
    excerpt:
      "React Hooks have revolutionized the way we write React components. In this comprehensive guide, we will explore the basics of React Hooks, how to use them effectively, and best practices for building modern React applications.",
    date: "2024-06-15",
    slug: "understanding-react-hooks",
    image: "/images/p1.png",
  },
  {
    id: 2,
    title: "A Deep Dive into JavaScript Closures",
    excerpt:
      "JavaScript closures are a fundamental concept that every developer should understand. In this article, we will take a deep dive into closures, how they work, and practical examples of their usage in real-world applications.",
    date: "2024-06-10",
    slug: "deep-dive-javascript-closures",
    image: "/images/p2.png",
  },
  {
    id: 3,
    title: "CSS Grid vs. Flexbox: When to Use Which",
    excerpt:
      "CSS Grid and Flexbox are powerful layout systems in CSS, but they serve different purposes. In this article, we will compare CSS Grid and Flexbox, discuss their strengths and weaknesses, and provide guidance on when to use each for your web design projects.",
    date: "2024-06-05",
    slug: "css-grid-vs-flexbox",
    image: "/images/p3.jpg",
  },
];

export default function RecentPost() {
  return (
    <div className="space-y-2 mb-10">
      <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold">
        Recent Posts
      </h2>

      {/* recent post cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => {
          return (
            <div
              key={post.id}
              className="group rounded-xl overflow-hidden bg-[#0B0B0B] border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
            >
              {/* image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30" />
              </div>
              {/* content */}
              <div className="p-5 space-y-3">
                <time className="text-xs text-gray-400">{post.date}</time>
                <h3 className=" text-lg font-semibold text-white leading-snug group-hover:text-indigo-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <Link
                  href={`/articles/${post.slug}`}
                  className="inline-block text-sm font-medium text-indigo-400 hover:underline"
                >
                  Read article →
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
