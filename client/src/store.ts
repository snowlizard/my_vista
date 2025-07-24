import { configureStore } from '@reduxjs/toolkit';
import bootReducer from './contexts/bootSlice';
import loginReducer from './contexts/loginSlice';
import themeReducer from './contexts/themeSlice';

export const store = configureStore({
  reducer: {
    boot: bootReducer,
    login: loginReducer,
    theme: themeReducer
  }
});

export type AppDispatch = typeof store.dispatch;