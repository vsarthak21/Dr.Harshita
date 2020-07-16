import React,  { useState} from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, animateScroll as scroll } from "react-scroll";
const Navibar = (props) => {
    const [expanded, setExpanded] = useState(false);
    const offset = window.matchMedia('(max-width: 600px)').matches ? -300 : -75 
    return (
        <Navbar expanded={expanded} sticky="top" bg="info" expand="lg" variant="dark" >
            <Navbar.Brand as={"div"} style={{cursor:"pointer"}}><Link
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={offset}
                            duration={500}
                        >
                            Dr. Harshita
                        </Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={"div"}style={{cursor:"pointer"}} >
                        <Link
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={offset}
                            duration={500}
                            onClick={() => setExpanded(false)}
                        >
                            Home
                        </Link></Nav.Link>
                    <Nav.Link as={"div"}style={{cursor:"pointer"}}>
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={offset}
                            duration={500}
                            onClick={() => setExpanded(false)}
                        >
                            About
                        </Link>
                    </Nav.Link>
                    <Nav.Link as={"div"}style={{cursor:"pointer"}} >
                    <Link
                            activeClass="active"
                            to="services"
                            spy={true}
                            smooth={true}
                            offset={offset}
                            duration={500}
                            onClick={() => setExpanded(false)}
                        >
                            Services & Treatments
                        </Link></Nav.Link>
                    <Nav.Link as={"div"}style={{cursor:"pointer"}} >
                    <Link
                            activeClass="active"
                            to="testimonials"
                            spy={true}
                            smooth={true}
                            offset={offset}
                            duration={500}
                            onClick={() => setExpanded(false)}
                        >
                            Testimonials
                        </Link></Nav.Link>
                    <Nav.Link as={"div"}style={{cursor:"pointer"}} >
                    <Link
                            activeClass="active"
                            to="news"
                            spy={true}
                            smooth={true}
                            offset={offset}
                            duration={500}
                            onClick={() => setExpanded(false)}
                        >
                            Whats New?
                        </Link></Nav.Link>
                    <Nav.Link as={"div"}style={{cursor:"pointer"}} >
                    <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={offset}
                            duration={500}
                            onClick={() => setExpanded(false)}
                        >
                            Contact Us
                        </Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}

export default Navibar;
