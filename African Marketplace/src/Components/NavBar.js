import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
	return (<div className="NavBarDiv">
		 			<NavLink  activeClassName="ActiveNav" className="NavBar"  to='/home'>Home</NavLink>
                    <NavLink activeClassName="ActiveNav" className="NavBar"  to='/signup'> SignUp</NavLink>
                    <NavLink activeClassName="ActiveNav" className="NavBar"  to='/login'> Login </NavLink>
			<NavLink activeClassName="ActiveNav" className="NavBar" to='/listings'> Listings </NavLink>
			<NavLink activeClassName="ActiveNav" className="NavBar"  to='/addlisting'> Sell Your Item </NavLink>
	</div>)
}

export default NavBar;