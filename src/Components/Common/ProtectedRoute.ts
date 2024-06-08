import { CheckAuth } from '../Authentication/RetrieveAuthUser';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ( { children }:any ) =>  {
  const isAuthenticated = CheckAuth();

//   Navigate to 403 page
  return isAuthenticated ? children : "Non sei autorizzato";
}

export default ProtectedRoute;
