import { fetchPosts } from "@/services/posts";
import { FetchPostsResponse } from "@/types/post";
import { useInfiniteQuery } from "@tanstack/react-query";

export function useInfinitePosts({ limit }: { limit: number }) {
  return useInfiniteQuery<FetchPostsResponse, Error>({
    queryKey: ["posts"],
    queryFn: ({ pageParam }) =>
      fetchPosts({ pageParam: pageParam as string | null, limit }),
    initialPageParam: null,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });
}
