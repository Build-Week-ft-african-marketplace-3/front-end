import React from "react";

const Item = (props) => {
	
	const { item } = props;
	
    // ----- Post Item to the Listings page
	return (
        <div className='item-container'>
            {/* ----- Dummy Data ----- */}
            {/* <p><span style={{fontWeight: 'bold'}}>Item:</span> {item.commodity_product}</p>
            <p><span style={{fontWeight: 'bold'}}>Price:</span> {item.price}</p>
            <p><span style={{fontWeight: "bold"}}>Location:</span> {item.location}</p>
            <p><span style={{fontWeight: 'bold'}}>Category:</span> {item.commodity_category} - {item.sub_category}</p> 
            <hr/> */}
            {/* ----- API Data ----- */}
            {/* <img src='PLACEHOLDER' alt='PLACEHOLDER'/> */}
            <p><span style={{fontWeight: 'bold'}}>Item:</span> {item.product_name}</p>
            <p><span style={{fontWeight: 'bold'}}>Description:</span> {item.product_description}</p>
            <p><span style={{fontWeight: "bold"}}>Location:</span> {item.location}</p>
            <p><span style={{fontWeight: 'bold'}}>Price:</span> {item.product_price}</p>
            <hr/>
        </div>
	)
}
export default Item;
