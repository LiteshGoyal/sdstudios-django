import Image from "next/image";
import Hero from "@/components/Landingpage/Hero";
import Features from "@/components/Landingpage/Features";
import Testimonials from "@/components/Landingpage/Testimonials";
import Pricing from "@/components/Landingpage//Pricing";
import FAQ from "./FAQ";
import CTA from "./CTA";
export default function Landingpage() {
  return (
    <div>
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
    </div>
  );
}
