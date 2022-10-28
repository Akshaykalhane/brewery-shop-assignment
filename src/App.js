import React, { useEffect, useState } from 'react';
import './App.css';
import Product from './components/product';
import Pagination from './components/pagination';
import Filter from './components/filter';
import SearchSection from './components/Search';
import SurpriseMe from './components/surprise';

const App=()=>{

  let url="https://api.openbrewerydb.org/breweries";

  const [brewery,setBrewery] = useState([]);
  const [filterText,setFilterText]=useState("all");
  const [currentPage,setCurrentPage]=useState(1);
  const [postPerPage,setPostPerPage]=useState(8);

  useEffect(()=>{
    fetch(`${url}`,{method:'GET'})
    .then((res)=>res.json())
    .then((data)=>setBrewery(data))
  },[])


  const lastPostIndex=currentPage * postPerPage;
  const firstPostIndex=lastPostIndex-postPerPage;
  
  
  const filterValue=(value)=>{
    setFilterText(value)
  }

  const FilterProductList=brewery.filter((item)=>{
    console.log(item.brewery_type)
    if(filterText==="micro") return item.brewery_type==="micro";
    if(filterText==="large") return item.brewery_type==="large";
    if(filterText==="closed") return item.brewery_type==="closed";
    if(filterText==="brewpub") return item.brewery_type==="breqpub";
    return item;
  })

  const currentPost = FilterProductList.slice(firstPostIndex,lastPostIndex);


console.log(brewery)
  return(
    <>
      <SearchSection  />
      <Filter filterValue={filterValue} data={brewery} />
      <Product data={currentPost}  />

      <Pagination totalPost={brewery.length}
      postPerPage={postPerPage}
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
       />
      <SurpriseMe data={brewery} />
    </>
  )
}


export default App;