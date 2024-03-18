import Upgrades from "../components/Upgrades";

const upgrades = [];

const handleUpgradePurchase = (upgradeId) => {};

function IndexPage() {
  return <Upgrades upgrades={upgrades} onUpgradePurchase={handleUpgradePurchase} />;
}

export default IndexPage;
