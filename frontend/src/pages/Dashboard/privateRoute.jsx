import React from 'react';
import { Navigate } from 'react-router-dom';
import MainDashboard from './main';

function PrivateRoute({ element: Element, isAuthenticated, ...rest }) {
  return isAuthenticated ? <MainDashboard /> : <Navigate to='/login' />;
}

export default PrivateRoute;
