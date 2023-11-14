
import React from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
 import './Style1.css'

function Nav1() {
  return (
    <div>
     <Navbar expand="lg" className="bg-body-tertiary">
      <Container className='container'>
        <Navbar.Brand href="#home" id="repeat">Repeat</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" id="nav-items1">Home</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" id="nav-items1">Menu One</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" id="nav-items1">
                Menu Two
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" id="nav-items1">Dropdown</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" id="nav-items1">
                Sub one
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link" id="nav-items1">Pricing</Nav.Link>
            <Nav.Link href="#link" id="nav-items1">About</Nav.Link>
            <Nav.Link href="#link" id="nav-items1">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 

    </div>
  )
}

export default Nav1