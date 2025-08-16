import { configureStore } from '@reduxjs/toolkit';
import bootReducer from './contexts/bootSlice';
import appReducer from './contexts/appSlice';
import themeReducer from './contexts/themeSlice';
import startmenuReducer from './contexts/startmenuSlice';

export const store = configureStore({
  reducer: {
    boot: bootReducer,
    app: appReducer,
    theme: themeReducer,
    startmenu: startmenuReducer
  }
});

export type AppDispatch = typeof store.dispatch;