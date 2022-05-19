import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../utilities/firebase.init';
import "./AdminPage.css"

const AdminPage = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div>
            <div className='users'> <h3> Admin:  {user?.email.split('@')[0]} </h3></div>

            <div className='adminButton'> 
                <Link to="/admin"> see attendence</Link>
                <Link to="/admin/users"> manage users</Link>
                <Link to="/admin/addUsers"> Add Users</Link>
            </div>

            <Outlet></Outlet>
            
        </div>
    );
};

export default AdminPage;