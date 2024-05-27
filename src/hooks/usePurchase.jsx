import useLocalStorage from "./useLocalStorage";

const usePurchase = (itemKey, itemCost, sellCost, initialItemValue) => {
  const [item, setItem] = useLocalStorage(itemKey, initialItemValue);
  const [money, setMoney] = useLocalStorage("money", 5);

  const purchaseItem = () => {
    if (money >= itemCost) {
      setItem(item + 1);
      setMoney(money - itemCost);
    } else {
      alert("Not enough money to buy this item!");
    }
  };

  const sellItem = () => {
    if (item > 0) {
      setItem(item - 1);
      setMoney(money + sellCost);
    } else {
      alert(`Not enough ${itemKey}`);
    }
  };

  return [item, money, purchaseItem, sellItem];
};

export default usePurchase;
