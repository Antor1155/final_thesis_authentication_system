import React, { useEffect } from 'react';

import auth from '../utilities/firebase.init';
import { useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth';
import toast, { Toaster } from 'react-hot-toast';


const Register = () => {

    useEffect(() => {
        document.body.style = 'background:rgb(240, 238, 238)';
    }, [])

    const notify = () => toast.success('new user added successfully');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    // register with email and password  
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        const name = email.split('@')[0];

        await createUserWithEmailAndPassword(email, password);

        // adding the user to database 
        fetch('https://gentle-gorge-38352.herokuapp.com/addUser',{
            method: 'POST',
            headers: {"content-type": "application/json"},
            body: JSON.stringify({name, catagory: "officials"})
        }).then(res => res.json())
        .then(data => console.log(data));

        event.target.reset();
        notify();

    }

    // registering with google 


    return (
        <div className='loginPage mt-5 mx-auto mb-5 pb-5'>
            <Toaster></Toaster>
            
            <h5 className='text-center mb-4'>Register please</h5>

            <div className='d-flex justify-content-center'>
                <form className='loginForm' onSubmit={handleFormSubmit}>
                    <label className='d-block '>email </label>
                    <input className='mb-3' type="email" name="email" placeholder='email' required />
                    <label className='d-block'>password </label>
                    <input className='mb-3' type="text" name="password" placeholder='password' required />
                    <br />
                    <input className="form-check-input me-3" type="checkbox" required /><label className='text-primary'>I accept all terms</label>

                    <input className='submitBtn py-2 px-4   text-black mx-auto d-block mt-4' type="submit" value='Register' />
                </form>
            </div>

        </div>
    );
};

export default Register;