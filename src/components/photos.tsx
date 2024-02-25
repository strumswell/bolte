import Image from "next/image";

export default function Photos() {
  return (
    <div
      className="ml-4 mr-4 rounded-3xl bg-zinc-950 shadow-inner shadow-zinc-950/20 ring-1 ring-zinc-100/25 sm:ml-0 sm:mr-0 sm:mt-4"
      id="photos"
    >
      <div className="p-4 pl-10 pr-10">
        <h2 className="font-nostalgic mb-10 mt-5 text-6xl font-light leading-10">
          Some of my photos.
        </h2>
        <div className="flex h-auto flex-row gap-4">
          <div className="mb-5 flex w-full basis-1/2 flex-col gap-4">
            <a href="https://www.instagram.com/p/Cva0sqhqVOH/">
              <Image
                className="h-full w-full rounded-2xl object-cover ring-1 ring-zinc-500/20"
                src="/lakebw.jpeg"
                width={400}
                height={400}
                alt="profile picture"
                loading="lazy"
              />
            </a>
            <a href="https://www.instagram.com/p/CmzOPhqDKGT">
              <Image
                className="h-full w-full rounded-2xl object-cover ring-1 ring-zinc-500/20"
                src="/tower.jpg"
                width={400}
                height={400}
                alt="profile picture"
                loading="lazy"
              />
            </a>
          </div>
          <div className="flex basis-1/2 flex-col gap-4">
            <a href="https://www.instagram.com/p/CvcrR2SIamU">
              <Image
                className="w-full rounded-2xl object-cover ring-1 ring-zinc-500/20"
                src="/lake.jpeg"
                width={400}
                height={400}
                alt="profile picture"
                loading="lazy"
              />
            </a>
            <a href="https://www.instagram.com/p/CvcrR2SIamU">
              <Image
                className="w-full rounded-2xl object-cover ring-1 ring-zinc-500/20"
                src="/hut.jpeg"
                width={400}
                height={400}
                alt="profile picture"
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
