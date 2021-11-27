import React, { useEffect } from 'react';
import style from './ContactsList.module.css';
import {  useDispatch, useSelector } from 'react-redux';
import { fetchPhones,deleteById } from '../redux/operation';




function ContactsList() {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const isDelete = useSelector((state) => state.isDelete);
  const isSubmit = useSelector((state) => state.isSubmit);
  const token = useSelector((state) => state.token);

  const dispatch = useDispatch();
  const deleteNum = (id, token) => dispatch(deleteById({ id:id, token:token } ));
  const del = (ev) => deleteNum(ev.target.id, token);
  

  // const phones = () => dispatch(fetchPhones(token));
  useEffect(() => { dispatch(fetchPhones(token)) }, [token, dispatch]); 
  useEffect(() => { if (isDelete) { dispatch(fetchPhones(token)) } }, [isDelete, token, dispatch]);
  useEffect(() => { if (isSubmit) { dispatch(fetchPhones(token)) } }, [isSubmit, token, dispatch]);
  
  
    function filteredContacts() {
    return contacts.filter(el => {
      const arr = el.name.toLowerCase().split(' ');
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase().match(new RegExp(`^${filter}`)) !== null) {
          return true;
        }
      }
      return false;
    });
  }   
        return (
            <ul className={style.list}>        
                {
                    filteredContacts().map(el => (<li
                        className={style.listItem}
                        key={el.id} >
                        {el.name}:  {el.phone}
                        <button
                            type="button"
                            className={style.deleteButton}
                            id={el.id}
                            onClick={del}
                        >Delete</button>
                      </li>))
                }
        </ul>
    )
};


export default ContactsList




