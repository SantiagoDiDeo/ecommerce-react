import logo from '../logo1.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './Cart/CartWidget';
import  './NavBar.css';
import { Link } from 'react-router-dom';
import { Dropdown} from 'react-bootstrap';

const NavBar = () => {

    return (
        <>
            <Navbar bg="dark" variant="dark">
            <img src={logo} className='logo' alt="logo" />
            <Container>
            <Nav className="me-auto">
                <Dropdown> 
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Shop
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item as={Link} to='/category/proteccion'>Protección</Dropdown.Item>
                        <Dropdown.Item as={Link} to='/category/ropa'>Ropa</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Navbar.Brand className='nav-title' as={Link} to='/'>Total Vision Sports - Shop</Navbar.Brand>
            </Nav>
            <CartWidget/>
            </Container>
            </Navbar>
        </>
        );
};

export default NavBar;