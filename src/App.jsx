import { PriceCard } from './components/PriceCard/PriceCard';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

function App() {
  const priceCardData = [
    {
      planType: "FREE",
      price: 0,
      basicFeatures: [
        "Unlimited Users",
        "50GB Storage",
        "Unlimited Public Projects",
        "Community Access",
      ],
      plusFeatures: [
        "Unlimited Private Projects",
        "Dedicated Phone Support",
        "Free Subdomain",
      ],
      proFeatures: [
        "Monthly Status Reports",
      ],
    },
    {
      planType: "PLUS",
      price: 9,
      basicFeatures: [
        "Unlimited Users",
        "50GB Storage",
        "Unlimited Public Projects",
        "Community Access",
      ],
      plusFeatures: [
        "Unlimited Private Projects",
        "Dedicated Phone Support",
        "Free Subdomain",
      ],
      proFeatures: [
        "Monthly Status Reports",
      ],
    },
    {
      planType: "PRO",
      price: 49,
      basicFeatures: [
        "Unlimited Users",
        "50GB Storage",
        "Unlimited Public Projects",
        "Community Access",
      ],
      plusFeatures: [
        "Unlimited Private Projects",
        "Dedicated Phone Support",
        "Free Subdomain",
      ],
      proFeatures: [
        "Monthly Status Reports",
      ],
    },
  ];
  return (
    <>
      <div>
        <h1 className="text-white text-center py-4">Price Card Task</h1>
        <div>
          <PriceCard priceCardData={priceCardData} />
        </div>
      </div>
    </>
  );
}

export default App
