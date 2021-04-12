import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import logo from './heater_logo.png'
// import hamburger from './hamburger_icon.png'

// const authenticatedOptions = (
//   <Fragment>
//     <Nav.Link href="#change-password">Change Password</Nav.Link>
//     <Nav.Link href="#sign-out">Sign Out</Nav.Link>
//   </Fragment>
// )

const unauthenticatedOptions = (
  <Fragment>
    <NavDropdown title="Menu" class="collapsible-nav-dropdown">
      <NavDropdown.Item href="#heat-initiative">H-E-A-T</NavDropdown.Item>
      <NavDropdown.Item href="#events">Events</NavDropdown.Item>

    </NavDropdown>
  </Fragment>
)

// <NavDropdown.Item href="#merch">Merch</NavDropdown.Item>

const alwaysOptions = (
  <Fragment>
    <Nav.Link href="#/">Home</Nav.Link>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar className="navbar" variant="dark" expand="md">
    <Navbar.Brand href="#">
      <img src={logo} alt="Music City Heaters logo - Indian skull from Flag of Nashville, smoking a cigarette with the smoke in the shape of the Cumberland River." className="logo"/>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { user && <span className="navbar-text mr-2">Welcome, {user.email}</span>}
        { unauthenticatedOptions }
        { alwaysOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

// { user ? authenticatedOptions : unauthenticatedOptions }

export default Header
