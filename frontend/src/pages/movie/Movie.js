import React, {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'

import getArticle from "../../services/getArticle"
import Actors from '../../components/acticle/Actors'
import Card from '../../components/acticle/Card'
import Story from '../../components/acticle/Story'
import Video from '../../components/acticle/Video'
import "./Movie.css"

function Movie() {
  const {id} = useParams()
  const [data, setData] = useState({})

  useEffect(() => {
    getArticle(setData,id)
  }, [])

  return (
    <div className='movie'>
      <section className = "movie--card">
        <img 
             className='movie--img' 
             src= { data?.image }
             alt="" 
        />
        <Card data = {data} />
      </section>
      <Story story = {data.plotLocal}/>
      <Actors actors = {data.actorList}/>
      <Video trailer = {data.trailer?.linkEmbed}/>
    </div>
  )
}

export default Movie