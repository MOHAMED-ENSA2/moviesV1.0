import React from 'react'

function Video({trailer}) {
  return (
    <section className='watch article--section'>
        <h3 className='article--title'>
                مشاهدة
        </h3>
        <article className='watch--video'>
            <iframe  src={trailer || "https://www.imdb.com/video/imdb/vi2959588889/imdb/embed"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    

        </article>
    </section>
  )
}

export default Video