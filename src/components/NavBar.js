import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';

function ColorSchemesExample( {title, title2, title3} ) {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <img className="imgdigital" src='http://digitalstorerosario.dynu.com/resources/images/logo.png' />
          <Nav className="me-auto">
            <Nav.Link className="titles" href="#home">{title}</Nav.Link>
            <Nav.Link className="titles" href="#features">{title2}</Nav.Link>
            <Nav.Link className="titles" href="#pricing">{title3}</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;