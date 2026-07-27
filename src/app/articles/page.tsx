"use client";
import ContainerLayout from "@/layouts/ContainerLayout";
import Image from "next/image";
import Link from "next/link";
import { Post } from "@/types/post";
import { useInfinitePosts } from "@/custom-hooks/usePost";
import PostCardSkeleton from "@/components/skeletons/PostCardSkeleton";

export default function ArticlesPage() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfinitePosts({ limit: 1 });

  if (true) {
    return (
      <ContainerLayout>
        <h2 className="text-xl sm-text-2xl md:text-3xl text-white font-semibold">
          All Articles
        </h2>
        <PostCardSkeleton />
      </ContainerLayout>
    );
  }

  if (status === "error") {
    return (
      <ContainerLayout>
        <p className="text-gray-300">Failed to load articles.</p>
      </ContainerLayout>
    );
  }
  const posts = data.pages.flatMap((page) => page.posts) as Post[];
  return (
    <ContainerLayout>
      <div className="space-y-6">
        <h2 className="text-xl sm-text-2xl md:text-3xl text-white font-semibold">
          All Articles
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
                {post.coverImageUrl && (
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={post.coverImageUrl}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                  </div>
                )}
                {/* content */}
                <div className="p-5 space-y-3">
                  <time className="text-xs text-gray-400">
                    {new Date(post.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
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
        {hasNextPage && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => fetchNextPage()}
              disabled={isFetchingNextPage}
              className="px-8 py-3 rounded-full bg-secondary-background text-gray-300 text-sm font-medium
        border border-white/10 hover:border-white/10 hover:text-white transition-all duration-300 cursor-pointer"
            >
              {isFetchingNextPage ? "Loading..." : " Load more articles"}
            </button>
          </div>
        )}
      </div>
    </ContainerLayout>
  );
}
