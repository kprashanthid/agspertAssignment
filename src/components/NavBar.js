import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useAuth } from '../AuthContext';
import DarkModeToggle from './DarkModeToggle';

const NavBar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand className='ch'>Sale Order Management</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {isAuthenticated && (
              <>
                <LinkContainer  to="/products">
                  <Nav.Link className='ch'>Products</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/orders">
                  <Nav.Link className='ch'>Orders</Nav.Link>
                </LinkContainer>
              </>
            )}
          </Nav>
          <DarkModeToggle />
          {isAuthenticated && (
            <Button variant="outline-danger" onClick={logout}>Logout</Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
