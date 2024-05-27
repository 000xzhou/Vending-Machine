import potatoImage from "../assets/potato.png";

function Potato({ potato }) {
  return (
    <div>
      <div>Currently have {potato} potato</div>
      {Array.from({ length: potato }).map((_, index) => (
        <img
          key={index}
          src={potatoImage}
          alt="potato"
          style={{ width: "50px", height: "50px", margin: "5px" }}
        />
      ))}
    </div>
  );
}

export default Potato;
