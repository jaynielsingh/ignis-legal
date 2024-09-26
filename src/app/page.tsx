import Link from "next/link";
import Hero from "./_components/hero";
import Feature from "./_components/features";
import Cta from "./_components/cta";
import Footer from "./_components/footer";
// import Values from "./_components/values";

export default function HomePage() {
  return (
    <main className="m-2">
      <Hero />
      <Feature />
      {/* <Values /> */}
      <Cta />
      <Footer />
    </main>
  );
}
