import logo from '../logo1.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './Cart/CartWidget';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup, Dropdown} from 'react-bootstrap';
import  './NavBar.css';

const NavBar = () => {

    return (
        <>
            <Navbar bg="dark" variant="dark">
            <img src={logo} className='logo' alt="logo" />
            <Container>
            <Nav className="me-auto">
                <Dropdown as={ButtonGroup}> 
                <Button variant="primary">Shop</Button>
                    <Dropdown.Toggle split variant="primary" id="dropdown-split-basic" />
                
                    <Dropdown.Menu>
                        <Dropdown.Item as={Link} to='/category/proteccion'>PROTECCIÓN</Dropdown.Item>
                        <Dropdown.Item as={Link} to='/category/ropa'>INDUMENTARIA</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Navbar.Brand className='nav-title' as={Link} to='/'>TOTAL VISION SPORTS</Navbar.Brand>
            </Nav>
            <CartWidget/>
            </Container>
            </Navbar>
        </>
        );
};

export default NavBar;