import React from 'react'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faList, faPlus } from '@fortawesome/free-solid-svg-icons';
import Search from './Search'
import { Navbar, Nav, Container, Breadcrumb, BreadcrumbItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { icons } from 'react-icons';
const NavbarComponent = ({ contacts, onSearch }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link className='nav-link' href="/"><FontAwesomeIcon icon={faHome} />Home</Nav.Link>
            <Nav.Link href="/ContactList"><FontAwesomeIcon icon={faList} />ContactList</Nav.Link>
            <Nav.Link href="/AddContact"><FontAwesomeIcon icon={faPlus} />AddContact</Nav.Link>
          </Nav>
          <Search contacts={contacts} onSearch={onSearch} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  )
}
export default NavbarComponent;