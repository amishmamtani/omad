"use client";

import { useRouter } from 'next/navigation';
import Image from "next/image";
import { motion } from 'framer-motion';
import { AuroraBackground } from "../components/ui/aurora-background";

export default function Home() {
  const router = useRouter();

  const goToSignUp = () => {
    router.push('/signup'); // Navigate to the signup page
  };

  return (
    <AuroraBackground>
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="relative flex flex-col gap-4 items-center justify-center px-4"
    > 
    <main className="flex items-center justify-center h-screen bg-transparent">
      <div className="text-center">
        <h1 className="text-8xl font-junicode text-yellow-500">One Memory A Day</h1>
        <button
          className="mt-6 px-10 py-4 font-satoshi text-white bg-[#181818] rounded-full hover:bg-gray-700"
          onClick={goToSignUp}
        >
          Get Started
        </button>
      </div>
    </main>
    </motion.div>
    </AuroraBackground>
  );
}