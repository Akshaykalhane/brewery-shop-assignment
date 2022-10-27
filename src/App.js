import React, { useEffect, useState } from 'react';
import './App.css';
import Product from './product';
import Filter from './filter';
import SearchSection from './Search';

const App=()=>{

  const [brewery,setBrewery] = useState([]);

  useEffect(()=>{
    
  },[])

  return(
    <>
      <SearchSection />
      <Filter />
      <Product />
    </>
  )
}


export default App;