import React, { useEffect} from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import googleImg from "../Images/logos/google.png";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../utilities/firebase.init';


const Login = () => {
   

    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        document.body.style = 'background:rgb(240, 238, 238)';
    }, [])

    // sign in with email password
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleFormSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
        event.target.reset();
    }

    // signin with google 
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const handleGoogleSignIn = () => {
        // signInWithGoogle();
    }

    if (googleUser || user) {
        navigate(from, { replace: true });
    }

    return (
        <div className='loginPage mt-5 mb-5 pb-5 mx-auto'>
           
            <h2 className='text-center my-3'>Welcome Back</h2>
            <div className='d-flex justify-content-center mb-3'>
                <form className='loginForm' onSubmit={handleFormSubmit}>
                    <label className='d-block '>email </label>
                    <input className='mb-2' type="text" name="email" placeholder='email' required />
                    <label className='d-block'>password </label>
                    <input type="text" name="password" placeholder='password' required />
                    <br />
                    <input className='submitBtn py-2 px-4 mx-auto d-block' type="submit" value='Login' />
                </form>
            </div>
            <div className='GoogleBtnDiv text-center'>
                <p>continue with <button onClick={handleGoogleSignIn} className='border-0'><img src={googleImg} alt="google" /><span className='fs-5 fw-bold'> Google</span></button></p>
            </div>
        </div>
    );
};

export default Login;