import Image from "next/image";

export default function Photos() {
  return (
    <div className="bg-zinc-900 mt-4 rounded-3xl" id="photos">
      <div className="p-4 pl-10 pr-10">
        <h2 className="text-5xl font-medium mt-5 mb-10 leading-10">Some of my photos.</h2>
        <div className="flex flex-row gap-8 h-auto">
          <div className="flex flex-col gap-8 basis-1/2 w-full mb-5">
            <a href="https://www.instagram.com/p/BqCSPBblFGq">
              <Image
                className="object-cover rounded-2xl w-full transition-all duration-500 hover:scale-105"
                src="/mushroom.jpg"
                width={200}
                height={200}
                alt="profile picture"
              />
            </a>
            <a href="https://www.instagram.com/p/Bn0gkLbnw3g">
              <Image
                className="object-cover rounded-2xl w-full transition-all duration-500 hover:scale-105"
                src="/rose.jpg"
                width={200}
                height={200}
                alt="profile picture"
              />
            </a>
          </div>
          <div className="flex flex-col basis-1/2 gap-8">
            <a href="https://www.instagram.com/p/BnstwUKFu01">
              <Image
                className="object-cover rounded-2xl w-full transition-all duration-500 hover:scale-105"
                src="/tulip.jpg"
                width={200}
                height={200}
                alt="profile picture"
              />
            </a>
            <a href="https://www.instagram.com/p/CmzOPhqDKGT">
              <Image
                className="object-cover rounded-2xl w-full transition-all duration-500 hover:scale-105"
                src="/tower.jpg"
                width={200}
                height={200}
                alt="profile picture"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
