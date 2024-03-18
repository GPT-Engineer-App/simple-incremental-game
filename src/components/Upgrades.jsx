import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import UpgradeCategory from "./UpgradeCategory";

const Upgrades = ({ upgrades, onUpgradePurchase }) => {
  const availableUpgrades = [
    { id: 1, name: "Double Click", cost: 10, effect: 2 },
    { id: 2, name: "Triple Click", cost: 50, effect: 3 },
  ];

  return (
    <Box>
      <Text fontSize="xl" mb={4}>
        Upgrades
      </Text>
      <VStack spacing={2} align="stretch">
        {availableUpgrades.map((category) => (
          <UpgradeCategory key={category.id} category={category} upgrades={upgrades} onUpgradePurchase={onUpgradePurchase} />
        ))}
      </VStack>
    </Box>
  );
};

export default Upgrades;
