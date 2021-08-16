import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from 'redux/contactApiServise';
import { contactApi } from 'redux/contactApiServise';

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactApi.middleware),
});

export { store };
