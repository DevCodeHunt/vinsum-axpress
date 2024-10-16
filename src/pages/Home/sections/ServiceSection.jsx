import Card from "../../../components/Card";

const ServiceSection = () => {
  return (
    <section className="wrapper my-10">
      <Card
        name="About us"
        title="W"
        description="Because Visnum will make it easier for you to send your package with the features we have."
        hasBg
      >
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

        
      </Card>
    </section>
  );
};

export default ServiceSection;
