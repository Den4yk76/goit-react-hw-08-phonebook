// import contactsReducer from './contacts/contacts-reducer';
// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import logger from 'redux-logger';

// const myMiddleware = store => next => action => {
//   console.log('My middleware', action);
//   next(action);
// };

// const middleware = [...getDefaultMiddleware(), myMiddleware, logger];

// const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//   },
//   middleware,
//   devTools: process.env.NODE_ENV === 'development',
// });

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  REGISTER,
  PAUSE,
  PERSIST,
  PURGE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// =======
import { contactsApiSlice } from './slices';
//========

const authPersistConfig = {
  key: 'authToken',
  storage,
  whitelist: ['token'],
};

const authPersistReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: authPersistReducer,
    [contactsApiSlice.reducerPath]: contactsApiSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, REGISTER, PAUSE, PERSIST, PURGE],
      },
    }).concat(contactsApiSlice.middleware),
});

export const persistor = persistStore(store);
