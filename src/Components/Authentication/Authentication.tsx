import React from 'react';
import Login from './Login';
import { CheckAuth } from './RetrieveAuthUser';
import { Navigate } from 'react-router-dom';

const Authentication = () => {
    const isLogged = CheckAuth();
    return (
        <div className='main'>
            { isLogged ?
                (
                    <Navigate to="/" />
                ) : (
                    <Login/>
                )
            }
        </div>
    );
};

export default Authentication;