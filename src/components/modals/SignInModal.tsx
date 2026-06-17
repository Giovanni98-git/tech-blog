"use client";

import { useModalStore } from "@/store/useModalStore";
import Modal from "./Modal";
import { FcGoogle } from "react-icons/fc";

export default function SignInModal() {
  const { isSignInOpen, closeSignIn } = useModalStore();
  return (
    <Modal isOpen={isSignInOpen} onClose={closeSignIn}>
      <h2 className="text-xl font-semibold text-white mb-2">
        Sign in to Tech Blog
      </h2>
      <p className="text-sm text-gray-400">
        {" "}
        Continue with one of the providers below
      </p>
      <div className="mt-6 flex flex-col gap-4">
        {/* google */}
        button
        <button
          className="w-full flex items-center justify-center gap-3 
          py-3 rounded-full cursor-pointer 
          bg-white text-black font-medium
          hover:bg-gray-200 transition"
        >
          <FcGoogle className="text-xl" /> COntinue with Google
        </button>
      </div>
      <p className="text-xs text-gray-500 mt-8 text-center">
        By continuing, you agree to our Terms & Privacy Policy.
      </p>
    </Modal>
  );
}
