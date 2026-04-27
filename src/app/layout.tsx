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
      <body className="bg-bgDark">
        <Navbar />
        <main className="container text-textWhite px-5 md:px-8 mx-auto pt-[96px]">
          {children}
        </main>
      </body>
    </html>
  );
}
