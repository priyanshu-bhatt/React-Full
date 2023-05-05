import React, { Suspense, lazy } from 'react'
import About from './About'

export default function LazyMain() {
    const Header = lazy(()=>import("./Header"))
  return (
    <div>
        <Suspense fallback={<div>Hii Header is loading Wait !!</div>}>
            <Header/>
        </Suspense>
        <About/>
    </div>
  )
}
