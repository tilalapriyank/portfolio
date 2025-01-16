import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SkillSection from "./SkillSection";

const Skills = () => {
  const refHeading = useRef(null);
  const inViewHeading = useInView(refHeading);

  const variants1 = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className=" sm:px-8 py-[80px] overflow-hidden" id="skills">
      <motion.div
        ref={refHeading}
        variants={variants1}
        initial="initial"
        animate={inViewHeading ? "animate" : "initial"}
        transition={{ duration: 0.6 }}
        className="flex gap-4 items-center"
      >
        <h3 className="text-textWhite text-3xl sm:text-5xl font-[800]">
          Skills
        </h3>
        <div className="min-w-0 flex-grow mt-2 h-[4px] bg-textWhite"></div>
      </motion.div>
      <SkillSection/>
    </section>
  );
};

export default Skills;
