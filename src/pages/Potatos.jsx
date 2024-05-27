import { Link } from "react-router-dom";
import Potato from "../components/Potato";
import usePurchase from "../hooks/usePurchase";

function Potatos() {
  const [potato, money, buypotato] = usePurchase("potato", 5, 0);

  return (
    <div>
      <div>Potato</div>
      <p>You curently have {money}c in your wallet</p>
      <button onClick={buypotato}>Buy Potato 5c</button>
      <Potato potato={potato} />
      <Link to="/">Go Back</Link>
    </div>
  );
}

export default Potatos;
