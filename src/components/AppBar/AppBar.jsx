import { NavLink } from 'react-router-dom';
import style from './style.module.css';
import { useSelector } from 'react-redux';
import { Navigation } from './Navigation';
import { Greetings } from './Greetings';
// import { Navigate } from "react-router-dom";
// import { useEffect } from "react";

export function AppBar() {
  const isAuth = useSelector(state => state.isAuth);

  // useEffect(()=>{if(isAuth){console.log("object");<Navigate to="/contacts"/>}},[isAuth])

  return (
    <header className={style.container}>
      <div className={style.innerContainerLeft}>
        <NavLink className={style.secondText} to="/contacts">
          Phonebook
        </NavLink>
      </div>

      {isAuth ? <Greetings /> : <Navigation />}
    </header>
  );
}
