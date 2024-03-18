import { useEffect } from "react";
import { Box, Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";

function Index({ count, setCount, passiveIncome, clickValue }) {
  const handleClick = () => {
    setCount((prevCount) => prevCount + clickValue);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + passiveIncome);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [passiveIncome]);

  return (
    <Flex direction="column" align="center" justify="center" minHeight="100vh">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">
          Clicker Game
        </Heading>
        <Box>
          <Text fontSize="xl">Points: {count}</Text>
          <Text fontSize="lg">Passive Income: {passiveIncome} per second</Text>
          <Text fontSize="lg">Click Value: {clickValue}</Text>
        </Box>
        <Button colorScheme="blue" size="lg" onClick={handleClick}>
          Click Me (+{clickValue})
        </Button>
      </VStack>
    </Flex>
  );
}

// Removed exports that are no longer needed

export default Index;
