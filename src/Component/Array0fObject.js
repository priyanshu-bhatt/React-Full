import React from 'react'

export default function Array0fObject({student}) {
  return (
    <div>
        <h1> This is Array of Object example</h1>
        {student.map((person,index)=>{
            return(
                <div key={index}>
                    <li>Name: {person.name} id: {person.id}</li>
                    <span > Skills:</span>
                        
                    {person.skil.map((x,i)=><li key={i}> {x}</li>)}
                        
                    
                    </div>
            )
        })}
    </div>
  )
}
