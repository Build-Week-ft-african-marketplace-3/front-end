import React, {useState} from 'react';
import axios from 'axios';

export default function Search () {

    // ----- State -----
    const initialFormValue = {
        search: ''
    }
    const [ searchText, setSearchText ] = useState(initialFormValue);

    // ----- Update Input Field State -----
    const onChange = (event) => {
        setSearchText({[event.target.name]: event.target.value})
    }

    // ----- Submit Search -----
    const onSubmit = (event) => {
        event.preventDefault();
        console.log('Search Text: ', searchText)
        /*
        axios.post('https://african-marketplace-03.herokuapp.com/', event.target.value.trim())
            .then(response => {
                console.log('Post Response: ', response);
            })
            .catch(error => {
                console.log('Post error: ', error);
            })
            .finally( () => {
                setSearchText(initialFormValue);
            })
        */
    }

    return (
        <div className='search-container'>
            <form id='search-form' onSubmit={onSubmit}>
                <label>
                    <input 
                        id='search-bar' 
                        type='text' 
                        name='search' 
                        value={searchText.search} 
                        onChange={onChange}
                    />
                </label>
                <button id='search-btn'>My Search</button>
            </form>
            <hr/><hr/>
        </div>
    )

}