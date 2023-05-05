import React from 'react'
import { useSelector } from 'react-redux'

export default function FuncBalance() {
  const amount = useSelector(state=>state.amount)
  //This hooks helps in using the reducer state
  return (
    <div>
        <button>Your Balance is:{amount}</button>
    </div>
  )
}
