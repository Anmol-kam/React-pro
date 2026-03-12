import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";




export default function Nav2() {
    const menu=[
        {href:"/", Name:"Home"},
        {href:"/", Name:"About"},
        {href:"/", Name:"Contact"},
        {href:"/", Name:"Menu"}
      
     
    ]
    const [open, setOpen]= useState(false)

    const togg  =()=>{
        setOpen(!open)
    }


  return (
 <>
 <nav className='bg-black text-white  flex justify-between p-4 relative items-center'>
    <div className='text-3xl '>
        LOGO
    </div>
     
     <ul  className='hidden md:flex gap-10 text-xl'>
      {
          menu.map((v,i)=>(
            <li key={i}><a href={v.href}>{v.Name}</a></li>
          ))
      }
        
     </ul>
     <button className='hidden md:block bg-blue-600 p-2 rounded-sm hover:bg-blue-800 text-xl' >LOG IN</button>
     <div className='block md:hidden' onClick={togg}>
        {
            open  ?  <RxCross2/> :<FaBars/> 
        }
     </div>

    {
        open && (
            <ul className='bg-gray-950 text-white w-full absolute top-10 flex flex-col left-0 gap-2 mt-7'>
                {
                 menu.map((v,i)=>(
            <li key={i}><a href={v.href}>{v.Name}</a></li>
          ))
   
                }
            </ul>
        )
    }
 </nav>
 </>
  )
}
