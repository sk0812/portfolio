"use client";
import { motion } from "framer-motion";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

export const SocialLinks = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-0 left-0 right-0 w-full bg-black/0.1 backdrop-blur-sm border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between text-white/70">
          {/* Left text */}
          <div className="text-sm flex text-left gap-2 w-[200px]">
            <span className="text-white/50">//</span>
            <span>Let's build something together</span>
          </div>

          {/* Center - Social Icons */}
          <div className="flex-1 flex items-center justify-center gap-6">
            <motion.a
              href="https://github.com/sidkheria"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, color: "rgb(255 255 255)" }}
              className="cursor-pointer"
            >
              <GitHubLogoIcon className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/sidkheria"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, color: "rgb(255 255 255)" }}
              className="cursor-pointer"
            >
              <LinkedInLogoIcon className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://twitter.com/sidkheria"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, color: "rgb(255 255 255)" }}
              className="cursor-pointer"
            >
              <TwitterLogoIcon className="w-5 h-5" />
            </motion.a>
          </div>

          {/* Right - Email */}
          <div className="w-[200px] flex justify-end">
            <motion.a
              href="mailto:sid@kheria.com"
              whileHover={{ y: -2, color: "rgb(255 255 255)" }}
              className="text-sm cursor-pointer"
            >
              sid@kheria.com
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
