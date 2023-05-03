import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navigation from "@/components/navigation";
import Photos from "@/components/photos";
import Project from "@/components/project";
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
        <div className="flex gap-4">
          <Project
            title="Oscar°"
            description="A SwiftUI weather app"
            picture="/map.jpeg"
            url="https://github.com/strumswell/oscar-weather"
          />
          <Project
            title="ServerlistMOTD"
            description="A Spigot plugin"
            picture="/minecraft.jpg"
            url="https://github.com/strumswell/ServerlistMOTD-X"
          />
        </div>
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
