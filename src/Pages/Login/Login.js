import React, { useContext,useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import './Login.css'

const Login = () => {
    const [error, seterror] = useState('')
    const naviget = useNavigate()
    const {login} = useContext(AuthContext)
 const handlelogin = (event) =>{
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);
    login(email,password)
    .then(result => {
        const user = result.user;
        console.log(user)
        seterror('')
        naviget('/')
    })
    .catch(e => {
        seterror(e.message)
    })
 }

    return (
        <div className='from_box'>
        <h2> Login Now</h2>
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
            <button type='submit'>Login</button>
            <p> {error} </p>
        </form>
        <p><small>New To the site ?</small> <Link to ='/register'>Create New Account</Link> </p>
    </div>
    );
};

export default Login;