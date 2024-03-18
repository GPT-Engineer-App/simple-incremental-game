import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Navigation from "./components/Navigation.jsx";
import UpgradesPage from "./pages/Upgrades.jsx";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/upgrades" element={<UpgradesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
