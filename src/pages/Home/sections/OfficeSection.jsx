import Card from "../../../components/Card";
import { motion } from "framer-motion";
import { fadeIn } from "../../../utils/motion";

const OfficeSection = () => {
  return (
    <section className="wrapper my-10">
      <Card hasBg>
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="space-y-3 max-w-xl"
        >
          <h1 className="card-title">
            <span className="text-primary">OUR OFFICES</span> ARE SPREAD
            THROUGHOUT WORLDWIDE.
          </h1>
          <p className="card-description">
            Vinsum has more than 1000 offfices that can serve you to send your
            package to your destination
          </p>
        </motion.div>
        <div className="mt-10"></div>
      </Card>
    </section>
  );
};

export default OfficeSection;
