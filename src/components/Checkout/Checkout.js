import { useContext, useState } from "react";
import { Alert, Button, Card, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";
import React from "react";
import SignupForm from "./SignUpForm";

const Checkout = ({ showModal, onClose, onBuy, orderId, total }) => {
    const { cart } = useContext(CartContext);
    const [user, setUser] = useState({});

        

    return (
        <Modal show={showModal} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Finalizar compra</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Card>
                    {cart.map((product) => {
                        return (
                            <Card key={product.id} className='checkout__card'>
                                <Card.Title as='p'>{product.title}</Card.Title>
                                <Card.Text className='checkout__card--text'>
                                    ${product.price.toFixed(2)}
                                </Card.Text>
                                <Card.Text>x{product.quantity}</Card.Text>
                            </Card>
                        );
                    })}
                </Card>

        <SignupForm/>

        </Modal.Body>
            <Modal.Footer>
                {!orderId && (
                    <>
                        <Button variant='secondary' onClick={onClose}>
                            Cancelar
                        </Button>
                        <Button variant='primary' onClick={onBuy}>
                            Comprar
                        </Button>
                    </>
                )}
                {orderId && (
                    <>
                        <Alert key='success' variant='success'>
                            Numero de orden: {orderId}
                        </Alert>
                        <Link to='/'>
                            <Button variant='primary'>Volver a comprar</Button>
                        </Link>
                        {console.log(orderId)}
                    </>
                )}
            </Modal.Footer>
        </Modal>
    );
};

export default Checkout;

/* const Field = ({field, title}) => {
            const handleChange  = (evt) => {
                setUser({
                    ...user,
                    [evt.target.name]: evt.target.value,
                 })
                 console.log(user)
            };

            return (

            <Form.Group>
                <Form.Label>{title}</Form.Label>
                <Form.Control type="text" name={field} onChange={handleChange} />
            </Form.Group>
        )}; */
        {/* <Field  field='nombre' title='Nombre' type='text' />
<Field  field='telefono' title='Telefono' type='number' />
<Field field='email' title='Email' type='text' />
<Field field='repetirEmail' title='Repetir Email' type='text' /> */}