import React, { useEffect, useState } from 'react'

import Card from '../card/Card'
import "./Hero.css"

function Hero({service, searchTitle}) {
  const [data, setData] = useState([])

  useEffect(() => {
    service(setData, searchTitle) ;
  } , [])

  return (
    <div className='hero'>
      { data?.map((elm , index) => <Card  key = {index} infos = {elm} /> ) }               
    </div>
  )
}

export default Hero