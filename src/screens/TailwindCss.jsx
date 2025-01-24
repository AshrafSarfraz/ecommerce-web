import React from 'react'

export default function TailwindCss() {
  return (
    <div>
    <div className='bg-slate-900  lg:flex md:flex flex-wrap justify-between items-center py-4 px-6 text-white' >
     {/* logo */}
     <div className=''>
       <h1 className='text-white font-bold text-2xl ' >Ecommerce-Pak</h1>
     </div>
      
       {/* navbar */}
     <div className=' sm:block lg:block   '>
      <ul className='flex items-center gap-4'>
        <li className= 'hover:bg-white  hover:text-black px-3 py-1 rounded-lg font-semibold text-center'><a href='#'>Home</a></li>
        <li className='hover:bg-white  hover:text-black px-3 py-1 rounded-lg font-semibold text-center'><a href='#'>About</a></li>
        <li className='hover:bg-white  hover:text-black px-3 py-1 rounded-lg font-semibold text-center'><a href='#'>Contact Us</a></li>
        <li className='hover:bg-white  hover:text-black px-3 py-1 rounded-lg font-semibold text-center'><a href='#'>Profile</a></li>
      </ul>
     </div>
     
      {/* Right */}
     <div className='flex items-center  md:py-2    '>
       <input placeholder='Search here' className=' text-[14px] bg-slate-300  w-[200px] py-2 px-3 rounded-l-lg outline-none text-black 
       md:w-[80%] 
       ' />
       <button className='bg-slate-700 rounded-r-lg py-2 px-3 text-[14px]    ' >
        Search
       </button>
     </div>
     </div>


     {/* Mobile */}

    
 
   </div>
  )
}
