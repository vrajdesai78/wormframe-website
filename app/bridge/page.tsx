"use client";

import BridgeKit from "@/components/bridge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main
      className='h-screen'
      style={{
        background:
          "linear-gradient(to right top, #000244, #0b0b40, #14123b, #1b1736, #201d31, #201d2f, #201e2e, #201e2c, #1c1a2e, #18152f, #131131, #0e0b32)",
      }}
    >
      <BridgeKit />
    </main>
  );
}
