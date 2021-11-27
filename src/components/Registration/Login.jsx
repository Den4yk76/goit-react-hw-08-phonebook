import style from './style.module.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchLogin } from '../../redux/operation';

export function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const loginUser = data => dispatch(fetchLogin(data));

  const handleChangeAllInput = ev => {
    if (ev.target.name === 'login') {
      setLogin(ev.target.value);
    } else if (ev.target.name === 'password') {
      setPassword(ev.target.value);
    }
  };

  return (
    <form
      className={style.form}
      onSubmit={e => {
        e.preventDefault();
        loginUser({ email: login, password });
        setLogin('');
        setPassword('');
      }}
    >
      <h3 className={style.loginHeading}>Login on MyContacts App</h3>
      
        <input
          id="inputName"
          type="text"
          name="login"
          className={style.input}
          pattern="^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$"
          title="Input valid email"
          placeholder="E-mail"
          required
          autoComplete='username'
          onChange={handleChangeAllInput}
          value={login}
        />
      
        <input
          type="password"
          name="password"
          className={style.input}
          pattern="\w{4,16}"
          title="The password can consist of Latin letters or numbers from 4 to 16 characters"
          placeholder="Password"
          required
          autoComplete='current-password'
          onChange={handleChangeAllInput}
          value={password}
        />
      <button className={style.AuthButton} type="submit">
        Login
      </button>
    </form>
  );
}
