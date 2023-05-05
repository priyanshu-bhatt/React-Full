// import React, { useState } from 'react'
// import { Form , Button } from 'semantic-ui-css'
// export default function Create() {
//     const [FirstName,setFirstName]=useState("");
//     const [LastName,setLastName]=useState("");
//     console.log(FirstName)
//     console.log(LastName)
//   return (
//     <div>
//         <Form>
//     <Form.Field>
//       <label>First Name</label>
//       <input name='fname' placeholder='First Name' onChange={(e)=>setFirstName(e.target.value)} />
//     </Form.Field>
//     <Form.Field>
//       <label>Last Name</label>
//       <input name="lname" onChange={(e)=>setLastName(e.target.value)} placeholder='Last Name' />
//     </Form.Field>
//     <Button type='submit'>Submit</Button>
//   </Form>
//     </div>
//   )
// }
import React, { useState } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios'
export default function Create() {
    const [FirstName,setFirstName]=useState("");
     const [LastName,setLastName]=useState("");
     
     const handleclick=()=>{
        console.log(FirstName)
        console.log(LastName)
     }
     const sendDataToApi=()=>{
axios.post('https://6450b58ce1f6f1bb229d09a9.mockapi.io/crud',{FirstName,LastName})

     }
     
  return (
    <div>
        <Form>
    <Form.Field>
      <label>First Name</label>
      <input name='fname' placeholder='First Name' onChange={(e)=>setFirstName(e.target.value)} />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input name="lname" onChange={(e)=>setLastName(e.target.value)} placeholder='Last Name' />
    </Form.Field>
    <Button type='submit' onClick={sendDataToApi}>Submit</Button>
  </Form>
    </div>
  )
}

