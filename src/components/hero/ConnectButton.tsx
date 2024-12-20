"use client";
import { motion, AnimatePresence } from "framer-motion";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import Link from "next/link";

export const ConnectButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href="https://www.linkedin.com/in/sidkheria"
      target="_blank"
      rel="noopener noreferrer"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="group bg-zinc-800 hover:bg-[#0077b5] text-white px-6 py-2.5 rounded-full flex items-center gap-2 text-xl cursor-pointer transition-all duration-300"
      >
        <motion.span
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
          className="w-2.5 h-2.5 bg-green-500 rounded-full"
        />
        <AnimatePresence mode="wait">
          {!isHovered ? (
            <motion.span
              key="default"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              Let's Connect
            </motion.span>
          ) : (
            <motion.div
              key="hover"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-2"
            >
              <LinkedInLogoIcon className="w-5 h-5" />
              <span>@sidkheria</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Link>
  );
};
