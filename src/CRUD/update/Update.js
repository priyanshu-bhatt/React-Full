// import React, { useState } from 'react'
// import { Form , Button } from 'semantic-ui-css'
// export default function Create() {
//     const [FirstName,setFirstName]=useState("");

import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios'
export default function Update() {
    const [FirstName,setFirstName]=useState("");
     const [LastName,setLastName]=useState("");
     const [ID,setID] = useState(null)
     const handleclick=()=>{
        console.log(FirstName)
        console.log(LastName)
     }
     const sendDataToApi=()=>{
axios.put(`https://6450b58ce1f6f1bb229d09a9.mockapi.io/crud/${ID}`,{FirstName,LastName})

     }
     
     useEffect(()=>{

        setFirstName(localStorage.getItem('FirstName'))
        setLastName(localStorage.getItem('FastName'))
        setID(localStorage.getItem('ID'))
        console.log(FirstName)

     },[])
  return (
    <div>
        <Form>
    <Form.Field>
      <label>First Name</label>
      <input name='fname' placeholder='First Name'  onChange={(e)=>setFirstName(e.target.value)} />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input name="lname"  onChange={(e)=>setLastName(e.target.value)} placeholder='Last Name' />
    </Form.Field>
    <Button type='submit' onClick={sendDataToApi}>Update</Button>
  </Form>
    </div>
  )
}

