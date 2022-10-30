import { useContext } from "react";
import { Alert, Button, Card, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";
import React from "react";
import SignupForm from "./SignUpForm";
import './Checkout.css';

const Checkout = ( { showModal, onClose, orderId, onBuy } ) => {
    const { cart, total } = useContext(CartContext);

    return (
        <Modal show={ showModal } onHide={ onClose }>
            <Modal.Header closeButton>
                <Modal.Title>Finalizar compra</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Card className='card-product'>
                    { cart.map( (product) => {
                        return (<>
                                    <Card key={product.id} className='card-product' >
                                    <Card.Img variant="top" src={ product.pictureUrl } />
                                        <Card.Title as='p'>{ product.title }</Card.Title>
                                        <Card.Text className='checkout__card--text'>
                                            ${product.price.toFixed(2)}
                                        </Card.Text>
                                        <Card.Text> x { product.quantity }</Card.Text>
                                    </Card>
                                    
                                </>
                            );
                    } ) }
                </Card>
                <h3 className="card-product-price"> Total: { total } </h3>
        <SignupForm />

        </Modal.Body>
        <Modal.Footer>
            { !orderId && (
                    <>
                        <Button variant='secondary' onClick={onClose} >
                            Cancelar
                        </Button>
                        <Button variant='primary' onClick={onBuy} >
                            Comprar
                        </Button>
                    </>
                ) }
                { orderId && (
                    <>
                        <Alert key='success' variant='success'>
                           Felicitaciones, su compra se realizó con éxito!! Su número de orden es:   {orderId}
                        </Alert>
                        <Link to='/'>
                            <Button variant='primary'>Volver a comprar</Button>
                        </Link>
                    </>
                ) }
        </Modal.Footer>
        </Modal>
    );
};

export default Checkout;
