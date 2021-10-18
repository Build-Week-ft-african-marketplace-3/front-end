import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (<div className="NavBar">
		 			<Link style = {{padding: '10px'}} to='/'>Home</Link>
                    <Link style = {{padding: '10px'}} to='/signup'> SignUp</Link>
                    <Link style = {{padding: '10px'}} to='/login'> Login </Link>
                    <Link style = {{padding: '10px'}} to='/Listings'> Listings </Link>
	</div>)
}

export default NavBar;