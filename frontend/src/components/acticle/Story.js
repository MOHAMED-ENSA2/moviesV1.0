import React from 'react'

import "./Article.css"

function Story({story}) {
  return (
    <article className='story article--section'>
        <h3 className='article--title'>
          القصة
        </h3>
      <p>
        {story}
      </p>
    </article>
  )
}
  
export default Story