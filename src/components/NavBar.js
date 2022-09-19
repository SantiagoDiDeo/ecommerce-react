import logo from '../logo1.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import './CartWidget.css';
import  './NavBar.css';

const NavBar = () => {

    return (
        <>
            <Navbar bg="dark" variant="dark">
            <img src={logo} className='logo' alt="logo" />
            <Container>
                <Navbar.Brand href="#home">Total Vision Sports - Shop</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="#productos">Productos</Nav.Link>
                <Nav.Link href="#carrito">Carrito</Nav.Link>
                <Nav.Link href="#contactanos">Contáctanos</Nav.Link>
                </Nav>
            <CartWidget/>
            </Container>
            </Navbar>
        </>
        );
}

export default NavBar;