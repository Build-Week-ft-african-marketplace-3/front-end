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
                        placeholder="Search listings..."
                    />
                </label>
            </form>
        </div>
    )
}


