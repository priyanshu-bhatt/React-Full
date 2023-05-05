import React from 'react'

export default function Map({skills}) {
    const skill_map = skills.map((x,i)=>
    
     x.map((y)=><li>{y}</li>)
     )
  return (
    <div>

        <h1> This is Map Component </h1>
        <h2> Skills: {skill_map} </h2>
       </div>
  )
}
