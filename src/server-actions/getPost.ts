"use server";

import prisma from "@/lib/prisma";

export async function getPostBySlug(slug: string) {
  if (!slug) {
    throw new Error("Slug is required to fetch the post.");
  }

  const post = await prisma.post.findUnique({
    where: { slug },
    select: {
      id: true,
      title: true,
      slug: true,
      content: true,
      excerpt: true,
      coverImageUrl: true,
      createdAt: true,
      updatedAt: true,
      author: {
        select: {
          id: true,
          name: true,
          email: true,
          image: true,
        },
      },
    },
  });

  if (!post) {
    return null;
  }

  return post;
}
