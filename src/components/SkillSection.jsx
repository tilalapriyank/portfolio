import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MySkills } from "../constants/Skills";

const SkillSection = () => {
  const variants1 = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div className="text-textWhite mt-10">
      {MySkills.map((section) => {
        const ref = useRef(null);
        const inViewContent = useInView(ref);

        return (
          <motion.div
            key={section.index}
            ref={ref}
            variants={variants1}
            initial="initial"
            animate={inViewContent ? "animate" : "initial"}
            transition={{ duration: 0.5 }}
            className="mb-8 text-textWhite p-6 rounded-lg shadow-lg bg-darkHover"
          >
            <h4 className="text-2xl font-bold mb-4">{section.title}</h4>
            <div className="flex flex-wrap gap-4">
              {section.skills.map((skill, idx) => (
                <div key={idx} className="flex items-center gap-2 px-4 py-3 space-x-2">
                  <skill.icon className="scale-[150%]" />
                  <p className="text-lg">{skill.name}</p>
                </div>
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default SkillSection;
