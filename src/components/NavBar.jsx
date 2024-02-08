import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar bg='primary' data-bs-theme='dark'>
      <Container>
        <Navbar.Brand href='/'>GitHub Profiles</Navbar.Brand>
        <Nav className='me-auto'></Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
