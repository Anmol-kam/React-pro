import React from 'react'
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";


export default function Nav2() {
    const menu=[
        {href:"/", Name:"Home"},
        {href:"/", Name:"About"},
        {href:"/", Name:"Contact"},
        {href:"/", Name:"Menu"}
      
     
    ]
const [ open, close]=usestate(true)

const toggle=()=>{
    close(!open)
}

  return (
 <>
 <nav className='bg-black text-white  flex justify-between p-4'>
    <div>
        logo
    </div>
     
     <ul  className='flex gap-10'>
      {
          menu.map((v,i)=>(
            <li key={i}><a href={v.href}>{v.Name}</a></li>
          ))
      }
        
     </ul>
     <button >LOG IN</button>

 </nav>
 </>
  )
}
