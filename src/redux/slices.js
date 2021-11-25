import { createSlice } from '@reduxjs/toolkit';
import { registerThunk, loginThunk, currentThunk, logoutThunk } from './thunks';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: '',
      email: '',
    },
    token: '',
    error: '',
    isLoading: false,
    isAuth: false,
    myProp: 'Hello',
  },
  reducers: {
    renameProp: (state, action) => {
      return {
        ...state,
        myProp: action.payload,
      };
    },
  },
  extraReducers: {
    [registerThunk.pending](state, action) {
      return {
        ...state,
        isLoading: true,
      };
    },
    [registerThunk.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        token: action.payload.token,
        isAuth: true,
      };
    },
    [registerThunk.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
    [loginThunk.pending](state, action) {
      return {
        ...state,
        isLoading: true,
      };
    },
    [loginThunk.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        token: action.payload.token,
        isAuth: true,
      };
    },
    [loginThunk.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
    [currentThunk.pending](state, action) {
      return {
        ...state,
        isLoading: true,
      };
    },
    [currentThunk.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        user: action.payload,
        isAuth: true, /////// Под вопросом
      };
    },
    [currentThunk.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        isAuth: true, /////// Под вопросом
      };
    },
    [logoutThunk.pending](state, action) {
      return {
        ...state,
        isLoading: true,
      };
    },
    [logoutThunk.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        user: { name: '', email: '' },
        token: '',
        isAuth: false,
      };
    },
    [logoutThunk.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
  },
});

export const { renameProp } = authSlice.actions;
export default authSlice.reducer;

//====================== Contacts =======================
const BASE_CONTACT_URL = 'https://619362fcd3ae6d0017da852d.mockapi.io/';
const contacts = '/contacts';
