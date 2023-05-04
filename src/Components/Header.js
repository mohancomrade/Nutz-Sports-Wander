import React from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl } from "react-bootstrap";
import sports from "../images/Logo.svg";

import "./Header.css";

function Header() {
  return (
    <div className="sports-header">
      <div className="container-fluid">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">
            <img src={sports} className="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto text-center ">
              <Nav.Link href="#home" className="header-font">
                Book Events
              </Nav.Link>
              <Nav.Link href="#about" className="header-font1">
                Book Venue
              </Nav.Link>
              <Nav.Link href="#contact" className="header-font2">
                Book Stadium Events
              </Nav.Link>

              <button type="button" class="btn btn-primary ">
                Login
              </button>
              <button type="button" class="btn btn-success">
                Sign Up
              </button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default Header;
