import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../utils/motion";

const Title = ({ className, text }) => {
  return (
    <motion.p variants={textContainer} className={className}>
      {Array.from(text).map((letter, index) => (
        <motion.span variants={textVariant2} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default Title;
