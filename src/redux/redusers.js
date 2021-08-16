import { changeFilter } from 'redux/actions';
import { createReducer } from '@reduxjs/toolkit';

export const filter = createReducer('', {
  [changeFilter]: (_, action) => action.payload,
});
