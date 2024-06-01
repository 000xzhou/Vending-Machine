import potatoImage from "../assets/potato.png";
import cornImage from "../assets/corn.jpg";
import carrotImage from "../assets/carrot.jpg";
import { useEffect, useState } from "react";

function AllPhoto({ item, itemAmount }) {
  const [type, setType] = useState("");
  useEffect(() => {
    if (item === "potato") {
      setType(potatoImage);
    }
    if (item === "corn") {
      setType(cornImage);
    }
    if (item === "carrot") {
      setType(carrotImage);
    }
  });

  return (
    <div>
      <div>Currently have {itemAmount} potato</div>
      {Array.from({ length: itemAmount }).map((_, index) => (
        <img
          key={item}
          src={type}
          alt={item}
          style={{ width: "50px", height: "50px", margin: "5px" }}
        />
      ))}
    </div>
  );
}

export default AllPhoto;
