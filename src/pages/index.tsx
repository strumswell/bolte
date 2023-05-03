import About from "@/components/about";
import Hero from "@/components/hero";
import Navigation from "@/components/navigation";
import Photos from "@/components/photos";
import Socials from "@/components/socials";

export default function Home() {
  return (
    <main className="flex flex-col pt-5 bg-black justify-center">
      <div className="max-w-screen-xl mx-auto">
        <Navigation />
        <Hero />
        <Socials />
        <About />
        <Photos />
      </div>
    </main>
  );
}
