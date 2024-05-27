import cornImage from "../assets/corn.jpg";

function Corn({ corn }) {
  return (
    <div>
      <div>Currently have {corn} corn</div>
      {Array.from({ length: corn }).map((_, index) => (
        <img
          key={index}
          src={cornImage}
          alt="corn"
          style={{ width: "50px", height: "50px", margin: "5px" }}
        />
      ))}
    </div>
  );
}

export default Corn;
