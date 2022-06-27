import React from 'react'
import {Link} from "react-router-dom"

import './NotFound.css'

function NotFound() {
  return (
    <div className='notFound'>
        <div className='notFound--error'>   
            404
        </div>
        <div className='notFound--message'>
            صفحة غير موجودة. <Link className='link' to = '/'> <span>الصفحة الرئيسية</span></Link>
        </div>
    </div>
  )
}

export default NotFound