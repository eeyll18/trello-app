import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}
