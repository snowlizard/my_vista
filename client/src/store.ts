import { configureStore } from '@reduxjs/toolkit';
import bootReducer from './contexts/bootSlice';

export const store = configureStore({
  reducer: bootReducer,
});