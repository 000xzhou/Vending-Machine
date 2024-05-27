import { Link } from "react-router-dom";
import usePurchase from "../hooks/usePurchase.jsx";
import Corn from "../components/Corn";

function Corns() {
  const [corn, money, buyCorn, sellCorn] = usePurchase("corn", 3, 2, 0);

  return (
    <div>
      <div>
        Corn <p>cost: 3c</p>
        <p>sell: 2c</p>
      </div>
      <p>You curently have {money}c in your wallet</p>
      <button onClick={buyCorn}>Buy Corn</button>
      <button onClick={sellCorn}>Sell Corn</button>
      <Corn corn={corn} />
      <Link to="/">Go Back</Link>
    </div>
  );
}

export default Corns;
