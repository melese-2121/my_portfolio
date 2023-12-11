import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section
      className={`relative w-full h-screen mx-auto flex justify-between items-center`}
    >
      <div
        className={`flex-1  absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-emerald-500" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white text-[30px]`}>
            Hi, I'm <span className="text-emerald-500">Melese</span>
            <p className=" text-zinc-500 text-[28px]">A Full Stack Developer</p>
          </h1>
        </div>
      </div>
      <div className="flex-1 mx-auto">
        <ComputersCanvas />

        <div className="absolute xs:bottom-10 hover:cursor-pointer bottom-32 top-full w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 20, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-secondary"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
