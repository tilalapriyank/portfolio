"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { mySkills } from "../constants/skillsData";
import { FaCode } from "react-icons/fa6";

const SkillSection = () => {
  const variants1 = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  const sectionRef = useRef(null);
  const inViewContent = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <div className="text-textWhite mt-10" ref={sectionRef}>
      {mySkills.map((section) => {
        return (
          <motion.div
            key={section.index}
            variants={variants1}
            initial="initial"
            animate={inViewContent ? "animate" : "initial"}
            transition={{ duration: 0.5, delay: section.index * 0.1 }}
            className="mb-8 glass-dark rounded-2xl p-6 border border-accent1/20 shadow-glass"
          >
            <h4 className="text-2xl font-bold mb-4 text-accent1">{section.title}</h4>
            <div className="flex flex-wrap gap-4">
              {section.skills.map((skill, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inViewContent ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="group glass rounded-xl p-4 flex items-center gap-3 hover:border-accent1 hover:shadow-neon-cyan transition-all duration-300 cursor-pointer border border-accent1/30"
                >
                  {(() => {
                    const IconComponent = skill.icon || FaCode;
                    return (
                      <IconComponent className="scale-[150%] text-accent1 group-hover:text-accent2 transition-colors duration-300" />
                    );
                  })()}
                  <p className="text-lg text-textWhite group-hover:text-accent1 transition-colors duration-300">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default SkillSection;
