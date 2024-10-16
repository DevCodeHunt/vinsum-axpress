import Card from "../../../components/Card";

const OfficeSection = () => {
  return (
    <section className="wrapper my-10">
      <Card hasBg>
        <div className="space-y-3 max-w-xl">
          <h1 className="card-title">
            <span className="text-primary">OUR OFFICES</span> ARE SPREAD
            THROUGHOUT WORLDWIDE.
          </h1>
          <p className="card-description">
            Vinsum has more than 1000 offfices that can serve you to send your
            package to your destination
          </p>
        </div>
        <div className="mt-10"></div>
      </Card>
    </section>
  );
};

export default OfficeSection;
