import { Link } from "react-router-dom";
import Potato from "../components/Potato";
import usePurchase from "../hooks/usePurchase.jsx";

function Potatos() {
  const [potato, money, buyPotato, sellPotato] = usePurchase("potato", 5, 0);

  return (
    <div>
      <div>
        Potato <p>cost: 5c</p>
      </div>
      <p>You curently have {money}c in your wallet</p>
      <button onClick={buyPotato}>Buy Potato</button>
      <button onClick={sellPotato}>Sell Potato</button>
      <Potato potato={potato} />
      <Link to="/">Go Back</Link>
    </div>
  );
}

export default Potatos;
