export default function Navigation() {
  return (
    <nav className="flex justify-between w-full bg-zinc-900 text-zinc-200 text-xl font-semibold p-4 pl-7 pr-8 rounded-full">
      <p>philipp bolte.</p>
      <div className="flex gap-12">
        <a className="hover:text-zinc-400" href="#">
          home.d
        </a>
        <a className="hover:text-zinc-400" href="#">
          photos.
        </a>
        <a className="hover:text-zinc-400" href="#">
          projects.
        </a>
      </div>
    </nav>
  );
}
