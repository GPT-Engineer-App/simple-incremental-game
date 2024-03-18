import { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [passiveIncome, setPassiveIncome] = useState(0);
  const [clickValue, setClickValue] = useState(1);
  const [purchasedUpgrades, setPurchasedUpgrades] = useState([]);

  useEffect(() => {
    loadGame();
    const autosaveInterval = setInterval(saveGame, 10000);
    return () => clearInterval(autosaveInterval);
  }, []);

  const saveGame = () => {
    localStorage.setItem("gameState", JSON.stringify({ count, passiveIncome, clickValue, purchasedUpgrades }));
  };

  const loadGame = () => {
    const savedState = localStorage.getItem("gameState");
    if (savedState) {
      const state = JSON.parse(savedState);
      setCount(state.count);
      setPassiveIncome(state.passiveIncome);
      setClickValue(state.clickValue);
      setPurchasedUpgrades(state.purchasedUpgrades);
    }
  };

  return <div></div>;
};

export default App;
