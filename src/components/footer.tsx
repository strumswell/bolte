export default function Footer() {
  return (
    <nav className="flex justify-between w-auto bg-zinc-900 text-xl font-semibold p-4 pl-7 pr-8 mt-4 mb-28 sm:mb-4 ml-4 mr-4 sm:ml-0 sm:mr-0 rounded-full border border-zinc-800">
      <p className="text-zinc-200">philipp bolte.</p>
      <p className="text-zinc-500">all rights reserved. © {new Date().getUTCFullYear()}</p>
    </nav>
  );
}
