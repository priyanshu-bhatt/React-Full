import React from 'react'
import { useDispatch } from 'react-redux'
import { depositMoney, withdrawMoney } from './redux/action-creators'

export default function Balace() {
    const dispatch = useDispatch()
    //To dispatch action we can dispatch actions 
   // TO dispatch a function as actions we have to use the middleware as thunk to do this
   //anything other than object then the create store will have the combine reducers with the enhancer 
   // Thunk allows us to dispatch actions manually 
  return (
    <div>
        <h1> Deposits/Withdrawl Money</h1>
        <button onClick={()=>{dispatch(withdrawMoney(100))}}>-</button>
        <h1>Update Balance</h1>
        <button onClick={()=>{dispatch(depositMoney(100))}}>+</button>
    </div>
  )
}
