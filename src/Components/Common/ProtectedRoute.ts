import React from 'react';
import { useSelector } from 'react-redux';
import CheckAuth from '../Authentication/CheckAuth';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ( { children }:any ) =>  {
  const isAuthenticated = CheckAuth();

//   Navigate to 403 page
  return isAuthenticated ? children : "Non sei autorizzato";
}

export default ProtectedRoute;
