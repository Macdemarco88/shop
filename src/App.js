import { useState, useEffect } from "react";
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
  let navigate = useNavigate();

  return (
    <div className="App">
      {/* 네브바 */}
      <Navbar bg="light" data-bs-theme="light">
        <Container className="nav-container">
          <Navbar.Brand>
            <Link to="/" className="nav-title">
              AikoRecords
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              Detail
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        {/* 메인 배경화면 */}
        <Route
          exact
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
        <Route path="/detail/:id" element={<Detail records={records} />} />
      </Routes>
    </div>
  );
}
function About() {
  return (
    <div>
      <h4>어바웃타임요</h4>
      <Outlet></Outlet>
    </div>
  );
}
function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
