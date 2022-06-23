import React from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
export default function Navigation() {
  return (
    <Navbar bg="success" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Country App</Navbar.Brand>
    <Nav className="me-auto">
      <NavLink  to="/" className="mx-2 text-decoration-none text-white">Home</NavLink>
      <NavLink  to="/About" className="mx-2 text-decoration-none text-white">About</NavLink>
    </Nav>
    </Container>
  </Navbar>

  )
}
