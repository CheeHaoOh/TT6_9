import CurrencyDisplayItem from "./CurrencyDisplayItem";
import mockData from "./exchangeRate.json";
import Card from "react-bootstrap/Card";

const LiveDisplay = () => {
  return (
    <Card>
        {mockData.map((item) => (
          <CurrencyDisplayItem
            key={item.id}
            countryFrom={item.base_currency}
            countryTo={item.exchange_currency}
            rate={item.rate}
          />
        ))}
    </Card>
  );
};

export default LiveDisplay;
