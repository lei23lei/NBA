import React from 'react'
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import homeImageReducer from './store/homeimageSlice.js';
import Header from './components/header/Header'
import Main from './components/main/Main'

const store = configureStore({
  reducer: {
    homeImage: homeImageReducer,
  },

});

export default function App() {
  return (
    <Provider store={store}>
        <Header/>
        <Main/>
    </Provider>
  )
}
