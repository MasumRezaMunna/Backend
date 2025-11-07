import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import LoadingSpinner from '../components/LoadingSpinner.jsx';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <LoadingSpinner message="Authenticating..." />;
  }

  if (user) {
    return children;
  }

  // Redirect to login, but save the current location they were trying to go to
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;