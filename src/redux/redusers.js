import { changeFilter, setToken } from 'redux/actions';
import { createReducer } from '@reduxjs/toolkit';

export const filter = createReducer('', {
  [changeFilter]: (_, action) => action.payload,
});

export const token = createReducer('', {
  [setToken]: (_, action) => action.payload,
});
