import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import axiosWithAuth from '../utils/axiosWithAuth';


const AddItem = () => {
    const [product, setProduct] = useState({
        commodity_category: "",
        sub_category: "",
        commodity_product: ""
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
    
    const { commodity_category, sub_category, commodity_product } = product;



    return (
        <div>
            <form onSubmit={handleSubmit}>
            <div className="modal-body">					
                        <div className="form-group">
                            <label>Title</label>
                            <input value={commodity_category} onChange={handleChange} name="commodity_category" type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Director</label>
                            <input value={sub_category} onChange={handleChange} name="sub_category" type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Genre</label>
                            <input value={commodity_product} onChange={handleChange} name="commodity_product" type="text" className="form-control"/>
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