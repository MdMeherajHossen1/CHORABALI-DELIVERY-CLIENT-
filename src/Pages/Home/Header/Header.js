import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css'
import useAuth from '../../../Hooks/useAuth.js'
import { Container, Navbar, Nav } from 'react-bootstrap';
const Header = () => {
    const { user, handleSignOut } = useAuth()
    console.log(user)
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
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>

                            {user.displayName && <Nav.Link as={Link} to="/orders">My orders</Nav.Link>}
                            {user.displayName && <Nav.Link as={Link} to="/allorders">Manage all orders</Nav.Link>}
                            {user.displayName && <Nav.Link as={Link} to="/addservices">Add a new service</Nav.Link>}



                        </Nav>
                        {user.displayName ? <button onClick={handleSignOut} className="btn btn-outline-light">logout</button> : <Link to="/login"> <button className="btn btn-outline-light me-2">Login</button></Link>}
                        {user.displayName ? (<div className="text-white ms-2"> {user.displayName} </div>) : (<Link to="/Register"> <button className="btn btn-outline-light me-2">Admin</button></Link>)}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;