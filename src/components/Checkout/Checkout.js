
import { useContext, useState } from "react";
import { Alert, Button, Form, Modal} from "react-bootstrap";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";


const Checkout = ({showModal, onClose, onBuy, orderId, total}) => {
        const {cart} = useContext(CartContext);
        const [user, setUser] = useState({});

        const Field = ({field, title}) => {
            const handleChange  = (evt) => {
                setUser({
                    ...user,
                    [evt.target.name]: evt.target.value,
                 })
            };

            return (

            <Form.Group>
                <Form.Label>{title}</Form.Label>
                <Form.Control type="text" name={field} onChange={handleChange} />
            </Form.Group>
        )};
    

    return ( 
        <Modal show={showModal} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Finalizar compra</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Field  field='nombre' title='Nombre' type='text' />
            <Field  field='telefono' title='Telefono' type='number' />
            <Field field='email' title='Email' type='text' />
            <Field field='repetirEmail' title='Repetir Email' type='text' />
        </Modal.Body>
        <Modal.Footer>
            {!orderId && (
                <>
                    <Button variant="secondary" onClick={onClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={onBuy} >
                        Comprar
                    </Button>
                </>
            )}
            {orderId && (
                <>
                    <Alert key='success' variant="success">
                        Numero de orden: {orderId}
                    </Alert>
                    <Link to='/'>
                        <Button variant="primary">
                        Volver a comprar
                        </Button>
                    </Link>
                </>
            )}
        </Modal.Footer>
      </Modal>
     );
}
 
export default Checkout;

