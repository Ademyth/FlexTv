import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
    const {user} = UserAuth()

  if (!user) {

    // getting this error on adding this code "Uncaught SyntaxError: Unexpected token '<'"
    // return <Navigate to='/' />;

  } else {
    return children;
  }
};

export default ProtectedRoute;