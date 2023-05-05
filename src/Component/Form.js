import React, { useRef } from 'react'

export default function Form() {
    const input = useRef()
   function SubmitEvent(e){
        e.preventDefault()
        console.log(input.current.value)
    }
  return (
    <div>
        <h1> This is Question No: 2</h1>

        <form onSubmit={SubmitEvent}>
            <input placeholder='Enter your name' type='text' ref={input} />
            <input type='submit' placeholder='Submit'/>
        </form>

    </div>
  )
}
