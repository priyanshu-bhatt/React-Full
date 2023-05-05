import React, { Component } from 'react'

export default class FormsUncrolledClass extends Component {
    constructor(props){
        super(props)
        this.name=React.createRef()
        this.password= React.createRef()
    }
    submitevent(event){
        event.preventDefault()
        console.log(this.name.current.value)
    }
    passwordfun(event){
        event.preventDefault()
        console.log(this.password.current.value)
    }
  render() {
    return (
      <div  className="container my-3">
        <form onSubmit={(event)=>{this.submitevent(event)}}>
            <input type="text" placeholder='Enter Your Name' ref={this.name}/><br/>
            <input className='my-3' type='password' placeholder='Enter your password' ref={this.password}/><br/>
            <button onClick={(event)=>{this.passwordfun(event)}}>Password</button>
            <input type="submit" placeholder='Submit'/>
        </form>
      </div>
    )
  }
}
