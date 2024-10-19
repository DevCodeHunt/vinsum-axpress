import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";

const Card = ({ hasBg, children }) => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`rounded-2xl md:px-8 px-6 py-8 overflow-hidden shadow  ${
        hasBg ? "bg-background" : "bg-transparent border "
      }`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
