import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import Container from "react-bootstrap/Container";

interface NavItems {
    name: string,
    url: string,
}

const Header = () => {

    // All the navItems and the url they are linked to.
    const navItems: NavItems[] = [
        {name: "Map", url: "/map"}
    ]

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>August travel</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {navItems.map((navItem, index) => {
                        return (
                            <LinkContainer key={index} to={navItem.url}>
                                <Nav.Link>{navItem.name}</Nav.Link>
                            </LinkContainer>
                        )
                    })}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;