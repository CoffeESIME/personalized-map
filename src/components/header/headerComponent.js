import React from "react";
import {Nav,Navbar, Container, Row}from 'react-bootstrap'
function Header(){
return (
  <Container fluid>
    <Row className="mb-3" >
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#">Senderos</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/map">Inicio</Nav.Link>
      <Nav.Link href="/map/create">Agregar</Nav.Link>
   </Nav>
    </Container>
  </Navbar>
  </Row>
  </Container>
);
}

export default Header;