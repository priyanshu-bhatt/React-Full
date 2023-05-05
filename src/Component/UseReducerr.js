import React, { useReducer } from 'react'

export default function UseReducerr() {
    const counterreducer = (state,action)=>{
        console.log("State:", state)
        console.log("action:", action)
        if(action === "priyanshu"){
            return {count:state.count+1}
        }else if(action==="hii"){
            return {count:state.count+2}
        }else if (action==="sub"){
            return {count:state.count-1}
        }else if(action === "reset"){
            return {count:state.count=0}
        }
        return state
    }
    const [state,dispatch] = useReducer(counterreducer,{count:0})
    
  return (
    <div>

        <h1> {state.count}</h1>
        <button onClick={()=>{dispatch("priyanshu")}}> CLick Me</button>
        <button onClick={()=>{dispatch("hii")}}>Click for 2</button>
        <button onClick={()=>{dispatch("sub")}}>Click to Sub</button>
        <button onClick={()=>{dispatch("reset")}}>RESET</button>
    </div>
  )
}
