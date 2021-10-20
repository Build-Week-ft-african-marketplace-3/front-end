import React from 'react'

// import { useHistory } from "react-router-dom";



const Logout = () => {
    // const history = useHistory();
    const logout = (props) => {
        // console.log('Logout.js ln:10 props', props);
        window.localStorage.clear()
        window.location.href = '/'
        // const history = useHistory();
        // history.push('/')
        // history.push('/home')

    };

    
    return (
        <div>
                     
            <h2>Whoa Cowgirl/Cowboy!</h2>
            <h2>Are you sure?</h2>
            <button onClick={logout}>DO IT! LOG ME OUT! </button>
        </div>
    )
}

export default Logout