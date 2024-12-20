"use client";
import { motion } from "framer-motion";
import { NavMenu } from "./NavMenu";
import { ContactButton } from "./ContactButton";

export const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 pt-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Name */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="px-4 py-1.5 rounded-full border border-white/20 text-white/90"
          >
            <span className="text-lg font-medium">Sid Kheria</span>
          </motion.div>

          {/* Navigation Menu */}
          <NavMenu />

          {/* Contact Button */}
          <ContactButton />
        </div>
      </div>
    </motion.nav>
  );
};
