import React from 'react'

import "./Pagination.css" 

function Pagination() {
  return (
    <div className='pagination'>
     
          <div className="pagination--item">1</div>
          <div className="pagination--item">2</div>
          <div className="pagination--item">3</div>
          <div className="pagination--item">...</div>
          <div className="pagination--item">
            <i class="fa-solid fa-backward-fast fa-sm"></i>
          </div>
    </div>
  )
}

export default Pagination