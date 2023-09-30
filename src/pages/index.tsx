import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navigation from "@/components/navigation";
import Photos from "@/components/photos";
import Project from "@/components/project";
import Socials from "@/components/socials";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Philipp Bolte | Software Engineer"
        description="I am Philipp, a software engineer working at Spherity on Web3 and SSI solutions."
      />
      <main className="flex flex-col pt-5 justify-center">
        <div className="max-w-screen-xl mx-auto">
          <Navigation />
          <Hero />
          <Socials />
          <About />
          <Photos />
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Project
              title="Oscar"
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
    </>
  );
}
