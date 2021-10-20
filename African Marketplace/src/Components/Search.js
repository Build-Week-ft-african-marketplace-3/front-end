import React, {useState} from 'react';
import axios from 'axios';

export default function Search (props) {

    // ----- State ----
    const { listings, setSearchResults } = props;
    const [ searchText, setSearchText ] = useState('');

    // ----- Update Input Field State -----
    const onChange = (event) => {
        setSearchText(event.target.value);
        console.log('1-Event: ',event.target.value);
        console.log('1-State: ',searchText);

        setSearchResults(searchListings(searchText)); // <<<< Searches in real time
    }

    // ----- Submit Search -----
    const onSubmit = (event) => {
        event.preventDefault();
        setSearchResults(searchListings(searchText)); 
    }

    // ----- Search Listing items for search text ----- 
    function searchListings (searchText) {
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
     // ----- Reset Listings ----- 
    //  const resetForm = () => {
    //      console.log('Clicked Reset');
    //     setSearchResults(listings);
    //  }
    function resetForm () {
        console.log('Clicked Reset');
       setSearchResults(listings);
    }

    // ----- Search bar text -----
    const onFocus= (e) => e.target.placeholder = '';
    const onBlur= (e) => e.target.placeholder = 'Search...'; // TBD: Set the input field on page load?

    return (
        <div className='search-container' >
            <form id='search-form' onSubmit={onSubmit}>
            {/* <form id='search-form'> */}
                <label>
                    <input 
                        id='search-bar' 
                        type='text' 
                        name='search' 
                        value={searchText} 
                        onChange={onChange}
                        onBlur={onBlur}
                        onFocus={onFocus}
                    />
                </label>
                <button id='search-btn'>My Search</button>
                {/* <button id='search-btn' onClick={onSubmit}>My Search</button> */}
                {/* <button id='reset-btn' onClick={resetForm}>Reset</button> */} 
            </form>
        </div>
    )

}

<input type="submit" value="Submit" />

