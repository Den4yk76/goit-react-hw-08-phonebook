import { createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import { connect, useDispatch } from 'react-redux';

const BASE_USER_URL = 'https://connections-api.herokuapp.com';
const userRegister = '/users/signup';
const userLogin = '/users/login';
const userLogout = '/users/logout';
const userCurrent = '/users/current';

export const registerThunk = createAsyncThunk(
  'users/register',
  async (user, { rejectWithValue }) => {
    try {
      const response = await fetch(BASE_USER_URL + userRegister, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      console.log('registerThunk data', data); // { token: '', user: {name: "", email: ""},}
      return data; // action.payload
    } catch (err) {
      rejectWithValue({ error: err.message });
    }
  },
);

export const loginThunk = createAsyncThunk(
  'users/login',
  async (user, { rejectWithValue }) => {
    try {
      const response = await fetch(BASE_USER_URL + userLogin, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      console.log('loginThunk data', data); // { token: '', user: {name: "", email: ""},}
      return data; // action.payload
    } catch (err) {
      rejectWithValue({ error: err.message });
    }
  },
);

export const currentThunk = createAsyncThunk(
  'users/current',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const token = state.auth.token;
    console.log('currentThunk token', token);
    if (!token) {
      console.log('Huinia kakaia-to');
      return;
    } else {
      try {
        const response = await fetch(BASE_USER_URL + userCurrent, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        console.log('currentThunk data', data); // {user: {name: "", email: ""},}
        return data; // action.payload
      } catch (err) {
        console.log('err', err.message);
        rejectWithValue(err.message);
      }
    }
  },
);

export const logoutThunk = createAsyncThunk(
  'users/logout',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const token = state.auth.token;
    if (!token) return;
    try {
      const response = await fetch(BASE_USER_URL + userLogout, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      // const data = await response.json();
      console.log('LogoutThunk response', response); // {user: {name: "", email: ""},}
      // return data; // action.payload
    } catch (err) {
      console.log('err', err.message);
      rejectWithValue(err.message);
    }
  },
);

// email: denyatest@mail.com
// pass 123123123
