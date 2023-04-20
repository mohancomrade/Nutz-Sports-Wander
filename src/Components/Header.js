import React from 'react';
import "./Header.css";
import sportswander from "../images/SW 1.png"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div className='container-fluid'>
    <div className='sports-header'>
       <Navbar bg="light" variant="light">
            <img src={sportswander}class="img-fluid" alt=''/>
        <Container>
         <div className='header-texts'>
          <Nav className="me-auto">
            <Nav.Link href="#home"><h6 className='book'>Book Events</h6></Nav.Link>
            <Nav.Link href="#features"> <h6 className='venue'>Book Venues</h6></Nav.Link>
            <Nav.Link href="#pricing"> <h6 className='stadium'>Book Stadium Seats</h6></Nav.Link>
          </Nav>
          </div>
        </Container>
      </Navbar>
    </div>
    </div>
  );
}

export default Header;
