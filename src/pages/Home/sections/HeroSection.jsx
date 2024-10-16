import { LuArrowRight } from "react-icons/lu";
import { Link } from "react-router-dom";
import Input from "../../../components/Input";

const HeroSection = () => {
  return (
    <section className="min-h-screen py-10">
      <div className="wrapper flex md:flex-row flex-col gap-6">
        <div className="flex-1">
          <h1 className="sm:text-6xl text-5xl font-bold uppercase leading-tight">
            WE WILL <span className="text-primary">DELIVER</span>{" "}
            <br className="md:inline-block hidden" /> YOUR PACKAGE ALL{" "}
            <br className="md:inline-block hidden" /> OVER{" "}
            <span className="text-primary">THE WORLD.</span>
          </h1>
        </div>

        <div className="w-72 space-y-6">
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
        </div>
      </div>

      <div className="px-10 py-10">
        <div className="min-[576px]:w-96 bg-backgroundSecondary  rounded-2xl p-4 space-y-10">
          <div className="flex items-center justify-between gap-3">
            <span className="text-sm">Shipment Tracking</span>
            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="relative w-[52px] h-7 bg-[#272727] rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-primary after:rounded-full after:h-6 after:w-6 after:transition-all"></div>
            </label>
            <span className="text-sm">Shipment Rate</span>
          </div>

          <form className="bg-[#292929] rounded-2xl p-4 space-y-3">
            <h3>Track Shipment</h3>
            <Input placeholder="Enter your shipment code" />
            <Input placeholder="Enter your shipment code" />
            <button className="primary-btn text-sm px-6 py-3.5 w-full rounded-2xl font-medium !mt-3">
              Track Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
