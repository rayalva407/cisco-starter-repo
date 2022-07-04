import React from 'react'
import Ip from './Ip'

function Exhibit({heading}) {
  return (
    <div className='exhibit rounded-3 p-3 m-2'>
      <p className='text-center'>{heading}</p>
      <div className="exhibit-content rounded text-center p-3 m-2">
        <h3>ipv4:</h3>
        <Ip v={"v4"} />
        <h3>ipv6:</h3>
        <Ip v={"v6"} />
      </div>
    </div>
  )
}

export default Exhibit