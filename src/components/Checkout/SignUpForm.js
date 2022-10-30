import React from 'react';
import { useFormik } from 'formik';
import './SignUpForm.css';

const validate = (values) => {
  const errors = {};
    if (!values.name) {
      errors.name = 'Required';
    } else if (values.name.length > 25) {
      errors.name = 'Must be 25 characters or less';
    };

    if (!values.phone) {
      errors.phone = 'Required';
    } else if (values.phone.length > 20) {
      errors.phone = 'Must be 20 characters or less';
    };

    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    };

    if (!values.validateEmail) {
      errors.validateEmail = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.validateEmail)) {
      errors.validateEmail = 'Invalid email address';
    };

  return errors;
};



const SignupForm = () => {
  
  const formik = useFormik( {
    initialValues: {
      name: '',
      phone: '',
      email: '',
      validatEmail: '',
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  
  return (
    <form className='form' onSubmit={ formik.handleSubmit }>
      <label htmlFor="name">Nombre y Apellido:</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={ formik.handleChange }
        value={ formik.values.name }
      />
      { formik.errors.name ? <div> { formik.errors.name } </div> : null }

      <label htmlFor="phone">Teléfono:</label>
      <input
        id="phone"
        name="phone"
        type="text"
        onChange={ formik.handleChange }
        value={ formik.values.phone }
      />
      { formik.errors.phone ? <div> { formik.errors.phone } </div> : null }

      <label htmlFor="email">Email:</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      { formik.errors.email ? <div> { formik.errors.email } </div> : null }
      
      <label htmlFor="validateEmail">Repita email:</label>
      <input
        id="validateEmail"
        name="validateEmail"
        type="email"
        onChange={ formik.handleChange }
        value={ formik.values.validateEmail }
      />
      { formik.errors.validateEmail ? <div> { formik.errors.validateEmail } </div> : null }  
    </form>
    
  );
};

export default SignupForm;