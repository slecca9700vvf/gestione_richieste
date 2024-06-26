import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

// Import Stili
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './assets/index.scss';

// Import Librerie per la gestione di store e route
import appStore from './Store/Store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './Components/Common/ProtectedRoute';

// Import dei componenti
import HomePage from './Components/UI/HomePage/HomePage';
import Dashboard from './Components/UI/Dashboard/Dashboard';
import Header from './Components/UI/Header/Header';
import Footer from './Components/UI/Footer/Footer';
import Authentication from './Components/Authentication/Authentication';
import Request from './Components/Forms/Request/Request';
import Sector from './Components/Forms/Sector/Sector';
import Sidebar from './Components/UI/Sidebar/Sidebar';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <Header/>
      <div className='app-content'>
        {/* TODO Recuperare routes, recuperare menu */}
        <Sidebar></Sidebar>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <Dashboard/>
                </ProtectedRoute>
              }/>
              <Route path="/login" element={<Authentication/>}/>
              <Route path="/richiesta/:request_id" element={
                <ProtectedRoute>
                  <Request/>
                </ProtectedRoute>}
              />
              <Route path="/settore" element={
                <ProtectedRoute>
                  <Sector/>
                </ProtectedRoute>}
              />
            </Routes>
        </BrowserRouter>
      </div>
      <Footer/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
