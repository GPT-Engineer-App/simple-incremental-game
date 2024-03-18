import { Box, Link, Flex } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Flex as="nav" bg="brand.900" color="white" justifyContent="space-around" p={3}>
      <Box>
        <NavLink to="/" style={({ isActive }) => ({ color: isActive ? "gray.300" : "white", textDecoration: "none" })}>
          Home
        </NavLink>
      </Box>
      <Box>
        <NavLink to="/upgrades" style={({ isActive }) => ({ color: isActive ? "gray.300" : "white", textDecoration: "none" })}>
          Upgrades
        </NavLink>
      </Box>
    </Flex>
  );
};

export default Navigation;
