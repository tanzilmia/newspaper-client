import React, { useContext,useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Register = () => {
    const [error, seterror] = useState('')
    const {register} = useContext(AuthContext)
    const naviget = useNavigate()
    const handlelogin = (event) =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const photourl = form.photoURL.value
        console.log(email,password,photourl);
        register(email,password)
        .then(result => {
            const user = result.user;
            seterror('')
            console.log(user);
            naviget('/')

        })
        .catch(error =>{
            seterror(error.message)
        })
     }
    
        return (
            <div className='from_box'>
            <h2> Register Now</h2>
            <p></p>
            <form onSubmit={handlelogin}>
                <div className="form_control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder='Your Email' required />
                </div>
                <div className="form_control">
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" placeholder='Your Password' required />
                </div>
                <div className="form_control">
                    <label htmlFor="">Photo url</label>
                    <input type="text" name="photoURL" placeholder='Your photolink' />
                </div>
                <button type='submit'>register</button>
                <p>{error}</p>
            </form>
            <p><small>Already have an account ?</small> <Link to ='/login'>Create New Account</Link> </p>
        </div>
        );
};

export default Register;