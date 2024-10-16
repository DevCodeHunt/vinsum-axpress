import Card from "../../../components/Card";
import { aboutCards } from "../../../constants";

const AboutSection = () => {
  return (
    <section className="wrapper my-10">
      <Card hasBg>
        <div className="space-y-3 max-w-xl">
          <p className="card-name">About us</p>
          <h1 className="card-title">WHY Choose US.</h1>
          <p className="card-description">
            Because Visnum will make it easier for you to send your package with
            the features we have.
          </p>
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 mt-10">
          {aboutCards.map((obj, index) => {
            return (
              <div
                key={index}
                className={`bg-card rounded-2xl p-6 space-y-4 hover:bg-primary transition duration-300 group cursor-pointer`}
              >
                <h2 className="font-bold text-4xl">O{index + 1}</h2>
                <h1 className="font-semibold text-2xl">{obj.title}</h1>
                <p className="text-text text-sm group-hover:text-white">
                  {obj.description}
                </p>
              </div>
            );
          })}
        </div>
      </Card>
    </section>
  );
};

export default AboutSection;
