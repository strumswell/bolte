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
      <main className="flex flex-col justify-center pt-5 sm:p-5">
        <div className="mx-auto max-w-screen-xl">
          <Navigation />
          <Hero />
          <Socials />
          <About />
          <Photos />
          <div className="mt-4 flex flex-col gap-4 sm:flex-row">
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
