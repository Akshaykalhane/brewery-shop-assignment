import React from "react"
import './filter.css';

const Filter=({filterValue,data})=>{

    const handleSelectValue=(e)=>{
        filterValue(e.target.value)
    }

    return(
        <>
            <select name="brewery_type" onChange={handleSelectValue}>
                <option value="all">All</option>
                <option value="micro">Micro</option>
                <option value="large">Large</option>
                <option value="brewpub">Brewpub</option>
                <option value="closed">Closed</option>
            </select>
            <select name="city">
                <option value="all">All</option>
                {data.map((city)=>{
                    return(
                    <option value={city.city} key={city.id}>{city.city}</option>
                    )
                })}
            </select>
        </>
    )
}

export default Filter;