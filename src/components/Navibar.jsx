import React from "react";
import { Nav, Navbar, NavbarBrand } from "react-bootstrap";
import Button from "./Button";
import { Link } from "react-router-dom"


export default function Navibar() {
    return (
        <>
            <Navbar className="fixed-bottom" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <NavbarBrand>BRAP!</NavbarBrand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link><Link className="nav-item nav-link" to="/home">Home</Link></Nav.Link>
                        <Nav.Link><Link className="nav-item nav-link" to="/users">Users</Link></Nav.Link>
                        <Nav.Link><Link className="nav-item nav-link" to="/about">About</Link></Nav.Link>
                        <Nav.Link><Link className="nav-item nav-link" to="/map">Map</Link></Nav.Link>
                        <Nav className="ml-auto">
                            <Button variant="primary" className="mr-2"> Log in</Button>
                            <Button variant="primary">Sign in</Button>
                        </Nav>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
