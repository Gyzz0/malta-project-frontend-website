import { Col, Container, Row} from "react-bootstrap";
import UserForms from "../../../assets/components/UserForms";

export default function WelcomeXL() {

  return (
    <Container fluid>
      <Row>
        <Col xl={{span:6, offset:1}}><img width={920} height={460}/></Col>
        <Col xl={{offset:1}}><UserForms /></Col>
      </Row>
      <Row className="mt-2">
        <Col xl={{offset:1}}>Messaggio di benvenuto e descrizione della landa</Col>
      </Row>
    </Container>
  );
}
