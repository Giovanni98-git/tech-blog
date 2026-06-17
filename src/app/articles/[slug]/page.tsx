"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LuPen, LuTrash } from "react-icons/lu";

export default function PostViewPage() {
  return (
    <article className="max-w-3xl mx-auto py-20 px-6">
      {/* article header */}
      <header className="mb-10">
        <h1
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white
        leading-tight mb-4"
        >
          Building a Medium-Style Blog with Next.js
        </h1>
        <div className="flex items-center gap-4 text-sm text-gray-400">
          <span>By Emmanuel Egbon</span>
          <span>·</span>
          <span>Mar 14, 2026</span>
        </div>
      </header>
      <div className="relative w-full h-55 sm:h-80 lg:h-105 mb-12">
        <Image
          src="/images/p1.png"
          alt="cover-image"
          className="object-cover rounded-2xl"
          fill
        />
      </div>

      {/** article content */}
      <div className="max-w-none text-gray-400 leading-relaxed tracking-wide">
        <p className="mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nisi
          quam facere adipisci error maxime suscipit molestiae animi, aperiam
          distinctio eaque omnis mollitia asperiores earum corrupti similique
          natus explicabo eum?
        </p>
        <p className="mb-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem ut sequi
          hic obcaecati animi, quam architecto deleniti voluptate, debitis
          voluptatibus, mollitia aperiam iste temporibus alias soluta! Quam
          ullam laborum accusamus.
        </p>
        <p className="mb-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
          delectus rem minus ullam ab voluptatem laudantium, iste tenetur
          praesentium veritatis itaque! Id dolor dolore blanditiis nemo velit
          officia sequi provident?
        </p>
      </div>
      <div className="border-t border-white/10 my-16" />
      <div className="flex items-center justify-end gap-2">
        <Link
          href="#"
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
