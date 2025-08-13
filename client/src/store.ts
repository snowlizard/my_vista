import { configureStore } from '@reduxjs/toolkit';
import bootReducer from './contexts/bootSlice';
import loginReducer from './contexts/loginSlice';
import appReducer from './contexts/appSlice';
import themeReducer from './contexts/themeSlice';
import startmenuReducer from './contexts/startmenuSlice';

export const store = configureStore({
  reducer: {
    boot: bootReducer,
    login: loginReducer,
    app: appReducer,
    theme: themeReducer,
    startmenu: startmenuReducer
  }
});

export type AppDispatch = typeof store.dispatch;