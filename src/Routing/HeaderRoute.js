import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "../App.css"
import Employee from './Employee'
export default function HeaderRoute() {

  return (
   <>
   <ul>
    {/* <li>
<Link to="/">Home</Link></li>
<li><Link to="/contact">contact</Link></li>
<li><Link to="/home">HomePage</Link> */}
<li>
  
<NavLink to="/">Home</NavLink></li>
<li><NavLink to="/contact">contact</NavLink></li>
<li><NavLink to="/home">HomePage</NavLink>

{/* <li><NavLink to="/employee"><Employee/></NavLink></li> */}
    </li>
   </ul>
   </>
  )
}
