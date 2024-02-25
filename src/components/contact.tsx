export default function Contact() {
  return (
    <div className="ml-4 mr-4 mt-4 rounded-3xl bg-gradient-to-b from-zinc-800 to-zinc-950 p-12 shadow-inner shadow-zinc-950/20 ring-1 ring-zinc-100/25 sm:ml-0 sm:mr-0">
      <div className="m-auto">
        <div className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="h-16 w-16 text-zinc-400 duration-300 hover:scale-105"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
        </div>
        <div className="mt-8 flex justify-center">
          <h2 className="font-nostalgic bg-gradient-to-b from-zinc-300 to-zinc-600 bg-clip-text pr-2 text-6xl font-thin text-transparent">
            Wanna talk?
          </h2>
        </div>
        <div className="mt-12 flex justify-center">
          <a
            className="font-nostalgic w-fit rounded-full bg-gradient-to-b from-zinc-300 to-zinc-600 p-5 pl-10 pr-10 text-center text-3xl font-medium tracking-wide text-zinc-800 shadow-inner shadow-zinc-950/20 ring-1 ring-zinc-100/40 transition duration-500 hover:scale-105"
            href={`mailto:${getMail()}`}
          >
            {getMail()}
          </a>
        </div>
      </div>
    </div>
  );
}

function getMail() {
  if (typeof window !== "undefined") {
    const host = window.location.hostname;
    if (host.includes("id")) {
      return "hey@bolte.id";
    } else {
      return "philipp@bolte.cloud";
    }
  }
  return "philipp@bolte.cloud";
}
