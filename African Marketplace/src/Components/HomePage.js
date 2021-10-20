import React from 'react';
import Banner from '../images/banner.jpg';



export default function HomePage() {

    const clickHandler = (e) => {
        e.preventDefault();
        
}

    return (
       
        <div>
            {/* top section */}
            <header>
                <div className="header">
                    <img src={Banner} alt="cartons of figs and strawberries"/>
                    <hr />
                    <h1>African Marketplace</h1>
                    <hr />
                    <h2>Sauti Africa empowers small business owners, particularly women, <br />to improve their business and economic opportunities<br /> to grow out of poverty.</h2>
                    <button onClick = {clickHandler}>Login</button>
                </div>
            </header>
            {/* footer section */}
            <footer>
               
            </footer>    
        </div>
        
    )
}