import React, {useState} from "react";
import axios from 'axios';
import dummy_data from '../DummyData';
import Search from './Search';
import Item from './Item';


const Listing = () => {
	
	// ----- Set State + Initial Values ----- 
	const [listings, setListings] = useState(dummy_data);

	/*
	//----- Get Listing Data Via API -----
    useEffect ( () => {
        axios.get('URL NEEDED')
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
			<h2>===== Search Bar Here ===== </h2>
			<div className='search-container'>
				{/* <SearchBar /> */}
			</div>
			<h2>===== Listings Here =====</h2>
			<div className='listings-container'>
				{listings.map( item => (
					<Item item={item}/>
				))}	
        	</div>
  
		</div>
	)
}
export default Listing;
