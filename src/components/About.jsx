import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const About = () => {
  const refHeading = useRef(null);
  const refContent = useRef(null);
  const inViewHeading = useInView(refHeading);
  const inViewContent = useInView(refContent);

  const variants1 = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className=" sm:px-8 py-[80px] overflow-hidden" id="about">
      <motion.div
        ref={refHeading}
        variants={variants1}
        initial="initial"
        animate={inViewHeading ? "animate" : "initial"}
        transition={{ duration: 0.6 }}
        className="flex gap-4 items-center"
      >
        <h3 className="text-textWhite text-3xl sm:text-5xl font-[800]">
          About Me
        </h3>
        <div className="min-w-0 flex-grow mt-2 h-[4px] bg-textWhite"></div>
      </motion.div>
      <div className="py-6 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
        <motion.div
          ref={refContent}
          initial={{
            opacity: 0,
            x: -100,
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
              : { opacity: 1, x: -100, scale: 0.8 }
          }
          transition={{ duration: 0.8 }}
          className="flex-1 md:max-w-[40%] sm:mt-10 "
        >
          <img
            src="/images/about.png"
            alt="meme"
            loading="lazy"
            className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] "
          />
        </motion.div>
        <motion.div
          ref={refContent}
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={
            inViewContent
              ? { opacity: 1, x: 0, scale: 1 }
              : { opacity: 0, x: 100, scale: 0.8 }
          }
          transition={{ duration: 0.8 }}
          className="flex-1 text-justify"
        >
          <p className="text-textWhite p-4 text-lg sm:text-xl sm:leading-7">
            I am a dedicated{" "}
            <span className="text-heading">WordPress Developer</span> with a
            strong passion for creating innovative and user-centric web
            solutions. With 9 months of experience in developing custom plugins,
            themes, and optimizing website functionality, I specialize in
            transforming ideas into interactive and efficient digital
            experiences.
            <br />
            <br />
            Recently, I’ve been diving into{" "}
            <span className="text-heading">Full Stack Development</span>,
            expanding my skill set with technologies like{" "}
            <span className="text-heading">Node.js, React.js, Express.js.</span>{" "}
            This allows me to build versatile applications that are not only
            functional but also scalable and performance-driven.
            <br />
            <br />
            Every project I take on is an opportunity to blend creativity and
            technical expertise to deliver solutions that truly make a
            difference. From building intuitive interfaces to crafting robust
            backend systems, I’m committed to achieving excellence in every line
            of code.
          </p>
          <div className="mt-5 pl-4">
            <h4 className="text-2xl font-bold mb-4">Education</h4>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h5 className="text-2xl font-[600]">
                Gujarat Technologies University
              </h5>
              <span className="text-heading">
                <div className="mt-2 flex items-center justify-between gap-4">
                  <p>Bachelor of Technology in Computer Engineering</p>
                  <p>
                    <span className="font-bold">2020 - 2024</span>
                  </p>
                </div>
                <p>
                  <span>CPI:</span> 8.25 | <span>CGPA:</span> 8.01
                </p>
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
