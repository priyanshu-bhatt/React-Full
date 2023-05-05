import React, { useState } from 'react'

export default function Button(props) {
    const [buttonText, setButtonText] = useState('Click Me');
    const callback= props.func
    function handleClick() {
        setButtonText(' Clicked');
        callback()
    }
  return (
    <div>
        <h1> This is Question 1</h1><br/>
        <label>{props.label }</label> <br/>
        <button onClick={handleClick}>{buttonText}</button><br/><br/>
    </div>
  )
}






