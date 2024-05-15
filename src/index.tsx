import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './Components/UI/HomePage/HomePage';
import Authentication from './Components/UI/Authentication/Authentication'
import reportWebVitals from './reportWebVitals';
import Header from './Components/UI/Header/Header';
import Footer from './Components/UI/Footer/Footer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <HomePage/> */}
    <Header/>
      <Authentication />
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
