import { useCallback, useState } from "react";
import Card from "../../../components/Card";
import { serviceQuestions } from "../../../constants";
import { LuArrowDownRight } from "react-icons/lu";

const ServiceSection = () => {
  const [active, setActive] = useState(0);

  const handleActive = useCallback(
    (index) => setActive((prevActive) => (prevActive === index ? null : index)),
    []
  );

  return (
    <section className="wrapper my-10">
      <Card>
        <div className="space-y-3 max-w-xl">
          <p className="card-name">Our Service</p>
          <h1 className="card-title">
            Manage Your Package From Local To{" "}
            <span className="text-primary">The World</span>
          </h1>
          <p className="card-description">
            Vinsum is a logistics provider of integrated freight solutions.
            vinsum provides dedicated freight solution including: Less Than
            Truck Load, Full Truck Load, Wraehousing/Fullfillment, Drayage, and
            transloading
          </p>
        </div>

        <div className="grid lg:grid-cols-2 md:gap-12 gap-10 mt-8">
          <div className="w-full h-[380px] overflow-hidden rounded-2xl">
            <img
              src="https://cdn.pixabay.com/photo/2014/09/11/22/00/dock-441989_1280.jpg"
              alt="service"
              className="rounded-2xl object-cover w-full h-full hover:scale-105 transition duration-1000 ease-in-out cursor-pointer"
            />
          </div>
          <div className="space-y-4">
            {serviceQuestions.map((service, index) => {
              const title = service.title.split(" ");
              const isActive = active === index;
              return (
                <div
                  key={index}
                  onClick={() => handleActive(index)}
                  className="border-t last:border-b border-text py-6"
                >
                  <div className="flex items-center justify-between cursor-pointer">
                    <h1 className="text-3xl font-semibold">
                      <span className="text-primary">{title[0]} </span>
                      {title[1]}
                    </h1>
                    <LuArrowDownRight
                      size={38}
                      className={`${
                        isActive? "-rotate-90" : "rotate-0"
                      } transition duration-500`}
                    />
                  </div>
                  {isActive&& (
                    <p className="text-text mt-6">{service.description}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Card>
    </section>
  );
};

export default ServiceSection;
