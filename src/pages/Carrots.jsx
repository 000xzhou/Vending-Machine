import { Link } from "react-router-dom";
import usePurchase from "../hooks/usePurchase.jsx";
import Carrot from "../components/Carrot";

function Carrots() {
  const [carrot, money, buyCarrot, sellCarrot] = usePurchase("carrot", 2, 1, 0);

  return (
    <div>
      <div>
        Carrot <p>cost: 2c</p>
        <p>sell: 1c</p>
      </div>
      <p>You curently have {money}c in your wallet</p>
      <button onClick={buyCarrot}>Buy Carrot</button>
      <button onClick={sellCarrot}>Sell Carrot</button>
      <Carrot carrot={carrot} />
      <Link to="/">Go Back</Link>
    </div>
  );
}

export default Carrots;
