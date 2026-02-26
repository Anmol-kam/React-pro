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
 <nav className='bg-black text-white  flex justify-between p-4 relative '>
    <div>
        logo
    </div>
     
     <ul  className='hidden md:flex gap-10'>
      {
          menu.map((v,i)=>(
            <li key={i}><a href={v.href}>{v.Name}</a></li>
          ))
      }
        
     </ul>
     <button className='hidden md:block' >LOG IN</button>
     <div className='block md:hidden' onClick={togg}>
        {
            open  ?  <RxCross2/> :<FaBars/> 
        }
     </div>

    {
        open && (
            <ul className='bg-gray-950 text-white w-full left-0 absolute top-10 flex flex-col gap-2'>
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
