import React from 'react'

export default function ConditionalRender(props) {
    const conditional= props.cond
    if(conditional){
        return(
        <h1> Hello</h1>
        )
}
else{
    return(
    <h1> Hii</h1>
    )
}
  
}
