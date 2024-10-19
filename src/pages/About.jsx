import { Link } from "react-router-dom";
import { leadershipTeams, missionVisonValues, networks } from "../constants";
import { ROUTES } from "../utils/routes";
import { MoveRight, Smile } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import AnimationWrapper from "../components/AnimationWrapper";


const About = () => {
  return (
    <AnimationWrapper>
      <section className="py-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="wrapper grid md:grid-cols-2 gap-6"
        >
          <motion.div variants={fadeIn("right", "tween", 0.2, 1)} className="">
            <div className="bg-foreground rounded p-1 px-2 w-fit">
              “Delivering More Than Just Packages.”
            </div>
            <h1 className="lg:text-6xl sm:text-5xl text-3xl font-bold my-4">
              An astonishing expedition of curiosities—one mile at a time.
            </h1>
            <div>
              <p className="text-lg">Do you know that</p>
              <ul className="pl-4 list-disc mt-2 space-y-1">
                <li className="">
                  we&#39;ve been the leading logistics company in India for the
                  past 18 years.
                </li>
                <li>
                  {" "}
                  with 75+ branches, and 53+ warehouses across India, we&#39;ve
                  got you covered.
                </li>
                <li>
                  {" "}
                  integrity, accountability, excellence, and innovation is our
                  mantra.
                </li>
                <li>
                  with a portfolio of over 100+ happy clients, we strive to
                  provide exceptional service and build lasting relationships.
                </li>
                <li>
                  and we are hiring. Click the button below to join us 😉.
                </li>
              </ul>
            </div>
            <Link to={ROUTES.CAREER} className="btn primary-btn mt-6 w-fit">
              We are hiring <MoveRight size={18} />
            </Link>
          </motion.div>

          <motion.div variants={fadeIn("left", "tween", 0.2, 1)}>
            <img src="/images/about-us.png" alt="about" />
          </motion.div>
        </motion.div>
      </section>

      <section className="py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="wrapper md:space-y-20 space-y-12"
        >
          <motion.h1
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="text-3xl font-bold text-center"
          >
            Do you know that...
          </motion.h1>

          <motion.div
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="grid md:grid-cols-3 sm:grid-cols-2 gap-6"
          >
            {missionVisonValues.map((obj, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-white border h-full hover:bg-foreground transition duration-300"
              >
                <img
                  src={obj.image}
                  alt={obj.name}
                  className="w-32 object-cover"
                />
                <h1 className="pt-6 text-2xl font-bold">{obj.name}</h1>

                <ul className="space-y-2 pt-4 pl-2 list-disc">
                  {obj.lists.map((list, idx) => (
                    <li key={idx} className="text-sm opacity-65">
                      {list}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* <section className="py-20">
        <div className="wrapper">
         
        </div>
      </section> */}

      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="py-20 md:space-y-20 space-y-12"
      >
        <motion.h1
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="text-3xl font-bold text-center"
        >
          Chairman & Managing Director
        </motion.h1>

        <div className="bg-foreground">
          <div className="wrapper relative lg:py-8 pb-8  grid lg:grid-cols-2  my-4 mt-8">
            <div className="w-full px-4 relative flex items-center justify-center flex-col py-32">
              <div className="bg-[#DEDEDE] lg:h-[530px] w-1/2 absolute lg:right-0 -right-4 top-0 bottom-0 border-b-8 border-primary">
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col w-full items-center justify-center">
                  <p>Mr. Vinod Sharma</p>
                  <p className="font-bold">Chairman & Managing Director</p>
                </div>
              </div>

              <div className="lg:hidden block z-10 relative">
                <div className="w-20 h-10 bg-primary/30 -top-4 -z-1 absolute right-0"></div>
                <h1 className="text-5xl font-bold font-lato z-10">About Me.</h1>
              </div>

              <div className=" flex flex-col gap-8 lg:p-4 lg:pt-0 pt-10 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-16">
                {/* <img src="/images/wave-2.png" alt="wave-2" className="absolute -top-28 -right-10" /> */}
                <div className="h-[280px] w-[250px] border-8 border-white rounded relative">
                  <div className="w-12 h-12 rounded flex items-center justify-center absolute -left-7 top-16 bg-[#EDEDED]">
                    <Smile className="opacity-60" />
                  </div>
                  <img
                    src="https://vinsumaxpress.com/assets/img/team/CMD.jpeg"
                    alt="chairmain"
                    className="w-full h-full object-cover"
                  />

                  <div className="w-4 h-10 bg-primary absolute -right-6 -z-1 bottom-8"></div>
                </div>

                <div className="lg:flex hidden flex-col gap-4 pl-8">
                  <a
                    href="#"
                    target="_blank"
                    className="bg-[#676767] text-white lg:w-10 lg:h-10 w-12 h-12 flex items-center justify-center text-xl cursor-pointer"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>

                  <a
                    href="#"
                    target="_blank"
                    className="bg-[#676767] text-white lg:w-10 lg:h-10 w-12 h-12 flex items-center justify-center text-xl cursor-pointer"
                  >
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>

                  <a
                    href="#"
                    target="_blank"
                    className="bg-[#676767] text-white lg:w-10 lg:h-10 w-12 h-12 flex items-center justify-center text-xl cursor-pointer"
                  >
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full relative  flex flex-col justify-center p-4 px-8">
              <div className="lg:block hidden absolute -left-20 top-20">
                <div className="w-20 h-10 bg-primary/30 -top-4 -z-1 absolute right-0"></div>
                <h1 className="text-5xl font-bold font-lato z-10">About Me.</h1>
              </div>

              <div className="relative lg:pt-40 pt-10">
                <p className="text-2xl leading-relaxed relative before:content-[''] before:absolute before:lg:-left-16 before:-left-12 before:top-5 before:lg:w-14 before:w-10 before:h-[1px] before:bg-black">
                  Join us on an extraordinary journey of growth, where we strive
                  for excellence and work together to achieve the best for
                  <strong> our business.</strong>
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 pt-8">
                <div className="flex gap-4 items-start">
                  <div className="w-3 h-3 bg-black mt-2"></div>
                  <p className="flex-1">
                    On behalf of Vinsum Axpress, I warmly welcome you all and
                    extend our heartfelt gratitude to our customers for their
                    continued support, particularly during our initial years.
                  </p>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-3 h-3 bg-black mt-2"></div>
                  <p className="flex-1">
                    Vinsum Axpress is dedicated to offering cost-effective
                    transportation solutions. Our services span across surface
                    transport, warehouse management, international freight
                    forwarding, express distribution, 3PL/4PL solutions, and
                    packaging.
                  </p>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-3 h-3 bg-black mt-2"></div>
                  <p className="flex-1">
                    We are honored to be the preferred supplier for Fortune 100
                    automobile companies and a key point of contact for
                    enhancing efficiency within India&#39;s logistics landscape.
                  </p>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-3 h-3 bg-black mt-2"></div>
                  <p className="flex-1">
                    With over 18 years of experience across various industries,
                    our unwavering dedication to value delivery has earned us
                    the trust of our clients.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:hidden flex flex-col py-20 mt-6 items-center justify-center bg-[#2E2E2E] text-white gap-6">
              <div className="flex flex-col w-full items-center justify-center">
                <p>Social Media Seriously</p>
                <p className="font-bold">Harm your Mental Health</p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="#"
                  target="_blank"
                  className="bg-[#676767] text-white w-12 h-12 flex items-center justify-center text-xl cursor-pointer"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>

                <a
                  href="#"
                  target="_blank"
                  className="bg-[#676767] text-white w-12 h-12 flex items-center justify-center text-xl cursor-pointer"
                >
                  <i className="fa-brands fa-x-twitter"></i>
                </a>

                <a
                  href="#"
                  target="_blank"
                  className="bg-[#676767] text-white w-12 h-12 flex items-center justify-center text-xl cursor-pointer"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <section className="py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="wrapper grid md:grid-cols-2 md:gap-6 gap-12"
        >
          <motion.div variants={fadeIn("right", "tween", 0.2, 1)}>
            <h1 className="text-3xl font-bold">Vinsum Axpress Network</h1>
            <p className="tetx-sm opacity-60 my-4">
              Headquartered in Gurugram, a prominent area of the NCR, and
              empowered with a powerful and integrated distribution chain
              capability enabled by a massive network of numerous
              distribution-hubs and branches across the country, we have grown
              as a strong national logistics brand over the years.
            </p>

            <div className="grid sm:grid-cols-3 grid-cols-2 items-center gap-6 pt-8">
              {networks.map((overview, index) => (
                <div
                  key={index}
                  className="bg-foreground border-2 p-4 flex flex-col items-center justify-center border-white gap-2"
                >
                  <h3 className="text-lg font-bold  text-primary text-center">
                    {overview.total}
                  </h3>
                  <p className="text-sm opacity-60 font-semibold text-center">
                    {overview.name}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.img
            variants={fadeIn("left", "tween", 0.2, 1)}
            src="/images/map.png"
            alt="map"
            className="w-full h-full object-contain ml-auto"
          />
        </motion.div>
      </section>

      <section className="py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="wrapper space-y-20"
        >
          <motion.div
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="flex flex-col items-center justify-center"
          >
            <h1 className="text-4xl uppercase font-bold">Leadership</h1>
            <p className="opacity-60 max-w-lg text-center mt-2">
              We&#39;re led by a team who constantly queations, tinkers, and
              challengers to unlock great creativity around every turn.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-4 md:grid-cols-3 min-[528px]:grid-cols-2 gap-10">
            {leadershipTeams.map((team, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center border hover:border-0 hover:bg-foreground p-4 rounded-lg hover:drop-shadow transition duration-300 cursor-pointer"
              >
                <img
                  src={team.image}
                  alt={team.name}
                  className="w-32 h-32 rounded-full object-cover"
                />

                <div className="mt-6 space-y-2">
                  <h3 className="font-semibold text-center">{team.name}</h3>
                  <p className="text-sm opacity-60 text-center">
                    {team.position}
                  </p>

                  <div className="w-full flex items-center gap-4 justify-center pt-1">
                    <a href={team.instagram} target="_blank" className="">
                      <i className="fa-brands fa-instagram"></i>
                    </a>

                    <a href={team.twitter} target="_blank" className="">
                      <i className="fa-brands fa-x-twitter"></i>
                    </a>

                    <a href={team.linkedin} target="_blank" className="">
                      <i className="fa-brands fa-linkedin-in opacity-70"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className=" py-20 wrapper">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className=" grid md:grid-cols-2 gap-6"
        >
          <motion.div variants={fadeIn("right", "tween", 0.2, 1)}>
            <h1 className="text-3xl font-bold">Join Our Team Now</h1>
            <p className="opacity-60 mt-2 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              dolorem quasi maiores molestias quisquam dolore sint dignissimos
              voluptates magnam laborum.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1)}
            className="flex items-center md:justify-end gap-4"
          >
            <Link
              to={ROUTES.CAREER}
              className="btn border hover:bg-primary hover:text-white transition duration-300"
            >
              Learn More
              <MoveRight size={18} />
            </Link>
            <Link to={ROUTES.CAREER} className="btn primary-btn">
              Get Started
              <MoveRight size={18} />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </AnimationWrapper>
  );
};

export default About;
