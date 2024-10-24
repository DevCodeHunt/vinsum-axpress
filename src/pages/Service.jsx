import {
  ArrowUpRight,
  Box,
  CheckCheck,
  EarthLock,
  Layers,
  MessageSquareText,
  NotebookText,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { serviceData } from "../constants";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/effect-fade";
import { useCallback, useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import { useMediaQuery } from "react-responsive";
import AnimationWrapper from "../components/AnimationWrapper";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../utils/routes";

const Services = () => {
  const desktop = useMediaQuery({ query: "(min-width: 768px)" });
  const navigate = useNavigate()
  return (
    <>
      <section className="wrapper py-8">
        <div
          style={{
            backgroundImage:
              "url(/images/warehouse-climate-control.jpg)",
          }}
          className="wrapper  relative w-full rounded-3xl min-h-[90vh] bg-cover bg-no-repeat"
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="absolute wrapper inset-0 bg-black/30 rounded-3xl grid md:grid-cols-2 md:gap-4 gap-8  py-20  h-full  text-white w-full z-10"
          >
            <motion.div
              variants={
                desktop
                  ? fadeIn("up", "tween", 0.2, 1)
                  : fadeIn("right", "tween", 0.2, 1)
              }
              className="space-y-4 h-full flex flex-col justify-center"
            >
              <p># 1 Energy provider in the world</p>
              <h1 className="lg:text-8xl sm:text-6xl text-5xl font-medium">
                New Energy for the future
              </h1>
              <div className="flex items-center gap-6">
                <button type="button" onClick={() => navigate(ROUTES.CONTACT)} className="btn border-b-2 !rounded-none border-white">
                  Get in touch <ArrowUpRight />
                </button>
                <button type="button" onClick={() => navigate(ROUTES.FRANCHISE)} className="btn border-b-2 !rounded-none border-white">
                  Become Franchisee <ArrowUpRight />
                </button>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="w-[300px] h-[300px] flex flex-col justify-between rounded-3xl mx-auto bg-white/40 p-2"
            >
              <img
                src="/images/professional-packer-wrapping-electronic-equipment-with-bubble-wrap-hightech-industrial-packing-area.jpg"
                alt="image"
                className="rounded-2xl w-[200px] h-[200px] object-cover"
              />
              <div className="w-full flex items-center justify-between">
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-transparent border border-white/60 flex items-center justify-center"
                >
                  <ArrowUpRight />
                </a>
                <p className="text-2xl ml-auto">
                  Discover Our <br /> Recent Project
                </p>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="bg-white rounded-tl-3xl md:w-1/2 h-40 p-4 z-10 absolute right-0 md:left-auto left-0 md:bottom-0 -bottom-40 px-4 flex items-center gap-4"
          >
            {/* <div className="absolute w-10 h-10 -right-6 -rotate-[40deg] -top-8 rounded-xl bg-white radial-gradient-bg"></div> */}
            <motion.div
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="flex flex-col gap-2"
            >
              <h1 className="text-4xl font-medium text-center">6 mil</h1>
              <p className="text-sm opacity-70 text-center">
                The company&#39;s annual net income
              </p>
            </motion.div>
            <motion.div
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="flex flex-col gap-2"
            >
              <h1 className="text-4xl font-medium text-center">315</h1>
              <p className="text-sm opacity-70 text-center">
                Projects completed worldwide
              </p>
            </motion.div>
            <motion.div
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="flex flex-col gap-2"
            >
              <h1 className="text-4xl font-medium text-center">120K</h1>
              <p className="text-sm opacity-70 text-center">
                Employees work in all parts of the world
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="md:pt-20 pt-52 pb-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="wrapper space-y-20"
        >
          <div className="grid sm:grid-cols-2 md:gap-0 gap-6 items-center">
            <motion.p
              variants={fadeIn("right", "tween", 0.2, 1)}
              className="sm:text-4xl text-3xl"
            >
              Focus on quality,{" "}
              <span className="opacity-40">we maintain customer trust</span>
            </motion.p>
            <motion.p
              variants={fadeIn("left", "tween", 0.2, 1)}
              className="opacity-60"
            >
              We ensure that every installation we build has strict quality
              checks, Sustainable solutions for an environmentally friendly and
              renewable future.
            </motion.p>
          </div>

          <motion.div
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="flex flex-wrap justify-center"
          >
            <AnimationWrapper className="w-[200px] h-[200px] cursor-pointer rounded-full bg-foreground flex items-center font-semibold justify-center transition duration-300 hover:drop-shadow hover:shadow hover:bg-white hover:text-primary">
              Trend
            </AnimationWrapper>
            <AnimationWrapper className="w-[200px] h-[200px] cursor-pointer rounded-full bg-foreground flex items-center font-semibold justify-center transition duration-300 hover:drop-shadow hover:shadow hover:bg-white hover:text-primary">
              Tellia Cygate
            </AnimationWrapper>
            <AnimationWrapper className="w-[200px] h-[200px] cursor-pointer rounded-full bg-foreground flex items-center font-semibold justify-center transition duration-300 hover:drop-shadow hover:shadow hover:bg-white hover:text-primary">
              Business
            </AnimationWrapper>
            <AnimationWrapper className="w-[200px] h-[200px] cursor-pointer rounded-full bg-foreground flex items-center font-semibold justify-center transition duration-300 hover:drop-shadow hover:shadow hover:bg-white hover:text-primary">
              headspace
            </AnimationWrapper>
            <AnimationWrapper className="w-[200px] h-[200px] cursor-pointer rounded-full bg-foreground flex items-center font-semibold justify-center transition duration-300 hover:drop-shadow hover:shadow hover:bg-white hover:text-primary">
              Medtronic
            </AnimationWrapper>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="wrapper"
        >
          <motion.h1
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="text-center text-4xl max-w-md mx-auto mb-12"
          >
            See how we solve problems,{" "}
            <span className="opacity-50">right on target</span>
          </motion.h1>

          <Cards />
        </motion.div>
      </section>

      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="py-20 bg-foreground"
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="wrapper mb-16"
        >
          <h1 className="text-center sm:text-4xl text-3xl max-w-md mx-auto">
            We offer quality,{" "}
            <span className="opacity-50">
              with the best materials and service
            </span>
          </h1>
        </motion.div>
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="wrapper grid lg:grid-cols-3 sm:grid-cols-2"
        >
          <div className="bg-white rounded-tl-xl p-4 py-6 border border-neutral-200">
            <Layers className="text-primary" />
            <div className="mt-6">
              <h3 className="text-lg font-semibold">Layered securily</h3>
              <p className="text-sm opacity-60 mt-2">
                With layred securily, we ensure the ssfty of every unit we
                provide.
              </p>
            </div>
          </div>

          <div className="bg-white p-4 py-6 border border-neutral-200 border-l-0 border-r-0">
            <CheckCheck className="text-primary" />
            <div className="mt-6">
              <h3 className="text-lg font-semibold">
                Quality control of each part
              </h3>
              <p className="text-sm opacity-60 mt-2">
                Every unit you send a checked carefully for every details.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-tr-xl p-4 py-6 border border-neutral-200">
            <MessageSquareText className="text-primary" />
            <div className="mt-6">
              <h3 className="text-lg font-semibold">
                Reliable customer service
              </h3>
              <p className="text-sm opacity-60 mt-2">
                Our customer service is available 24 hours a week with qualified
                people.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-bl-xl p-4 py-6 border border-neutral-200 border-t-0">
            <NotebookText className="text-primary" />
            <div className="mt-6">
              <h3 className="text-lg font-semibold">Maintenance</h3>
              <p className="text-sm opacity-60 mt-2">
                We provide a guidebook that can be used ro ensure maxium care.
              </p>
            </div>
          </div>

          <div className="bg-white  p-4 py-6 border border-neutral-200 border-t-0 border-l-0 border-r-0">
            <Box className="text-primary" />
            <div className="mt-6">
              <h3 className="text-lg font-semibold">Delivered safely</h3>
              <p className="text-sm opacity-60 mt-2">
                Every unit we send arrives safely and quickly, without any
                obstacles or drama
              </p>
            </div>
          </div>

          <div className="bg-white rounded-br-xl p-4 py-6 border border-neutral-200 border-t-0">
            <EarthLock className="text-primary" />
            <div className="mt-6">
              <h3 className="text-lg font-semibold">
                Based on artifical intelligence
              </h3>
              <p className="text-sm opacity-60 mt-2">
                You can control and view each unit from your phone. It&#39;s
                very easy to use.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.section>

      <section className="py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="wrapper grid md:grid-cols-2 md:gap-8 gap-14"
        >
          <div className="flex flex-col gap-8 justify-between">
            <motion.div variants={fadeIn("right", "tween", 0.2, 1)}>
              <h1 className="text-2xl">
                Trusted service,{" "}
                <span className="opacity-60">for your various needs</span>
              </h1>
              <button className="btn primary-btn mt-4">
                Get in touch <ArrowUpRight size={20} />
              </button>
            </motion.div>

            <motion.div
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="grid sm:grid-cols-2 gap-4"
            >
              <div className="bg-white p-4 rounded-lg shadow drop-shadow">
                <p className="text opacity-40 font-semibold">01</p>
                <p className="text-lg font-semibold">Solar panels for home</p>
                <button className="border-b-2 text-sm mt-2">
                  View Details
                </button>
              </div>
              <div className="bg-white p-4 rounded-lg shadow drop-shadow">
                <p className="text opacity-40 font-semibold">01</p>
                <p className="text-lg font-semibold">Solar panels for home</p>
                <button className="border-b-2 text-sm mt-2">
                  View Details
                </button>
              </div>
              <div className="bg-white p-4 rounded-lg shadow drop-shadow">
                <p className="text opacity-40 font-semibold">01</p>
                <p className="text-lg font-semibold">Solar panels for home</p>
                <button className="border-b-2 text-sm mt-2">
                  View Details
                </button>
              </div>
              <div className="bg-white p-4 rounded-lg shadow drop-shadow">
                <p className="text opacity-40 font-semibold">01</p>
                <p className="text-lg font-semibold">Solar panels for home</p>
                <button className="border-b-2 text-sm mt-2">
                  View Details
                </button>
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeIn("up", "tween", 0.2, 1)}>
            <img
              src="https://cdn.pixabay.com/photo/2024/03/26/11/57/solar-8656654_1280.jpg"
              alt="image"
              className="rounded-xl h-[500px] object-cover"
            />
          </motion.div>
        </motion.div>
      </section>

     
    </>
  );
};

const Cards = () => {
  const sliderRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [progressWidth, setProgressWidth] = useState(0);

  const onSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex);
  };
  const onActiveSlide = (index) => {
    sliderRef.current?.swiper.slideTo(index);
  };

  const onAutoplayTimeLeft = useCallback((swiper, time) => {
    const autoplay = swiper.params.autoplay;
    if (autoplay && typeof autoplay === "object" && "delay" in autoplay) {
      const slideDuration = autoplay.delay;
      const width = (1 - time / slideDuration) * 100;
      setProgressWidth(width);
    }
  }, []);
  const onSwiperTransitionEnd = useCallback(() => {
    const swiper = this.refs.sliderRef.current?.swiper;
    if (swiper.isEnd) {
      setCurrentIndex(0);
      setProgressWidth(0);
    }
  }, []);

  return (
    <div className="space-y-6">
      <Swiper
        ref={sliderRef}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect={"fade"}
        modules={[EffectFade, Autoplay]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        onSlideChange={onSlideChange}
        onSwiperTransitionEnd={onSwiperTransitionEnd}
      >
        {serviceData.map((obj, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="bg-foreground rounded-lg p-2 grid md:grid-cols-2 gap-6">
                <motion.div
                  variants={fadeIn("up", "tween", 0.2, 1)}
                  className="flex flex-col justify-between gap-6 py-8 pl-4"
                >
                  <div>
                    <h1 className="text-lg font-semibold">{obj.name}</h1>
                    <p className="mt-6 text-s">{obj.description}</p>
                    <button className="btn primary-btn mt-3">
                      View case study
                    </button>
                  </div>
                  <p>
                    Jeniffer Koiolbaly-{" "}
                    <span className="opacity-60">CTO EV Medironic</span>
                  </p>
                </motion.div>
                <motion.img
                  variants={fadeIn("up", "tween", 0.2, 1)}
                  src={obj.image}
                  alt={obj.name}
                  className="rounded-lg object-cover aspect-video my-auto"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="flex gap-4 items-center justify-center">
        {serviceData.map((obj, idx) => (
          <div key={idx} className="flex flex-col gap-2">
            <div
              onClick={() => onActiveSlide(idx)}
              className="h-1 sm:w-full w-8 rounded-full bg-neutral-300 w-full overflow-hidden cursor-pointer"
            >
              <div
                className={` rounded-full h-full ${
                  idx === currentIndex ? "bg-primary" : ""
                }`}
                style={{ width: `${progressWidth}%` }}
              ></div>
            </div>

            <p
              className={`text-sm ${
                currentIndex === idx ? "" : "text-gray-400"
              }`}
            >
              {obj.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
