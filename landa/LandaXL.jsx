import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import OffXL from "./OFFXL";


export default function LandaXL() {
  const [schermata, setSchermata] = useState("OFF");

  return (
    <Container fluid>
      <Row>
        {
          schermata == "ON"
            ? null //ON
            : <OffXL />
        }
      </Row>
    </Container>
  );
}
