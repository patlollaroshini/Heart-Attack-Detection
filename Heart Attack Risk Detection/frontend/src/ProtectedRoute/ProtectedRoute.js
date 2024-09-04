import React from 'react';
import { Navigate } from 'react-router-dom';
// import verifyToken from '../verifyToken/verifyToken';
import { jwtDecode } from 'jwt-decode';
const ProtectedRoute = ({ children }) => {

    let verifytoken = (token) => {
        try {
            const decoded = jwtDecode(token);
            const currentTime = Date.now() / 1000;
            if (decoded.exp < currentTime) {
                // Token is expired
                return false;
            }
            return true;
        } catch (error) {
            // Token is invalid
            return false;
        }
    }

    const token = sessionStorage.getItem('jwttoken');
    const isValidToken = token && verifytoken(token);

    if (!isValidToken) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;
