import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Create from './create/Create'

import Delete from './delete/Delete'
import Read from './read/Read'
// import Update from './update/Update'

export default function First() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
        <Route exact path='/create' Component={Create} />
        <Route exact path='/read' Component={Read}/>
        {/* <Route path="/update" Component={Update}/> */}
        <Route path ='/delete' Component={Delete}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}
