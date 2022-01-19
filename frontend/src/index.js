import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux"
import store from "./state/store"
import Navbar from './components/template/Navbar';
import Footer from './components/template/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Provider store={store}>
      <App />
    </Provider>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);