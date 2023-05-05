import React, { useState } from 'react'

export default function Counter() {
    var [count,setcount]=useState(0)
  return (
    <div>
       <h1> This is Question No:3</h1>
        
        <h2> The Count Value is : {count}</h2>
        <button onClick={()=>{setcount(count+1)}} >Increment </button> 
        <button onClick={()=>{setcount(count-1)}}>Decrement</button>
    </div>
  )
}
