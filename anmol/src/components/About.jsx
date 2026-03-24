import React from 'react'

export default function About() {
  return (
<section className="min-h-screen bg-linear-to-b from-black via-gray-900 to-black text-white px-10 flex items-center">  
   <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT SIDE - TEXT */}
        <div>
          <h2 className="text-2xl font-bold mb-4">ABOUT</h2>

          <p className="text-gray-400 leading-relaxed">
            Graphic Designer with 10+ years of experience specializing in IT 
            department management for international logistics companies.
            I can implement effective IT strategies and global values.
          </p>

          <p className="text-gray-400 mt-4 leading-relaxed">
            My greatest strength is business awareness, which enables me to 
            permanently streamline infrastructure and applications.
          </p>

          <p className="mt-6 text-md text-gray-500">
            Indri (karnal) <br /> 
           132041 
          </p>
        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12"
            alt="profile"
            className="rounded-lg grayscale shadow-lg"
          />
        </div>

      </div>
    </section>
  )
}
