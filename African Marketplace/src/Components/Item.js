import React from "react";
import axiosWithAuth from '../utils/axiosWithAuth';
import '../item.css';

const Item = (props) => {
	
	const { item } = props;
	
    function deleteItem (event){
        console.log('Delete Item Clicked!');
        const itemId = event.target.id;
        axiosWithAuth().delete(`https://african-marketplace-03.herokuapp.com/api/listings/:${itemId}`)
            .then(response => {
                console.log('Response: ', response);
            })
            .catch(error => {
                console.log(error);
            })
    }

    // ----- Post Item to the Listings page
	return (

        <div className="card">
            <div className="container">
                
                {/* ----- DUMMY DATA -----
                <p><span style={{fontWeight: 'bold'}}>Product Name:</span> {item.product_name}</p>
                <p><span style={{fontWeight: 'bold'}}>Price:</span> {item.product_description}</p>
                <p><span style={{fontWeight: 'bold'}}>Price:</span> {item.product_price}</p>
                <p><span style={{fontWeight: "bold"}}>Location:</span> {item.location}</p>
                <p><span style={{fontWeight: 'bold'}}>Category:</span> {item.commodity_category}</p> 
                <hr/>*/}

                {/* ----- API DATA ----- */}
                <h2 className='title'><b>{item.product_name}</b></h2>
                <h4>{item.location}</h4>
                <p>{item.product_description}</p>
                <p>${item.product_price}</p>
            
            </div>
            <button id={item.product_id} className="delete-button" onClick={deleteItem}>Delete Item!</button><br/>
        </div>
        
	)
}
export default Item;

// ----- API FOR LISTING -----
// Add new listing with POST BaseURL + /api/listings
// Get a list of all listings with GET BaseURL + /api/listings
// Get a listing by id with GET BaseURL + /api/listings/:id
// And Delete listing by id with DELETE BaseURL + /api/listings/:id (edited) 