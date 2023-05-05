import React, { useEffect, useState } from 'react'

export default function UseEffectss() {
    const [count,setcount]=useState(0)
    const [number,setnumber]=useState(0)
    
    useEffect(()=>{
        console.log("Component Did Mount")
        const eventhandle = ()=> console.log("Hello Effect")
       document.addEventListener("click",eventhandle)
       return ()=>{
        console.log("removed side effect")
        document.removeEventListener("click",eventhandle)
       }
    } ,[count])
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>{setcount(count+1)}}>cLICK ME</button>
        <h1>{number}</h1>
        <button onClick={()=>{setnumber(number+1)}}>cLICK ME</button>
    </div>
  )
}
