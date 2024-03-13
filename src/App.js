import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import data from "./data.js";
import Detail from "./pages/detail.js";
import Grid from "./components/grid.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
function App() {
  // 레코드 데이터 가져옴
  let [records] = useState(data);

  return (
    <div className="App">
      {/* 네브바 */}
      <Navbar bg="light" data-bs-theme="light">
        <Container className="nav-container">
          <Navbar.Brand className="nav-title" href="#home">
            AikoRecords
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">Home</Link>
            <Link to="/detail">Detail</Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        {/* 메인 배경화면 */}
        <Route
          path="/"
          element={
            <div>
              <div className="main-bg"></div>

              <Container>
                <Row>
                  {/* 상품 카드 생성 */}
                  {records.map((record, i) => {
                    return <Grid record={record} key={record.id}></Grid>;
                  })}
                </Row>
              </Container>
            </div>
          }
        />
        {/* 상세 페이지 */}
        <Route
          path="/detail"
          element={
            <div>
              <Detail />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
