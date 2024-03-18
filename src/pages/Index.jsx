import { useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";

function Index() {
  const [count, setCount] = useState(0);
  const [passiveIncome, setPassiveIncome] = useState(0);
  const [clickValue, setClickValue] = useState(1);
  const [purchasedUpgrades, setPurchasedUpgrades] = useState([]);

  const handleClick = () => {
    setCount((prevCount) => prevCount + clickValue);
  };
  const toast = useToast();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + passiveIncome);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [passiveIncome]);

  const handlePurchaseUpgrade = (upgrade) => {
    if (count >= upgrade.cost) {
      setCount((prevCount) => prevCount - upgrade.cost);
      setPurchasedUpgrades((prevPurchasedUpgrades) => [...prevPurchasedUpgrades, upgrade]);
      setPassiveIncome((prevPassiveIncome) => prevPassiveIncome + upgrade.income);
    } else {
      toast({
        title: "Insufficient funds",
        description: "You don't have enough points to purchase this upgrade",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <div>
      <p>Your passive income: {passiveIncome}</p>
      <button onClick={handleClick}>Click Me (+{clickValue})</button>
      <button onClick={() => handlePurchaseUpgrade({ cost: 100, income: 1 })}>Purchase Upgrade (Cost: 100)</button>
      <p>Points: {count}</p>
      <p>Click Value: {clickValue}</p>
      <p>Purchased Upgrades: {purchasedUpgrades.length}</p>
    </div>
  );
}

export default Index;
