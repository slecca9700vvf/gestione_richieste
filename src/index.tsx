import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Components/UI/HomePage/HomePage';
import Header from './Components/UI/Header/Header';
import Footer from './Components/UI/Footer/Footer';
import Authentication from './Components/Authentication/Authentication';
import Request from './Components/Request/Request';
import Sector from './Components/Sector/Sector';
import { Provider } from 'react-redux';
import { appStore } from './Store/Store';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <Header/>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<Authentication/>}/>
            <Route path="/richiesta" element={<Request/>}/>
            <Route path="/settore" element={<Sector/>}/>
          </Routes>
        </BrowserRouter>
      <Footer/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
