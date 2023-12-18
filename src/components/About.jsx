import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, techs }) => (
  <Tilt className="xs:w-[250px] w-full mx-auto ">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-black-200 rounded-[20px] py-5 px-12 min-h-[280px] max-sm:w-full flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold font-serif text-center">
          {title}
        </h3>
        <div
          className="button-cont mx-0 my-0 "
          style={{ width: "100%", height: "100%" }}
        >
          <p className="text-teal-500 my-8 font-serif font-bold sm:mb-5 md:mb-7 mb-3 text-lg">
            Technologies
          </p>
          <ul className="flex-col items-center ml-6 h-[85%] w-[85%]   rounded-md  bg-opacity-5">
            {techs.map((tech) => (
              <li
                key={tech}
                className="font-mono  text-sm my-2 list-item text-violet-700 "
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="mt-10">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.2, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled software developer with experience in JavaScript, and
        expertise in frameworks like React and Node.js . I'm a quick learner and
        collaborate closely with clients to create efficient, scalable, and
        user-friendly solutions that solve real-world problems. Let's work
        together to bring your ideas to life!
      </motion.p>

      <div className="mt-10  max-sm:flex-col flex justify-center align-center mx-auto flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
