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
import Header from './Components/UI/Header/Header';
import Footer from './Components/UI/Footer/Footer';
import Authentication from './Components/Authentication/Authentication';
import Request from './Components/Forms/Request/Request';
import Sector from './Components/Forms/Sector/Sector';
import Sidebar from './Components/UI/Sidebar/Sidebar';
import routes from './API-Labels/routes';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


const menuItems = [
  {
    title: 'Item 1',
    url: '',
    subItems: [
      { title: 'SubItem 1.1', url: '/richiesta' },
      { title: 'SubItem 1.11', url: '/richiesta' },
    ],
  },
  {
    title: 'Item 2',
    url: '',
    subItems: [
      { title: 'SubItem 2.1', url: 'https://example.com/subitem2-1' },
      { title: 'SubItem 2.2', url: 'https://example.com/subitem2-2' },
    ],
  },
  { title: 'Item 3', url: 'https://example.com/item3' },
];

root.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <Header/>
      <div className='app-content'>

        {/* TODO Recuperare routes, recuperare menu */}


        <Sidebar menuItems={menuItems}></Sidebar>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/login" element={<Authentication/>}/>
              <Route path="/richiesta" element={
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
