import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsApi from '../../contacts-api';

axios.defaults.baseURL = 'https://619362fcd3ae6d0017da852d.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const contacts = await contactsApi.fetchContacts();
    return contacts;
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async data => {
    const contact = { name: data.name, number: data.number };
    const contacts = await contactsApi.addContact(contact);
    // console.log('operation add', contacts);
    return contacts;
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    const contacts = await contactsApi.deleteContact(contactId);
    return contacts;
  },
);
