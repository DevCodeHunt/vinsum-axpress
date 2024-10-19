import { staggerContainer } from "../utils/motion";
import Title from "./Title";
import { motion } from "framer-motion";
const SplashScreen = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="fixed inset-0 z-[1000] bg-white flex items-center justify-center"
    >
      <div className="wrapper flex items-center gap-2">
        <img
          src="/images/logo.png"
          alt="VinsuMaxPress"
          className="sm:h-12 h-10 w-auto"
        />
        <Title text="VINSUM" className="sm:text-5xl text-4xl font-bold" />
        {/* <span className="sm:text-5xl text-4xl font-bold">VINSUM</span> */}
      </div>
    </motion.div>
  );
};

export default SplashScreen;
