import React from 'react'
import {useSearchParams} from "react-router-dom"

import Filter from '../../components/filter/Filter'
import Hero from '../../components/hero/Hero'
import Pagination from '../../components/pagination/Pagination'
import SearchBar from '../../components/search/SearchBar'
import getSearchResults from '../../services/search'

// import "./Home.css" 

function Search() {
  const [searchParams , setSearchParams] =  useSearchParams()
  console.log(searchParams.get("searchtitle"))
  
  return (
    <div className='home'>
      <div className='home--top'>
        <Filter/>
        <SearchBar/>
      </div>
        <Hero 
            service={getSearchResults} 
            searchTitle = {searchParams.get("searchtitle")} 
        />
        <Pagination/>
    </div>
  )
}

export default Search