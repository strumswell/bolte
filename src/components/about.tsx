export default function About() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:mt-4 m-4 sm:ml-0 sm:mr-0">
      <div className="sm:basis-2/5 bg-zinc-900 rounded-3xl p-4 pl-10 pr-20 border border-zinc-800">
        <div className="flex flex-col gap-4 mt-5 mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.2"
            stroke="currentColor"
            className="w-20 h-20"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
            />
          </svg>
          <div className="mt-4">
            <p className="text-6xl font-medium break-after-column">Based in Leipzig, Germany.</p>
            <p className="text-6xl font-medium text-zinc-500">UTC+2</p>
          </div>
        </div>
      </div>
      <div className="sm:basis-3/5 bg-zinc-900 rounded-3xl p-4 pl-10 pr-20 border border-zinc-800">
        <div className="mt-5 mb-8 leading-10">
          <span className="text-5xl font-medium">
            As a software engineer, I work on the verge of established and web3 technologies.
          </span>
          <span className="text-5xl font-medium text-zinc-500 ml-2">
            I have a strong product and business focus with a strict no-bs policy.
          </span>
        </div>
      </div>
    </div>
  );
}
