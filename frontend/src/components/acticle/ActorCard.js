import React from 'react'

function ActorCard({data}) {
  return (
    
    <div className='actor'>
        <img  className='actor--photo' src={data?.image} alt="" />
        <div className='actor--info'>
            <div className='name'>
               {data?.name}
            </div>
            <div className='role'>
                    {data?.asCharacter}
            </div>
        </div>
    </div>
  )
}

export default ActorCard