import { CheckAuth } from './RetrieveData';

const ProtectedRoute = ( { children }:any ) =>  {
  const isAuthenticated = CheckAuth();

//   Navigate to 403 page
  return isAuthenticated ? children : "Non sei autorizzato";
}

export default ProtectedRoute;
