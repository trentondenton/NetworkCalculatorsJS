import React, { Component } from 'react';
import { Navbar, Nav, Button, Image, OverlayTrigger, Popover, Overlay } from 'react-bootstrap';

import LinkedIn from '../assets/icons/LinkedIn.png';
import Instagram from '../assets/icons/Instagram.png';
import Twitter from '../assets/icons/Twitter.png';

export class Footer extends Component {
  render() {
    const popover = (
      <Popover id="popover">
        <Popover.Header as="h4">NTWK Dev</Popover.Header>
        <Popover.Body>Follow us to see when <strong>new</strong> items are released!</Popover.Body>
      </Popover>
    )
    return (
      <Navbar bg="primary" variant="dark" label="Footer" className="footer" fixed="bottom">
        <Nav className="myflex">
          <Navbar.Brand>&copy; TDenton 2022</Navbar.Brand>
        </Nav>
        <Nav className="myflex">
          <OverlayTrigger triggers="hover, focus" placement="top" overlay={popover}>
            <Navbar.Brand>Follow Us!</Navbar.Brand>
          </OverlayTrigger>
          <Nav.Link href="https://www.linkedin.com/in/trentondenton/" target="_blank">
            <Image className="myicon" alt="linkedin" src={LinkedIn} />
          </Nav.Link>
          <Nav.Link href="https://instagram.com/thetrentond" target="_blank">
            <Image className="myicon" alt="instagram" src={Instagram} />
          </Nav.Link>
          <Nav.Link href="https://www.twitter.com/thetrentond/" target="_blank">
            <Image className="myicon" alt="twitter" src={Twitter} />
          </Nav.Link>
        </Nav>
      </Navbar>
    )
  }
}

export default Footer