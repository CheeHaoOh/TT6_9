import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import CurrencyDisplayItem from "./CurrencyDisplayItem";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const LiveDisplay = () => {
  const [exchangeRate, setExchangeRate] = useState([]);

  const fetchExchangeRate = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://react-http-89d99-default-rtdb.asia-southeast1.firebasedatabase.app/ExchangeRate.json"
      );

      const data = response.data;

      console.log(data);
      const loadedRates = [];

      for (const key in data) {
        loadedRates.push({
          id: key,
          base_currency: data[key].base_currency,
          exchange_currency: data[key].exchange_currency,
          rate: data[key].rate,
        });
      }

      setExchangeRate(loadedRates);
    } catch (error) {}
  }, []);

  useEffect(() => {
    fetchExchangeRate();
  }, [fetchExchangeRate]);

  return (
    <Container>
      <Row>
        <Col xs="6">
          <Button onClick={fetchExchangeRate}> Refresh</Button>
          <Card bg="dark">
            {exchangeRate.map((item) => (
              <CurrencyDisplayItem
                key={item.id}
                countryFrom={item.base_currency}
                countryTo={item.exchange_currency}
                rate={item.rate}
              />
            ))}
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LiveDisplay;
