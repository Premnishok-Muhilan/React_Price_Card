import "./App.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap-icons/font/bootstrap-icons.css";

import FreeCard from "./components/FreeCard";
import PlusCard from "./components/PlusCard";
import ProCard from "./components/ProCard";

function App() {
  return (
    <div className="App">
      <Container className="container" style={{ marginTop: "30px" }}>
        <Row>
          <Col>
            <FreeCard />
          </Col>
          <Col>
            <PlusCard />
          </Col>
          <Col>
            <ProCard />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
