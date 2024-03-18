import React from "react";
import { Box, Text, Button, VStack } from "@chakra-ui/react";

const UpgradeCategory = ({ category, upgrades, onUpgradePurchase }) => {
  return (
    <Box p={5} shadow="md" borderWidth="1px">
      <Text fontSize="xl" mb={4}>
        {category.name}
      </Text>
      <VStack spacing={2} align="stretch">
        {category.upgrades.map((upgrade) => (
          <Button key={upgrade.id} onClick={() => onUpgradePurchase(upgrade)} disabled={upgrades.some((u) => u.id === upgrade.id)}>
            {upgrade.name} (Cost: {upgrade.cost})
          </Button>
        ))}
      </VStack>
    </Box>
  );
};

export default UpgradeCategory;
