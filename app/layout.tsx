import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "LearnFast",
  description: "The app that makes your memory invincible",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Analytics />
      <html lang="en" className={GeistSans.className}>
        <body className="bg-black">
          <main className="min-h-svh flex flex-col items-center text-zinc-300">
            {children}
          </main>
          <Toaster />
        </body>
      </html>
    </>
  );
}
