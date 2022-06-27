import React from 'react'

import "./Filter.css"

function Filter() {
 
  return (
    <div className='filter' >
        <div className='filter--item' >
            <div>
                النوع
            </div>
            <i class="fa-solid fa-angle-down"></i>
        </div>
        <div className='filter--item' >
            <div >
                القسم
            </div>
            <i class="fa-solid fa-angle-down"></i>
        </div>
        <div className='filter--item' >
            <div >
               السنة
            </div>
            <i class="fa-solid fa-angle-down"></i>
        </div>
        <div className='filter--item'>
            <div >
                اللغة
            </div>
            <i class="fa-solid fa-angle-down"></i>
        </div>        
        
    </div>
  )
}

export default Filter