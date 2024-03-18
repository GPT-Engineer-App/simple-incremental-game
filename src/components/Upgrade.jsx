import { Box, Button, Text } from "@chakra-ui/react";

const Upgrade = ({ upgrade, onPurchase }) => {
  return (
    <Box borderWidth={1} borderRadius="md" p={4} mb={4}>
      <Text fontSize="xl">{upgrade.name}</Text>
      <Text>Cost: {upgrade.cost}</Text>
      <Text>Income: {upgrade.income} per second</Text>
      <Button mt={2} colorScheme="green" onClick={() => onPurchase(upgrade)}>
        Purchase
      </Button>
    </Box>
  );
};

export default Upgrade;