import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const RequireAuth = (props) => {
  return props.address ? <Outlet /> : <Navigate to='/' />;
};

export default RequireAuth;
