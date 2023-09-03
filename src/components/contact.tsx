export default function Contact() {
  return (
    <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-3xl ml-4 mr-4 sm:ml-0 sm:mr-0 mt-4 p-12 border border-zinc-700/80 shadow-lg shadow-zinc-700/20">
      <div className="m-auto">
        <div className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-16 h-16"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
        </div>
        <div className="flex justify-center mt-8">
          <h2 className="text-5xl font-light">Wanna talk?</h2>
        </div>
        <div className="flex justify-center mt-12">
          <a
            className="w-full text-3xl text-center p-5 pl-10 pr-10 bg-zinc-400 text-zinc-800 shadow-2xl font-light transition duration-500 hover:scale-105 rounded-full"
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
