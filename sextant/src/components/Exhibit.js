import React from 'react'

function Exhibit({heading}) {
  return (
    <div className='exhibit rounded-3 p-3 m-2 w-25'>
      <p className='text-center'>{heading}</p>
      <div className="exhibit-content rounded text-center m-2">
        Exhibit content
      </div>
    </div>
  )
}

export default Exhibit