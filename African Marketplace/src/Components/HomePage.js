import React from 'react';
// import banner from '../images/banner.jpg';

export default function HomePage() {

    return (
        <div>

            {/* top section */}
            <div>
                
                {/* <img src={banner} /> */}
                <h1>African Marketplace</h1>
                <h2>Sauti Africa empowers small business owners, particularly women, <br />to improve their business and economic opportunities<br /> to grow out of poverty.</h2>

                <button>Search</button>
                
            </div>

            {/* footer section */}
            <footer>

                <ul>
                    <li><a href="#" >Twitter</a></li>
                    <li><a href="#" >Facebook</a></li>
                    <li><a href="#" >Instagram</a></li>
                    <li><a href="#" >Email</a></li>
                </ul>

            </footer>

        </div>
    )
}