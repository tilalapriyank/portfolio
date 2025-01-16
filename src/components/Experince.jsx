import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Experiences } from "../constants/Experience";

const Experience = () => {
  const refHeading = useRef(null);
  const refContent = useRef(null);
  const inViewHeading = useInView(refHeading);
  const inViewContent = useInView(refContent);

  const [activeTab, setActiveTab] = useState(0);

  const variants1 = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  const variantsContent = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
  };

  return (
    <section className="sm:px-8 py-[80px] overflow-hidden" id="experience">
      {/* Heading */}
      <motion.div
        ref={refHeading}
        variants={variants1}
        initial="initial"
        animate={inViewHeading ? "animate" : "initial"}
        transition={{ duration: 0.6 }}
        className="flex gap-4 items-center"
      >
        <h3 className="text-textWhite text-3xl sm:text-5xl font-[800]">
          Experience
        </h3>
        <div className="min-w-0 flex-grow mt-2 h-[4px] bg-textWhite"></div>
      </motion.div>

      <div className="mt-8 py-4 flex flex-col md:flex-row gap-6">
        <div className="ps-8 flex flex-col md:w-[250px]">
          {Experiences.map((exp, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveTab(index)}
              initial={{ opacity: 0 }}
              animate={{ opacity: activeTab === index ? 1 : 0.9 }}
              transition={{ duration: 0.3 }}
              className={`w-full text-left px-4 py-3 ${
                activeTab === index
                  ? "text-heading border-l-2 border-heading"
                  : "text-textWhite border-l-2 border-textWhite"
              }`}
            >
              <h4 className="text-xl">{exp.tab}</h4>
            </motion.button>
          ))}
        </div>

        <motion.div
          ref={refContent}
          variants={variantsContent}
          initial="initial"
          animate={inViewContent ? "animate" : "initial"}
          transition={{ duration: 0.6 }}
          className="px-8 w-full md:w-[70%]"
        >
          <span className="flex justify-between items-center">
            <h3 className="text-2xl font-bold text-white">
              {Experiences[activeTab].company}
            </h3>
            <p className="text-m text-white">{Experiences[activeTab].type}</p>
          </span>
          <span className="flex justify-between items-center">
            <span className="block mb-2 text-heading">
              {Experiences[activeTab].position}
            </span>
            <p className="text-m text-heading">
              {Experiences[activeTab].duration}
            </p>
          </span>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-gray-300 leading-relaxed text-lg" 
          >
            {Experiences[activeTab].description
              .split("\n")
              .map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
          </motion.p>
          <p className="text-md text-gray-400 mt-6 text-base">
            <span className="font-semibold text-white">Technologies:</span>{" "}
            <span className="text-heading">
              {Experiences[activeTab].technologies}
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
