import React from 'react'
import Ip from './Ip'

function Exhibit({heading, v}) {
  const header = `Public IP${v} Address:`
  return (
    <div className='exhibit rounded-3 p-3 m-2'>
      <p className='text-center'>{heading}</p>
      <div className="exhibit-content rounded text-center p-3 m-2">
        <h3>{header}</h3>
        <Ip v={v} />
      </div>
    </div>
  )
}

export default Exhibit