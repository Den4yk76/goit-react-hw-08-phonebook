import style from './style.module.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSubmitUser } from '../../redux/operation';

export function Registration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChangeAllInput = ev => {
    switch (ev.target.name) {
      case 'name':
        setName(ev.target.value);
        break;
      case 'email':
        setEmail(ev.target.value);
        break;
      case 'password':
        setPassword(ev.target.value);
        break;

      default:
        alert('WTF ???');
        break;
    }
  };

  const submitUser = () => dispatch(fetchSubmitUser({ name, email, password }));

  return (
    <form
      className={style.form}
      onSubmit={e => {
        e.preventDefault();
        submitUser({ name, email, password });
        setName('');
        setEmail('');
        setPassword('');
      }}
    >
      <h3 className={style.loginHeading}>Sign Up for Free</h3>
      <input
        id="inputName"
        type="text"
        name="name"
        className={style.input}
        pattern="\w{4,16}"
        title="The password can consist of Latin letters or numbers from 4 to 16 characters"
        placeholder="Name"
        required
        onChange={handleChangeAllInput}
        value={name}
      />

      <input
        type="text"
        name="email"
        className={style.input}
        pattern="^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$"
        title="Input valid email"
        placeholder="E-mail"
        required
        autoComplete='username'
        onChange={handleChangeAllInput}
        value={email}
      />

      <input
        type="password"
        name="password"
        className={style.input}
        pattern="\w{7,16}"
        title="The password can consist of Latin letters or numbers from 4 to 16 characters"
        placeholder="Password"
        required
        autoComplete='current-password'
        onChange={handleChangeAllInput}
        value={password}
      />

      <button className={style.AuthButton} type="submit">
        Register
      </button>
    </form>
  );
}
