import React, { useState } from "react";
import './surprise.css';

const SurpriseMe=({data})=>{
    const [surpriseData,setSurprise]=useState([]);
    const handleInput=()=>{
        setSurprise(data[0])
    }
    
    return (
        <>
            <button className="surprise-btn" onClick={handleInput}>Surprise Me</button>
            {
                surpriseData.length!==0 && (
                    <div className="shop">
                
                            <h2>{surpriseData.name}</h2>
                            <p>Type : {surpriseData.brewery_type}</p>
                            <p>City : {surpriseData.city}</p>
                            <p>Street : {surpriseData.street}</p>
                            <p>State: {surpriseData.state}</p>
                            <p>Country : {surpriseData.country}</p>
                            <a href={surpriseData.website_url} target="_blank">View Brewery</a>
                    </div>
                
                )
            }
        </>
    )
}

export default SurpriseMe;