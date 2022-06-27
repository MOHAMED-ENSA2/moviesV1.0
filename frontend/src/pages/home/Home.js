import React from 'react'
import Filter from '../../components/filter/Filter'
import Hero from '../../components/hero/Hero'
import Pagination from '../../components/pagination/Pagination'
import SearchBar from '../../components/search/SearchBar'
import getAllSeries from '../../services/getAllSeries'

import "./Home.css" 

function Home() {
  return (
    <div className='home'>
      <div className='home--top'>
        <Filter/>
        <SearchBar/>
      </div>
        <Hero 
          service={getAllSeries}
          searchTitle = {null}
          />
        <Pagination/>
    </div>
  )
}

export default Home