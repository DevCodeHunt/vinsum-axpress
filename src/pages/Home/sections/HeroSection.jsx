import { LuArrowRight } from "react-icons/lu";
import { Link } from "react-router-dom";
import Input from "../../../components/Input";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../../utils/motion";
import { useState } from "react";
import { useFormik } from "formik";

const HeroSection = () => {
  const [isTracking, setIsTracking] = useState(false);

  const handleToggleTracking = () =>
    setIsTracking((prevTracking) => !prevTracking);

  const formik = useFormik({
    initialValues: {
      docketNumber: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="min-h-screen py-10"
    >
      <div className="wrapper flex md:flex-row flex-col gap-6">
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex-1"
        >
          <h1 className="sm:text-6xl text-5xl font-bold uppercase leading-tight">
            WE WILL <span className="text-primary">DELIVER</span>{" "}
            <br className="md:inline-block hidden" /> YOUR PACKAGE ALL{" "}
            <br className="md:inline-block hidden" /> OVER{" "}
            <span className="text-primary">THE WORLD.</span>
          </h1>

          <h1 className="slider_catchphrase bg-foreground rounded p-1 px-1 w-fit mt-5">
            <span className="slider">
              <span className="slider__word">“Lightning-fast delivery!”</span>
              <span className="slider__word">
                “Efficient. Accurate. On-Time.”
              </span>
              <span className="slider__word">
                “From Us to You, Absolutely Flawless!”
              </span>
            </span>
          </h1>
        </motion.div>

        {/* <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="w-72 space-y-6"
        >
          <p>
            The faster, easiest way to book and manage your international
            shipments.
          </p>
          <div>
            <Link
              to="#"
              className="btn primary-btn rounded-full px-8 py-3 w-fit font-medium shadow-[0_0px_50px] shadow-blue-400/30 hover:shadow-blue-400/50 transotion duration-300"
            >
              LEARN MORE
              <LuArrowRight />
            </Link>
          </div>
        </motion.div> */}
      </div>

      <div className="wrapper py-10">
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="min-[576px]:w-96 border shadow  rounded-2xl p-4 space-y-10"
        >
          <div className="flex items-center justify-between gap-3">
            <span className="text-sm font-medium">Shipment Tracking</span>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={isTracking}
                onChange={handleToggleTracking}
                className="sr-only peer"
              />
              <div className="relative w-[52px] h-7 bg-neutral-200 rounded-full cursor-pointer peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-primary after:rounded-full after:h-6 after:w-6 after:transition-all"></div>
            </label>
            <span className="text-sm font-medium">Shipment Rate</span>
          </div>

          <form
            onSubmit={formik.handleSubmit}
            className="bg-background rounded-2xl p-4 space-y-3"
          >
            <h3 className="font-medium">
              {isTracking ? "Shipment rate" : "Track Shipment"}
            </h3>
            <Input
              id="docketNumber"
              name="docketNumber"
              value={formik.values.docketNumber}
              onChange={formik.handleChange}
              placeholder="Enter your docket number"
            />

            <button
              type="submit"
              className="primary-btn text-sm px-6 py-3.5 w-full rounded-2xl font-medium !mt-3"
            >
              Track Now
            </button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
