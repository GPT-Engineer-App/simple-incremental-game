import { Box, VStack } from "@chakra-ui/react";
import Upgrade from "../components/Upgrade.jsx";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";

const UpgradesPage = ({ count, setCount, passiveIncome, setPassiveIncome, clickValue, setClickValue, purchasedUpgrades, setPurchasedUpgrades }) => {
  const toast = useToast();

  const handlePurchaseUpgrade = (upgradeId) => {
    setUpgradesList((prevUpgradesList) =>
      prevUpgradesList.map((upgrade) => {
        if (upgrade.id === upgradeId && count >= upgrade.cost) {
          setCount((prevCount) => prevCount - upgrade.cost);
          setPassiveIncome((prevPassiveIncome) => prevPassiveIncome + (upgrade.income || 0));
          setClickValue((prevClickValue) => prevClickValue + (upgrade.clickValue || 0));
          const newCost = Math.round(upgrade.cost * upgrade.costMultiplier);
          setPurchasedUpgrades((prevPurchased) => [...prevPurchased, upgradeId]);
          return { ...upgrade, cost: newCost, purchaseCount: upgrade.purchaseCount + 1 };
        }
        if (upgrade.id === upgradeId && count < upgrade.cost) {
          toast({
            title: "Insufficient funds",
            description: "You don't have enough points to purchase this upgrade",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        }
        return upgrade;
      }),
    );
  };

  const [upgradesList, setUpgradesList] = useState([
    { id: 1, name: "Basic Upgrade", cost: 10, income: 1, purchaseCount: 0, costMultiplier: 1.1 },
    { id: 2, name: "Click Upgrade", cost: 50, clickValue: 1, purchaseCount: 0, costMultiplier: 1.2 },
  ]);

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
