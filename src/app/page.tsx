import HeroSection from "@/components/HeroSection";
import { Navbar } from "@/components/nav/Navbar";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <div className="px-5 sm:px-10 max-w-7xl mx-auto w-full">
        <HeroSection />
      </div>
    </main>
  );
}
