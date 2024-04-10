import React,{useState} from 'react'
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import homeImageReducer from './store/homeimageSlice.js';
import standingSlice from './store/standingSlice.js';
import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
const store = configureStore({
  reducer: {
    homeImage: homeImageReducer,
    standings: standingSlice
  },
});

export default function App() {
  const [feedback, setFeedback] = useState(null);
  const [game, setGame] = useState(false);
  return (
    <Provider store={store}>
        <Header setFeedback={setFeedback} setGame={setGame}/>
        <Main feedback={feedback} game={game} setGame={setGame}/>
        <Footer/>
    </Provider>
  )
}
