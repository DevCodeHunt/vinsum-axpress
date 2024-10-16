const Card = ({ hasBg, children }) => {
  return (
    <div
      className={`rounded-2xl md:px-8 px-6 py-8  ${
        hasBg ? "bg-cardSecondary" : "bg-transparent"
      }`}
    >
      {children}
    </div>
  );
};

export default Card;
