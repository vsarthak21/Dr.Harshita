import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Navibar = (props) => {

    return (
        <Navbar sticky="top" bg="info" expand="lg" >
            <Navbar.Brand href="#home">Dr.ABCDEF</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#services">Services and Treatments</Nav.Link>
                    <Nav.Link href="#testimonials">Testimonials</Nav.Link>
                    <Nav.Link href="#new">Whats New?</Nav.Link>
                    <Nav.Link href="#contact">Contact Us</Nav.Link>

                    {/* <NavDropdown title="Quick Links" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Services and Treatments</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        {/* <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                    {/* </NavDropdown> */} 
                </Nav>
                {/* <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form> */}
            </Navbar.Collapse>
        </Navbar >
    )
}

export default Navibar;
