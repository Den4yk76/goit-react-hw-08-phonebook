import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = `https://connections-api.herokuapp.com`;
const userRegister = '/users/signup';
const userLogin = '/users/login';
const userCurrent = '/users/current';
const userLogout = '/users/logout';
const contacts = '/contacts';

export const fetchPhones = createAsyncThunk('phones/fetchList', async data => {
  const phones = await axios.get(contacts, {
    'Content-Type': 'application/json',
    headers: { Authorization: data },
  });
  return phones.data;
});

export const deleteById = createAsyncThunk(
  'phones/delete',
  async ({ id, token }) => {
    await axios({
      method: 'delete',
      headers: { Authorization: token },
      url: `${contacts}/${id}`,
    });
  },
);

export const submitPhone = createAsyncThunk(
  'phones/submit',
  async ({ data, token }) => {
    await axios({
      method: 'post',
      headers: { Authorization: token },
      url: contacts,
      data: data,
    });
    return;
  },
);

export const fetchSubmitUser = createAsyncThunk('user/submit', async data => {
  const request = await axios.post(userRegister, data, {
    'Content-Type': 'application/json',
  });
  return request;
});

export const fetchLogin = createAsyncThunk('user/login', async data => {
  const request = await axios.post(userLogin, data, {
    'Content-Type': 'application/json',
  });
  return request;
});

export const fetchCurrentUser = createAsyncThunk('user/current', async data => {
  const request = await axios.get(userCurrent, {
    'Content-Type': 'application/json',
    headers: { Authorization: data },
  });
  return request;
});

export const fetchLogout = createAsyncThunk('user/logout', async data => {
  const request = await axios({
    method: 'post',
    headers: { Authorization: data },
    url: userLogout,
  });
  return request;
});
