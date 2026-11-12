import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { MoreProjects } from "@/components/MoreProjects";
import { Experience } from "@/components/Experience";
import { Certifications } from "@/components/Certifications";
import { Achievements } from "@/components/Achievements";
import { Education } from "@/components/Education";
import { CodingProfiles } from "@/components/CodingProfiles";
import { Footer } from "@/components/Footer";

// Dynamically import interactive client components below the fold with full SSR
const FeaturedProjects = dynamic(
  () => import("@/components/FeaturedProjects").then((mod) => mod.FeaturedProjects),
  { ssr: true }
);

const Contact = dynamic(
  () => import("@/components/Contact").then((mod) => mod.Contact),
  { ssr: true }
);

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090d16] text-slate-900 dark:text-slate-100 selection:bg-indigo-500/20 selection:text-indigo-500 transition-colors duration-200">
      <Navbar />
      <main id="main-content" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {/* 1. Hero */}
        <Hero />
        {/* 2. About */}
        <About />
        {/* 3. Skills */}
        <Skills />
        {/* 4. Featured Projects */}
        <FeaturedProjects />
        {/* 5. More Projects */}
        <MoreProjects />
        {/* 6. Experience */}
        <Experience />
        {/* 7. Certifications */}
        <Certifications />
        {/* 8. Achievements */}
        <Achievements />
        {/* 9. Education */}
        <Education />
        {/* 10. Coding Profiles */}
        <CodingProfiles />
        {/* 11. Contact */}
        <Contact />
      </main>
      {/* 12. Footer */}
      <Footer />
    </div>
  );
}
