import { Box, VStack } from "@chakra-ui/react";
import Upgrade from "../components/Upgrade.jsx";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";

const UpgradesPage = ({ count, setCount, passiveIncome, setPassiveIncome, clickValue, setClickValue, purchasedUpgrades, setPurchasedUpgrades }) => {
  const toast = useToast();

  const handlePurchaseUpgrade = (upgrade) => {
    if (count >= upgrade.cost) {
      setCount((prevCount) => prevCount - upgrade.cost);
      setPurchasedUpgrades((prevPurchasedUpgrades) => [...prevPurchasedUpgrades, upgrade]);
      if (upgrade.income) {
        setPassiveIncome((prevPassiveIncome) => prevPassiveIncome + upgrade.income);
      }
      if (upgrade.clickValue) {
        setClickValue((prevClickValue) => prevClickValue + upgrade.clickValue);
      }
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

  const upgradesList = [
    { id: 1, name: "Basic Upgrade", cost: 10, income: 1 },
    { id: 2, name: "Click Upgrade", cost: 50, clickValue: 1 },
  ];

  return (
    <Box p={5}>
      <VStack spacing={4}>
        {upgradesList.map((upgrade) => (
          <Upgrade key={upgrade.id} upgrade={upgrade} onPurchase={handlePurchaseUpgrade} count={count} />
        ))}
      </VStack>
    </Box>
  );
};

export default UpgradesPage;
