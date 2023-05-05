import React, { useState } from 'react'

export default function ControlledFunctional(props) {
    const [name,setname]=useState("")
    function submitt(event){
        event.preventDefault()
        console.log({name})
    }
  return (
    <div>
        <h1>ControlledFunctional</h1>
        <form>
            <input onChange={(event)=>{setname({name: event.target.value})}} type='text' placeholder='Enter Your Name'/>
            <button onClick={(event)=>{submitt(event)}}>Submit</button>
        </form>
        
        </div>
  )
}
