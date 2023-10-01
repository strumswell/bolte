import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 pl-4 pr-4 pb-4 sm:p-0" id="home">
      <div className="sm:basis-3/5 bg-gradient-to-b from-zinc-950 to-zinc-800 rounded-3xl p-4 pl-10 pr-10 sm:pr-20 ring-1 ring-zinc-100/25 shadow-inner shadow-zinc-950/20">
        <div className="flex flex-col gap-4 mt-5 mb-10">
          <Image
            className="object-cover rounded-full h-28 w-28 grayscale"
            src="/about-min.jpg"
            width={200}
            height={200}
            alt="profile picture"
          />
          <div className="mt-4 text-6xl font-nostalgic font-thin tracking-wide">
            <h1 className="break-after-column">I am Philipp.</h1>
            <p className="pb-1 bg-gradient-to-b from-zinc-300 to-zinc-500 bg-clip-text text-transparent">
              A software engineer working on digital identity at Spherity.
            </p>
          </div>
        </div>
      </div>
      <div className="flex sm:basis-2/5 bg-zinc-800 sm:bg-gradient-to-b sm:from-zinc-950 sm:to-zinc-800 rounded-3xl p-4 pl-10 pr-10 ring-1 ring-zinc-100/25 shadow-inner shadow-zinc-950/20">
        <div className="flex flex-row sm:flex-col gap-10 sm:gap-4 m-auto h-fit items-center">
          <div className="flex justify-center">
            <h2 className="text-5xl font-nostalgic font-thin tracking-wide bg-gradient-to-b from-zinc-300 to-zinc-500 bg-clip-text text-transparent pr-1">
              Who?
            </h2>
          </div>
          <div className="flex justify-center text-center sm:mt-6">
            <a
              className="text-2xl lg:text-3xl p-4 pl-7 pr-7 font-nostalgic font-medium tracking-wide bg-gradient-to-b from-zinc-300 to-zinc-600 text-zinc-800 transition duration-500 hover:scale-105 rounded-full ring-1 ring-zinc-100/10 shadow-inner shadow-zinc-950/20"
              href="https://www.linkedin.com/in/philipp-bolte-5148601a3/"
            >
              Check CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
