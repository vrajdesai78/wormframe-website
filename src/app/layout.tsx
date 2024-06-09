import type { Metadata } from "next";
import "fumadocs-ui/style.css";
import "./globals.css";
import { RootProvider } from "fumadocs-ui/provider";
import Providers from "@/context/providers";
import { Toaster } from "react-hot-toast";
import { Space_Grotesk } from "next/font/google";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Wormframe",
  description: "Bridge USDC ",
};

const grotesk = Space_Grotesk({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={grotesk.variable}
        style={{
          background:
            "linear-gradient(to right top, #000244, #0b0b40, #14123b, #1b1736, #201d31, #201d2f, #201e2e, #201e2c, #1c1a2e, #18152f, #131131, #0e0b32)",
        }}
      >
        <RootProvider>
          <Providers>
            <Navbar />
            {children}
          </Providers>
          <Toaster position='bottom-center' />
        </RootProvider>
      </body>
    </html>
  );
}
