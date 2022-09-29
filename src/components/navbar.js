import React from 'react';
import { useLocation } from "react-router-dom";
import { Navbar as NavBar, Nav } from 'react-bootstrap';

export function Navbar() {
  const location = useLocation();
  return (
    <NavBar expand="lg" bg="primary" variant="dark" label="Navigation">
      <NavBar.Brand href="/">NTWK Dev</NavBar.Brand>
      <NavBar.Toggle aria-controls="basic-navbar-nav" />
      <NavBar.Collapse id="basic-navbar-nav">
        <Nav activeKey={location.pathname} className="mr-auto">
          <Nav.Item>
            <Nav.Link href="/" eventKey="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/myip" eventKey="/myip">Your IP</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/ipv4" eventKey="/ipv4">IPv4 Subnet</Nav.Link>
          </Nav.Item>
        </Nav>
      </NavBar.Collapse>
    </NavBar>
  )
}

export default Navbar;