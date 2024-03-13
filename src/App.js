import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, Container, Nav } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand className="nav-title" href="#home">
            AikoRecords
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#features">VINYL</Nav.Link>
            <Nav.Link href="#pricing">CD</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>
    </div>
  );
}

export default App;
