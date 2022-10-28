import React, { useState } from 'react';

const Field = ({ field, title, onChange }) => {
  const handleChange = (evt) => {
    onChange(field, evt.target.value);
  };

  return (
    <div style={{ display: 'flex', marginBottom: 8 }}>
      <label style={{ marginRight: 4 }}>{title}</label>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({
    name: '',
    surname: '',
    age: '',
  });

  // key = name & value = coder
  // key = surname & value = house
  // key = age & value = 18
  const onChange = (field, value) => {
    count = 1; // setCount(1);

    const otroUser = user;
    user.name = 'coder'; // MUTANDO

    const userDraft = { ...user }; // NO ESTOY MUTANDO
    userDraft.name = 'coder'; // NO ESTOY MUTAND0
    setUser(userDraft); // NO ESTOY MUTANDO
    //setUser({
    //...user,
    // [field]: value,
    //});
  };

  function onSubmit() {
    console.log(
      `Your name is ${user.name} ${user.surname} and you have ${user.age} years`
    );
  }

  const isDisabled = user.name === '' || user.surname === '' || user.age === '';
  console.log({ isDisabled });
  console.log({ user });

  return (
    <div>
      <Field field="name" title="Nombre" onChange={onChange} />
      <Field field="surname" title="Apellido" onChange={onChange} />
      <Field field="age" title="Edad" onChange={onChange} />
      <button disabled={isDisabled} onClick={onSubmit}>
        Crear orden
      </button>
    </div>
  );
}

