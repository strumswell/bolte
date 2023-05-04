import Image from "next/image";

export default function Photos() {
  return (
    <div className="bg-zinc-900 ml-4 mr-4 sm:ml-0 sm:mr-0 sm:mt-4 rounded-3xl border border-zinc-800" id="photos">
      <div className="p-4 pl-10 pr-10">
        <h2 className="text-5xl font-medium mt-5 mb-10 leading-10">Some of my photos.</h2>
        <div className="flex flex-row gap-4 h-auto">
          <div className="flex flex-col gap-4 basis-1/2 w-full mb-5">
            <a href="https://www.instagram.com/p/BqCSPBblFGq">
              <Image
                className="object-cover rounded-2xl w-full"
                src="/mushroom.jpg"
                width={400}
                height={400}
                alt="profile picture"
              />
            </a>
            <a href="https://www.instagram.com/p/Bn0gkLbnw3g">
              <Image
                className="object-cover rounded-2xl w-full"
                src="/rose.jpg"
                width={400}
                height={400}
                alt="profile picture"
              />
            </a>
          </div>
          <div className="flex flex-col basis-1/2 gap-4">
            <a href="https://www.instagram.com/p/BnstwUKFu01">
              <Image
                className="object-cover rounded-2xl w-full"
                src="/tulip.jpg"
                width={400}
                height={400}
                alt="profile picture"
              />
            </a>
            <a href="https://www.instagram.com/p/CmzOPhqDKGT">
              <Image
                className="object-cover rounded-2xl w-full"
                src="/tower.jpg"
                width={400}
                height={400}
                alt="profile picture"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
