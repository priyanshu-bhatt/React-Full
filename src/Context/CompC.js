import React from 'react'
import { FirstName,LastName } from '../App'
import First from '../CRUD/First'
export default function CompC() {
  return (
    <div>
        <LastName.Consumer>
            {(lname)=>{
                return (<FirstName.Consumer>
                    {(fname)=>{
                        return <h1> My name is {fname}{lname}</h1>
                    }}
                </FirstName.Consumer>)
            }}
        </LastName.Consumer>

            {/* IT should contain the function where then we can map */}
        
        
    </div>
  )
}
