import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import MainDashboard from './main';

/**
 * PrivateRoute Component: Renders the MainDashboard component if the user is authenticated,
 * otherwise navigates to the login page.
 * @param {Object} props - Component properties.
 * @param {boolean} props.isAuthenticated - Indicates whether the user is authenticated.
 * @returns {JSX.Element} JSX for rendering the PrivateRoute component.
 */
function PrivateRoute({ isAuthenticated }) {
  return isAuthenticated ? <MainDashboard /> : <Navigate to='/login' />;
}

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};
export default PrivateRoute;
