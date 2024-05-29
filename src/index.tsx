import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Components/UI/HomePage/HomePage';
import Header from './Components/UI/Header/Header';
import Footer from './Components/UI/Footer/Footer';
import Authentication from './Components/UI/Authentication/Authentication';
import Request from './Components/Request/Request';
import Sector from './Components/Sector/Sector';
import { Provider } from 'react-redux';
import appStore from './Store/Store';
import ProtectedRoute from './Components/Common/ProtectedRoute';


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
            <Route path="/richiesta" element={
              <ProtectedRoute>
                <Request/>
              </ProtectedRoute>}/>
            <Route path="/settore" element={
              <ProtectedRoute>
                <Sector/>
              </ProtectedRoute>}/>
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
