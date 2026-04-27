"use client";

import { BsLinkedin, BsGithub } from "react-icons/bs";
import { HiMailOpen } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
import { SiEbox } from "react-icons/si";
import { menuItems } from "../constants/menuItems";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [mobileView, setMobileView] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full z-30">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
        className="container flex flex-wrap items-center justify-between px-6 sm:px-8 py-4 sm:py-5 mx-auto glass-dark text-textWhite border-b border-white/10 shadow-glass rounded-b-2xl"
      >
        <Link
          href="/"
          className="min-w-[150px] cursor-pointer font-[700] sm:font-[800] text-lg sm:text-xl tracking-wide"
        >
          {/* for mobile view */}
          <span className="sm:hidden bg-gradient-neon bg-clip-text text-transparent">@Priyank</span>
          {/* for web view */}
          <span className="hidden sm:block bg-gradient-neon bg-clip-text text-transparent">@Tilala_Priyank</span>
        </Link>

        {/* toggle navbar mobile view */}
        <span
          className="md:hidden text-[22px] -ml-[120px]"
          onClick={() => {
            setMobileView(!mobileView);
          }}
        >
          <SiEbox />
        </span>

        {/* mobile navbar */}
        <AnimatePresence>
          {mobileView && (
            <motion.div
              initial={{ opacity: 0, y: -200 }}
              exit={{ opacity: 0, y: -200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute top-0 left-0 flex flex-col bg-transparent w-full min-h-screen"
            >
              <div className="flex flex-col md:hidden bg-bgDark/95 backdrop-blur-lg relative p-10 border-b border-white/10">
                <span
                  className="absolute top-[62px] right-12 text-[24px]"
                  onClick={() => {
                    setMobileView(!mobileView);
                  }}
                >
                  <AiFillCloseCircle />
                </span>
                                <div className="flex gap-4 p-6 border-b-white border-b-2 text-[22px]">
                                    <a
                                        href="https://www.linkedin.com/in/priyank-patel-432b56214"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-accent1 transition-colors duration-300 hover:scale-110"
                                    >
                                        <BsLinkedin />
                                    </a>
                                    <a
                                        href="https://github.com/tilalapriyank"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-accent1 transition-colors duration-300 hover:scale-110"
                                    >
                                        <BsGithub />
                                    </a>
                                    <a 
                                        href="mailto:priyank1504patel@gmail.com"
                                        className="hover:text-accent1 transition-colors duration-300 hover:scale-110"
                                    >
                                        <HiMailOpen />
                                    </a>
                </div>

                <div>
                  <ul className="flex flex-col items-center justify-between p-5 gap-5 relative">
                    {menuItems?.map((menuItem) => (
                      <li key={menuItem.id}>
                        <Link
                          href={menuItem.url}
                          title={menuItem.name}
                          onClick={() => {
                            setMobileView(!mobileView);
                          }}
                          className={`relative cursor-pointer text-[18px] font-[600] hover:no-underline transition-colors duration-300 after:absolute after:left-0 after:-bottom-[3px] after:h-[3px] after:transition-all after:duration-300 after:ease-in-out ${
                            pathname === menuItem.url
                              ? "text-accent1 after:w-full after:bg-accent1"
                              : "hover:text-accent1 after:w-0 after:bg-accent1 hover:after:w-full"
                          }`}
                        >
                          {menuItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* overlay */}
              <div
                className="flex-grow bg-transparent w-full"
                onClick={() => setMobileView(!mobileView)}
              ></div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* full screen navbar */}
        <div className="hidden md:block">
          <ul className="flex items-center justify-between gap-5 relative">
            {menuItems?.map((menuItem) => (
              <li key={menuItem.id}>
                <Link
                  href={menuItem.url}
                  title={menuItem.name}
                  className={`relative cursor-pointer text-[16px] sm:text-[17px] font-[600] px-2 py-1 rounded-md hover:no-underline transition-colors duration-300 after:absolute after:left-0 after:-bottom-[3px] after:h-[3px] after:transition-all after:duration-300 after:ease-in-out ${
                    pathname === menuItem.url
                      ? "text-accent1 after:w-full after:bg-accent1"
                      : "hover:text-accent1 after:w-0 after:bg-accent1 hover:after:w-full"
                  }`}
                >
                  {menuItem.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

                <div className="hidden md:flex items-center justify-between gap-4 text-[24px]">
                    <span className="py-2 px-1 hover:-translate-y-[2px] transition-all duration-500 ease-in-out cursor-pointer group">
                        <a
                            href="https://www.linkedin.com/in/priyank-patel-432b56214"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group-hover:text-accent1 transition-colors duration-300"
                        >
                            <BsLinkedin />
                        </a>
                    </span>
                    <span className="py-2 px-1 hover:-translate-y-[2px] transition-all duration-500 ease-in-out cursor-pointer group">
                        <a
                            href="https://github.com/tilalapriyank"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group-hover:text-accent1 transition-colors duration-300"
                        >
                            <BsGithub />
                        </a>
                    </span>
                    <span className="py-2 px-1 hover:-translate-y-[2px] transition-all duration-500 ease-in-out cursor-pointer group">
                        <a 
                            href="mailto:priyank1504patel@gmail.com"
                            className="group-hover:text-accent1 transition-colors duration-300"
                        >
                            <HiMailOpen />
                        </a>
                    </span>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
