
import { useContext, useState } from "react";
import { Alert, Button, Card, Modal} from "react-bootstrap";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";
import React from 'react';
 import { useFormik } from 'formik';


const Checkout = ({showModal, onClose, onBuy, orderId, total}) => {
        const {cart} = useContext(CartContext);
        const [user, setUser] = useState({});

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



// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.length > 20) {
    errors.lastName = 'Must be 20 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const SignupForm = () => {
  // Pass the useFormik() hook initial form values, a validate function that will be called when
  // form values change or fields are blurred, and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
      {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}

      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />
      {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email ? <div>{formik.errors.email}</div> : null}

      <button type="submit">Submit</button>
    </form>
  );
};
    


    return ( 
        <Modal show={showModal} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Finalizar compra</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Card>
            {cart.map((product) => {
            return (
              <Card key={product.id} className="checkout__card">
                <Card.Title as="p">{product.title}</Card.Title>
                <Card.Text className="checkout__card--text">
                  ${product.price.toFixed(2)}
                </Card.Text>
                <Card.Text>x{product.quantity}</Card.Text>
              </Card>
            );
          })}
            </Card>
                {/* <Field  field='nombre' title='Nombre' type='text' />
                <Field  field='telefono' title='Telefono' type='number' />
                <Field field='email' title='Email' type='text' />
                <Field field='repetirEmail' title='Repetir Email' type='text' /> */}
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

