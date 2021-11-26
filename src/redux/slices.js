import { createSlice } from '@reduxjs/toolkit';
import { registerThunk, loginThunk, currentThunk, logoutThunk } from './thunks';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: '',
      email: '',
    },
    token: '',
    err: '',
    isLoading: false,
    isAuth: false,
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
        isAuth: false, /////// Под вопросом
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
const BASE_CONTACT_URL = 'https://619362fcd3ae6d0017da852d.mockapi.io';
const contacts = '/contacts';

export const contactsApiSlice = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_CONTACT_URL }),
  tagTypes: ['Conts'],
  endpoints: builder => {
    return {
      //action
      fetchContacts: builder.query({
        query: () => contacts,
        providesTags: (result, err, arg) => {
          return [
            ...result.map(({ id }) => {
              return {
                type: 'Conts',
                id,
              };
            }),
          ];
        },
      }),
      addContact: builder.mutation({
        query: contact => {
          return {
            method: `POST`,
            url: contacts,
            body: contact,
          };
        },
        invalidatesTags: ['Conts'],
      }),
      removeContact: builder.mutation({
        query: id => {
          return {
            url: `${contacts}/${id}`,
            method: `DELETE`,
          };
        },
        invalidatesTags: (res, err, id) => [
          {
            type: 'Conts',
            id,
          },
        ],
      }),
    };
  },
});

export const {
  useFetchContactsQuery,
  useAddContactMutation,
  useRemoveContactMutation,
} = contactsApiSlice;
