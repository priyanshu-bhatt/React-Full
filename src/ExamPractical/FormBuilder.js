import React, { useState } from 'react'

export default function FormBuider() {
    const [name,setname]=useState("")
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const [gender,setgender]=useState("selectAny")
    const [phone,setphone]=useState("")
    const [errorname,seterrorname]=useState("")
    const [erroremail,seterroremail]=useState("")
    const [errorpassword,seterrorpassword]=useState("")
    const [errorgender,seterrorgender]=useState("")
    const [errorphone,seterrorphone]=useState("")
    const [errorall,seterrorall]=useState("")
    const [username,setusername]=useState("")
    const validation=()=>{
        if(name===" "|| email===""|| password===""||gender===""||phone===""){
            
        seterrorall("Please Fill All the fields")
        return false
        }
        if(!name.match(/^[A-Za-z0-9- ]/)){

            console.log("hii")
            seterrorname("Please Enter the Vlaid Name")
            setusername("")
            return false
        }
        if(!email.includes("@")){
            seterroremail("Email doesn't contain the @ ")
            setusername("")
            return false
        }
        if(!password.length>6){
            seterrorpassword("Password Length should be more than 6")
            setusername("")
            return false
        }
        if(!gender.match(/Male|Female|Other/)){
            seterrorgender("Please Enter Valid Gender")
            setusername("")
            return false
        }
        if(!phone.match(/^[0-9]/) ){
            seterrorphone("Eter A valid Phone number")
            console.log(phone)
            setusername("")
            return false

        }
        return true

    }
    const resetErrorDefault=()=>{
        seterrorall("")
        seterroremail("")
        seterrorgender("")
        seterrorpassword("")
        seterrorphone("")
        seterrorgender("")
    }

    const handleclick=(event)=>{
        event.preventDefault()
       resetErrorDefault()
        const isvalid=validation()
        if(isvalid){
            setname("")
            setemail("")
            setgender("selectany")
            setpassword("")
            seterrorphone("")
            resetErrorDefault()
            setusername(name)
        }
    }
  return (
    <div>
      <h1> This is The Form Builder</h1>
        <form onSubmit={handleclick}>
            <input type='text' placeholder='Name' value={name}  onChange={(e)=>{setname(e.target.value)}}/>
            
            {errorname}
            <input type='type' placeholder='Password' value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
            {errorpassword}
            <input type='type' placeholder='Email' value={email} onChange={(e)=>{setemail(e.target.value)}} />
            {erroremail}
            <select value={gender} onChange={(e)=>{setgender(e.target.value)}}>
                <option> selectAny</option>
                <option> Male</option>
                <option> Female</option>
                <option> Other</option>
            </select>
            {errorgender}
            <input  type='type' placeholder='Phone Number' value={phone} onChange={(e)=>{setphone(e.target.value)}} />
            {errorphone}
            <input type='submit' placeholder='Submit' />
            {errorall}
            
        </form>
        <div>{username?"Hello "+ username:""}</div>
    </div>
  )
}
