import React from 'react'
import { FaMobileAlt } from "react-icons/fa";
import a1 from "../image/"


export default function Home() {
const menu=[
    {href:"/" , Name:"Home"},
    {href:"/" , Name:"About"},
    {href:"/" , Name:"Resume"},
    {href:"/" , Name:"Portfolio"}
]

  return (
    <>
<nav className=' bg-black text-white flex justify-between h-15 p-8'>
    <ul className='flex items-center gap-10 '>
        {
        menu.map((v,i)=>(
        <li key={i}><a href={v.href}>{v.Name}</a></li>
        ))
        }
    </ul>
        
        <button className='flex items-center gap-1.5'><FaMobileAlt /> 716-666-67435</button>
    
</nav>

   <div>
    <img src={a1} className='w-screen h-screen' />
   </div>

    </>
  )
}
