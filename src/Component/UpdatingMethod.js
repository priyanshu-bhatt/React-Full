import React, { Component } from 'react'

export default class UpdatingMethod extends Component {
    constructor(props){
        super(props)
        this.state={
            counter: 0,
        }
    }
shouldComponentUpdate(nextProps,nextState){
    console.log("Next state",nextState.counter)
    if(nextState.counter >=10){
        return false
    }else return true
}

componentDidUpdate(prevProps,prevState){
    console.log("Prev State",prevState.counter)
    if(prevState.counter >=10){
        console.log("component did update")
    }else console.log("component did mount else")
}
  render() {
    return (
      <div>

        <h1> The counter is: {this.state.counter}</h1>
        <button onClick={()=>{this.setState({counter:this.state.counter+1})}}>Click Me</button>

      </div>
    )
  }
}
