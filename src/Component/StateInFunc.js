import React, { useState } from 'react'

export default function StateInFunc() {
    var [count,setcount]=useState(0)
    
    // var [name,setname]=useState("priyanshu")
    // var [sex,setsex]=useState("male")
    // let changename=()=>{
    //     setname(name="aaaddii")
    // }
    // let sexchange=()=>{
    //     setsex(sex="female")
    // }
  return (
    <div>
        <h1> This is Functional Components</h1>
        {/* <h2> The Count value for func compo : {count} and the name is {name} and sex is {sex}</h2> */}
        <h2> The Count Value is : {count}</h2>
        <button onClick={()=>{setcount(count+1)}} >Increment </button> 
        <button onClick={()=>{setcount(count-1)}}>Decrement</button>
        {/* <button onClick={changename}>Name change</button>
        <button onClick={sexchange}>Change Sex</button> */}
        
    </div>
  )
}
