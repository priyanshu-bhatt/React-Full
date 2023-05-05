import React, { Component } from 'react'

export default class ControlledClass extends Component {
    constructor(props){
        super(props)
        this.state = {
            name : "",
            password: "",
        }
        
    }
    submit(event){
        event.preventDefault()
        console.log(this.state.name)
        console.log(this.state.password)
    }
    
  render() {
    return (
      <div>
        <h1>Controlled Form in Class </h1>
        <form>
            <input onChange={(event)=>{this.setState({ name: event.target.value})}} type='text' placeholder='Enter Your Name' />
            <input onChange={(event)=>{this.setState({password: event.target.value})}} type='password' placeholder='Enter Your Password' />
            <button onClick={(event)=>{this.submit(event)}} type='Submit' placeholder='Submit'> Submit </button>
        </form>

      </div>
    )
  }
}
