import { useState, useEffect } from "react";
import { Box, Button, Heading, Text, VStack, useToast, FormControl, FormLabel, Input } from "@chakra-ui/react";

const API_URL = "https://backengine-cd1y.fly.dev";

const Index = () => {
  const [count, setCount] = useState(0);
  const [accessToken, setAccessToken] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toast = useToast();

  useEffect(() => {
    const storedToken = localStorage.getItem("accessToken");
    if (storedToken) {
      setAccessToken(storedToken);
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = async () => {
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setAccessToken(data.accessToken);
        localStorage.setItem("accessToken", data.accessToken);
        setIsLoggedIn(true);
        toast({
          title: "Logged in successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } else {
        const errorData = await response.json();
        toast({
          title: "Login failed",
          description: errorData.error,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSignup = async () => {
    try {
      const response = await fetch(`${API_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 204) {
        toast({
          title: "Signup successful",
          description: "You can now log in",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } else {
        const errorData = await response.json();
        toast({
          title: "Signup failed",
          description: errorData.error,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleClick = async () => {
    try {
      const response = await fetch(`${API_URL}/click`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.ok) {
        setCount((prevCount) => prevCount + 1);
      } else {
        toast({
          title: "Click failed",
          description: "Please log in to click",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4}>
        Incremental Game
      </Heading>
      {isLoggedIn ? (
        <VStack spacing={4} align="stretch">
          <Text fontSize="2xl">Count: {count}</Text>
          <Button colorScheme="blue" onClick={handleClick}>
            Click Me!
          </Button>
        </VStack>
      ) : (
        <VStack spacing={4} align="stretch">
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
          <Button colorScheme="blue" onClick={handleLogin}>
            Login
          </Button>
          <Button colorScheme="green" onClick={handleSignup}>
            Signup
          </Button>
        </VStack>
      )}
    </Box>
  );
};

export default Index;
