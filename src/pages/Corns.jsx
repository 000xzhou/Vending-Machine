import { Link } from "react-router-dom";
import usePurchase from "../hooks/usePurchase";
import Corn from "../components/Corn";

function Corns() {
  const [corn, money, buyCorn] = usePurchase("corn", 3, 0);

  return (
    <div>
      <div>Corn</div>
      <p>You curently have {money}c in your wallet</p>
      <button onClick={buyCorn}>Buy Corn 3c</button>
      <Corn corn={corn} />
      <Link to="/">Go Back</Link>
    </div>
  );
}

export default Corns;
