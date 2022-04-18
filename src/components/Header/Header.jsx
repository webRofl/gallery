import React from 'react';
import { Container, Navbar, Nav, Offcanvas } from 'react-bootstrap';
import navbarBrandImg from '../../assets/images/navbar-brand-img.svg';

const Header = () => {
  return (
    <Navbar bg="light" expand={false} fixed="top">
      <Container fluid>
        <Navbar.Brand>
          Галерея <img src={navbarBrandImg} alt="navbar brand" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas id="offcanvasNavbar" placement="start">
          <Offcanvas.Header closeButton className=""></Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1">Галерея</Nav.Link>
              <Nav.Link href="#action2">Обо мне</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;
