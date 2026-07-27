import { FecthPostsParams, FetchPostsResponse } from "@/types/post";
import axios from "axios";

export async function fetchPosts({
  pageParam,
  limit,
}: FecthPostsParams): Promise<FetchPostsResponse> {
  const res = await axios.get(`/api/posts`, {
    params: {
      cursor: pageParam,
      limit,
    },
  });
  return res.data;
}
