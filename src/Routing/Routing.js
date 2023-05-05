import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './Contact'
import HeaderRoute from './HeaderRoute'
import Home from './Home'
import Employee from './Employee'
import Error from './Error'

export default function Routing() {
  return (
    <div>
       
        <BrowserRouter>
        <Routes>
            
            <Route path="/" element={<HeaderRoute/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="employee/:Eid" element={<Employee/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}
