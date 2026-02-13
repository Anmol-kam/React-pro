import React from 'react'
import a1 from '../image/image1.jpg'
import a2 from '../image/image2.jpg'
import a3 from '../image/image3.jpg'
import a4 from '../image/image4.jpg'
export default function Navbar() {
  return (
   <>
   <nav className="bg-black text-white">
    <div className=" mx-auto px-6  ">
      <div className="flex items-center h-16 justify-between">
        
        <div className="text-xl font-bold">
          MyLogo
        </div>

        <div >
        <ul className="space-x-6  flex items-center font-bold gap-7">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">About</a>
          <a href="#" className="hover:text-gray-300">Services</a>
          <a href="#" className="hover:text-gray-300">Contact</a>
           </ul>

        </div>
        <div className=" ">
            <button className="bg-blue-500/25 border-2 p-2 rounded-2xl " >LOG IN</button>
        </div>

      </div>
    </div>
  </nav>
    <section>
        <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">
        Appliances for your home | Up to 55% off
      </h2>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <img src={a1} className="rounded mb-1"/>
          <p>Air conditioners</p>
        </div>

        <div>
          <img src={a2} className="rounded mb-1"/>
          <p>Refrigerators</p>
        </div>

        <div>
          <img src= {a3} className="rounded mb-1"/>
          <p>Microwaves</p>
        </div>

        <div>
          <img src= {a4} className="rounded mb-1"/>
          <p>Washing machines</p>
        </div>
      </div>

      <a href="#" className="text-blue-600 text-sm mt-4 inline-block hover:underline">
        See more
      </a>
    </div>

    </section>


     

   </>
  )
}
