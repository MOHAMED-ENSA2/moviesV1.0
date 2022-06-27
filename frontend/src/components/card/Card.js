import React from 'react'
import {Link} from "react-router-dom"

import './Card.css'
import Rating from './Rating'

function Card({infos}) {
  const { id , fullTitle , title ,  image , imDbRating } = infos

  return (

    <Link to = {`/film/${id}`} className = "link">
        <div
        style={{backgroundImage : `url(${image})` }}
        className='card'
        >
            <Rating imDbRating = {imDbRating} />
            {/* <div className='card--episode'>
                <div>
                    الحلقة
                </div>
                <div>
                    12
                </div>
            </div> */}
            <div className='card--bottom'>
                <div className='card--play'>
                    <i class="fa-solid fa-circle-play fa-3x"></i>
                </div>
                <div className='card--title'>
                    {title}
                </div>
                <div className='card--details'>
                    مشاهدة وتحميل الحلقة الثانية عشر 12 من  من الآن سيبدأ ن From Now On Showtime مترجم
                </div>
            </div>
        </div>
    </Link>
  )
}

export default Card