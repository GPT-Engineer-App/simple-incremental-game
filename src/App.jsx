import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Navigation from "./components/Navigation.jsx";
import UpgradesPage from "./pages/Upgrades.jsx";

import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [passiveIncome, setPassiveIncome] = useState(0);
  const [clickValue, setClickValue] = useState(1);
  const [purchasedUpgrades, setPurchasedUpgrades] = useState([]);

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

export default App;
