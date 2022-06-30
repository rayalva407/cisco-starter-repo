import React from 'react'

function Banner({bannerText}) {
  return (
    <nav className="navbar navbar-dark bg-dark d-flex flex-column ">
      <p className="navbar-brand mb-2">{bannerText}</p>
    </nav>
  )
}

export default Banner