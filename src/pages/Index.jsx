import { useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";

function Index({ count, setCount, passiveIncome, setPassiveIncome, clickValue, purchasedUpgrades, setPurchasedUpgrades }) {
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
      <p>Points: {count}</p>
      <p>Click Value: {clickValue}</p>
      <p>Purchased Upgrades: {purchasedUpgrades.length}</p>
    </div>
  );
}

// Removed exports that are no longer needed

export default Index;
