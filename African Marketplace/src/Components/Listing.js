import React, {useState} from "react";
import axios from 'axios';
import dummy_data from '../DummyData';
import Search from './Search';
import Item from './Item';


const Listing = () => {
	
	// ----- Set State + Initial Values ----- 
	const [listings, setListings] = useState(dummy_data);

	// ----- Create a category header -----
	let categories = [];
	for (let i = 0; i < listings.length; i++){
		!categories.includes(listings[i].commodity_category) && 
		categories.push(listings[i].commodity_category);
	}
	console.log('Categories: ', categories);
	// ..... more work to be done
	
	// for (let i = 0; i < categories.length; i++){
	// 	console.log(" -- " + categories[i].toUpperCase() + " -- ");  //title elements
	// 	let filtered = data.filter(item => item.cat === categories[i]);
	// 	console.log(filtered);
	//   }

	/*
	//----- Get Listing Data Via API -----
    useEffect ( () => {
        axios.get('https://african-marketplace-03.herokuapp.com/')
            .then ( response => {
                console.log('Response: ', response); // <------ ADD: after API provided
            })
            .catch( error => {
                console.log('Get Error: ', error);
            })
    }, [])// <------ CONFIRM: Trigger on initial load?
	*/


	// ----- Loop listings, call Item.js for each ----- 
	return (
		<div>
			<h2>Market Place Listings</h2>
			<Search />
			<div className='listings-container'>
				{listings.map( item => (
					<Item item={item}/>
				))}	
        	</div>
  
		</div>
	)
}
export default Listing;
