import { Link } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import vmImage from "../assets/vm.png";
import cornImage from "../assets/corn.jpg";
import carrotImage from "../assets/carrot.jpg";
import potatoImage from "../assets/potato.png";

function VendingMachine() {
  const [money, setMoney] = useLocalStorage("money", 5);

  const handleClick = () => {
    setMoney(money + 1);
  };

  return (
    <div>
      <div>You currently have {money}c</div>
      <button onClick={handleClick}>Earn Money</button>
      <h2>What do you want to buy?</h2>
      <div>
        <Link to="/carrot">
          <div className="imageContainer carrot" data-hover-text="2c">
            <img className="carrotImage" src={carrotImage} alt="Carrot" />
          </div>
        </Link>
        <Link to="/corn">
          <div className="imageContainer corn" data-hover-text="3c">
            <img className="cornImage" src={cornImage} alt="Corn" />
          </div>
        </Link>
        <Link to="/potato">
          <div className="imageContainer potato" data-hover-text="5c">
            <img className="potatoImage" src={potatoImage} alt="Potato" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default VendingMachine;
