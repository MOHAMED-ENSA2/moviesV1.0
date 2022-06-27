import React from 'react'

import "./Article.css"

function Card({data}) {
    const {title, fullTitle , year, stars, genres, imDbRating , imDbRatingVotes, languages, companies} = data
  return (
    <table className='detailscard'>
        <thead>
            <tr>
                <th colSpan={2} >{fullTitle}</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>اللغة</td>
                <td>{languages}</td>
            </tr>
            <tr>
                <td>السنة</td>
                <td>{year}</td>
            </tr>
            <tr>
                <td>النوع</td>
                <td>{genres}</td>
            </tr>
            <tr>
                <td>الشركة المنتجة</td>
                <td>{companies}</td>
            </tr>
            <tr>
                <td>تقييم imdb</td>
                <td>{imDbRating}/10 ({imDbRatingVotes} صوت)</td>
            </tr>
            <tr>
                <td>النجوم</td>
                <td>{stars}</td>
            </tr>
        </tbody>
    </table>
  )
}

export default Card