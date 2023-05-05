const reducer=(state=100,action)=>{

    if(action.type==="deposit"){
        return state + action.payload
    }
    else if (action.type==="withdraw"){
        return state - action.payload
    }
    else{
        return state
    }

}
export default reducer
//combine reducer is not required here but for more reducers in the applications we can use it to combine all 