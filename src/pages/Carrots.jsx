import { Link } from "react-router-dom";
import usePurchase from "../hooks/usePurchase";
import Carrot from "../components/Carrot";

function Carrots() {
  const [carrot, money, buyCarrot] = usePurchase("carrot", 1, 0);

  return (
    <div>
      <div>Carrot</div>
      <p>You curently have {money}c in your wallet</p>
      <button onClick={buyCarrot}>Buy Carrot 1c</button>
      <Carrot carrot={carrot} />
      <Link to="/">Go Back</Link>
    </div>
  );
}

export default Carrots;
