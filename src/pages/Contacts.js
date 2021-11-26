import { useState } from 'react';

import {
  useFetchContactsQuery,
  useAddContactMutation,
  useRemoveContactMutation,
} from '../redux/slices';

export function Contacts() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { data } = useFetchContactsQuery();
  const [addContact] = useAddContactMutation();
  const [removeContact] = useRemoveContactMutation();

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        alert('Check input name please');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const contact = { name, number };
    // тут отправляем объект контакта на бэк через хук RTK
    addContact(contact);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };
  const handleRemove = e => {
    removeContact(e.target.id);
  };

  return (
    <section>
      <h2>ADD CONTACT</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="name"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="number"
          value={number}
          placeholder="number"
          onChange={handleChange}
        />
        <br />
        <button type="submit">Add</button>
      </form>
      <h2>CONTACTS</h2>
      {data &&
        data.map(el => {
          return (
            <li key={el.id}>
              {el.name}
              <button id={el.id} type="button" onClick={handleRemove}>
                Delete
              </button>
            </li>
          );
        })}
    </section>
  );
}
