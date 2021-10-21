import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
// import Banner from '../images/banner.jpg';
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
            .post("https://african-marketplace-03.herokuapp.com/api/auth/register",credentials)
            .then(resp => {
                localStorage.setItem("token", resp.data.token);
                push('/login');
            })
            .catch(err=> {
                console.log(err);
            })
    }
    
    return (
        <div>
            {/* <img className="signup-img"src={Banner} alt="cartons of figs and strawberries"/> */}
        <form 
            onSubmit={signupSubmit}
        >
           
            <div className="form ">
            
                <h2 >Sign Up!</h2>
                    <label className="form-label">Username
                    <input
                        type="text"
                        name="username"
                        id ="username"
                        value={credentials.username}
                        onChange={handleChange}
                    />
                    </label>
            
                    <label className="form-label">Password
                    <input
                        type="password"
                        name="password"
                        id ="password"
                        value={credentials.password}
                        onChange={handleChange}
                    />
                    </label>
                <button className="signupBtn"
                    // disabled={disabled}
                >Sign Up!</button>
              
            </div>
        </form>
        </div>
    )

}
