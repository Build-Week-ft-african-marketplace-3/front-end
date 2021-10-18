import React from "react";

const Item = (props) => {
	
	const { item } = props;
	
    // ----- Post Item to the Listings page
	return (
        <div className='item-container'>
            <p>{item.commodity_product}</p>
            <p>{item.commodity_category}</p>
            <p>{item.sub_category}</p><hr/>
        </div>
	)
}
export default Item;