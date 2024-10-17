import Card from "../../../components/Card";

import { aboutCards } from "../../../constants";
import { motion } from "framer-motion";
import { fadeIn, fadeInOpacity } from "../../../utils/motion";

const AboutSection = () => {
  return (
    <section className="wrapper my-10">
      <Card hasBg>
        <div className="space-y-3 max-w-xl">
          <motion.p
            variants={fadeIn("down", "tween", 0.2, 1)}
            className="card-name"
          >
            About us
          </motion.p>
          <motion.h1
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="card-title"
          >
            WHY CHOOSE US.
          </motion.h1>

          <motion.p
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="card-description"
          >
            Because Visnum will make it easier for you to send your package with
            the features we have.
          </motion.p>
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 mt-10">
          {aboutCards.map((obj, index) => {
            return (
              <motion.div
                variants={fadeInOpacity(index * 0.6)}
                key={index}
                className={`bg-card w-full rounded-2xl p-6 space-y-4 hover:bg-primary transition duration-300 group cursor-pointer`}
              >
                <h2 className="font-bold text-4xl">O{index + 1}</h2>
                <h1 className="font-semibold text-2xl">{obj.title}</h1>
                <p className="text-text text-sm group-hover:text-white">
                  {obj.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Card>
    </section>
  );
};

export default AboutSection;
