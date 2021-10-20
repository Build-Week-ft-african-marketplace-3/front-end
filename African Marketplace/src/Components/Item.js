import React from "react";
import '../item.css';

const Item = (props) => {
	
	const { item } = props;
	
    // ----- Post Item to the Listings page
	return (

        // <div>
            
                /* <p><span style={{fontWeight: 'bold'}}>Product Name:</span> {item.commodity_product}</p>
                <p><span style={{fontWeight: 'bold'}}>Price:</span> {item.price}</p>
                <p><span style={{fontWeight: "bold"}}>Location:</span> {item.location}</p>
                <p><span style={{fontWeight: 'bold'}}>Category:</span> {item.commodity_category}</p>
                <hr/> */

        
        <div className="card">
            <div className="container">
                <h2 className='title'><b>{item.commodity_product}</b></h2>
                <h4>{item.location}</h4>
                <p>${item.price}</p>
            </div>
        </div>
        
	)
}
export default Item;
