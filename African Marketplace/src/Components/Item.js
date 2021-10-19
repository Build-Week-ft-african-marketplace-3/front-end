import React from "react";

const Item = (props) => {
	
	const { item } = props;
	
    // ----- Post Item to the Listings page
	return (
        <div className='item-container'>
            <p><span style={{fontWeight: 'bold'}}>Product Name:</span> {item.commodity_product}</p>
            <p><span style={{fontWeight: 'bold'}}>Price:</span> * Placeholder* </p>
            <p><span style={{fontWeight: 'bold'}}>Category:</span> {item.commodity_category}</p>
            <p><span style={{fontWeight: "bold"}}>Location:</span> * Placeholder *</p>
            <hr/>
        </div>
	)
}
export default Item;