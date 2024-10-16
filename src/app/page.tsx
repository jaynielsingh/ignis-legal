import Link from "next/link";
import Hero from "./_components/hero";
import Feature from "./_components/features";
import Footer from "./_components/footer";
import CTA from "./_components/cta";
import Contact from "./_components/contact";
import Pricing from "./_components/pricing";
import Values from "./_components/values";
// import Values from "./_components/values";

export default function HomePage() {
  return (
    <main className="m-2">
      <Hero />
      <Feature />
      <CTA />
      {/* <Pricing /> */}
      <Values />
      <Contact />
      <Footer />
    </main>
  );
}
