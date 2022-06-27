import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import './SearchBar.css'

function SearchBar() {
  const [searchTitle, setSearchTitle] = useState('')

  return (
    <div className='searchbar'>
        <i class="fa-solid fa-magnifying-glass"></i>
        <input 
          className='searchbar--input' 
          type="text" 
          placeholder='ابحث عن فلم أو مسلسل' 
          value={searchTitle}
          onChange = {e => setSearchTitle(e.target.value)}
        />
        <a 
          // to = {"/search?searchtitle=" + searchTitle}
          className="btn btn_curved"
          // onClick = {() => window.location = "/search?searchtitle=" + searchTitle }
          href = {"/search?searchtitle=" + searchTitle}
        >
            بحث
        </a>
    </div>
  )
}

export default SearchBar