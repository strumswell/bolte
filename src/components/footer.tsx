import Link from "next/link";

export default function Footer() {
  return (
    <nav className="flex justify-between w-auto bg-gradient-to-b from-zinc-950 to-zinc-900 text-zinc-200 text-2xl font-nostalgic font-light p-4 pl-7 pr-8 mt-4 mb-28 sm:mb-4 ml-4 mr-4 sm:ml-0 sm:mr-0 rounded-3xl ring-1 ring-zinc-100/25 shadow-inner shadow-zinc-950/20">
      <p className="text-zinc-200">philipp bolte.</p>
      <div className="hidden md:block">
        <iframe
          src="https://oscarweather.betteruptime.com/badge?theme=dark"
          width="200"
          height="30"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
      <p className="text-zinc-400">
        <Link href="/privacy">privacy</Link> © {new Date().getUTCFullYear()}
      </p>
    </nav>
  );
}
