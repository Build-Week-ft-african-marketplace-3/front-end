import React from 'react';

export default function Search (props) {

    // ----- State ----
    const { searchText, setSearchText } = props;

    // ----- Update Input Field State -----
    const onChange = (event) => {
        setSearchText(event.target.value);
    }

    // ----- Submit Search -----
    const onSubmit = (event) => {
        event.preventDefault();
    }

    return (
            <form id='search-form' onSubmit={onSubmit}>
            {/* <form id='search-form'> */}
                <label id='search-label'> Search: </label>
                    <input 
                        id='search-bar' 
                        type='text' 
                        name='search' 
                        value={searchText} 
                        onChange={onChange}
                        placeholder="Search listings..."
                    />
            </form>
    )
}


