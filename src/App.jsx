import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Navigation from "./components/Navigation.jsx";
import UpgradesPage from "./pages/Upgrades.jsx";

import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [passiveIncome, setPassiveIncome] = useState(0);
  const [clickValue, setClickValue] = useState(1);
  const [purchasedUpgrades, setPurchasedUpgrades] = useState([]);

  useEffect(() => {
    const savedState = loadGameState();
    if (savedState) {
      setCount(savedState.count);
      setPassiveIncome(savedState.passiveIncome);
      setClickValue(savedState.clickValue);
      setPurchasedUpgrades(savedState.purchasedUpgrades);
    }
  }, []);

  // Autosave game state every second to handle cases where there are no changes in the dependencies
  useEffect(() => {
    const autosaveInterval = setInterval(() => {
      saveGameState(count, passiveIncome, clickValue, purchasedUpgrades);
    }, 1000);

    return () => clearInterval(autosaveInterval);
  }, [count, passiveIncome, clickValue, purchasedUpgrades]);

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Index count={count} setCount={setCount} passiveIncome={passiveIncome} clickValue={clickValue} />} />
        <Route path="/upgrades" element={<UpgradesPage count={count} setCount={setCount} passiveIncome={passiveIncome} setPassiveIncome={setPassiveIncome} clickValue={clickValue} setClickValue={setClickValue} purchasedUpgrades={purchasedUpgrades} setPurchasedUpgrades={setPurchasedUpgrades} />} />
      </Routes>
    </Router>
  );
}

const saveGameState = (count, passiveIncome, clickValue, purchasedUpgrades) => {
  localStorage.setItem("gameState", JSON.stringify({ count, passiveIncome, clickValue, purchasedUpgrades }));
};

const loadGameState = () => {
  const savedState = localStorage.getItem("gameState");
  return savedState ? JSON.parse(savedState) : null;
};

export default App;
