import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const Tech = () => {
  return (
    <section>
      <div className="mb-8">
        <p className={styles.sectionSubText}>MY FAVORIT POPULAR TECHS</p>
        <h3 className={styles.sectionHeadText}>Technologies.</h3>
      </div>
      <div className="flex flex-row  flex-wrap justify-center gap-12 lg:gap-28 mt-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <p className={`text-center`}>{technology.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "");
