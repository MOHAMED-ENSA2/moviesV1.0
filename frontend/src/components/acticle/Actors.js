import React from 'react'
import ActorCard from './ActorCard'

function Actors({actors}) {
  return (
    <section className='actors article--section'>
        <h3 className='article--title'>
            طاقم التمثيل
        </h3>
        <article>
          {
            actors?.map((elm, index) => <ActorCard key = {index} data = {elm}  />)
          }
            
        </article>
    </section>
  )
}

export default Actors