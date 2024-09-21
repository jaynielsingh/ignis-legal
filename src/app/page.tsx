import Link from "next/link";
import Hero from "./components/hero";
import Feature from "./components/features";
import Cta from "./components/cta";
import Footer from "./components/footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Feature />
      <Cta />
      <Footer />
    </main>
  );
}
