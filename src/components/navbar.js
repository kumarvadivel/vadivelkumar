import React from 'react';

import * as Reactbs from 'react-bootstrap';


export default function Navigation(){

return(
    <Reactbs.Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
  <Reactbs.Navbar.Brand href="#home">Kumar vadivel</Reactbs.Navbar.Brand>
  <Reactbs.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Reactbs.Navbar.Collapse id="responsive-navbar-nav">
    <Reactbs.Nav className="mr-auto">
      <Reactbs.Nav.Link href="#home">Home</Reactbs.Nav.Link>
      <Reactbs.Nav.Link href="#about">About Me</Reactbs.Nav.Link>
      <Reactbs.Nav.Link href="#education">Education</Reactbs.Nav.Link>
      <Reactbs.Nav.Link href="#skillset">SkillSet</Reactbs.Nav.Link>
      
    </Reactbs.Nav>
    <Reactbs.Nav>
      <Reactbs.Nav.Link href="#social">Social</Reactbs.Nav.Link>
      <Reactbs.Nav.Link eventKey={2} href="#contact">
        Contact
      </Reactbs.Nav.Link>
    </Reactbs.Nav>
  </Reactbs.Navbar.Collapse>
</Reactbs.Navbar>
)
}

