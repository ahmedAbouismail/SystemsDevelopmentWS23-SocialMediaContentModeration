import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import MainDashboard from './main';

function PrivateRoute({ isAuthenticated }) {
  return isAuthenticated ? <MainDashboard /> : <Navigate to='/login' />;
}

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};
export default PrivateRoute;
