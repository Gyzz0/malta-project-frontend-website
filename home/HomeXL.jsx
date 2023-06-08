import { Container, Row } from "react-bootstrap";
import NavbarHomeMD from "../../tablet/home/NavbarHomeMD";
import { useState } from "react";

export default function HomeXL() {
  const [schermata, setSchermata] = useState(0);

  return (
    <Container fluid>
      <Row className="my-1">
        <NavbarHomeMD selected={schermata} change={setSchermata}/>
      </Row>
      <Row>
        <h1>{schermata}</h1>
      </Row>
    </Container>
  );
}
