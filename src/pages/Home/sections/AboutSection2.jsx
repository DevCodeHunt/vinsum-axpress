import { FaPlay } from "react-icons/fa";
import Card from "../../../components/Card";
import { useCallback, useRef, useState } from "react";
import { FaPause } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../../utils/motion";

const AboutSection2 = () => {
  const [isPaused, setIsPaused] = useState(true);
  const videoRef = useRef(null);

  const togglePlayPause = useCallback(() => {
    if (videoRef.current) {
      if (isPaused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
      setIsPaused((prevState) => !prevState);
    }
  }, [isPaused]);

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
            <span className="text-primary">Vinsum</span> Is One Of The Best
            Shipping And Logistics Companies.
          </motion.h1>

          <motion.p
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="card-description"
          >
            Making Vinsum as one of the best companies in shipping and logistics
            services by optimally serving the needs and interests of customers
            so that they are known in india and internationally.
          </motion.p>
        </div>

        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="my-8 flex gap-8 flex-wrap"
        >
          <div className="flex flex-col gap-1">
            <h3 className="text-3xl font-bold">100K+</h3>
            <p className="text-sm text-text">Operational Vehicles</p>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-3xl font-bold">1K+</h3>
            <p className="text-sm text-text">Office</p>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-3xl font-bold">10K+</h3>
            <p className="text-sm text-text">Years Experience</p>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-3xl font-bold">3M+</h3>
            <p className="text-sm text-text">Happy Client</p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="rounded-2xl relative h-[280px]"
        >
          <video
            ref={videoRef}
            muted
            // loop
            // autoPlay
            title="Video Indroduction"
            poster="https://cdn.pixabay.com/photo/2014/09/11/22/00/dock-441989_1280.jpg"
            className="w-full h-full absolute inset-0 z-10 object-cover rounded-2xl"
          >
            <source src="/videos/vinsum-about.mp4" type="video/mp4"></source>
          </video>
          <div className="absolute inset-0 bg-background/50 z-10 rounded-2xl flex items-center justify-center">
            <button
              onClick={togglePlayPause}
              className="w-16 h-16 flex items-center justify-center rounded-full bg-white/40 text-2xl"
            >
              {isPaused ? <FaPlay /> : <FaPause />}
            </button>
          </div>
        </motion.div>
      </Card>
    </section>
  );
};

export default AboutSection2;
