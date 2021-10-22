import React, {useState, useEffect} from "react";
import axiosWithAuth from '../utils/axiosWithAuth';
import Search from './Search';
import Item from './Item';
import AddItem from './AddItem';
import '../item.css';


const Listing = () => {
	
	// ----- Set State + Initial Values ----- 
	const [ searchText, setSearchText ] = useState('');
	const [listings, setListings] = useState([]); // Listings from API
	const [addDisplay, setAddDisplay] = useState(false);


	const addHandler = e => {
		e.preventDefault();
		setAddDisplay(!addDisplay);
	}
	
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
			<div className={"search-post"}>
			<button className={"logout-btn display-btn"} onClick={addHandler}>{ addDisplay ? "Hide" : "Post Your Product"}</button>
			<AddItem setListings={setListings} addDisplay={ addDisplay}/>
			<Search searchText={searchText} setSearchText={setSearchText}/>
			</div>
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