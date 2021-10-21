import React, {useState, useEffect} from "react";
import axiosWithAuth from '../utils/axiosWithAuth';
import Search from './Search';
import Item from './Item';
import '../item.css';

// import dummy_data from '../DummyData';

/* ----- PLACEHOLDER FOR LISTING () - Create a category header ----- 
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

const Listing = () => {
	
	// ----- Set State + Initial Values ----- 
	const [ searchText, setSearchText ] = useState('');
	const [ listings, setListings ] = useState([]); // Listings from API
	// const [ listings, setListings ] = useState(dummy_data); // Listings from Dummy Data
	
	// ----- Search listing for search text ----- 
	function searchListings (searchText){
		let results = [];
		for (let i = 0; i < listings.length; i++){
			for (let key in listings[i]){
				if (typeof listings[i][key] === 'string' && 
					listings[i][key].toLowerCase().includes(searchText.toLowerCase())){
						results.push(listings[i]);
						break;
				}
			}   
		}  
		return results;   
	}

	// ----- Delete listing data via API ----- 
	function deleteItem (event) {
		const itemId = event.target.id;
		console.log('Delete Item: ', itemId);
		axiosWithAuth().delete(`https://african-marketplace-03.herokuapp.com/api/listings/${itemId}`)
			.then(response => {
				console.log('Response: ', response);
			})
			.catch(error => {
				console.log(error);
			})
	}

	// ----- Get listing data via API ----- 
    useEffect ( () => {
        axiosWithAuth().get('https://african-marketplace-03.herokuapp.com/api/listings')
            .then ( response => {
				setListings(response.data);
            })
            .catch( error => {
                console.log('Get Error: ', error);
            })
    }, [listings]) 


	// ----- Loop listings, call Item.js for each ----- 
	return (
		<div>
			<h2>Market Place Listings</h2>
			<Search searchText={searchText} setSearchText={setSearchText}/>
			<div className='wrapper'>
				{
				searchListings(searchText).map( item => {
					return <Item item={item} key={item.product_id} deleteItem={deleteItem}/>
				})
				}
			</div>
		</div>
	)
}
export default Listing;

// ----- API FOR LISTING -----
// Add new listing with POST BaseURL + /api/listings
// Get a list of all listings with GET BaseURL + /api/listings
// Get a listing by id with GET BaseURL + /api/listings/:id
// And Delete listing by id with DELETE BaseURL + /api/listings/:id (edited) 