import Image from "next/image";
import Link from "next/link";
import { Spinner, Blockquote, Carousel } from "flowbite-react";
import splash1 from "@/public/img/splash-1.jpeg";
import splash2 from "@/public/img/splash-2.jpeg";
import splash3 from "@/public/img/splash-3.jpeg";

export default function Home() {
  return (
    <main className="flex-col justify-center items-center min-h-screen gap-4 bg-[#E5C8C0]">
      <div className="h-96">
        <Carousel slide={false}>
          <div className="flex h-full items-center justify-center">
            <Image
              src={splash1}
              alt="splash screen image"
              className="absolute bottom-0 opacity-85"
            />
            <Blockquote className="absolute top-1/3 text-3xl text-[#813F3D] text-center z-50">
              Erf And Mary: The Adventures
            </Blockquote>
          </div>
          <div className="flex h-full items-center justify-center">
            <Blockquote className="absolute top-1/3 text-3xl text-[#813F3D] text-center z-50">
              Are you Ready?
            </Blockquote>
            <Image
              src={splash2}
              alt="splash screen image"
              className="absolute bottom-0 opacity-85"
            />
          </div>
          <div className="flex h-full items-center justify-center">
            <Blockquote className="absolute top-1/4 text-3xl text-[#813F3D] text-center z-50">
              {`Let's Get Started!`}
            </Blockquote>
            <button className="absolute top-1/3 bg-[#813F3D] text-white py-2 px-6 rounded-lg cursor-pointer text-3xl">
              <Link href={"/dashboard"}>{`Go to Dashboard`}</Link>
            </button>

            <Image
              src={splash3}
              alt="splash screen image"
              className="absolute bottom-0 opacity-85"
            />
          </div>
        </Carousel>
      </div>
    </main>
  );
}
