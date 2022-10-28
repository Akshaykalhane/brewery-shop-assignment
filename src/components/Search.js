import React, { useEffect, useState } from "react";
import './search.css';

const Search = () => {

    const [isName, setName] = useState('');
    const [searchData, setSearchData] = useState([]);

    let url = "https://api.openbrewerydb.org/breweries?by_name"

    useEffect(() => {
        fetch(`${url}=${isName}`, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                if (isName == "") return
                setSearchData(data)
            })
    }, [isName])

    const handleInput = (e) => {
        if (e.target.value == "") setSearchData([])
        setName(e.target.value);
    }




    return (
        <>
            <div className="hero-section">
                <h2>Find The Brewery Near You</h2>
                <input type="text" value={isName} placeholder="Search Here" onChange={handleInput} />
                {searchData.length !== 0 && (
                    <div className="list-items">
                        {searchData.map((item) => {
                            if (isName.length != 0) return (
                                <div className="list-item">
                                    <p key={item.id}>{item.name}</p>
                                    <div className="detail">
                                        <p>Type : {item.brewery_type}</p>
                                        <p>City : {item.city}</p>
                                        <p>Street : {item.street}</p>
                                        <p>State: {item.state}</p>
                                        <p>Country : {item.country}</p>
                                        <a href={item.website_url} target="_blank">view Brewery</a>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )}

            </div>

        </>
    )
}

export default Search;