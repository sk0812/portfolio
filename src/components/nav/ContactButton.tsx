"use client";
import { motion } from "framer-motion";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";

export const ContactButton = () => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-full text-sm transition-colors duration-200"
    >
      <EnvelopeClosedIcon className="w-4 h-4" />
      <span>Contact</span>
    </motion.button>
  );
};
