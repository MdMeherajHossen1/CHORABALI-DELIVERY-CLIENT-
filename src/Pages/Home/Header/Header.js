import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css'
import useAuth from '../../../Hooks/useAuth.js'
import { Container, Navbar, Nav } from 'react-bootstrap';
const Header = () => {
    const { user, handleSignOut } = useAuth()
    const activeStyle = { color: "#CD2E35" };
    return (
        <div>
            <Navbar className="header-bg" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        CHORABALI
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="ms-auto pe-3  ">
                            <Nav.Link activeStyle={activeStyle} as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link activeStyle={activeStyle} as={Link} to="/donation">My orders</Nav.Link>
                            <Nav.Link activeStyle={activeStyle} as={Link} to="/events">Manage all orders</Nav.Link>
                            <Nav.Link activeStyle={activeStyle} as={Link} to="/blog">Add a new service</Nav.Link>

                        </Nav>
                        {user.displayName ? <button onClick={handleSignOut} className="btn btn-outline-light">logout</button> : <Link to="/login"> <button className="btn btn-outline-light me-2">Login</button></Link>}
                        <Link to="/Register"> <button className="btn btn-outline-light me-2">Register</button></Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;