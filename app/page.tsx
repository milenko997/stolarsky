import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Work from "@/components/work";
import About from "@/components/about";
import Process from "@/components/process";
import Services from "@/components/services";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Work />
        <About />
        <Process />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
