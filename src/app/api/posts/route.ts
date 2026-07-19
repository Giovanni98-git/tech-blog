import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import slugify from "slugify";

import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import {
  cloudinaryUploadResult,
  uploadToCloudinary,
} from "@/services/cloudinary";

export async function POST(req: Request) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user) {
      return NextResponse.json(
        {
          error: "Unauthorized",
        },
        { status: 401 },
      );
    }

    const formData = await req.formData();
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const excerpt = formData.get("excerpt") as string;
    const coverImage = formData.get("coverImage") as File;

    if (!title || !content || !excerpt || !coverImage) {
      return NextResponse.json(
        {
          error: "All fields are required",
        },
        { status: 400 },
      );
    }

    // generate  the slug
    const baseSlug = slugify(title, { lower: true, strict: true, trim: true });

    // ensure slug is unique
    let slug = baseSlug;
    let counter = 1;
    // check if the slug already exists in the database
    while (await prisma.post.findUnique({ where: { slug } })) {
      slug = `${baseSlug}-${counter}`;
      counter++;
    }

    // upload the cover image to cloudinary
    const imageData: cloudinaryUploadResult =
      await uploadToCloudinary(coverImage);

    // create the post in the database
    const post = await prisma.post.create({
      data: {
        title,
        content,
        excerpt,
        slug,
        coverImageUrl: imageData.secure_url,
        coverImagePublicId: imageData.public_id,
        authorId: session.user.id,
      },
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.log("CREATE_POST_ERROR: ", error);
    return NextResponse.json(
      {
        error: "Failed to create a new post",
      },
      { status: 500 },
    );
  }
}
