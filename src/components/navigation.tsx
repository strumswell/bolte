export default function Navigation() {
  return (
    <div>
      <nav className="hidden sm:inline-flex ring-1 ring-zinc-100/25 shadow-inner shadow-zinc-950/20 mb-4 justify-between w-full bg-gradient-to-b from-zinc-900 to-zinc-950 text-zinc-200 text-2xl font-nostalgic font-light tracking-wide p-4 pl-7 pr-8 rounded-3xl">
        <p>philipp bolte.</p>
        <div className="flex gap-12">
          <a className="hover:text-zinc-300" href="#home">
            about.
          </a>
          <a className="hover:text-zinc-300" href="#photos">
            photos.
          </a>
          <a className="hover:text-zinc-300" href="#projects">
            projects.
          </a>
        </div>
      </nav>
      <div className="sm:hidden backdrop-blur-lg wackdrop-brightness-90 fixed z-50 max-w-screen bottom-4 right-4 left-4 p-4 rounded-3xl ring-1 ring-zinc-100/25 shadow-inner shadow-zinc-950/20">
        <div className="grid h-full grid-cols-3 text-3xl font-nostalgic font-light">
          <a className="inline-flex flex-col items-center justify-center rounded-r-full" href="#home">
            about.
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
