import Image from "next/image";

export default function Project(props: { title: string; description: string; url: string; picture: string }) {
  return (
    <div
      className="bg-gradient-to-b from-zinc-950 to-zinc-800 ml-4 mr-4 sm:ml-0 sm:mr-0 rounded-3xl basis-1/2 ring-1 ring-zinc-100/25 shadow-inner shadow-zinc-950/20"
      id="projects"
    >
      <div className="p-4 pl-10 pr-10 mb-6">
        <div className="flex flex-row justify-between">
          <div className="basis-3/4">
            <h2 className="text-6xl font-nostalgic font-thin mt-5 leading-10">{props.title}</h2>
            <h3 className="text-3xl font-nostalgic font-thin tracking-wider bg-gradient-to-b from-zinc-300 to-zinc-600 bg-clip-text text-transparent mt-2 mb-8 leading-10">
              {props.description}
            </h3>
          </div>
          <a className="basis-1/4 mt-5 relative" href={props.url}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="absolute end-0 bg-gradient-to-b from-zinc-300 to-zinc-600 text-zinc-800 rounded-full p-2 w-14 h-14 transition duration-500 hover:scale-110 ring-1 ring-zinc-100/10 shadow-inner shadow-zinc-950/20"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </a>
        </div>
        <Image
          className="object-cover rounded-2xl w-full ring-1 ring-zinc-500/20"
          src={props.picture}
          width={500}
          height={500}
          alt="project picture"
          loading="lazy"
        />
      </div>
    </div>
  );
}
