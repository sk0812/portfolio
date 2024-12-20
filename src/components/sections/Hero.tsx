"use client";
import AnimatedGridPattern from "../ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ProfileGreeting } from "../hero/ProfileGreeting";
import { ConnectButton } from "../hero/ConnectButton";
import { BottomText } from "../hero/BottomText";

const Hero = () => {
  return (
    <>
      {/* Animated background only for hero */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatedGridPattern
          numSquares={40}
          height={70}
          width={70}
          maxOpacity={0.1}
          duration={2}
          repeatDelay={1}
          className={cn(
            "absolute inset-0 w-full h-full",
            "[mask-image:radial-gradient(ellipse_at_center,white,transparent)]"
          )}
        />
      </div>

      <div className="h-[calc(100vh-7rem)] flex flex-col relative">
        <div className="flex-1 flex flex-col justify-center items-center relative z-10 text-center max-w-7xl mx-auto px-4">
          <ProfileGreeting />

          {/* Main Title with Positioned Elements */}
          <div className="relative text-center">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.5,
                duration: 0.7,
                type: "spring",
                stiffness: 100,
              }}
              className="text-7xl font-bold leading-[1] inline-flex flex-col items-center gap-2"
            >
              <div className="flex items-center gap-4">
                <span className="text-violet-400">DEVELOPER,</span>
                <div className="text-white/80 text-lg flex flex-col items-start gap-0 -mt-1">
                  <div>
                    <span className="text-white/50">//</span> Based in
                  </div>
                  <div>London, UK</div>
                </div>
              </div>
              <span className="text-amber-400 -mt-2">DESIGNER,</span>
              <div className="flex items-center gap-2 -mt-2">
                <span className="text-slate-100">STUDENT</span>
                <ConnectButton />
              </div>
              <div className="flex items-center gap-4 -mt-2">
                <div className="flex flex-col items-start text-white/80 text-lg gap-0">
                  <div>
                    <span className="text-white/50">//</span> Wordpress Designer
                  </div>
                  <div className="ml-4">Full-Stack Developer</div>
                </div>
                <div className="flex items-center">
                  <span className="text-white">&</span>
                  <span className="text-teal-400">&nbsp;ENTREPRENEUR.</span>
                </div>
              </div>
            </motion.h1>
          </div>

          <BottomText />
        </div>
      </div>
    </>
  );
};

export default Hero;
