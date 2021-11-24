// import { useState, useEffect } from 'react';
import Form from './Form/Form';
import ContactsList from './ConatctsList/ConatctsList';
import './styles.css';

export default function App() {
  // useEffect(() => {
  //   const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
  //   if (parsedContacts) {
  //     setContacts(parsedContacts);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <ContactsList />
    </div>
  );
}
