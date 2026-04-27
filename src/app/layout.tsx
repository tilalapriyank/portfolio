import type { Metadata } from "next";
import "@/index.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Priyank Tilala | Full Stack Developer Portfolio",
  description:
    "Full Stack Developer specializing in React, Node.js, and WordPress. Check out my projects and get in touch!",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-bgDark text-textWhite antialiased">
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute -top-32 -left-20 h-[320px] w-[320px] rounded-full bg-accent1/20 blur-3xl animate-pulse" />
          <div className="absolute -bottom-32 -right-20 h-[360px] w-[360px] rounded-full bg-accent2/20 blur-3xl animate-pulse" />
        </div>
        <Navbar />
        <main className="relative z-[1] container text-textWhite px-5 md:px-8 mx-auto pt-[96px] pb-10">
          {children}
        </main>
      </body>
    </html>
  );
}
