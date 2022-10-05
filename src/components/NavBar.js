import logo from '../logo1.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './Cart/CartWidget';
import  './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <>
            <Navbar bg="dark" variant="dark">
            <img src={logo} className='logo' alt="logo" />
            <Container>
                <Navbar.Brand as={Link} to='/'>Total Vision Sports - Shop</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link as={Link} to='/category/proteccion'>Protección</Nav.Link>
                <Nav.Link as={Link} to='/category/ropa'>Ropa</Nav.Link>
                <Nav.Link as={Link} to='/contact'>Contáctanos</Nav.Link>
                </Nav>
            <CartWidget/>
            </Container>
            </Navbar>
        </>
        );
};

export default NavBar;