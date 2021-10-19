
import React from 'react';

export default function LogIn() {

    return (
        <form >
            <div>
                <div>
                <label>Username
                    <input 
                    type="text"
                    name="username"
                    id="username"
                    // value={values.username}
                    // onChange={onChange}
                    />
                </label>
                </div>
                <div>
                <label>
                    <input 
                    type="password"
                    name="password"
                    id="password"
                    // value={values.password}
                    // onChange={onChange}
                    />
                </label>
                <button /*disabled={disabled}*/>Login</button>
                </div>
            
            </div>
            </form>
    )
}

