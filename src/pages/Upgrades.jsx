import { Box, VStack, useToast } from "@chakra-ui/react";
import Upgrade from "../components/Upgrade.jsx";
import { useState } from "react";

const upgradesList = [
  { id: 1, name: "Basic Upgrade", cost: 10, income: 1 },
  { id: 2, name: "Click Upgrade", cost: 50, clickValue: 1 },
];

const UpgradesPage = () => {
  const toast = useToast();
  const [purchasedUpgrades, setPurchasedUpgrades] = useState([]);
  const [passiveIncome, setPassiveIncome] = useState(0);
  const [clickValue, setClickValue] = useState(1);

  const handlePurchase = (upgrade) => {
    toast({
      title: "Upgrade purchased",
      description: `${upgrade.name} has been added to your upgrades!`,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
    setPurchasedUpgrades([...purchasedUpgrades, upgrade]);
    setPassiveIncome(passiveIncome + (upgrade.income || 0));
    setClickValue(clickValue + (upgrade.clickValue || 0));
  };

  return (
    <Box p={5}>
      <VStack spacing={4}>
        {upgradesList.map((upgrade) => (
          <Upgrade key={upgrade.id} upgrade={upgrade} onPurchase={handlePurchase} />
        ))}
      </VStack>
    </Box>
  );
};

export default UpgradesPage;
