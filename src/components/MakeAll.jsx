import { Link } from "react-router-dom";
import usePurchase from "../hooks/usePurchase.jsx";
import AllPhoto from "./AllPhoto.jsx";

function MakeAll({ item, cost, sell }) {
  const [itemAmount, money, buyItem, sellItem] = usePurchase(
    item,
    cost,
    sell,
    0
  );

  return (
    <div>
      <div>
        {item} <p>cost: {cost}c</p>
        <p>sell: {sell}c</p>
      </div>
      <p>You curently have {money}c in your wallet</p>
      <button onClick={buyItem}>Buy {item}</button>
      <button onClick={sellItem}>Sell {item}</button>
      <AllPhoto item={item} itemAmount={itemAmount} />
      <Link to="/">Go Back</Link>
    </div>
  );
}

export default MakeAll;
