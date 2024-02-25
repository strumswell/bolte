import Image from "next/image";

export default function Hero() {
  return (
    <div
      className="flex flex-col gap-4 pb-4 pl-4 pr-4 sm:flex-row sm:p-0"
      id="home"
    >
      <div className="rounded-3xl bg-gradient-to-b from-zinc-950 to-zinc-800 p-4 pl-10 pr-5 shadow-inner shadow-zinc-950/20 ring-1 ring-zinc-100/25 sm:basis-3/5 sm:pr-20">
        <div className="mb-10 mt-5 flex flex-col gap-4">
          <Image
            className="h-28 w-28 rounded-full object-cover grayscale"
            src="/about-min.jpg"
            width={200}
            height={200}
            alt="profile picture"
          />
          <div className="font-nostalgic mt-4 text-6xl font-thin tracking-wide">
            <h1 className="break-after-column">I am Philipp.</h1>
            <p className="bg-gradient-to-b from-zinc-300 to-zinc-500 bg-clip-text pb-1 text-transparent">
              A software engineer working on decentralized identity.
            </p>
          </div>
        </div>
      </div>
      <div className="flex rounded-3xl bg-zinc-800 p-4 pl-10 pr-10 shadow-inner shadow-zinc-950/20 ring-1 ring-zinc-100/25 sm:basis-2/5 sm:bg-gradient-to-b sm:from-zinc-950 sm:to-zinc-800">
        <div className="m-auto flex h-fit flex-row items-center gap-10 sm:flex-col sm:gap-4">
          <div className="flex justify-center">
            <h2 className="font-nostalgic bg-gradient-to-b from-zinc-300 to-zinc-500 bg-clip-text pr-1 text-5xl font-thin tracking-wide text-transparent">
              Who?
            </h2>
          </div>
          <div className="flex justify-center text-center sm:mt-6">
            <a
              className="font-nostalgic rounded-full bg-gradient-to-b from-zinc-300 to-zinc-600 p-4 pl-7 pr-7 text-2xl font-medium tracking-wide text-zinc-800 shadow-inner shadow-zinc-950/20 ring-1 ring-zinc-100/40 transition duration-500 hover:scale-105 lg:text-3xl"
              href="/assets/cv-philipp.pdf"
            >
              Check CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
