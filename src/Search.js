import React from "react";
import './search.css';

const Search = () => {
    
    return (
        <>
            <div class="hero-section">
                <h2>Find The Brewery Near You</h2>
                <input type="text" placeholder="Search Here" />
                <div class="list-items">
                    <div class="list-item">
                        <p>Item</p>
                        <div class="detail">
                            Lorem ipsum dolor sit amet.
                        </div>
                    </div>
                    <div class="list-item">
                        <p>Item</p>
                    </div>
                    <div class="list-item">
                        <p>Item</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Search;