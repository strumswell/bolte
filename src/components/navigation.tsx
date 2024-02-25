export default function Navigation() {
  return (
    <div>
      <nav className="font-nostalgic mb-4 hidden w-full justify-between rounded-3xl bg-gradient-to-b from-zinc-900 to-zinc-950 p-4 pl-7 pr-8 text-2xl font-light tracking-wide text-zinc-200 shadow-inner shadow-zinc-950/20 ring-1 ring-zinc-100/25 sm:inline-flex">
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
      <div className="max-w-screen fixed bottom-4 left-4 right-4 z-50 rounded-3xl p-4 shadow-inner shadow-zinc-950/20 ring-1 ring-zinc-100/25 backdrop-blur-xl backdrop-brightness-90 sm:hidden">
        <div className="font-nostalgic grid h-full grid-cols-3 text-3xl font-light">
          <a
            className="inline-flex flex-col items-center justify-center rounded-r-full"
            href="#home"
          >
            about.
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
