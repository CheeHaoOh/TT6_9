import 'bootstrap/dist/css/bootstrap.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const CurrencyDisplayItem = (props) => {
  return (
    <Card>
      <Container>
        <Row>
          <Col>{props.countryFrom}</Col>
          <Col bg="dark">{props.countryTo}</Col>
        </Row>
        <Row>
          <Col>{`1 ${props.countryFrom}`}</Col>
          <Col bg="dark">{` ${props.rate}    ${props.countryTo}`}</Col>
        </Row>
      </Container>
      </Card>
  );
};

export default CurrencyDisplayItem;
