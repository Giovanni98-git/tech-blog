export interface FecthPostsParams {
  pageParam?: string | null;
  limit?: number;
}

export interface PostAuthor {
  name: string | null;
  image: string;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  coverImageUrl: string | null;
  createdAt: string;
  author: PostAuthor;
}

export interface FetchPostsResponse {
  nextCursor: null;
  posts: Post[];
  nextPage: string | null;
}
