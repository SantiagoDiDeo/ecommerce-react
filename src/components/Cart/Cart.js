import './Cart.css';
import CartContext from '../context/CartContext';
import Checkout from '../Checkout/Checkout';
import { useContext, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { FaTrash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { createOrder } from '../utils/orders';

const buyerMock = {
    name: 'Santiago Di',
    phone: '1542697018',
    email: 'dideosantiago@mail.com'
};

const Cart = () => {
    const { cart, total, removeItem, clear } = useContext( CartContext );
    const [ user, setUser ] = useState(buyerMock);
    const [ showModal, setShowModal ] = useState(false);
    const [ orderId, setOrderId ] = useState();

    const handleOpen= () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const handleRemove = (itemId) => {
        removeItem(itemId);
    }; 

    const handleBuy = async () => {
        const newOrder = {
            buyer: buyerMock,
            items: cart,
            total
        };
        const newOrderId = await createOrder(newOrder);
        setOrderId(newOrderId);
        clear();
    };

    const showTable = cart.length > 0;

    return ( 
        <Container className='containerCart'>
            <h1>Carrito de Compras</h1>
            { showTable && (
                <>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                            <th>Título</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>acción</th>
                            </tr>
                        </thead>
                        <tbody>
                        {cart.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.title}</td>
                                    <td>{item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td><FaTrash onClick={() => handleRemove(item.id)} /></td>
                                </tr>
                        ))} 
                        </tbody>
                    </Table>
                    <h4>Total: $ {total}</h4>
                    <Button variant="danger" onClick={clear}>Limpiar carrito</Button>
                    <Button variant="success" onClick={handleOpen}>Finalizar la compra</Button>
                </>
            ) }
            { !showTable && (
                <>
                    <h3>Terminaste la compra! Clickea abajo para continuar</h3>
                    <Link to='/'>
                        <Button variant="primary">Seguir comprando</Button>
                    </Link>
                </>
                ) }
                <Checkout 
                    showModal={ showModal } 
                    onClose={ handleClose } 
                    onBuy={ handleBuy } 
                    orderId={ orderId }
                    onClick={ handleClose } />
        </Container>
    );
};

export default Cart;