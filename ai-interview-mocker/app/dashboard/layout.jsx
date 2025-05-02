import React from 'react'
import Header from './_components/Header'

function Dashboardlayout({children}) {
  return (
    <div>
      <Header/>
      <div className='max-5  md-20 lg:mx-36' >
      {children}
      </div>
     
    </div>
  )
}

export default Dashboardlayout
