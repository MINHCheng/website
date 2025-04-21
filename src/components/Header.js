import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from 'react-bootstrap'

const Header = () => {
    return (

        <Navbar expand="md" className="header-nav bg-body-tertiary" bg="dark" data-bs-theme="dark">
            <Container>
                <Nav.Link as={Link} to="/" style={{ color: 'whitesmoke' }}>
                    <b>

                        <Navbar.Brand to="/website" className="header" style={{ color: 'whitesmoke' }}>M/<span style={{ color: '#17BEBB' }}>CHENG</span></Navbar.Brand>
                    </b>
                </Nav.Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/project" className="header-link" style={{ color: 'whitesmoke' }}>
                            Personal Project
                        </Nav.Link>
                        <Nav.Link as={Link} to="https://drive.google.com/file/d/1UE8bo_Ym97umaFA2F09MpXxtmET_Zr35/view?usp=sharing" className="header-link" style={{ color: 'whitesmoke' }}>
                            Resume
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


    )
}
export default Header