import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Menu } from "@/components/menu";
import { Contact } from "@/components/contact";
import { About } from "@/components/about";
import { Location } from "@/components/location";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Menu />
      <Contact />
      <About />
      <Location />
      <Footer />
    </main>
  );
}
