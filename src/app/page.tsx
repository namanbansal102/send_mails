"use client"
import Image from "next/image";
import { useState } from "react";
export default function Home() {
  
  const [pass, setpass] = useState('')
  const [val, setval] = useState()
  const [time, setTime] = useState()
  const handleClick=async ()=>{
    const response= await fetch("http://localhost:3000/api/sendmails",
      {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify({"pass": pass, "time": time,"type":val})
      })
      const data=await response.json();
      console.log(data);
      alert(`
        ${data.success} and ${data.message}`)
      
    
  }
  return (
   <>
   <center>

   <h1 className="text-3xl font-bold">Mail Sender</h1>
   <div className="border-2 border-pink-500 w-64 p-5">
    <h2>Enter Password</h2>
    <input onChange={(e:any)=>{
      setpass(e.target.value);
    }} type="text" placeholder="password" className="border-2 border-black" />

   </div>
   <br />
   <div className="border-2 border-pink-500 w-64 p-5">
    <h2>Enter Time</h2>
    <input onChange={(e:any)=>{
      setTime(e.target.value);
    }} type="text" placeholder="time" className="border-2 border-black" />

   </div>

   <br />
   <div className="flex flex-col gap-2">
   <div>
   <label htmlFor="gatepass">Apply Gatepass</label>
   <input id="gatepass" onClick={(e:any)=>{
    console.log(e.target.value);
    
    setval(e.target.value);
   }}
    name="check" value={'gatepass'} type="radio" />
   </div>
   <br />
   <div>
   <label htmlFor="going">Going Out</label>
   <input id="going" onClick={(e:any)=>{
    console.log(e.target.value);
    
    setval(e.target.value);
   }} name="check" value={'going'} type="radio" />
   </div>
  <br />
   <div>
   <label htmlFor="return">Returned In</label>
   <input id="return" name="check" onClick={(e:any)=>{
    console.log(e.target.value);
    
    setval(e.target.value);
   }} value={'return'} type="radio" />
   </div>
   <div>
   <label htmlFor="return">None</label>
   <input id="none" onClick={(e:any)=>{
    console.log(e.target.value);
    
    setval(e.target.value);
   }} name="check" value={'none'} type="radio" />
   </div>
   </div>
   <button onClick={handleClick} className="border-2 bg-red-400 w-fit mt-5 p-2 hover:bg-white">Send Mail</button>


   </center>
   </>
  );
}
