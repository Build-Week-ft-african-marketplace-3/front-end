import React, {useState, useEffect} from "react";

import Search from './Search';
import Item from './Item';
import getListings from './../utils/getListings';

import AddItem from "./AddItem";
// import dummy_data from '../DummyData';

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
	
	
	// ----- Get listing data via API ----- 
    useEffect ( () => {
        getListings(setListings);
    }, []) 

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

	// ----- Loop listings, call Item.js for each ----- 
	return (
		<div>
			<h2>Market Place Listings</h2>
			<AddItem setListings={setListings}/>
			<Search searchText={searchText} setSearchText={setSearchText}/>
			<div className='wrapper'>
				{
				searchListings(searchText).map( item => {
					return <Item item={item} key={item.product_id}/>
				})
				}
        	</div>
  
			</div>
	)
}
export default Listing;
