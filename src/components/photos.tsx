import Image from "next/image";

export default function Photos() {
  return (
    <div
      className="bg-zinc-950 ml-4 mr-4 sm:ml-0 sm:mr-0 sm:mt-4 rounded-3xl ring-1 ring-zinc-100/25 shadow-inner shadow-zinc-950/20"
      id="photos"
    >
      <div className="p-4 pl-10 pr-10">
        <h2 className="text-6xl font-light mt-5 mb-10 leading-10 font-nostalgic">Some of my photos.</h2>
        <div className="flex flex-row gap-4 h-auto">
          <div className="flex flex-col gap-4 basis-1/2 w-full mb-5">
            <a href="https://www.instagram.com/p/Cva0sqhqVOH/">
              <Image
                className="object-cover rounded-2xl w-full h-full ring-1 ring-zinc-500/20"
                src="/lakebw.jpeg"
                width={400}
                height={400}
                alt="profile picture"
                loading="lazy"
              />
            </a>
            <a href="https://www.instagram.com/p/CmzOPhqDKGT">
              <Image
                className="object-cover rounded-2xl h-full w-full ring-1 ring-zinc-500/20"
                src="/tower.jpg"
                width={400}
                height={400}
                alt="profile picture"
                loading="lazy"
              />
            </a>
          </div>
          <div className="flex flex-col basis-1/2 gap-4">
            <a href="https://www.instagram.com/p/CvcrR2SIamU">
              <Image
                className="object-cover rounded-2xl w-full ring-1 ring-zinc-500/20"
                src="/lake.jpeg"
                width={400}
                height={400}
                alt="profile picture"
                loading="lazy"
              />
            </a>
            <a href="https://www.instagram.com/p/CvcrR2SIamU">
              <Image
                className="object-cover rounded-2xl w-full ring-1 ring-zinc-500/20"
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
