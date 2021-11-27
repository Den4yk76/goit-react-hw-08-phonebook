import style from './ContactsList.module.css';
import React, {  } from 'react';
import {changeFilter} from '../redux/actions'
import { useDispatch } from 'react-redux';

export default function Filter() {
     

    const dispatch = useDispatch();
    const filter = (data) => dispatch(changeFilter(data));
    const filterData = (ev) => filter(ev.target.value.toLowerCase());
    

     return (<>
            <label htmlFor="find">Find contacts by name</label>
            <input
                className={style.input}
                autoComplete="off"
                id="find"
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]"
                onChange={filterData}
                ></input>
     </>   )
};

