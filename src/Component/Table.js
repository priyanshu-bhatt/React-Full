import React from 'react'

export default function Table({table}) {
  return (
    <div><h1>This is Table Componenet</h1>
    <table>
        <thead>
            <tr>
                
                {table[0].map((x)=> <td>{x}</td>)}
                

            </tr>
        </thead>
        <tbody>
            {table.slice(1,table.length).map((x,i)=>
            {
            return(
                <tr>
                    <td>
                        {x[0]}
                    </td>
                    <td>
                        {x[1]}
                    </td>
                    <td>
                        {x[2].map((y,i)=>
                       <td>{y}</td> )}
                    </td>

                </tr>
            )}
            )}
           
        </tbody>
    </table>
        
    </div>
  )
}
