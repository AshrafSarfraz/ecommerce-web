import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

function Layout({children}) {
  return (
   <div className='w-100' >
    <Navbar/>
     <div className="container">
        {children}
    </div>
    <Footer/>
   </div>
    

  )
}

export default Layout