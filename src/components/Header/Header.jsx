import React from 'react';
import { Container, Navbar, Nav, Offcanvas } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = () => {
  return (
    <Navbar bg="light" expand={false} fixed="top">
      <Container fluid>
        <Navbar.Brand>
          <h1 className="classes.brandHeader">Галерея</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas id="offcanvasNavbar" placement="start">
          <Offcanvas.Header closeButton className=""></Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <NavLink to="/gallery" className={classes.link}>
                Галерея
              </NavLink>
              <NavLink to="/aboutMe" className={classes.link}>
                Обо мне
              </NavLink>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;
