import { Link } from "react-router-dom";
import { companyDetail, navLinks } from "../constants";
import { LuMenu } from "react-icons/lu";
import { useCallback, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { FaFacebookF, FaPhoneAlt, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = useCallback(() => setMenu((prevMenu) => !prevMenu), []);
  return (
    <motion.header
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="bg-white shadow"
    >
      <motion.div
        variants={fadeIn("down", "tween", 0.2, 1)}
        className="py-3 wrapper flex items-center justify-between gap-6 border-b"
      >
        <div>
          <a
            href={`tel:${companyDetail.contact}`}
            className="flex items-center gap-2"
          >
            <FaPhoneAlt />
            <span className="text-sm">{companyDetail.contact}</span>
          </a>
          {/* <div className="flex items-center gap-2">
          <FaLocationDot />
          <span className="text-sm">{companyDetail.location}</span>
        </div> */}
        </div>

        <div className="flex items-center gap-4">
          <a
            href={`mailto:${companyDetail.email}`}
            className="flex items-center gap-2"
          >
            <IoMdMail size={20} />
            <span className="text-sm sm:inline hidden">
              {companyDetail.email}
            </span>
          </a>
          <a href={companyDetail.facebook} target="_blank">
            <FaFacebookF />
          </a>
          <a href={companyDetail.twitter} target="_blank">
            <FaXTwitter />
          </a>
          <a href={companyDetail.instagram} target="_blank">
            <AiFillInstagram size={20} />
          </a>
          <a href={companyDetail.youtube} target="_blank">
            <FaYoutube size={20} />
          </a>
        </div>
      </motion.div>
      <motion.nav
        variants={fadeIn("down", "tween", 0.2, 1)}
        className="wrapper py-4 flex items-center justify-between md:gap-0 gap-6 z-50"
      >
        <Link to="/" className="text-3xl text-primary font-bold">
          vinsum
        </Link>
        <button
          type="button"
          role="menu"
          onClick={toggleMenu}
          className="md:hidden block text-3xl"
        >
          {menu ? <MdOutlineClose /> : <LuMenu />}
        </button>

        <ul className={`hidden md:flex items-center gap-8 `}>
          {navLinks.map((link, index) => {
            return (
              <li key={index}>
                <Link key={index} to={link.url} className="text-sm ">
                  {link.label}
                </Link>{" "}
              </li>
            );
          })}
          <li>
            <button className="bg-primary text-white text-sm px-4 py-2.5 rounded-full hover:shadow-[0_1px_20px] hover:shadow-primary transition duration-300 ease-in-out">
              Get in touch
            </button>
          </li>
        </ul>

        {/* Mobile Menu */}
        {menu && (
          <div className="min-h-40 bg-white shadow drop-shadow absolute top-16 left-0 right-0 w-full z-50">
            <ul className="flex flex-col items-center justify-center gap-6 py-10">
              {navLinks.map((link, index) => {
                return (
                  <li key={index}>
                    <Link
                      onClick={() => setMenu(false)}
                      key={index}
                      to={link.url}
                      className="text-sm "
                    >
                      {link.label}
                    </Link>{" "}
                  </li>
                );
              })}
              <li>
                <button
                  onClick={() => setMenu(false)}
                  className="bg-primary text-white text-sm px-4 py-2.5 rounded-full hover:shadow-[0_1px_20px] hover:shadow-primary transition duration-300 ease-in-out"
                >
                  Get in touch
                </button>
              </li>
            </ul>
          </div>
        )}
      </motion.nav>
    </motion.header>
  );
};

export default Navbar;
