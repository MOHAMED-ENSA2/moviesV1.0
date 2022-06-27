import React from 'react'

function Rating({imDbRating}) {
  return (
    <div className='card--rating'>
        <i class="fa-solid fa-star">
            <div className='rating'>
                {imDbRating}
            </div>
        </i>
    </div>
  )
}

export default Rating