import { CheckAuth } from '../Authentication/RetrieveAuthUser';

const ProtectedRoute = ( { children }:any ) =>  {
  const isAuthenticated = CheckAuth();

//   Navigate to 403 page
  return isAuthenticated ? children : "Non sei autorizzato";
}

export default ProtectedRoute;
