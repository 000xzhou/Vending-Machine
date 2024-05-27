import carrotImage from "../assets/carrot.jpg";

function Carrot({ carrot }) {
  return (
    <div>
      <div>Currently have {carrot} carrot</div>
      {Array.from({ length: carrot }).map((_, index) => (
        <img
          key={index}
          src={carrotImage}
          alt="carrot"
          style={{ width: "50px", height: "50px", margin: "5px" }}
        />
      ))}
    </div>
  );
}

export default Carrot;
