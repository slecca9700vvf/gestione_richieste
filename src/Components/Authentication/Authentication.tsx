import React from 'react';
import Login from './Login';
import Logout from './Logout';
import CheckAuth from './CheckAuth';

import './Authentication.css';

const Authentication = () => {
    const isLogged = CheckAuth();
    return (
        <div className='main'>
            { isLogged ? <Logout/> : <Login/>  }
        </div>
    );
};

export default Authentication;