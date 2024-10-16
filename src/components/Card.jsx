const Card = ({ name, title, description, hasBg, children }) => {
  return (
    <div
      className={`rounded-2xl md:px-8 px-6 py-8 space-y-12  ${
        hasBg ? "bg-cardSecondary" : "bg-transparent"
      }`}
    >
      <div className="space-y-3">
        <p className="text-primary text-sm font-medium">{name}</p>
        <h1 className="sm:text-5xl text-4xl font-bold uppercase leading-tight">
          {title}
        </h1>
        <p className="text-sm text-text">{description}</p>
      </div>
      {children}
    </div>
  );
};

export default Card;
