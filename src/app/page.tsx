import Hero from "@/components/sections/Hero";
import { Navbar } from "@/components/nav/Navbar";
import Technologies from "@/components/sections/Technologies";

export default function Home() {
  return (
    <main className="relative bg-black">
      <Navbar />
      <div className="w-full">
        <div className="relative">
          <Hero />
        </div>

        <div className="px-5 sm:px-10 max-w-7xl mx-auto w-full">
          <Technologies />
        </div>
      </div>
    </main>
  );
}
