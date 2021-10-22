import React from 'react';
import { Link } from 'react-router-dom';
// import Banner from '../images/banner.jpg';



export default function HomePage() {


    return (
       
        <div>
            {/* top section */}
            <header>
                <div className="header">
                    {/* <img src={Banner} alt="cartons of figs and strawberries"/> */}
                    <hr className="home-hr"/>
                    <h1 className="home-h1">African Marketplace</h1>
                    <hr className="home-hr"/>
                    <h2 className="home-h2">Sauti Africa empowers small business owners, particularly women, <br />to improve their business and economic opportunities<br /> to grow out of poverty.</h2>
                    <Link to="/login" className="homebtn">Login</Link>
                </div>
            </header>
            {/* footer section */}
            <footer>
               
            </footer>    
        </div>
        
    )
}