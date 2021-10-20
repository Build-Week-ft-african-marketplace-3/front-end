import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
// import * as yup from 'yup'

export default function SignUp() {

    const { push } = useHistory();
    const [credentials, setCredentials ] = useState({
        username:"",
        password:"",
        error:""
    })

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const signupSubmit = e => {
        e.preventDefault();
        axios
            .post("https://african-marketplace-03.herokuapp.com/api/auth/signup",credentials)
            .then(resp => {
                localStorage.setItem("token", resp.data.token);
                push('/login');
            })
            .catch(err=> {
                console.log(err);
            })
    }
    
    return (
        <form
            onSubmit={signupSubmit}
        >
            <div>
                <h2>Sign Up!</h2>
                <div>
                    {credentials.username}
                </div>
                    <label>Username
                    <input
                        type="text"
                        name="username"
                        id ="username"
                        value={credentials.username}
                        onChange={handleChange}
                    />
                    </label>
                </div>
            <div><div>
                {credentials.password}
            </div>
                    <label>Password
                    <input
                        type="password"
                        name="password"
                        id ="password"
                        value={credentials.password}
                        onChange={handleChange}
                    />
                    </label>
                <button
                    // disabled={disabled}
                >Sign Up!</button>
            
            </div>
        </form>
    )

}
