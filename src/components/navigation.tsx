export default function Navigation() {
  return (
    <div>
      <nav className="hidden sm:inline-flex mb-4 justify-between w-full bg-zinc-900 text-zinc-200 text-xl font-semibold p-4 pl-7 pr-8 rounded-full border border-zinc-800">
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
      <div className="sm:hidden fixed z-50 max-w-screen bottom-4 right-4 left-4 p-4 bg-zinc-700 opacity-95 rounded-full border border-zinc-500 shadow-xl shadow-zinc-900">
        <div className="grid h-full grid-cols-3 text-3xl font-semibold">
          <a className="inline-flex flex-col items-center justify-center rounded-r-full" href="#home">
            home.
          </a>
          <a className="inline-flex flex-col items-center justify-center rounded-r-full" href="#photos">
            photos.
          </a>
          <a className="inline-flex flex-col items-center justify-center rounded-r-full" href="#projects">
            projects.
          </a>
        </div>
      </div>
    </div>
  );
}
