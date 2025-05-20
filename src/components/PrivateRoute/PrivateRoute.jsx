import React, { use } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';


const PrivateRoute = ({children}) => {
    const location = useLocation();
    const { user, loading } = use(AuthContext);

    if (loading) {
        return <div className='w-[100px] mx-auto my-52'><span className="loading loading-bars loading-xl"></span></div>
    }
    if (!user) {
        return <Navigate state={location?.pathname} to='/Signin'></Navigate>
    }
    return children;
};

export default PrivateRoute;