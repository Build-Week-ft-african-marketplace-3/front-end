import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import axiosWithAuth from '../utils/axiosWithAuth';


const AddItem = () => {
    const [product, setProduct] = useState({
        name: "",
        price: "",
        description: "",
        location: ""
    });

    const { push } = useHistory();

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // make axios call to post a new product
        // set local storage to match server data
        // push to items list
        //handle errors if any
    }
    
    const { name, price, description, location } = product;



    return (
        <div>
            <form onSubmit={handleSubmit}>
            <div className="form">					
                        <div className="form-group">
                            <label className="form-label">Name</label>
                            <input id="add-item" value={name} onChange={handleChange} name="name" type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Price</label>
                            <input id="add-item" value={price} onChange={handleChange} name="price" type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Description</label>
                            <input id="add-item" value={description} onChange={handleChange} name="description" type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Location</label>
                            <input id="add-item" value={location} onChange={handleChange} name="location" type="text" className="form-control"/>
                        </div>
                                        
            
                    <div className="modal-footer">			    
                        <input type="submit" className="btn btn-info add-btn" value="Save"/>
                    </div>

                </div>

            </form>
        </div>
    )
};

export default AddItem;