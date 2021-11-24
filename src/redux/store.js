import contactsReducer from './contacts/contacts-reducer';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';

const myMiddleware = store => next => action => {
  console.log('My middleware', action);
  next(action);
};

const middleware = [...getDefaultMiddleware(), myMiddleware, logger];

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
