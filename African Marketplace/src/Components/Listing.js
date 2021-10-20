import React, {useState, useEffect} from "react";
import axios from 'axios';
import dummy_data from '../DummyData';
import Search from './Search';
import Item from './Item';

const Listing = () => {
	
	// ----- Set State + Initial Values ----- 
	//const [ listings, setListings ] = useState([]);    // Listings from API
	const [ listings, setListings ] = useState(dummy_data); // Listings from Dummy Data
	const [ searchResults, setSearchResults ] = useState(listings) // QUESTION: Pre-pop all or start empty

	/* ----- PLACEHOLDER - Create a category header ----- 
	let categories = [];
	for (let i = 0; i < listings.length; i++){
		!categories.includes(listings[i].commodity_category) && 
		categories.push(listings[i].commodity_category);
	}

	for (let i = 0; i < categories.length; i++){
		console.log(" -- " + categories[i].toUpperCase() + " -- ");  //title elements
		let filtered = data.filter(item => item.cat === categories[i]);
		console.log(filtered);
	}
	*/

	/* ----- PLACEHOLDER - Get listing data via API ----- 
    useEffect ( () => {
        axios.get('https://african-marketplace-03.herokuapp.com/api/listings')
            .then ( response => {
                console.log('Response: ', response); // <------ ADD: after API provided
            })
            .catch( error => {
                console.log('Get Error: ', error);
            })
    }, [])// <------ CONFIRM: Trigger on initial load?
	
	// Register new users with POST BaseURL + /api/auth/register
	// Login as existing user with Post BaseURL + /api/auth/login
	// Get a list of all users with GET BaseURL + /api/users
	// Get a user by id with GET BaseURL + /api/users/:id
	// And delete user by id with DELETE BaseURL + /api/users/:id
	// Add new listing with POST BaseURL + /api/listings
	// Get a list of all listings with GET BaseURL + /api/listings
	// Get a listing by id with GET BaseURL + /api/listings/:id
	// And not yet functional but currently working on delete listing by id with DELETE BaseURL + /api/listings/:id
	*/

	// ----- Loop listings, call Item.js for each ----- 
	return (
		<div>
			<h2>Market Place Listings</h2>
			<Search listings={listings} setSearchResults={setSearchResults}/>
			<div className='listings-container'>
				{searchResults.map( item => {
					return <Item item={item} key={item.id}/>
				})}	
        	</div>
  
		</div>
	)
}
export default Listing;
