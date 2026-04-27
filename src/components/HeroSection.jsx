"use client";

import { TypeAnimation } from "react-type-animation";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Suspense } from "react";
import Loading from "./Loading";
import Link from "next/link";

const HeroSection = () => {
    const refContent = useRef(null);
    const inViewContent = useInView(refContent);

    return (
        <>
            <section
                className="sm:px-8 overflow-hidden pb-8 pt-[110px] sm:pt-[120px] sm:pb-10 aurora-bg"
                id="intro"
            >
                <div className="grid grid-cols-1 sm:grid-cols-12 place-items-center">
                    {/* intro section */}
                    <motion.div
                        ref={refContent}
                        initial={{ opacity: 0, x: -100, scale: 0.8 }}
                        animate={
                            inViewContent
                                ? { opacity: 1, x: 0, scale: 1 }
                                : { opacity: 0, x: -100, scale: 0.8 }
                        }
                        transition={{ duration: 0.8 }}
                        className="col-span-7 relative"
                    >
                        {/* Glassmorphic card background */}
                        <div className="glass-dark rounded-3xl p-6 sm:p-8 md:p-10 -m-4 sm:-m-6 md:-m-8 border border-accent1/20">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={inViewContent ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="mb-4 flex flex-wrap gap-2"
                            >
                                <span className="glass rounded-full px-3 py-1 text-xs sm:text-sm border border-accent1/30 text-accent1">Team Lead</span>
                                <span className="glass rounded-full px-3 py-1 text-xs sm:text-sm border border-accent2/30 text-accent2">SaaS Architecture</span>
                                <span className="glass rounded-full px-3 py-1 text-xs sm:text-sm border border-accent1/30 text-accent1">Automation</span>
                            </motion.div>
                            <motion.h1 
                                initial={{ opacity: 0, y: 20 }}
                                animate={inViewContent ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-white mb-4 text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-[700] lg:leading-normal"
                            >
                                Hi, I&apos;m{" "}
                                <span className="text-accent1">Priyank</span>, a{" "}
                                <span className="text-accent2">Full Stack Developer</span>{" "}
                                specializing in React & Node.js.
                            </motion.h1>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={inViewContent ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <TypeAnimation
                                    sequence={[
                                        500,
                                        "I build scalable web applications.",
                                        1500,
                                        "I create modern UIs with React & Next.js.",
                                        1500,
                                        "I develop robust APIs with Node.js & Express.",
                                        1500,
                                        "I turn complex problems into elegant solutions.",
                                        500,
                                    ]}
                                    speed={50}
                                    className="text-lg md:text-3xl font-[500] text-accent1"
                                    repeat={Infinity}
                                />
                            </motion.div>

                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                animate={inViewContent ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="text-textWhite/80 text-base sm:text-lg mb-6 mt-3 lg:text-xl"
                            >
                                Stick around to see some of my work.
                            </motion.p>
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={inViewContent ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: 0.8 }}
                                className="flex items-center gap-4 flex-col sm:flex-row"
                            >
                                <Link
                                    href="/contact"
                                    className="group relative px-6 py-3 cursor-pointer w-full sm:w-fit rounded-full md:mr-4 bg-gradient-neon text-white text-lg font-[700] text-center overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-neon-cyan"
                                >
                                    <span className="relative z-10">Hire Me</span>
                                    <div className="absolute inset-0 bg-gradient-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </Link>
                                <a
                                    href="https://drive.google.com/file/d/1vp9XNX6VGZ51p46-H9hB5Wao7ra9BY1k/view?usp=drivesdk"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group px-6 py-3 w-full sm:w-fit rounded-full md:mr-4 glass border-2 border-accent1 text-white text-center hover:border-accent2 hover:text-accent1 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-neon-cyan"
                                >
                                    Download CV
                                </a>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 18 }}
                                animate={inViewContent ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.7, delay: 1 }}
                                className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3"
                            >
                                <div className="glass rounded-xl p-3 border border-accent1/20">
                                    <p className="text-accent1 text-xl font-bold">25k+</p>
                                    <p className="text-xs text-textWhite/70">Tenants scale</p>
                                </div>
                                <div className="glass rounded-xl p-3 border border-accent2/20">
                                    <p className="text-accent2 text-xl font-bold">92.7%</p>
                                    <p className="text-xs text-textWhite/70">Fewer DB connections</p>
                                </div>
                                <div className="glass rounded-xl p-3 border border-accent1/20 col-span-2 sm:col-span-1">
                                    <p className="text-accent1 text-xl font-bold">Full Stack</p>
                                    <p className="text-xs text-textWhite/70">Next.js · Node.js · Zoho</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                    {/* image section */}
                    <motion.div
                        ref={refContent}
                        initial={{
                            opacity: 0,
                            x: 100,
                            scale: 0.8,
                            filter: "blur(6px)",
                        }}
                        animate={
                            inViewContent
                                ? {
                                      opacity: 1,
                                      x: 0,
                                      scale: 1,
                                      filter: "blur(0px)",
                                  }
                                : { opacity: 0, x: 100, scale: 0.8 }
                        }
                        transition={{ duration: 0.8 }}
                        whileHover={{ 
                            scale: 1.05,
                            rotate: [0, -2, 2, -2, 0],
                            transition: { duration: 0.5 }
                        }}
                        className="col-span-5 w-full h-[200px] lg:w-[400px] lg:h-[400px] relative mt-16 sm:-mt-4"
                    >
                        {/* Glow effect behind image */}
                        <div className="absolute inset-0 bg-gradient-cyan opacity-20 blur-3xl -z-10 animate-pulse"></div>
                        <Suspense fallback={<Loading />}>
                            <img
                                src="/images/heroImg.png"
                                alt="Hero Image"
                                loading="lazy"
                                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] drop-shadow-2xl"
                            />
                        </Suspense>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default HeroSection;
