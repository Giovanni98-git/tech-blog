"use client";
import { useModalStore } from "@/store/useModalStore";
import Modal from "./Modal";

const results = [
  {
    id: 1,
    title: "Building a Medium-Style Blog with Next.js",
    slug: "/articls/medium-style-blog",
  },
  {
    id: 2,
    title: "Understanding React Hooks",
    slug: "/articles/understanding-react-hooks",
  },
  {
    id: 3,
    title: "A Guide to Next.js Routing",
    slug: "/articles/a-guide-to-nextjs-routing",
  },
];

export default function SearchModal() {
  const { isSearchOpen, closeSearch } = useModalStore();
  return (
    <Modal isOpen={isSearchOpen} onClose={closeSearch}>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Search articles"
          autoFocus
          className="w-full p-4 rounded-xl bg-black/40 border border-white/10 
          text-white text-lg outline-none focus:border-indigo-500"
        />
        <div
          className="max-h-80 overflow-y-auto rounded-xl border border-white/10
      divide-y divide-white/10"
        >
          {results.map((result) => (
            <button
              key={result.id}
              className="w-full text-left px-4 py-3 text-gray-300 trannsition 
            hover:bg-white/5 hover:text-white cursor-pointer"
            >
              {result.title}
            </button>
          ))}
        </div>
      </div>
    </Modal>
  );
}
