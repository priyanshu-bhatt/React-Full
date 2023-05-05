import React, { useRef } from 'react'

export default function UncontrolledFunctional() {
    const input = useRef()
    const inpass = useRef()
   function SubmitEvent(e){
        e.preventDefault()
        console.log(input.current.value)
    }
    function passwordform(event){
        event.preventDefault()
        console.log(inpass.current.value)
    }
       
  return (
    <div className="container my-3">
        <h1> Uncontrolled function</h1>
        <form onSubmit={SubmitEvent}>
            <input placeholder='Enter your name' type='text' ref={input} />
            <input placeholder='Enter Your Password' type='password' ref={inpass} /><br/>
            <button onClick={passwordform}>ClickForPassword</button>
            <input type='submit' placeholder='Submit'/>
        </form>


    </div>
  )
}
