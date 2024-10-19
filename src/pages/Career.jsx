import Lottie from "react-lottie";
import {
  BriefcaseBusiness,
  Building2,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Globe,
  MapPin,
  Search,
  UsersRound,
} from "lucide-react";
import animationData from "../assets/job-animation.json";
import { careerCategories, openings } from "../constants";
import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import { useMediaQuery } from "react-responsive";
import AnimationWrapper from "../components/AnimationWrapper";
import { useJobApplyStore } from "../stores";
import CareerModal from "../components/modals/CareerModal";

const Career = () => {
  const mobile = useMediaQuery({ query: "(min-width: 640px)" });
  const itemsPerPage = 6;
  const totalPages = Math.ceil(openings.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const { onOpen: openModal, setJob } = useJobApplyStore();

  const currentItems = openings.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToNextPage = useCallback(
    () => setCurrentPage((prev) => Math.min(prev + 1, totalPages)),
    [totalPages]
  );
  const goToPreviousPage = useCallback(
    () => setCurrentPage((prev) => Math.max(prev - 1, 1)),
    []
  );

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleOpenModal = (job) => {
    setJob(job);
    openModal();
  };

  const pageButton =
    "w-10 h-10 rounded-md border border-neutral-300 flex items-center justify-center";

  return (
    <AnimationWrapper>
      <CareerModal />
      <section className="py-20 bg-foreground">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="wrapper grid md:grid-cols-2 gap-6 items-center"
        >
          <motion.div variants={fadeIn("right", "tween", 0.2, 1)}>
            <h1 className="lg:text-5xl sm:text-4xl text-3xl leading-tight font-semibold">
              Find a job that suits your interest and skills.
            </h1>
            <p className="my-2 opacity-60">
              We believe that our people are our greatest asset. We are
              committed to fostering a collaborative and innovative work
              environment where every team member can thrive.
            </p>

            <div className="mt-6  flex items-center bg-white shadow rounded-lg  px-1">
              <div className="relative w-full">
                <Search
                  size={18}
                  className="absolute top-1/2 -translate-y-1/2 left-2 text-primary"
                />
                <input
                  type="text"
                  placeholder="Job title, keywords"
                  className="w-full py-2 border outline-none border-none pl-8 pr-2 text-sm rounded-l-lg"
                />
              </div>
              <div className="relative w-full">
                <MapPin
                  size={18}
                  className="absolute top-1/2 -translate-y-1/2 left-2 text-primary"
                />
                <input
                  type="text"
                  placeholder="Your location"
                  className="h-full py-4 w-full outline-none border-none pl-8 pr-2 text-sm"
                />
              </div>
              <button className="btn primary-btn whitespace-nowrap">
                Find Job
              </button>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1)}
            className="w-full h-auto"
          >
            <Lottie options={defaultOptions} width={300} height={300} />
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <motion.div
            variants={
              mobile
                ? fadeIn("up", "tween", 0.2, 1)
                : fadeIn("right", "tween", 0.2, 1)
            }
            className="wrapper pt-20 grid lg:grid-cols-4 sm:grid-cols-2 gap-6"
          >
            <div className="flex items-center shadow border bg-white rounded-lg px-2 py-4 cursor-pointer group gap-4 transition duration-300 hover:drop-shadow-lg ">
              <div className="flex items-center justify-center rounded-lg w-14 h-14 bg-primary/20">
                <Globe />
              </div>
              <div className="flex-1 space-y-1">
                <h2 className="text-lg font-semibold group-hover:text-primary">
                  75+
                </h2>
                <p className="text-sm opacity-60">Total Branches</p>
              </div>
            </div>

            <div className="flex items-center shadow border bg-white rounded-lg px-2 py-4 cursor-pointer group gap-4 transition duration-300 hover:drop-shadow-lg ">
              <div className="flex items-center justify-center rounded-lg w-14 h-14 bg-primary/20">
                <Building2 />
              </div>
              <div className="flex-1 space-y-1">
                <h2 className="text-lg font-semibold group-hover:text-primary">
                  Gurgaon
                </h2>
                <p className="text-sm opacity-60">Headquarters</p>
              </div>
            </div>
            <div className="flex items-center shadow border bg-white rounded-lg px-2 py-4 cursor-pointer group gap-4 transition duration-300 hover:drop-shadow-lg ">
              <div className="flex items-center justify-center rounded-lg w-14 h-14 bg-primary/20">
                <UsersRound />
              </div>
              <div className="flex-1 space-y-1">
                <h2 className="text-lg font-semibold group-hover:text-primary">
                  600+
                </h2>
                <p className="text-sm opacity-60">Total Employees</p>
              </div>
            </div>
            <div className="flex items-center shadow border bg-white rounded-lg px-2 py-4 cursor-pointer group gap-4 transition duration-300 hover:drop-shadow-lg ">
              <div className="flex items-center justify-center rounded-lg w-14 h-14 bg-primary/20">
                <BriefcaseBusiness />
              </div>
              <div className="flex-1 space-y-1">
                <h2 className="text-lg font-semibold group-hover:text-primary">
                  15+
                </h2>
                <p className="text-sm opacity-60">Job Openings</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="py-20"
      >
        <div className="wrapper">
          <h1 className="text-xl font-bold opacity-90 mb-6">
            Popular Categories
          </h1>
          <motion.div
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6"
          >
            {careerCategories.map((category, index) => (
              <div
                key={index}
                className="flex items-center shadow border bg-white rounded-lg px-2 py-4 cursor-pointer group gap-4 transition duration-300 hover:drop-shadow-lg "
              >
                <div className="flex items-center justify-center rounded-lg w-14 h-14 bg-primary/20">
                  <category.icon />
                </div>
                <div className="flex-1 space-y-1">
                  <h2 className="text-sm font-semibold group-hover:text-primary">
                    {category.name}
                  </h2>
                  <p className="text-sm opacity-60">
                    {category.position} Open position
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <section className="py-20">
        <div className="wrapper">
          <h1 className="text-xl font-bold opacity-90 mb-6">Featured Job</h1>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="flex flex-col gap-4"
          >
            {currentItems.map((opening, index) => (
              <AnimationWrapper
                key={index}
                className="flex sm:flex-row flex-col sm:items-center  border bg-white rounded-lg px-2 py-4 cursor-pointer group gap-4 transition duration-300 hover:drop-shadow hover:border-primary "
              >
                <div className="flex items-center justify-center rounded-lg w-14 h-14 bg-primary/20"></div>
                <div className="flex-1 gap-4 flex sm:flex-row flex-col smitems-center justify-between">
                  <div>
                    <h2>{opening.position}</h2>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center gap-1 opacity-60">
                        <MapPin size={16} />
                        <span className="text-sm">{opening.location}</span>
                      </div>
                      <div className="flex items-center gap-1 opacity-60">
                        <BriefcaseBusiness size={16} />
                        <span className="text-sm">
                          {opening.vacancy} Opening
                        </span>
                      </div>
                      <div className="flex items-center gap-1 opacity-60">
                        <Calendar size={16} />
                        <span className="text-sm">
                          {opening.experience} Opening
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      type="button"
                      onClick={() => handleOpenModal(opening)}
                      className="btn primary-btn"
                    >
                      Apply now
                    </button>
                  </div>
                </div>
              </AnimationWrapper>
            ))}
          </motion.div>

          <div className="flex items-center gap-1 mt-10 justify-center">
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={goToPreviousPage}
              className={`${pageButton} disabled:bg-foreground`}
            >
              <ChevronLeft size={20} />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`btn ${
                  page === currentPage ? "primary-btn" : "btn secondary-btn"
                }`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
            <button
              type="button"
              disabled={currentPage === totalPages}
              onClick={goToNextPage}
              className={`${pageButton} disabled:bg-foreground`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </AnimationWrapper>
  );
};

export default Career;
