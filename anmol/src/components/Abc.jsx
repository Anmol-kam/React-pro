import React,{useState} from  'react'

export default function Abc() {
    const [text, setText]= useState("")

    const Uppercase=()=>{
        setText(text.toUpperCase())
    }
    
    const Lowercase=()=>{
        setText(text.toLowerCase())
    }
    
    const Delete=()=>{
        setText("")
    }
    
  return (
    <>
    <div>
        <input  onChange={(e)=> setText(e.target.value)} value={text} className='border-2 border-black' type="text"  />
        <br />
        <br />

    </div>

    <button onClick={Uppercase} className='bg-blue-400 p-2 rounded-2xl'> Uppercase</button>
    <button onClick={Lowercase} className='bg-blue-400 p-2 rounded-2xl'> Lowercase</button>
    <button onClick={Delete} className='bg-blue-400 p-2 rounded-2xl'>Delete</button>
    </>
  )
}
