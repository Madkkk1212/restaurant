import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { FeaturedMenu } from "@/components/featured-menu";
import { ChefSpecial } from "@/components/chef-special";
import { Gallery } from "@/components/gallery";
import { Testimonials } from "@/components/testimonials";
import { Reservation } from "@/components/reservation";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <FeaturedMenu />
      <ChefSpecial />
      <Gallery />
      <Testimonials />
      <Reservation />
      <Contact />
      <Footer />
    </main>
  );
}
