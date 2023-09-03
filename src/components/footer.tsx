import Link from "next/link";

export default function Footer() {
  return (
    <nav className="flex justify-between w-auto bg-zinc-950 text-xl font-light p-4 pl-7 pr-8 mt-4 mb-28 sm:mb-4 ml-4 mr-4 sm:ml-0 sm:mr-0 rounded-3xl border border-zinc-700/80 shadow-lg shadow-zinc-700/20">
      <p className="text-zinc-200">philipp bolte.</p>
      <p className="text-zinc-500">
        <Link href="/privacy">privacy</Link> • © {new Date().getUTCFullYear()}
      </p>
    </nav>
  );
}
