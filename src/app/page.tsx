"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main
      className='flex min-h-screen flex-col items-center justify-center p-24'
      style={{
        background:
          "linear-gradient(to right top, #000244, #0b0b40, #14123b, #1b1736, #201d31, #201d2f, #201e2e, #201e2c, #1c1a2e, #18152f, #131131, #0e0b32)",
      }}
    >
      <div className='text-[100px] text-white font-bold'>
        Build Bridging Frames
      </div>
      <div className='text-[60px] text-white font-bold'>on Wormhole</div>
      <Button
        className='bg-slate-200 text-[#0b0b40] mt-20 w-fit text-2xl hover:bg-slate-400'
        onClick={() => router.push("/bridge")}
      >
        Build Now
      </Button>
    </main>
  );
}
