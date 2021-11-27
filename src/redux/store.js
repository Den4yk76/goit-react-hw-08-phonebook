import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducers';
import { getDefaultMiddleware } from '@reduxjs/toolkit';

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

const store = configureStore({
  reducer: reducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware: customizedMiddleware,
});

export default store;
