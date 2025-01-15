// src/components/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {
  const loggedIn = useSelector((state) => state.auth.loggedIn);

  return loggedIn ? children : <Navigate to="/" />;
};

export default PrivateRoute;
