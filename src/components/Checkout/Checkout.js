
import { useState } from "react";
import { Alert, Button, Form, Modal} from "react-bootstrap";
import { Link } from "react-router-dom";


const Checkout = ({showModal, onClose, onBuy, orderId, total}) => {
        const [user, setUser] = useState({
            nombre: '',
            email: '',
            repetirEmail: ''
        });

        const Field = ({field, title, onChange}) => {
            const handleChange  = (evt) => {
                onChange(field, evt.target.value)
            }

            return (

            <Form.Group>
                <Form.Label>{title}</Form.Label>
                <Form.Control type="text" onChange={handleChange} />
            </Form.Group>
        )}
    
        const userDraft = {...user}        
        
        const onChange = (field, value) => {
            setUser({
                ...userDraft,
                [field]:value
            })
        }

        const isDisabled = user.nombre === '' || user.email === '' || user.repetirEmail === user.email || user.repetirEmail === '';

    return ( 
        <Modal show={showModal} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Finalizar compra</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Field  field='nombre' title='Nombre' type='text' onChange={onChange} />
            <Field field='email' title='Email' onChange={onChange} />
            <Field field='repetirEmail' title='Repetir Email' onChange={onChange} />
        </Modal.Body>
        <Modal.Footer>
            {!orderId && (
                <>
                    <Button variant="secondary" onClick={onClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={onBuy} disabled={isDisabled}>
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