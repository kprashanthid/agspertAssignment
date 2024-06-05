import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useAuth } from '../AuthContext';

const NavBar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <LinkContainer to="/products">
          <Navbar.Brand>Product Management</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/products">
              <Nav.Link>Products</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/orders">
              <Nav.Link>Orders</Nav.Link>
            </LinkContainer>
          </Nav>
          {isAuthenticated && (
            <Nav className="ml-auto">
              <Nav.Link onClick={logout}>Logout</Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
