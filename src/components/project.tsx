import Image from "next/image";

export default function Project(props: {
  title: string;
  description: string;
  url: string;
  picture: string;
}) {
  return (
    <div
      className="ml-4 mr-4 basis-1/2 rounded-3xl bg-gradient-to-b from-zinc-950 to-zinc-800 shadow-inner shadow-zinc-950/20 ring-1 ring-zinc-100/25 sm:ml-0 sm:mr-0"
      id="projects"
    >
      <div className="mb-6 p-4 pl-10 pr-10">
        <div className="flex flex-row justify-between">
          <div className="basis-3/4">
            <h2 className="font-nostalgic mt-5 text-6xl font-thin leading-10">
              {props.title}
            </h2>
            <h3 className="font-nostalgic mb-8 mt-2 bg-gradient-to-b from-zinc-300 to-zinc-600 bg-clip-text text-3xl font-thin leading-10 tracking-wider text-transparent">
              {props.description}
            </h3>
          </div>
          <a className="relative mt-5 basis-1/4" href={props.url}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="absolute end-0 h-14 w-14 rounded-full bg-gradient-to-b from-zinc-300 to-zinc-600 p-2 text-zinc-800 shadow-inner shadow-zinc-950/20 ring-1 ring-zinc-100/40 transition duration-500 hover:scale-110"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </a>
        </div>
        <Image
          className="w-full rounded-2xl object-cover ring-1 ring-zinc-500/20"
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
