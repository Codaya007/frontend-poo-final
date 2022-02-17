import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

const HeaderNav = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Log Out</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Productos</Nav.Link>
                        <Nav.Link href="#features">Usuarios</Nav.Link>
                        <Nav.Link href="#pricing">Ventas</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}

export default HeaderNav;