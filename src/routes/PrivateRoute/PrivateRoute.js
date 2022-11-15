import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import gif from '../../img/loadding.gif'

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    // ---> loader
    if (loading) {
        return <div className='h-screen w-full flex justify-center items-center'>
            <img src={gif} alt="" />
        </div>
    }
    // ---> user redirect
    if (user) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace />
};

export default PrivateRoute;