import React from 'react';
import "./Login.css";

const Login = () => {
    return (
        <div className='mt-5'>
            <div className='d-flex justify-content-center'>
                <form className='loginForm'>
                    <label className='d-block '>email </label>
                    <input className='mb-2' type="text" name="email" placeholder='email' required />
                    <label className='d-block'>password </label>
                    <input type="text" name="password" placeholder='password' required />
                    <br />
                    <input className='submitBtn btn mx-auto d-block' type="submit" value='Login' />
                </form>
            </div>
        </div>
    );
};

export default Login;