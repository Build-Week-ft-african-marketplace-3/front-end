import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';


const AddItem = (props) => {
    const [product, setProduct] = useState({
        product_name: "",
        product_price: "",
        product_description: "",
        location: ""
    });
    
    const { setListings } = props;

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth().post(`api/listings`, product)
            .then(res => {
                console.log(res.data);
                setListings(res.data);
                
            })
            .catch(err => {
                console.log(err);
              });
        // make axios call to post a new product
        // set local storage to match server data
        // push to items list
        //handle errors if any
    }
    
    const { product_name, product_price, product_description, location } = product;



    return (
        <div>
            <form onSubmit={handleSubmit}>
            <div className="form">					
                        <div className="form-group">
                            <label>Name</label>
                            <input value={product_name} onChange={handleChange} name="product_name" type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Price</label>
                            <input value={product_price} onChange={handleChange} name="product_price" type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <input value={product_description} onChange={handleChange} name="product_description" type="text" className="form-control"/>

                        </div>
                        <div className="form-group">
                            <label className="form-label">Location</label>
                            <input id="add-item" value={location} onChange={handleChange} name="location" type="text" className="form-control"/>
                        </div>
                                        
            
                    <div className="modal-footer">			    

                        <input type="submit" className="btn btn-info" value="ADD"/>

                    </div>

                </div>

            </form>
        </div>
    )
};

export default AddItem;