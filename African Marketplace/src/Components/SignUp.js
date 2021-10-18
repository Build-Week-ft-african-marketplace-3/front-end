import React, { useState } from 'react';
import axios from 'axios';
import * as yup from 'yup'

const initialFormValues = { email: '', username: '', password: ''}
const initialFormErrors = { email: '', username: '', password: ''}

const initialSignUp = [];
const intialDisabled = true;

export default function SignUp() {

    const [signUp , setSignUp] = useState (initialSignUp);
    const[formValues, setFormValues] = useState(initialFormValues);
    const[formErrors, setFormErrors] = useState(initialFormErrors);
    const[disabled, setDisabled] = useState(initialDisabled)

    const onSubmit = evt => {
        evt.preventDefualt()
        axios.post('', signUp)
            .then( res => {console.log(res.data)
            }).catch(err => {console.error(err);
            }).finally(() => {
                setFormValues(initialFormValues);
            }
    }
    const onChange = evt => {
        const { name, value, type} = evt.target;
       change(name, valueToUse)
    }
    const validate = (name, value) => {
        yup.reach(schema, name)
        .validate(value)
        .then(() => setFormErrors({ ...formErrors, [name]: ''}))
        .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
    }
    return {
        <form onSubmit{onSubmit}>
            <div>
                <h2>Sign Up!</h2>

                <div>
                    <div>{errors.email}</div>
                    <label>Email
                    <input
                        type="email"
                        name="email"
                        id ="email"
                        value={values.email}
                        onChange={onChange}
                    />
                    </label>
                <div>
                <div>{errors.username}</div>
                    <label>Username
                    <input
                        type="text"
                        name="username"
                        id ="username"
                        value={values.username}
                        onChange={onChange}
                    />
                    </label>
                </div>
                <div><div>{errors.password}</div>
                    <label>Password
                    <input
                        type="password"
                        name="password"
                        id ="password"
                        value={values.password}
                        onChange={onChange}
                    />
                    </label>
                    <button disabled={disabled}>Sign Up!</button>
            
            </div>
        </form>
    }

}
