import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import axiosWithAuth from '../utils/axiosWithAuth';


const AddItem = () => {
    const [product, setProduct] = useState({
        name: "",
        price: "",
        description: ""
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
    
    const { name, price, description } = product;



    return (
        <div>
            <form onSubmit={handleSubmit}>
            <div className="modal-body">					
                        <div className="form-group">
                            <label>Title</label>
                            <input value={name} onChange={handleChange} name="name" type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Director</label>
                            <input value={price} onChange={handleChange} name="price" type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Genre</label>
                            <input value={description} onChange={handleChange} name="commodity_product" type="text" className="form-control"/>
                        </div>
                                        
            </div>
                    <div className="modal-footer">			    
                        <input type="submit" className="btn btn-info" value="Save"/>
                    </div>



            </form>
        </div>
    )
};

export default AddItem;