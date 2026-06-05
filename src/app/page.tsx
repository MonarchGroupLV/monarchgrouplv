import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import MottoBar from "@/components/sections/MottoBar";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import TaglineBreak from "@/components/sections/TaglineBreak";
import Process from "@/components/sections/Process";
import Ventures from "@/components/sections/Ventures";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <MottoBar />
        <Stats />
        <About />
        <Services />
        <TaglineBreak />
        <Process />
        <Ventures />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
