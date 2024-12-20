"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const technologies = [
  {
    name: "Git",
    icon: "/logos/git.svg",
    description: "Version Control & Collaboration",
    bgColor: "bg-[#f1502f]/10",
  },
  {
    name: "Node.js",
    icon: "/logos/nodejs.svg",
    description: "JavaScript Runtime Environment",
    bgColor: "bg-[#539e43]/10",
  },
  {
    name: "Next.js",
    icon: "/logos/nextjsDark.svg",
    description: "React Framework for Production",
    bgColor: "bg-[#3C3C3C]/30",
  },
  {
    name: "Supabase",
    icon: "/logos/supabase.svg",
    description: "JavaScript Runtime Environment",
    bgColor: "bg-[#3ECF8E]/10",
  },
  {
    name: "Python",
    icon: "/logos/python.svg",
    description: "Backend & Data Processing",
    bgColor: "bg-[#3776AB]/10",
  },
  {
    name: "React",
    icon: "/logos/react.svg",
    description: "Frontend Library & UI Components",
    bgColor: "bg-[#61DAFB]/10",
  },
  {
    name: "Tailwind CSS",
    icon: "/logos/tailwind.svg",
    description: "Utility-First CSS Framework",
    bgColor: "bg-[#38BDF8]/10",
  },
  {
    name: "TypeScript",
    icon: "/logos/typescript.svg",
    description: "Typed JavaScript Development",
    bgColor: "bg-[#3178C6]/10",
  },
];

const Technologies = () => {
  return (
    <section className="w-full py-20 relative" id="technologies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-2 mb-16"
        >
          <div className="flex items-center gap-2">
            <span className="text-white/50">//</span>
            <h2 className="text-4xl font-bold text-white">
              Current Technologies
            </h2>
          </div>
          <p className="text-white/50 text-lg ml-6">
            I'm proficient in a range of modern technologies that empower me to
            build highly functional solutions. <br /> These are some of my main
            technologies.
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-4 p-4 rounded-lg border border-white/10 bg-black/20 backdrop-blur-sm hover:border-white/20 transition-colors"
            >
              <div className={`p-3 rounded-md ${tech.bgColor}`}>
                <div className="relative w-8 h-8 flex-shrink-0">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-medium text-sm">
                  {tech.name}
                </span>
                <span className="text-white/50 text-xs">
                  {tech.description}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
