"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className='flex min-h-screen flex-col items-center justify-center py-24 font-space-grotesk'>
      <div className='flex flex-wrap container p-5 mx-auto xl:px-20 2xl:px-20'>
        <div className='flex items-center w-full lg:w-1/2'>
          <div className='max-w-2xl mb-8'>
            <h1 className='text-4xl font-bold leading-snug tracking-tight text-brand-200 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight'>
              Bridge cross chain assets with ease
            </h1>
            <p className='py-5 text-xl leading-normal text-brand-400 lg:text-xl xl:text-2xl'>
              Trade assets across multiple blockchains and share it as a
              Farcaster Frames. Now bridging assets is as easy as a click of a
              button.
            </p>

            <div className='flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row'>
              <button
                onClick={() => {
                  router.push(`/bridge`);
                }}
                className='px-10 py-3 text-lg font-semibold text-center text-brand-800 bg-plum-100 hover:bg-violet-600 rounded-3xl'
              >
                Start Bridging
              </button>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center w-full lg:w-1/2'>
          <div className=''>
            <Image
              src='/bridge.svg'
              width='616'
              height='617'
              className='object-cover'
              alt='Hero Illustration'
              loading='eager'
            />
          </div>
        </div>
      </div>
    </main>
  );
}
