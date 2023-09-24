import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 pl-4 pr-4 pb-4 sm:p-0" id="home">
      <div className="sm:basis-3/5 bg-gradient-to-b from-zinc-950 to-zinc-900 rounded-3xl p-4 pl-10 pr-10 sm:pr-20 border border-zinc-700/80 shadow-lg shadow-zinc-700/20">
        <div className="flex flex-col gap-4 mt-5 mb-10">
          <Image
            className="object-cover rounded-full h-28 w-28 grayscale"
            src="/about-min.jpg"
            width={200}
            height={200}
            alt="profile picture"
          />
          <div className="mt-4">
            <h1 className="text-7xl font-light break-after-column">I am Philipp.</h1>
            <p className="text-7xl font-light text-zinc-500">A software engineer working at Spherity.</p>
          </div>
        </div>
      </div>
      <div className="flex sm:basis-2/5 bg-gradient-to-b from-zinc-950 to-zinc-900 rounded-3xl p-4 pl-10 pr-10 border border-zinc-700/80 shadow-lg shadow-zinc-700/20">
        <div className="flex flex-row sm:flex-col gap-10 sm:gap-4 m-auto h-fit items-center">
          <div className="flex justify-center">
            <h2 className="text-5xl font-light">Who?</h2>
          </div>
          <div className="flex justify-center text-center sm:mt-6">
            <a
              className="text-2xl lg:text-3xl p-5 pl-10 pr-10 bg-zinc-400 text-zinc-800 shadow-2xl font-light transition duration-500 hover:scale-105 rounded-full"
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
