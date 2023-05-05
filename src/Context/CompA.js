import React, { useContext } from 'react'
import CompB from './CompB'
import { FirstName, LastName } from '../App'

export default function CompA() {
    //Newer Way Of Context Using
    const fname = useContext(FirstName)
    const lname = useContext(LastName)
  return (
    <div>
        <CompB/>
        <h1> My name is {fname} {lname}</h1>
    </div>
  )
}
