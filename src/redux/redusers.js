import { changeFilter, setAuthData } from 'redux/actions';
import { createReducer } from '@reduxjs/toolkit';

export const filter = createReducer('', {
  [changeFilter]: (_, action) => action.payload,
});

export const authData = createReducer('', {
  [setAuthData]: (_, action) => action.payload,
});
