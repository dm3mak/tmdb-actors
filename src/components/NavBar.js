import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';

 class NavBar extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Actors</Nav.Link>
                        <Nav.Link href="/#/movie">Movie</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
export default NavBar;
