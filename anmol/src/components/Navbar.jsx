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
    <section className=" flex justify-center  h-150 bg-gray-100 items-center  " >
        <div className="bg-white p-6 rounded-lg shadow-md w-fit  h-fit border-b-gray-500">
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


     
<footer className="bg-black text-gray-300 mt-10">
  <div className="max-w-7xl mx-auto px-6 py-10">
    
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      
    
      <div>
        <h2 className="text-white text-xl font-bold mb-3">MyLogo</h2>
        <p className="text-sm">
          Quality products for your home at the best prices.
        </p>
      </div>

    
      <div>
        <h3 className="text-white font-semibold mb-3">Quick Links</h3>
        <ul className="space-y-2 text-sm">
          <li className="hover:text-white cursor-pointer">Home</li>
          <li className="hover:text-white cursor-pointer">About</li>
          <li className="hover:text-white cursor-pointer">Services</li>
          <li className="hover:text-white cursor-pointer">Contact</li>
        </ul>
      </div>

    
      <div>
        <h3 className="text-white font-semibold mb-3">Support</h3>
        <ul className="space-y-2 text-sm">
          <li className="hover:text-white cursor-pointer">Help Center</li>
          <li className="hover:text-white cursor-pointer">Privacy Policy</li>
          <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
        </ul>
      </div>

    
      <div>
        <h3 className="text-white font-semibold mb-3">Subscribe</h3>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-2 rounded bg-gray-800 text-sm outline-none mb-3"
        />
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Subscribe
        </button>
      </div>

    </div>

    
    <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
      © 2026     MyLogo. All rights reserved.
    </div>

  </div>
</footer>



   </>
  )
}
