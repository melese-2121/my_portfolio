import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen `}>
      <div
        className={`flex-1 lg:ml-10   absolute inset-0 max-sm:top-20 top-[110px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="max-sm:w-4 max-sm:h-4 w-5 h-5 rounded-full bg-red-700" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="mt-3">
          <h1 className={`${styles.heroHeadText}  max-sm:text-[40px]`}>
            <span className="max-md:text-[44px] font-serif">Hi, I'm </span>
            <span className=" text-violet-700 max-md:text-[44px] text-[56px] font-bold font-serif">
              Melese
            </span>
          </h1>
          <p className=" text-zinc-600 max-sm:text-[22px] font-serif sm:text-[26px]  ">
            A Full Stack Developer
          </p>
        </div>
      </div>
      <div className="flex-1 mx-auto my-auto max-md:mt-20 max-sm:h-[244px]">
        <ComputersCanvas />

        <div className="absolute xs:bottom-10 hover:cursor-pointer bottom-32 top-full w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-violet-700 flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 20, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
                className="w-3 h-3 rounded-full bg-violet-700"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
