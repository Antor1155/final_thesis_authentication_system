import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../utilities/firebase.init';
import AttendencePage from '../AttendencePage';
import "./Officials.css"

const Officials = () => {

    const [user, loading, error] = useAuthState(auth);
    if(user){
        console.log(user.email)
    }
    return (
        <div>
            <div className='users'> <h3> user:  {user?.email.split('@')[0]} </h3></div>
            <AttendencePage></AttendencePage>
        </div>
    );
};

export default Officials;