export default function Navigation() {
  return (
    <div>
      <nav className="hidden sm:inline-flex shadow-lg shadow-zinc-700/20 mb-4 justify-between w-full bg-zinc-950 text-zinc-200 text-xl font-light p-4 pl-7 pr-8 rounded-3xl border border-zinc-700/80">
        <p>philipp bolte.</p>
        <div className="flex gap-12">
          <a className="hover:text-zinc-400" href="#home">
            home.
          </a>
          <a className="hover:text-zinc-400" href="#photos">
            photos.
          </a>
          <a className="hover:text-zinc-400" href="#projects">
            projects.
          </a>
        </div>
      </nav>
      <div className="sm:hidden fixed z-50 max-w-screen bottom-4 right-4 left-4 p-4 bg-zinc-800 opacity-95 rounded-3xl border border-zinc-500/80 shadow-lg shadow-zinc-700/20">
        <div className="grid h-full grid-cols-3 text-3xl font-light">
          <a
            className="inline-flex flex-col items-center justify-center rounded-r-full"
            href="#home"
          >
            home.
          </a>
          <a
            className="inline-flex flex-col items-center justify-center rounded-r-full"
            href="#photos"
          >
            photos.
          </a>
          <a
            className="inline-flex flex-col items-center justify-center rounded-r-full"
            href="#projects"
          >
            projects.
          </a>
        </div>
      </div>
    </div>
  );
}
