import Hero from "@/components/Hero";
import About from "@/components/About";
// We can add more sections here as we build them out
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      {/* <Portfolio /> - You can create and add this component next! */}
      <Contact />
    </main>
  );
}
