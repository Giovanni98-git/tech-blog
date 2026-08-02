"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";
import { LuPen, LuTrash } from "react-icons/lu";

interface BlogViewProps {
  postPromise: Promise<{
    id: string;
    title: string;
    slug: string;
    content: string;
    excerpt: string;
    coverImageUrl: string;
    createdAt: string | Date;
    author: {
      id: string;
      name: string;
      image: string | null;
    };
  } | null>;
}

export default function BlogView({ postPromise }: BlogViewProps) {
  const post = use(postPromise);
  const { data: session } = authClient.useSession();
  const userId = session?.user.id;
  return (
    <article className="max-w-3xl mx-auto py-20 px-6">
      {/* article header */}
      <header className="mb-10">
        <h1
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white
        leading-tight mb-4"
        >
          {post?.title}
        </h1>
        <div className="flex items-center gap-4 text-sm text-gray-400">
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image
              src={post?.author.image || ""}
              alt="author-image"
              className="object-cover"
              fill
            />
          </div>
          <span>By {post?.author.name}</span>
          <span>·</span>
          <span>
            {new Date(post?.createdAt as string).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
      </header>
      <div className="relative w-full h-55 sm:h-80 lg:h-105 mb-12">
        <Image
          src={post?.coverImageUrl || ""}
          alt="cover-image"
          className="object-cover rounded-2xl"
          fill
        />
      </div>

      {/** article content */}
      {post?.content && (
        <div
          className="max-w-none text-gray-400 leading-relaxed tracking-wide blog-post"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      )}
      <div className="border-t border-white/10 my-16" />
      {userId === post?.author.id && (
        <div className="flex items-center justify-end gap-2">
          <Link
            href={`/write/edit/${post?.id}`}
            className="inline-flex items-center gap-2
        px-3 py-1.5 rounded-full text-sm font-medium text-indigo-400 border 
        border-indigo-400/20 hover:border-indigo-400/40 
        hover:bg-indigo-400/10 transition"
          >
            <LuPen />
            Edit
          </Link>
          <button
            type="button"
            className="inline-flex items-center gap-2 
          px-3 py-1.5 rounded-full 
          text-sm font-medium 
          text-red-400 
          border border-red-400/20 
          hover:border-red-400/40 
          hover:bg-red-400/10 
          transition cursor-pointer
          disabled:cursor-not-allowed"
          >
            <LuTrash />
            Delete
          </button>
        </div>
      )}
      <div className="mt-16">
        <Link
          href="/articles"
          className="text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          ← Back to Articles
        </Link>
      </div>
    </article>
  );
}
