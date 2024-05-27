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
        <img src={vmImage} alt="vending Machine" />
        <Link to="/carrot">
          <div className="imageContainer carrot" data-hover-text="1c">
            <img className="carrotImage" src={carrotImage} alt="Carrot" />
          </div>
        </Link>
        <div className="imageContainer corn" data-hover-text="3c">
          <Link to="/corn">
            <img className="cornImage" src={cornImage} alt="Corn" />
          </Link>
        </div>
        <div className="imageContainer potato" data-hover-text="5c">
          <Link to="/potato">
            <img className="potatoImage" src={potatoImage} alt="Potato" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default VendingMachine;
