export default function About() {
  return (
    <div className="m-4 flex flex-col gap-4 sm:ml-0 sm:mr-0 sm:mt-4 sm:flex-row">
      <div className="rounded-3xl bg-gradient-to-b from-zinc-800 to-zinc-950 p-4 pl-10 pr-20 shadow-inner shadow-zinc-900/20 ring-1 ring-zinc-100/25 sm:basis-2/5">
        <div className="mb-8 mt-5 flex flex-col gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1"
            stroke="currentColor"
            className="h-20 w-20 text-zinc-300 duration-300 hover:rotate-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
            />
          </svg>
          <div className="mt-4 tracking-wide">
            <p className="font-nostalgic break-after-column text-6xl">
              Based in Leipzig, Germany.
            </p>
            <p className="font-nostalgic bg-gradient-to-b from-zinc-400 to-zinc-700 bg-clip-text text-6xl text-transparent">
              UTC+2
            </p>
          </div>
        </div>
      </div>
      <div className="rounded-3xl bg-zinc-950 p-4 pl-10 pr-10 shadow-inner shadow-zinc-950/20 ring-1 ring-zinc-100/25 sm:basis-3/5 sm:bg-gradient-to-b sm:from-zinc-800 sm:to-zinc-950 sm:pr-20">
        <div className="mb-8 mt-5 leading-10">
          <span className="font-nostalgic text-6xl tracking-wide">
            Inventing on the verge of established and web3 technologies to solve
            real-world problems.
          </span>
          <span className="font-nostalgic ml-2 bg-gradient-to-b from-zinc-400 to-zinc-700 bg-clip-text text-6xl font-thin tracking-wide text-transparent">
            I have a strong product and business focus with a no-bs policy.
          </span>
        </div>
      </div>
    </div>
  );
}
