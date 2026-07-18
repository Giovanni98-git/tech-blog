"use client";

import { useModalStore } from "@/store/useModalStore";
import Modal from "./Modal";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";

export default function SignInModal() {
  const { isSignInOpen, closeSignIn } = useModalStore();

  const signInwithGoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };
  const signInwithGitHub = async () => {
    await authClient.signIn.social({
      provider: "github",
    });
  };
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

        <button
          onClick={signInwithGoogle}
          className="w-full flex items-center justify-center gap-3 
          py-3 rounded-full cursor-pointer 
          bg-white text-black font-medium
          hover:bg-gray-200 transition"
        >
          <FcGoogle className="text-xl" /> Continue with Google
        </button>
      </div>
      <div className="mt-6 flex flex-col gap-4">
        {/* github */}

        <button
          onClick={signInwithGitHub}
          className="w-full flex items-center justify-center gap-3 
          py-3 rounded-full cursor-pointer 
          bg-white text-black font-medium
          hover:bg-gray-200 transition"
        >
          <FaGithub className="text-xl" /> Continue with GitHub
        </button>
      </div>
      <p className="text-xs text-gray-500 mt-8 text-center">
        By continuing, you agree to our Terms & Privacy Policy.
      </p>
    </Modal>
  );
}
