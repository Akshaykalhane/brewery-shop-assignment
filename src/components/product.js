import React from "react";
import './product.css';

const Product = (props) => {
    return (
        <>
            <div className="shop-container">
                {props.data.map((item)=>{
                    return(
                        <div key={item.id} className="shop">
                            <h2>{item.name}</h2>
                            <p>Type : {item.brewery_type}</p>
                            <p>City : {item.city}</p>
                            <p>Street : {item.street}</p>
                            <p>State: {item.state}</p>
                            <p>Country : {item.country}</p>
                            <a href={item.website_url} target="_blank">view Brewery</a>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Product;