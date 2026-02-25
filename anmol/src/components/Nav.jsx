import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";



export default function Navbar() {
  const navbar = [
    { href:"/" ,name:"Home"},
    { href:"/" ,name:"about"},
    { href:"/" ,name:"services"},
    { href:"/" ,name:"contact"}
  ]

  const  [open ,close] = useState( true)


  const togglemenu = ()=>{
    close(!open)
  }



  return (
    <nav className=' bg-black flex text-white justify-between px-10 h-10 items-center relative'>

      {open}

      <div>
        <a href="$/">
        <h1>logo</h1>


        </a>
      </div>

      <ul className=' hidden md:flex gap-2'>
      {
        navbar.map((v , i)=>(
            <li key={i}><a href={v.href}>{v.name}</a></li>
        ))
      }
      </ul>


      <div className=' hidden md:block'>
        <input className=' border-2 border-amber-100' type="text" name="" id="" placeholder='search' />
        <button>Submit </button>
      </div>

      <div className='md:hidden' onClick={togglemenu}>
        {
          open ?<RxCross2/>:<FaBars/>
        }

      </div>

      {
        open &&(
          <ul className=' md:hidden bg-gray-800 text-white w-full absolute top-10 left-0 flex  flex-col gap-3 text-center'>
          {
            navbar.map((v,i)=>(
                <li key={i}><a href={v.href}>{v.name}</a></li>
            ))
          }
          </ul>
        )
      }
    



   

    </nav>
  )
}